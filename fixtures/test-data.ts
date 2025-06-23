import { TestData } from "../types/test-types";

export const testData: TestData = {
  walletProduct: {
    url: 'https://www.ebay.com/itm/405838590558',
    searchTerm: 'wallet',
    category: 'Fashion',
    expectedSimilarItemsCount: { min: 1, max: 6 },
    priceRange: { min: 5, max: 500 }
  }
};

export const testConfig = {
  timeouts: {
    navigation: 60000,
    element: 30000,
    test: 120000
  },
  performance: {
    maxPageLoadTime: 10000,
    maxSectionLoadTime: 8000
  },
  validation: {
    minCategoryMatch: 30,
    minPriceMatch: 40
  }
};