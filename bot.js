const { chromium, firefox, chrome, playwright } = require("playwright"); // Or 'firefox' or 'webkit'.
const { devices } = require("playwright");
const iPhone = devices["iPhone 11 Pro"];
const { FindProduct } = require("./modules/findproduct");

// link utili https://www.supremenewyork.com/mobile/#checkout
//  https://www.supremenewyork.com/mobile/
//www.supremenewyork.com/mobile_stock.json
//https://recaptcha-demo.appspot.com/recaptcha-v3-request-scores.php

async function SupremeBot() {
    const browser = await chromium.launch({
        headless: false,
        ignoreHTTPSErrors: true,
    });
    //const context = await browser.newContext();
    const context = await browser.newContext({
        ...iPhone,
        permissions: ["geolocation"],
        geolocation: { latitude: 40.71, longitude: 74.0 },
        colorScheme: "dark",
        locale: "it-IT",
    });
    const supShop = await context.newPage();
    const captcha = await context.newPage();
    const paypalPage = await context.newPage();

    // await supShop.goto("https://www.supremenewyork.com/mobile");
    // await captcha.goto(
    //     "https://recaptcha-demo.appspot.com/recaptcha-v3-request-scores.php"
    // );
    // await paypalPage.goto("https:www.paypal.com");
    // fine inizializzazione
    FindProduct();
}

SupremeBot();
