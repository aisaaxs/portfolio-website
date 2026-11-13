import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has no automatically detectable WCAG A or AA violations", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});

test("provides a logical page structure and keyboard skip link", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("main")).toHaveAttribute("id", "main-content");
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
});

test("supports keyboard operation of the mobile navigation", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await menuButton.focus();
  await menuButton.press("Enter");

  await expect(page.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute(
    "aria-expanded",
    "true"
  );
  await expect(page.getByRole("link", { name: "about", exact: true })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeFocused();
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toHaveAttribute(
    "aria-expanded",
    "false"
  );
});

test("does not hide photography descriptions behind hover", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("A century of architecture stacked in one frame.")).toBeVisible();
  await expect(page.getByText("Vancouver, BC, Canada").first()).toBeVisible();
});

test("exposes the résumé download and public project destination", async ({ page }) => {
  await page.goto("/");

  const resumeLink = page.getByRole("link", { name: /Download résumé/ });
  await expect(resumeLink).toHaveAttribute(
    "href",
    "/documents/anitej-isaac-sharma-resume.pdf"
  );
  await expect(resumeLink).toHaveAttribute("download", "");

  await expect(
    page.getByRole("link", { name: /Visit the MedSim Innovations website/ })
  ).toHaveAttribute("href", "https://medsiminnovations.com/");
});

test("reflows without horizontal scrolling at a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");

  const dimensions = await page.evaluate(() => ({
    viewportWidth: document.documentElement.clientWidth,
    contentWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.contentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
});

test("respects reduced motion and retains focus in forced-colors mode", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce", forcedColors: "active" });
  await page.goto("/");

  const scrollBehavior = await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior
  );
  expect(scrollBehavior).toBe("auto");

  await page.keyboard.press("Tab");
  const outlineStyle = await page
    .getByRole("link", { name: "Skip to main content" })
    .evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(outlineStyle).not.toBe("none");
});
