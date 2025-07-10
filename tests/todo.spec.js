import { test, expect } from '@playwright/test';

test('login and todo add/remove with delays', async ({ page }) => {
  // 1. Go to login page
  await page.goto('/');

  // 2. Fill in login form
  await page.getByPlaceholder('Username').fill('user');
  await page.getByPlaceholder('Password').fill('pass');
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait 1 second after login
  await page.waitForTimeout(1000);

  // 3. Confirm we landed on Todo List page
  await expect(page.getByRole('heading', { name: 'Todo List' })).toBeVisible();

  // Wait 1 second before adding todo
  await page.waitForTimeout(1000);

  // 4. Add a new todo
  const todoText = 'Playwright test todo';
  await page.getByPlaceholder('Add a new task').fill(todoText);
  await page.getByRole('button', { name: 'Add' }).click();

  // Wait 1 second after adding
  await page.waitForTimeout(1000);

  // 5. Check the new todo is visible
  const todoItem = page.getByText(todoText);
  await expect(todoItem).toBeVisible();

  // Wait 1 second before deleting
  await page.waitForTimeout(1000);

  // 6. Delete the todo
  const deleteButton = page.getByRole('button', { name: 'Delete' }).first();
  await deleteButton.click();

  // Wait 1 second after deleting
  await page.waitForTimeout(1000);

  // 7. Confirm todo is gone
  await expect(todoItem).not.toBeVisible();
});
