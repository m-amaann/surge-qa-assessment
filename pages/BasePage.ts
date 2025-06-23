import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly baseURL: string;

  constructor(page: Page) {
    this.page = page;
    this.baseURL = 'https://www.ebay.com';
  }

  // Common methods for all pages
  async navigateTo(url: string): Promise<void> {
    await allure.step(`Navigate to: ${url}`, async () => {
      await this.page.goto(url, { waitUntil: 'networkidle' });
      await this.page.waitForLoadState('domcontentloaded');
    });
  }

  async takeScreenshot(name: string): Promise<void> {
    await allure.step(`Take screenshot: ${name}`, async () => {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await allure.attachment(name, screenshot, 'image/png');
    });
  }

  async waitForElement(selector: string, timeout: number = 10000): Promise<boolean> {
    try {
      await this.page.waitForSelector(selector, { timeout, state: 'visible' });
      return true;
    } catch {
      return false;
    }
  }

  async waitForMultipleSelectors(selectors: string[], timeout: number = 10000): Promise<string | null> {
    const selectorArray = selectors.join(', ').split(', ');
    
    for (const selector of selectorArray) {
      try {
        await this.page.waitForSelector(selector.trim(), { timeout: timeout / selectorArray.length, state: 'visible' });
        return selector.trim();
      } catch {
        continue;
      }
    }
    return null;
  }

  async scrollToElement(selector: string): Promise<void> {
    await allure.step(`Scroll to element: ${selector}`, async () => {
      const element = this.page.locator(selector).first();
      if (await element.isVisible()) {
        await element.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);
      }
    });
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }
}