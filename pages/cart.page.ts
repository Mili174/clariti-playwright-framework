import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  private checkoutBtn = this.page.locator('#checkout');

  async proceedToCheckout() {
    await this.checkoutBtn.click();
    await expect(this.page).toHaveURL(/.*checkout-step-one\.html/);
  }
}
