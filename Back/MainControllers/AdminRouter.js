const translationRouters = require('../collections/translates/translationRouter');
const SeoRouters = require('../collections/seo/Router');
const LogoRouters = require('../collections/Logo/Router');
const HomeHeroRouters = require('../collections/Homehero/Router');
const HomeAbouRouters = require('../collections/HomeAbout/Router');
const HomeAbouDevRouters = require('../collections/HomeAboutDev/Router');
const PrefeRouters = require('../collections/Prefe/Router');
const ColabarationRouters = require('../collections/Colobarations/Router');
const HomeServicesRouters = require('../collections/HomeServices/Router');
const PartfolioCategoryRouters = require('../collections/Category/Router');
const PartfolioRouters = require('../collections/Partfolio/Router');
const ServicesRouters = require('../collections/Services/Router');
const FeatruesRouters = require('../collections/featrues/Router');
const PriceRouters = require('../collections/Pricelist/Router');
const ContactInfoRouters = require('../collections/ContactInfo/Router');
const SocialMediaRouters = require('../collections/SocialMedia/Router');
const BlogsRouters = require('../collections/Blogs/Router');
const AboutHeroRouters = require('../collections/AboutHero/Router');
const AboutDevHeroRouters = require('../collections/AboutDevHero/Router');
const DesinToolsRouters = require('../collections/DesingTools/Router');
const DevRouters = require('../collections/DevTools/Router');
const StatisticsRouters = require('../collections/Statistics/translationRouter');
const RewueRouters = require('../collections/Rewue/Router');
const DevStepsRouters = require('../collections/DevSteps/Router');
const express = require('express');
const router = express.Router();

// Register new admin
router.use('/translations', translationRouters);
router.use('/seo', SeoRouters);
router.use('/logo', LogoRouters);
router.use('/home-hero', HomeHeroRouters);
router.use('/home-about', HomeAbouRouters);
router.use('/home-about-dev', HomeAbouDevRouters);
router.use('/prefe', PrefeRouters);
router.use('/colabaration', ColabarationRouters);
router.use('/home-services', HomeServicesRouters);
router.use('/partfolio-category', PartfolioCategoryRouters);
router.use('/partfolio', PartfolioRouters);
router.use('/services', ServicesRouters);
router.use('/featrues', FeatruesRouters);
router.use('/price', PriceRouters);
router.use('/contact-info', ContactInfoRouters);
router.use('/social', SocialMediaRouters);
router.use('/blogs', BlogsRouters);
router.use('/about-hero', AboutHeroRouters);
router.use('/about-dev-hero', AboutDevHeroRouters);
router.use('/desing-tools', DesinToolsRouters);
router.use('/dev-tools', DevRouters);
router.use('/statistics', StatisticsRouters);
router.use('/rewue', RewueRouters);
router.use('/dev-steps', DevStepsRouters);
router.get('/', (req, res) => {
    res.end('hello');
});
// // Get all users
// router.get('/admin', ReadAdmin);
// // router.get('/', Read);
// // Delete user by ID
// router.delete('/:id', Delete);
// // Login route
// router.put('/:id', Edit);

module.exports = router;
