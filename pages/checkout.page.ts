import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  private firstName = this.page.locator('#first-name');
  private lastName = this.page.locator('#last-name');
  private postalCode = this.page.locator('#postal-code');
  private continueBtn = this.page.locator('#continue');
  private finishBtn = this.page.locator('#finish');
  private completeHeader = this.page.locator('.complete-header');

  async fillForm(first: string, last: string, postal: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }

  async expectOrderCompleted() {
    await expect(this.completeHeader).toHaveText(/Thank you for your order!/i);
  }
}
