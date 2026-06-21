import { createClient } from '@sanity/client';
import { fallbackProducts } from './products';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-06-01';

export const sanity = projectId ? createClient({ projectId, dataset, apiVersion, useCdn: true }) : null;

export async function getProducts() {
  if (!sanity) return fallbackProducts;
  try {
    const products = await sanity.fetch(`*[_type == "product" && visible == true] | order(order asc, _createdAt desc){
      "slug": slug.current,
      title,
      description,
      price,
      status,
      "images": images[].asset->url
    }`);
    return products?.length ? products : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}
