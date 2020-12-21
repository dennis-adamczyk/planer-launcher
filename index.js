const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    // args: ['--start-fullscreen'],
    ignoreDefaultArgs: ['--enable-automation'],
  });

  const defaultPage = (await browser.pages())[0];
  defaultPage.close();

  const page = await browser.newPage();
  await page.goto('http://192.168.178.31:8080/');
  // Test 4

  await browser.close();
})();
