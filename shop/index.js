let products = [
    {
        id: 1,
        name: "Stickers",
        price: 1,
        description: "High-quality matte vinyl that is perfectly sturdy enough to survive the dishwasher and reasonable everyday use",
        quantity: 0,
    },
    {
        id: 2,
        name: "Holiday Cards",
        price: 3,
        description: "Designs from the card gallery, or just a blown-up version of one of the captioned sticker designs (they do have a decent enough resolution to make at least a 4x6). Bundled in sets of 8, with appropriate sized envelopes in fun colors. Printed on high-quality matte cardstock, can be either white or cream; should withstand even sharpies for writing messages inside",
        quantity: 0,
    },
    {   
        id: 3,
        name: "Coloring Books",
        price: 5,
        description: "Default includes 24 of the best of the goblins (six to a page), plus four full-page works not currently published. All printed single-sided on high-quality matte cardstock, and should withstand even the most determined markers without bleeding through",
        quantity: 0,
    },
    {
        id: 4,
        name: "Small Goblin Treasure Jar",
        price: 20,
        description: "A jar full of shinies and interesting bits! Pick any aesthetic, these are custom built to order. Every jar contains at minimum one full seven-set of RPG dice, a custom micro-sculpture of a creature or snack, a handful of interesting rocks, shells, (fake, but metal) coins, aquarium stones, beads, sequins, and assorted hardware",
        quantity: 0,
    },
    {
        id: 5,
        name: "Large Goblin Treasure Jar",
        price: 40,
        description: "A jar full of shinies and interesting bits! Pick any aesthetic, these are custom built to order. Every jar contains at minimum one full seven-set of RPG dice, a custom micro-sculpture of a creature or snack, a handful of interesting rocks, shells, (fake, but metal) coins, aquarium stones, beads, sequins, and assorted hardware",
        quantity: 0,
    }
]

let addProducts = [...products]

// const reload = setInterval(log, 5000)

function log() {
    console.log(addProducts)
}

// function stopReload() {
//     clearInterval(reload)
// }

function addCard(products) {
    const template = document.getElementById("product-template").content.cloneNode(true);
    template.querySelector('.product-name').innerText = products.name;
    template.querySelector('.product-price').innerText = "$" + products.price;
    template.querySelector('.product-description').innerText = products.description;
    template.querySelector('.product-quantity').innerText = products.quantity

    document.querySelector('#product-list').appendChild(template)
}

function getProducts() {
    return new Promise(resolve => {
        //  reload;
        resolve(addProducts)

    });
}

getProducts().then((products) => products.forEach(product => addCard(product)))

function log() {
    console.log(products)
}