// find product id and variants based on keywords
const axios = require("axios");
//import keywords

async function FindProduct(keywords, size, color, prdCat, prdTitolo) {
    //check mobile stock every 1000ms
    let MobileStockJs = await UpdateMobileStock();
    // algoritmo di ricerca
    //Per prima cosa bisogna trovare l'ID del prodotto che matcha le keys
    MobileStockJs[prdCat].find((item) =>
        item.name.toLowerCase().includes(prdTitolo)
    );
}

async function UpdateMobileStock() {
    let mbsLink = "http://www.supremenewyork.com/mobile_stock.json";
    let mobile_stock = await axios.get(mbsLink).then((resp) => {
        return resp.data.products_and_categories;
    });
}

module.exports = { FindProduct };
