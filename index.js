const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-fullscreen', '--no-sandbox', '--disable-setuid-sandbox'],
    ignoreDefaultArgs: ['--enable-automation'],
    executablePath: '/usr/bin/chromium-browser',
  });

  // const page = await browser.newPage();
  // await page.goto('https://smartplaner-planerview.web.app/');

  // const defaultPage = (await browser.pages())[0];
  // await defaultPage.close();

  // await browser.close();
})();
