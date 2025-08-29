import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import checkoutInfo from '../test-data/checkout.json';
import products from '../test-data/products.json';

const username = process.env.SAUCEDEMO_USERNAME || 'standard_user';
const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';

test('[@regression]checkout flow completes successfully', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.open();
  await login.loginAs(username, password);

  await inventory.addItemByName(products.backpack);
  await inventory.addItemByName(products.fleeceJacket);
  await inventory.verifyCartBadgeCount(2);
  await inventory.goToCart();

  await cart.proceedToCheckout();
  await checkout.fillForm(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode);
  await checkout.finishOrder();
  await checkout.expectOrderCompleted();
});
