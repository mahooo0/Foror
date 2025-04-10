const { ReadAboutDevHero } = require('../collections/AboutDevHero/Controllers');
const { ReadAboutHero } = require('../collections/AboutHero/Controllers');
const {
    ReadBlogsapi,
    ReadBlogBySlug,
} = require('../collections/Blogs/Controllers');
const {
    ReadPartfoliCategoryApi,
} = require('../collections/Category/Controllers');
const {
    ReadColoabaration,
} = require('../collections/Colobarations/Controllers');
const { ContactByUser } = require('../collections/ContactByUser/Controllers');
const { ReadContactInfos } = require('../collections/ContactInfo/Controllers');
const { ReadDesingTools } = require('../collections/DesingTools/Controllers');
const { ReadDevSteps } = require('../collections/DevSteps/Controllers');
const { ReadDevTools } = require('../collections/DevTools/Controllers');
const { ReadFeatruesApi } = require('../collections/featrues/Controllers');
const { ReadHomeAbout } = require('../collections/HomeAbout/Controllers');
const { ReadHomeAboutDev } = require('../collections/HomeAboutDev/Controllers');
const { ReadHomeHero } = require('../collections/Homehero/Controllers');
const { ReadHomeServices } = require('../collections/HomeServices/Controllers');
const { ReadLogo } = require('../collections/Logo/Controllers');
const {
    ReadWorcksapi,
    ReadPartfolioBySlug,
} = require('../collections/Partfolio/Controllers');
const { ReadPrefeApi } = require('../collections/Prefe/Controllers');
const { ReadPriceListsapi } = require('../collections/Pricelist/Controllers');
const { ReadRewueAbout } = require('../collections/Rewue/Controllers');
const { ReadSEo_api } = require('../collections/seo/Controllers');
const {
    ReadServicesBySlug,
    ReadServicesApi,
} = require('../collections/Services/Controllers');
const { ReadSocialMedia } = require('../collections/SocialMedia/Controllers');
const { Read_Statisticks } = require('../collections/Statistics/Controllers');
const { Read_Translation } = require('../collections/translates/Controllers');
const express = require('express');
const uploadToCloudinary = require('../Helpers/İmgUpload');
const router = express.Router();

// Register new admin
router.use('/translations', Read_Translation);
router.use('/seo', ReadSEo_api);
router.use('/logo/:type', ReadLogo);
router.use('/home/hero', ReadHomeHero);
router.use('/home/about', ReadHomeAbout);
router.use('/home/about-dev', ReadHomeAboutDev);
router.use('/home/prefe', ReadPrefeApi);
router.use('/colabarations', ReadColoabaration);
router.use('/home/services', ReadHomeServices);
router.use('/partfolio-category', ReadPartfoliCategoryApi);
router.use('/partfolio', ReadWorcksapi);
router.use('/partfolio-detail/:slug', ReadPartfolioBySlug);
router.use('/services', ReadServicesApi);
router.use('/services-detail/:slug', ReadServicesBySlug);
router.use('/featrues', ReadFeatruesApi);
router.use('/priceList', ReadPriceListsapi);
router.use('/contact-infos', ReadContactInfos);
router.use('/social', ReadSocialMedia);
router.use('/blogs', ReadBlogsapi);
router.use('/blog-detail/:slug', ReadBlogBySlug);
router.use('/about-hero', ReadAboutHero);
router.use('/about-dev-hero', ReadAboutDevHero);
router.use('/desing-tools', ReadDesingTools);
router.use('/dev-tools', ReadDevTools);
router.use('/statistics', Read_Statisticks);
router.use('/rewue', ReadRewueAbout);
router.use('/devsteps', ReadDevSteps);
router.use('/contact', ContactByUser);

module.exports = router;
