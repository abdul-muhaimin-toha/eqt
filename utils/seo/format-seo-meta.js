import {
   getSeoCareerData,
   getSeoData,
   getSeoInsightData,
   getSeoProjectData,
} from '@/graphql/components/get-seo-data';
import { getMetaContent } from './get-meta-content';
import { SEO_CONSTANTS } from '@/lib/constants';

export const formatSeoMeta = async (slug) => {
   try {
      const data = (await getSeoData(slug)) || {};
      const { seo = {}, featuredImage = null } = data;

      const {
         title = SEO_CONSTANTS.title,
         metaDesc = SEO_CONSTANTS.metaDesc,
         metaKeywords = SEO_CONSTANTS.metaKeywords,
         canonical = SEO_CONSTANTS.canonical,
         opengraphImage = {},
      } = seo;

      const ogImageUrl =
         opengraphImage?.mediaItemUrl ||
         featuredImage ||
         SEO_CONSTANTS.defaultImageUrl;

      return {
         title,
         description: metaDesc,
         keywords: metaKeywords,
         alternates: {
            canonical,
         },
         openGraph: {
            title: getMetaContent(seo.defaultMeta, 'og:title', title),
            description: getMetaContent(
               seo.defaultMeta,
               'og:description',
               metaDesc
            ),
            url: getMetaContent(seo.defaultMeta, 'og:url', canonical),
            locale: getMetaContent(seo.defaultMeta, 'og:locale', 'en_US'),
            images: [
               {
                  url: getMetaContent(seo.defaultMeta, 'og:image', ogImageUrl),
                  alt: getMetaContent(seo.defaultMeta, 'og:image:alt', title),
               },
            ],
         },
         twitter: {
            card: 'summary_large_image',
            title: title,
            description: metaDesc,
            image: ogImageUrl,
         },
      };
   } catch (error) {
      console.error('Error formatting SEO meta:', error);
      return SEO_CONSTANTS;
   }
};

export const formatProjectSeoMeta = async (slug) => {
   const data = (await getSeoProjectData(slug)) || {};
   const { seo = {}, featuredImage = null } = data;

   const {
      title = SEO_CONSTANTS.title,
      metaDesc = SEO_CONSTANTS.metaDesc,
      metaKeywords = SEO_CONSTANTS.metaKeywords,
      canonical = SEO_CONSTANTS.canonical,
      opengraphImage = {},
   } = seo;

   const ogImageUrl =
      opengraphImage?.mediaItemUrl ||
      featuredImage ||
      SEO_CONSTANTS.defaultImageUrl;

   return {
      title,
      description: metaDesc,
      keywords: metaKeywords,
      alternates: { canonical },
      openGraph: {
         siteName: SEO_CONSTANTS.siteName,
         title: getMetaContent(seo.defaultMeta, 'og:title', title),
         description: getMetaContent(
            seo.defaultMeta,
            'og:description',
            metaDesc
         ),
         url: getMetaContent(seo.defaultMeta, 'og:url', canonical),
         images: [
            {
               url: getMetaContent(seo.defaultMeta, 'og:image', ogImageUrl),
               alt: getMetaContent(seo.defaultMeta, 'og:image:alt', title),
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description: metaDesc,
         image: ogImageUrl,
      },
   };
};

export const formatCareerSeoMeta = async (slug) => {
   const data = (await getSeoCareerData(slug)) || {};
   const { seo = {}, featuredImage = null } = data;

   const {
      title = SEO_CONSTANTS.title,
      metaDesc = SEO_CONSTANTS.metaDesc,
      metaKeywords = SEO_CONSTANTS.metaKeywords,
      canonical = SEO_CONSTANTS.canonical,
      opengraphImage = {},
   } = seo;

   const ogImageUrl =
      opengraphImage?.mediaItemUrl ||
      featuredImage ||
      SEO_CONSTANTS.defaultImageUrl;

   return {
      title,
      description: metaDesc,
      keywords: metaKeywords,
      alternates: { canonical },
      openGraph: {
         siteName: SEO_CONSTANTS.siteName,
         title: getMetaContent(seo.defaultMeta, 'og:title', title),
         description: getMetaContent(
            seo.defaultMeta,
            'og:description',
            metaDesc
         ),
         url: getMetaContent(seo.defaultMeta, 'og:url', canonical),
         images: [
            {
               url: getMetaContent(seo.defaultMeta, 'og:image', ogImageUrl),
               alt: getMetaContent(seo.defaultMeta, 'og:image:alt', title),
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description: metaDesc,
         image: ogImageUrl,
      },
   };
};

export const formatInsightSeoMeta = async (slug) => {
   const data = (await getSeoInsightData(slug)) || {};
   const { seo = {}, featuredImage = null } = data;

   const {
      title = SEO_CONSTANTS.title,
      metaDesc = SEO_CONSTANTS.metaDesc,
      metaKeywords = SEO_CONSTANTS.metaKeywords,
      canonical = SEO_CONSTANTS.canonical,
      opengraphImage = {},
   } = seo;

   const ogImageUrl =
      opengraphImage?.mediaItemUrl ||
      featuredImage ||
      SEO_CONSTANTS.defaultImageUrl;

   return {
      title,
      description: metaDesc,
      keywords: metaKeywords,
      alternates: { canonical },
      openGraph: {
         siteName: SEO_CONSTANTS.siteName,
         title: getMetaContent(seo.defaultMeta, 'og:title', title),
         description: getMetaContent(
            seo.defaultMeta,
            'og:description',
            metaDesc
         ),
         url: getMetaContent(seo.defaultMeta, 'og:url', canonical),
         images: [
            {
               url: getMetaContent(seo.defaultMeta, 'og:image', ogImageUrl),
               alt: getMetaContent(seo.defaultMeta, 'og:image:alt', title),
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description: metaDesc,
         image: ogImageUrl,
      },
   };
};
