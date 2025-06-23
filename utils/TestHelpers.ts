import { Page } from '@playwright/test';

export class TestHelpers {
  static async captureScreenshot(page: Page, name: string): Promise<void> {
    try {
      await page.screenshot({ 
        path: `test-results/${name}-${Date.now()}.png`,
        fullPage: true 
      });
      console.log(`Screenshot: ${name}`);
    } catch (error) {
      console.log(`Screenshot failed: ${error}`);
    }
  }

  static async measureTime(operation: () => Promise<void>): Promise<number> {
    const start = Date.now();
    await operation();
    const duration = Date.now() - start;
    console.log(`Time: ${duration}ms`);
    return duration;
  }

  static async simulateSlowNetwork(page: Page): Promise<void> {
    try {
      const client = await page.context().newCDPSession(page);
      await client.send('Network.emulateNetworkConditions', {
        offline: false,
        downloadThroughput: 500 * 1024,
        uploadThroughput: 500 * 1024,
        latency: 400
      });
      console.log('🐌 Slow network enabled');
    } catch (error) {
      console.log(`Network simulation failed: ${error}`);
    }
  }

  static async logInfo(message: string): Promise<void> {
    console.log(`${message}`);
  }

  static formatTime(ms: number): string {
    return ms < 1000 ? `${ms}ms` : `${(ms / 1000).toFixed(2)}s`;
  }
}