// const products = [
//    { name: "Stickers", price: 1, id: 1, quantity: 1 },
//    { name: "Holiday Cards", price: 3, id: 2, quantity: 1 },
//    { name: "Coloring Books", price: 5, id: 3, quantity: 1 },
//    { name: "Small Goblin Treasure Jar", price: 20, id: 4, quantity: 1 },
//    { name: "Large Goblin Treasure Jar", price: 40, id: 5, quantity: 1 }
// ];

let products = [
    {
        id: 1,
        name: "Stickers",
        price: 1,
        description: "High-quality matte vinyl that is perfectly sturdy enough to survive the dishwasher and reasonable everyday use",
    },
    {
        id: 2,
        name: "Holiday Cards",
        price: 3,
        description: "Designs from the card gallery, or just a blown-up version of one of the captioned sticker designs (they do have a decent enough resolution to make at least a 4x6). Bundled in sets of 8, with appropriate sized envelopes in fun colors. Printed on high-quality matte cardstock, can be either white or cream; should withstand even sharpies for writing messages inside",
    },
    {   
        id: 3,
        name: "Coloring Books",
        price: 5,
        description: "Default includes 24 of the best of the goblins (six to a page), plus four full-page works not currently published. All printed single-sided on high-quality matte cardstock, and should withstand even the most determined markers without bleeding through",
    },
    {
        id: 4,
        name: "Small Goblin Treasure Jar",
        price: 20,
        description: "A jar full of shinies and interesting bits! Pick any aesthetic, these are custom built to order. Every jar contains at minimum one full seven-set of RPG dice, a custom micro-sculpture of a creature or snack, a handful of interesting rocks, shells, (fake, but metal) coins, aquarium stones, beads, sequins, and assorted hardware",
    },
    {
        id: 5,
        name: "Large Goblin Treasure Jar",
        price: 40,
        description: "A jar full of shinies and interesting bits! Pick any aesthetic, these are custom built to order. Every jar contains at minimum one full seven-set of RPG dice, a custom micro-sculpture of a creature or snack, a handful of interesting rocks, shells, (fake, but metal) coins, aquarium stones, beads, sequins, and assorted hardware",
    }
]

let addProducts = [...products]

const reload = setInterval(log, 5000)

function log() {
    console.log(addProducts)
}

function stopReload() {
    clearInterval(reload)
}

function addCard(products) {
    const template = document.getElementById("product-template").content.cloneNode(true);
    template.querySelector('.product-name').innerText = products.name;
    template.querySelector('.product-price').innerText = "$" + products.price;
    template.querySelector('.product-description').innerText = products.description;

    document.querySelector('#product-list').appendChild(template)
}

// function post() {
//     const newName = document.getElementById("productName").value;
//     const newPrice = document.getElementById("productPrice").value;
//     let newProduct = {
//         name: newName,
//         price: newPrice
//     };
//     addProducts.push(newProduct);
//     addCard(newProduct);
//     document.getElementById("producName").value = ''
//     document.getElementById("productPrice").value = ''
// }

function getProducts() {
    return new Promise(resolve => {
        reload;
        resolve(addProducts)

    });
}

getProducts().then((products) => products.forEach(product => addCard(product)))