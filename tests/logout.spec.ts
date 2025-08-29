import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const username = process.env.SAUCEDEMO_USERNAME || 'standard_user';
const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';

test('[@smoke][@regression]user can logout and return to login page', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.loginAs(username, password);
  await login.expectOnInventoryPage();

  await login.logout();
});
