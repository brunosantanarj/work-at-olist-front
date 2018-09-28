import puppeter from 'puppeteer';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeter.launch({ headless: false });
  page = await browser.newPage();
});

describe('Account', () => {
  test('Users can create account', async () => {
    await page.goto('https://bruno-olist-front-end-test.netlify.com/');
    await page.waitForSelector('#account');

    await page.click('#account-name');
    await page.type('#account-name', 'Bruno Santana');
    await page.click('#account-email');
    await page.type('#account-email', 'brunosantanasigma@live.com');
    await page.click('#account-password');
    await page.type('#account-password', 'Senha12');
    await page.click('#account-confirm-password');
    await page.type('#account-confirm-password', 'Senha12');
    await page.click('button[type=submit]');

    await page.waitForSelector('.account-success');
  }, 1600000);


  test('Users cannot create account', async () => {
    await page.goto('https://bruno-olist-front-end-test.netlify.com/');
    await page.waitForSelector('#account');

    await page.click('#account-name');
    await page.type('#account-name', 'B');
    await page.click('#account-email');
    await page.type('#account-email', 'brunosantanasigma@live');
    await page.click('#account-password');
    await page.type('#account-password', '12345');
    await page.click('#account-confirm-password');
    await page.type('#account-confirm-password', '12345');
  }, 1600000);
});
