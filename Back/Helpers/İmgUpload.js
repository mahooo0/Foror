const path = require('path');
const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');
const cloudinary = require('./cloudinaryConfig'); // Import Cloudinary configuration

const uploadFolder = path.join(__dirname, 'uploads');

// Ensure the uploads folder exists
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}

// Set up multer storage in memory
const storage = multer.memoryStorage(); // No need to store files on disk

const upload = multer({ storage });

const safeUnlink = async (filePath) => {
    try {
        await fs.promises.unlink(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.warn(`File not found for deletion: ${filePath}`);
        } else {
            console.error(`Error deleting file: ${filePath}`, error);
        }
    }
};

// Middleware to upload to Cloudinary and process files (e.g., images)
const uploadToCloudinary = async (req, res, next) => {
    const fields = [
        { name: 'image', maxCount: 1 },
        { name: 'image_bg', maxCount: 1 },
        { name: 'image_meta', maxCount: 1 },
        { name: 'images', maxCount: 10 },
        { name: 'video', maxCount: 1 },
        { name: 'videos', maxCount: 10 },
        { name: 'pdf', maxCount: 1 },
    ];

    upload.fields(fields)(req, res, async (err) => {
        if (err) {
            return res.status(400).json({
                error: 'File upload error',
                details: err.message,
            });
        }

        try {
            for (const key in req.files) {
                const fileData = req.files[key];

                for (const file of fileData) {
                    const ext = path.extname(file.originalname).toLowerCase();
                    let newFilename, newPath, cloudinaryUrl;

                    // Process images
                    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                        newFilename = `${path.basename(
                            file.originalname,
                            ext
                        )}.webp`;
                        newPath = path.join(uploadFolder, newFilename);

                        // Convert the image to WebP format
                        await sharp(file.buffer)
                            .webp({ quality: 80 })
                            .toFile(newPath);

                        // Upload the processed image to Cloudinary
                        cloudinaryUrl = await new Promise((resolve, reject) => {
                            cloudinary.uploader
                                .upload_stream(
                                    { resource_type: 'image' },
                                    (error, result) => {
                                        if (error) reject(error);
                                        else resolve(result.secure_url);
                                    }
                                )
                                .end(fs.readFileSync(newPath)); // Send image buffer to Cloudinary
                        });

                        await safeUnlink(newPath); // Delete the local temporary file
                    } else if (['.mp4', '.avi', '.mov'].includes(ext)) {
                        // For videos, we upload directly to Cloudinary
                        cloudinaryUrl = await new Promise((resolve, reject) => {
                            cloudinary.uploader
                                .upload_stream(
                                    { resource_type: 'video' },
                                    (error, result) => {
                                        if (error) reject(error);
                                        else resolve(result.secure_url);
                                    }
                                )
                                .end(file.buffer); // Upload video directly to Cloudinary
                        });
                    } else {
                        // For other file types (e.g., PDFs), upload directly without processing
                        cloudinaryUrl = await new Promise((resolve, reject) => {
                            cloudinary.uploader
                                .upload_stream(
                                    { resource_type: 'auto' },
                                    (error, result) => {
                                        if (error) reject(error);
                                        else resolve(result.secure_url);
                                    }
                                )
                                .end(file.buffer);
                        });
                    }

                    // Add URL to the request body
                    console.log(
                        `File uploaded to Cloudinary: ${cloudinaryUrl}`
                    );

                    if (fileData.length === 1) {
                        req.body[key] = cloudinaryUrl;
                    } else {
                        req.body[key] = req.body[key] || [];
                        req.body[key].push(cloudinaryUrl);
                    }
                }
            }

            next(); // Proceed to next middleware
        } catch (conversionError) {
            res.status(500).json({
                error: 'File processing error',
                details: conversionError.message,
            });
        }
    });
};

module.exports = uploadToCloudinary;
