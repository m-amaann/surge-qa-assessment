import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { testData } from '../fixtures/test-data';

test.describe('Smoke Tests', () => {


  test('eBay page access works', async ({ page }) => {
    console.log('🔍 Smoke Test: Basic Access');
    
    const productPage = new ProductPage(page);
    await productPage.navigateToProduct(testData.walletProduct.url);
    
    const pageLoaded = await productPage.verifyProductPageLoaded();
    expect(pageLoaded).toBeTruthy();
    
    await productPage.scrollToSimilarItemsSection();
    const hasSection = await productPage.isSimilarItemsSectionVisible();
    
    if (hasSection) {
      const count = await productPage.getSimilarItemsCount();
      console.log(`Found ${count} similar items`);
    }
    
    console.log('Smoke test passed!');
  });
});