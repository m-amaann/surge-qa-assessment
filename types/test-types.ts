export interface SimilarItem {
  title: string;
  price: string;
  imageSrc?: string;
  isVisible: boolean;
  priceValue?: number;
  inPriceRange?: boolean;
}

export interface TestData {
  walletProduct: {
    url: string;
    searchTerm: string;
    category: string;
    expectedSimilarItemsCount: { min: number; max: number };
    priceRange: { min: number; max: number };
  };
}

export interface CategoryValidation {
  walletRelated: number;
  total: number;
  percentage: number;
}

export interface PriceValidation {
  itemsInRange: number;
  totalItems: number;
  percentage: number;
  averagePrice: number;
}