// scripts/generate-sitemap.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';

// Fetch dynamic routes (e.g., from an API or database)
const fetchDynamicSlugs = async (): Promise<string[]> => {
    return ['post-1', 'post-2']; // Replace with actual data
};

const generateSitemap = async () => {
    const staticRoutes = ['/', '/about', '/contact'];
    const dynamicSlugs = await fetchDynamicSlugs();

    const sitemapRoutes = [
        ...staticRoutes.map((route) => ({ url: route, changefreq: 'daily' })),
        ...dynamicSlugs.map((slug) => ({
            url: `/blog/${slug}`,
            changefreq: 'weekly',
        })),
    ];

    const stream = new SitemapStream({ hostname: 'https://yourdomain.com' });
    const pipeline = Readable.from(sitemapRoutes).pipe(stream);

    streamToPromise(pipeline).then((data) =>
        fs.writeFileSync(
            path.resolve(__dirname, '../public/sitemap.xml'),
            data.toString()
        )
    );

    console.log('Sitemap generated!');
};

generateSitemap();
