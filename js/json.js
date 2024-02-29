// const user = { id: 1, name: 'azad', job: 'coding' }


// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'alia',
    address: {
        street: 'kochu khet',
        city: 'dhaka',
        country: 'bd',
    },
    products: [
        'laptop', 'mic', 'monitor', 'speaker', 'camera', 'keyboard'
    ],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

// console.log(shop);

//turn into string
const shopJson = JSON.stringify(shop);
console.log( shopJson);


// turn into object
const shopObj = JSON.parse(shopJson);
console.log(shopObj);