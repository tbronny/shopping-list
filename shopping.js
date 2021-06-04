const shoppingList = [
    {
        id: 1,
        product: 'milk',
        price: 2,
    },
    {
        id: 2,
        product: 'eggs',
        price: 3,
    },
    {
        id: 3,
        product: 'chicken',
        price: 6,
    },
    {
        id: 4,
        product: 'beef',
        price: 6.5,
    },
    {
        id: 5,
        product: 'rice',
        price: 4,
    },
    {
        id: 6,
        product: 'potatoes',
        price: 5,
    },
    {
        id: 7,
        product: 'spinach',
        price: 4.99,
    },
];

const addToShoppingList = (newItem) => {
    const lastIndex = shoppingList.length - 1;
    const currentLastItem = shoppingList[lastIndex];
    const maxId = currentLastItem.id;
    const idForNewItem = maxId + 1;

    newItem.id = idForNewItem;
    shoppingList.push(newItem);
};

let addOns = {
    product: 'tomatoes',
    price: 3,
};
addToShoppingList(addOns);

addOns = {
    product: 'onions',
    price: 2.5,
};
addToShoppingList(addOns);

addOns = {
    product: 'razor',
    price: 16,
};
addToShoppingList(addOns);

addOns = {
    product: 'wine',
    price: 9,
};
addToShoppingList(addOns);

for (const items of shoppingList) {
    if (items.price > 8) {
        console.log(`
        ${items.product}
        ${items.price}`);
    }
}
