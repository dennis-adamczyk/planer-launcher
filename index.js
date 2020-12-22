const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-fullscreen', '--kiosk'],
    ignoreDefaultArgs: ['--enable-automation'],
    executablePath: '/usr/bin/chromium-browser',
  });

  const defaultPage = (await browser.pages())[0];
  defaultPage.close();

  const page = await browser.newPage();
  await page.goto('https://smartplaner-planerview.web.app/');

  // await browser.close();
})();
