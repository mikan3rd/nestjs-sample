import puppeteer from "puppeteer";
import puppeteerExtra from "puppeteer-extra";
import StealthPlugin = require("puppeteer-extra-plugin-stealth");

export const UserAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36";

export const puppeteerSetup = async () => {
  const args = [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "-–disable-dev-shm-usage",
    "--disable-gpu",
    "--no-first-run",
    "--no-zygote",
    "--single-process",
    "--lang=ja",
  ];

  const options: puppeteer.LaunchOptions = {
    headless: true,
    devtools: false,
    args,
  };

  const browser = await puppeteerExtra.use(StealthPlugin()).launch(options);
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({ "Accept-Language": "ja-JP" });
  await page.setUserAgent(UserAgent);

  return { browser, page };
};
