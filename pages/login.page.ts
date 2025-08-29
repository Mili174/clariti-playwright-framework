import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private username = this.page.locator('#user-name');
  private password = this.page.locator('#password');
  private loginBtn = this.page.locator('#login-button');
  private menuBtn = this.page.locator('#react-burger-menu-btn');
  private logoutLink = this.page.locator('#logout_sidebar_link');

  async open() {
    await this.page.goto('/');
  }

  async loginAs(user: string, pwd: string) {
    await this.username.fill(user);
    await this.password.fill(pwd);
    await this.loginBtn.click();
  }

  async logout() {
    await this.menuBtn.click();
    await this.logoutLink.click();
    await expect(this.page).toHaveURL(/.*saucedemo\.com\//);
  }

  async expectOnInventoryPage() {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}
