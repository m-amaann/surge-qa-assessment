import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    console.log(`Navigate: ${url}`);
    await this.page.goto(url, { waitUntil: 'networkidle' });
    await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getURL(): Promise<string> {
    return this.page.url();
  }

  async isElementVisible(selector: string): Promise<boolean> {
    try {
      return await this.page.locator(selector).isVisible();
    } catch {
      return false;
    }
  }

  async clickElement(selector: string): Promise<boolean> {
    try {
      await this.page.locator(selector).click();
      return true;
    } catch {
      return false;
    }
  }

  // Scroll to the middle of the page
  async scrollToMiddle(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await this.page.waitForTimeout(2000);
  }
}