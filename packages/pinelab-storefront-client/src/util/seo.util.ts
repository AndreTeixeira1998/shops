import { Collection, ProductFieldsFragment } from '../generated/graphql';
import { CalculatedProduct } from './product.util';
/**
 * Removes all HTML tags from a HTML string and truncate to max X characters
 */
export function getSeoDescription(description?: string) {
  const maxlength = 120;
  const minlength = 70;
  if (!description) {
    return;
  }
  description = description.replace(/<[^>]*>?/gm, ' '); // replace html
  description = description.replace(/&nbsp;/g, ' '); // replace &nbsp;
  description.replace(/\s\s+/g, ' '); // replace double spaces
  const sentence = description.substr(0, description.indexOf('.') + 1);
  if (sentence.length > maxlength) {
    // truncate to max
    return sentence.substr(0, maxlength).trim() + '...';
  } else if (sentence.length > minlength) {
    // Between min and max, perfect!
    return sentence.trim();
  } else {
    // Sentence too short, just take first X chars of description
    return description.substring(0, maxlength).trim() + '...';
  }
}

export function getMetaInfo(
  item?: CalculatedProduct | Collection | ProductFieldsFragment,
  url?: string,
  type: 'product' | 'article' | 'blog' | 'website' = 'product'
): MetaInfo | undefined {
  if (!item) {
    return;
  }
  const seoDescription =
    (item as ProductFieldsFragment).customFields?.metaDescription ||
    getSeoDescription(item.description);
  const title =
    (item as ProductFieldsFragment).customFields?.metaTitle || item.name;
  const image = item.featuredAsset ? item.featuredAsset.preview : undefined;
  let script: any = [];
  if ((item as CalculatedProduct).lowestPrice) {
    script = [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@type': 'Product',
          name: item.name,
          image: image,
          description: seoDescription,
          offers: {
            '@type': 'Offer',
            price: ((item as CalculatedProduct).lowestPrice / 100).toFixed(2),
            priceCurrency: 'EUR',
          },
        },
      },
    ];
  }
  return {
    title: title || item.slug,
    meta: [
      { key: 'title', name: 'title', content: title || item.slug },
      { key: 'description', name: 'description', content: seoDescription },
      { key: 'og:title', name: 'og:title', content: title },
      {
        key: 'og:description',
        name: 'og:description',
        content: seoDescription,
      },
      { key: 'og:image', name: 'og:image', content: image },
      { key: 'og:type', name: 'og:type', content: type },
      { key: 'og:url', name: 'og:url', content: url || `/${item.slug}` },
    ],
    script,
  };
}

export interface MetaInfo {
  title: string;
  meta: any[];
  script: any[];
}
