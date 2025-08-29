import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import products from '../test-data/products.json';

const username = process.env.SAUCEDEMO_USERNAME || 'standard_user';
const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';

test('[@regression]add two items and verify cart badge count', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.loginAs(username, password);

  await inventory.addItemByName(products.backpack);
  await inventory.addItemByName(products.bikeLight);
  await inventory.verifyCartBadgeCount(2);
});
