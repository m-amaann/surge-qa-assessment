import { BasePage } from './BasePage';
import { SimilarItem, CategoryValidation } from '../types/test-types';
import { selectors } from '../fixtures/test-data';

export class ProductPage extends BasePage {
  async navigateToProduct(url: string): Promise<void> {
    await this.navigateTo(url);
    const title = await this.getTitle();
    if (!title.includes('eBay')) {
      throw new Error('Not an eBay page');
    }
  }

  async verifyProductPageLoaded(): Promise<boolean> {
    const title = await this.getTitle();
    const url = await this.getURL();
    return title.includes('eBay') && url.includes('ebay.com');
  }

  async scrollToSimilarItemsSection(): Promise<void> {
    console.log('🔍 Looking for similar items...');
    await this.scrollToMiddle();
  }

  async isSimilarItemsSectionVisible(): Promise<boolean> {
    return await this.isElementVisible(selectors.similarItemsSection);
  }

  async getSimilarItemsCount(): Promise<number> {
    try {
      const items = this.page.locator(selectors.similarItemCards);
      const count = await items.count();
      console.log(`📊 Found ${count} similar items`);
      return count;
    } catch {
      return 0;
    }
  }

  async getSimilarItems(): Promise<SimilarItem[]> {
    const items = this.page.locator(selectors.similarItemCards);
    const count = await items.count();
    const itemsData: SimilarItem[] = [];

    for (let i = 0; i < Math.min(count, 6); i++) {
      try {
        const item = items.nth(i);
        const title = await item.locator(selectors.itemTitle).textContent() || 'No title';
        const price = await item.locator(selectors.itemPrice).textContent() || 'No price';
        const imageSrc = await item.locator(selectors.itemImage).getAttribute('src') || '';
        const isVisible = await item.isVisible();

        itemsData.push({
          title: title.trim(),
          price: price.trim(),
          imageSrc,
          isVisible
        });
      } catch {
        itemsData.push({
          title: `Item ${i + 1}`,
          price: 'N/A',
          isVisible: false
        });
      }
    }

    console.log(`📋 Extracted ${itemsData.length} items`);
    return itemsData;
  }

  async validateItemCategories(items: SimilarItem[]): Promise<CategoryValidation> {
    let walletRelatedCount = 0;
    const walletKeywords = ['wallet', 'leather', 'card holder', 'money clip', 'billfold'];

    for (const item of items) {
      const title = item.title.toLowerCase();
      if (walletKeywords.some(keyword => title.includes(keyword))) {
        walletRelatedCount++;
      }
    }

    const percentage = items.length > 0 ? (walletRelatedCount / items.length) * 100 : 0;
    console.log(`🏷️ Category: ${walletRelatedCount}/${items.length} (${percentage.toFixed(1)}%) wallet-related`);

    return {
      walletRelated: walletRelatedCount,
      total: items.length,
      percentage
    };
  }

  async extractPriceValue(priceText: string): Promise<number> {
    if (!priceText) return 0;
    const match = priceText.match(/[\d,]+\.?\d*/);
    return match ? parseFloat(match[0].replace(',', '')) : 0;
  }

  async validatePriceRange(items: SimilarItem[], mainPrice: number): Promise<SimilarItem[]> {
    const results: SimilarItem[] = [];
    const minPrice = mainPrice * 0.5;
    const maxPrice = mainPrice * 1.5;

    for (const item of items) {
      const itemPrice = await this.extractPriceValue(item.price);
      const inRange = itemPrice >= minPrice && itemPrice <= maxPrice;
      
      results.push({
        ...item,
        priceValue: itemPrice,
        inPriceRange: inRange
      });
    }

    const inRangeCount = results.filter(item => item.inPriceRange).length;
    const percentage = items.length > 0 ? (inRangeCount / items.length) * 100 : 0;
    console.log(`💰 Price: ${inRangeCount}/${items.length} (${percentage.toFixed(1)}%) in range`);

    return results;
  }

  async clickSeeAllLink(): Promise<boolean> {
    return await this.clickElement(selectors.seeAllLink);
  }

  async checkMobileResponsiveness(): Promise<boolean> {
    await this.page.setViewportSize({ width: 375, height: 667 });
    await this.page.waitForTimeout(1000);
    return await this.isSimilarItemsSectionVisible();
  }
}