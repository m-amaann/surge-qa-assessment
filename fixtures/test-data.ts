export const testData = {
  walletProduct: {
    url: process.env.TEST_PRODUCT_URL || 'https://www.ebay.com/itm/405838590558',
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
    pageLoad: 5000
  },
  performance: {
    maxPageLoadTime: 10000,
    maxSectionLoadTime: 8000
  },
  validation: {
    minCategoryMatch: 30,
    minPriceMatch: 40,
    maxProductCount: 6,
    minProductCount: 1
  }
};

// Simple static selectors
export const selectors = {
  similarItemsSection: '#placement101875',
  similarItemCards:  '.hVQz.Cssx .Mgpb.rgAU',
  itemTitle: '.x-item-title-link',
  itemPrice: '.notranslate',
  itemImage: '.item-image img',
  seeAllLink: '#PicturePanel [data-testid="x-atf-left-bottom-river"] .EGf-MuPu:visible a:has-text("See all")'
};