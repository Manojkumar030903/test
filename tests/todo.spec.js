import { test, expect } from '@playwright/test';

test('login and todo add/remove with delays', async ({ page }) => {
  await page.goto('/');
await page.getByTestId('username').fill('user');
await page.getByTestId('password').fill('pass');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'login' }).click();


  await expect(page.getByRole('heading', { name: 'Todo List' })).toBeVisible();
  await page.waitForTimeout(3000);
  const todoText = 'Playwright test todo';
  await page.getByTestId('new-todo').fill(todoText);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(1000);
  const todoItem = page.getByText(todoText);
  await expect(todoItem).toBeVisible();
  await page.waitForTimeout(3000);
  
  const deleteButton = page.getByRole('button', { name: 'Delete' }).first();
  await deleteButton.click();
await page.waitForTimeout(2000)

const todoSec = 'test for second time';
  await page.getByPlaceholder('Add a new task').fill(todoSec);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(1000);

  await page.waitForTimeout(1000);
  await expect(todoItem).not.toBeVisible();
});
