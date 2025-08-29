import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  private cartLink = this.page.locator('.shopping_cart_link');
  private cartBadge = this.page.locator('.shopping_cart_badge');
  private sortDropdown = this.page.locator('[data-test="product_sort_container"]');
  private priceTags = this.page.locator('.inventory_item_price');

  itemCard(name: string) {
    return this.page.locator('.inventory_item').filter({ hasText: name });
  }

  async addItemByName(name: string) {
    const button = this.itemCard(name).locator('button:has-text("Add to cart")');
    await button.click();
  }

  async goToCart() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/.*cart\.html/);
  }

  async verifyCartBadgeCount(expected: number) {
    if (expected === 0) {
      await expect(this.cartBadge).toHaveCount(0);
    } else {
      await expect(this.cartBadge).toHaveText(String(expected));
    }
  }

  async sortLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }

  async verifyPricesSortedAscending() {
    const count = await this.priceTags.count();
    const prices: number[] = [];
    for (let i = 0; i < count; i++) {
      const text = await this.priceTags.nth(i).textContent();
      if (text) prices.push(parseFloat(text.replace('$', '')));
    }
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
    }
  }
}
