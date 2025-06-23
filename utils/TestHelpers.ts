import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

export class TestHelpers {
  static async captureFullPageScreenshot(page: Page, name: string): Promise<void> {
    await allure.step(`Capture screenshot: ${name}`, async () => {
      const screenshot = await page.screenshot({ fullPage: true });
      await allure.attachment(name, screenshot, 'image/png');
    });
  }

  static async measurePageLoadTime(page: Page): Promise<number> {
    let loadTime = 0;
    await allure.step('Measure page load time', async () => {
      const startTime = Date.now();
      await page.waitForLoadState('networkidle');
      loadTime = Date.now() - startTime;
      await allure.parameter('Load time (ms)', loadTime.toString());
    });
    return loadTime;
  }

  static async addEnvironmentInfo(): Promise<void> {
    await allure.parameter('Test Environment', process.env.NODE_ENV || 'test');
    await allure.parameter('Base URL', 'https://www.ebay.com');
    await allure.parameter('Framework', 'Playwright + TypeScript + POM');
    await allure.parameter('Report Generated', new Date().toISOString());
  }

  static async simulateSlowNetwork(page: Page): Promise<void> {
    await allure.step('Simulate slow network', async () => {
      const client = await page.context().newCDPSession(page);
      await client.send('Network.emulateNetworkConditions', {
        offline: false,
        downloadThroughput: 500 * 1024, // 500 KB/s
        uploadThroughput: 500 * 1024,
        latency: 400 // 400ms latency
      });
    });
  }

  // Additional utility methods
  static async waitForElementWithTimeout(page: Page, selector: string, timeout: number = 10000): Promise<boolean> {
    try {
      await page.waitForSelector(selector, { timeout, state: 'visible' });
      return true;
    } catch {
      return false;
    }
  }

  static async scrollToElement(page: Page, selector: string): Promise<void> {
    await allure.step(`Scroll to element: ${selector}`, async () => {
      const element = page.locator(selector).first();
      if (await element.isVisible()) {
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
      }
    });
  }

  static async getPageTitle(page: Page): Promise<string> {
    return await page.title();
  }

  static async getCurrentURL(page: Page): Promise<string> {
    return page.url();
  }

  static async addTestStep(stepName: string, stepFunction: () => Promise<void>): Promise<void> {
    await allure.step(stepName, stepFunction);
  }

  static async logTestInfo(message: string): Promise<void> {
    await allure.step(`Log: ${message}`, async () => {
      console.log(`ℹ️ ${message}`);
    });
  }

  static async attachTestData(name: string, data: any): Promise<void> {
    await allure.attachment(name, JSON.stringify(data, null, 2), 'application/json');
  }

  static formatPerformanceTime(milliseconds: number): string {
    return `${(milliseconds / 1000).toFixed(2)}s`;
  }

  static async measureExecutionTime<T>(operation: () => Promise<T>): Promise<{ result: T; duration: number }> {
    const startTime = Date.now();
    const result = await operation();
    const duration = Date.now() - startTime;
    
    await allure.parameter('Execution time (ms)', duration.toString());
    return { result, duration };
  }
}