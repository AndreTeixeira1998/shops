import { CalculatedProduct } from './product.util';
import { Collection } from '../generated/graphql';
import Fuse from 'fuse.js';
import IFuseOptions = Fuse.IFuseOptions;

export interface SearchItem {
  name?: string;
  slug: string;
  price: number;
  collections?: string[];
  keywords?: string[];
  thumbnail?: string;
}

export interface SearchIndexObject {
  index: {
    keys: ReadonlyArray<string>;
    records: Fuse.FuseIndexRecords;
  };
  items: SearchItem[];
  keys: KeyWeight[];
}

export interface KeyWeight {
  name: string;
  weight: number;
}

interface SearchableProduct extends CalculatedProduct {
  collections: Collection[];
  customFields?: { keywords?: string };
}

/**
 * Create an pre-compiled index object. Stringify this object
 * and save as publicly available JSON file, so that your
 * Storefront can fetch this object and init a Fuse
 * search engine on the client
 */
export function createSearchIndex(
  products: SearchableProduct[],
  keys: KeyWeight[]
): SearchIndexObject {
  const searchItems = createSearchItems(products);
  const fuseIndex = Fuse.createIndex(keys, searchItems);
  return {
    index: fuseIndex.toJSON(),
    items: searchItems,
    keys,
  };
}

function createSearchItems(products: SearchableProduct[]): SearchItem[] {
  return products.map((p) => {
    const keywords = p.customFields?.keywords?.split(',');
    const collections = p.collections.map((c) => c.name);
    return {
      name: p.name,
      slug: p.slug,
      price: p.lowestPrice,
      collections,
      keywords,
      thumbnail: p.featuredAsset?.thumbnail,
    };
  });
}

/**
 * Create Fuse instance based on the given indexObject
 * This instance can be use in your storefront to
 * search through products
 */
export function createFuse(
  indexObject: SearchIndexObject,
  options: IFuseOptions<unknown>
): Fuse<any> {
  const parsedIndex = Fuse.parseIndex(indexObject.index);
  return new Fuse(
    indexObject.items,
    { keys: indexObject.keys, ...options },
    parsedIndex
  );
}
