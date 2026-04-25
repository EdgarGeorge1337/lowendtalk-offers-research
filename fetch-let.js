const { chromium } = require('/root/iptv-webpage/node_modules/playwright-core');
const fs = require('fs');

const urls = process.argv.slice(2);
if (!urls.length) { console.error('usage: node fetch-let.js URL [URL...]'); process.exit(1); }

(async () => {
  const browser = await chromium.launch({
    executablePath: '/root/.cache/ms-playwright/chromium-1217/chrome-linux64/chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'],
  });
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
  });
  const page = await ctx.newPage();
  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      // wait for cf challenge
      for (let i = 0; i < 15; i++) {
        const t = await page.title();
        if (!/just a moment/i.test(t)) break;
        await page.waitForTimeout(1500);
      }
      await page.waitForTimeout(1000);
      const html = await page.content();
      const id = url.split('/').filter(Boolean).slice(-2).join('-').replace(/[^a-z0-9-]/gi, '_');
      const out = `/root/lowendtalk-research/${id}.html`;
      fs.writeFileSync(out, html);
      console.log(`OK ${url} -> ${out} (${html.length}b)`);
    } catch (e) {
      console.error(`FAIL ${url}: ${e.message}`);
    }
  }
  await browser.close();
})();
