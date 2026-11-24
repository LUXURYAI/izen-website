import { createClient } from '@sanity/client';
import { fallbackProducts } from './products';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-06-01';

export const sanity = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;

export async function getProducts() {
  if (!sanity) return fallbackProducts;

  try {
    const products = await sanity.fetch(`
      *[_type == "product" && visible == true]
      | order(order asc, _createdAt desc){
        "slug": slug.current,
        title,
        description,
        price,
        status,
        category,
        "images": images[].asset->url
      }
    `);

    return products?.length ? products : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}

export async function getRecommendations() {
  if (!sanity) return [];

  try {
    const recommendations = await sanity.fetch(`
      *[
        _type == "recommendation"
        && visible == true
        && defined(affiliateUrl)
        && !(_id in path("drafts.**"))
        && !(_id in path("versions.**"))
      ]
      | order(order asc, _createdAt desc){
        _id,
        title,
        description,
        affiliateUrl,
        "image": image.asset->url
      }
    `);

    if (!Array.isArray(recommendations)) return [];

    return recommendations.filter((item) => {
      try {
        const url = new URL(item.affiliateUrl);

        return (
          url.protocol === 'https:' &&
          !url.username &&
          !url.password &&
          [
            'amazon.ae',
            'www.amazon.ae',
            'amzn.to'
          ].includes(url.hostname.toLowerCase())
        );
      } catch {
        return false;
      }
    });
  } catch {
    return [];
  }
}
