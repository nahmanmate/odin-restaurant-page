function menu () {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    content.append(main);

    const pageHeading = document.createElement("h2");
    pageHeading.textContent = "Traditional Italian Pizzeria"

    const div1 = document.createElement("div");
    div1.setAttribute("id", "div1")
    main.append(pageHeading, div1);

    const menuList = {
        "Margherita Pizza": "$18",
        "Pepperoni Pizza": "$20",
        "Supreme Pizza": "$22",
        "Hawaiian Pizza": "$19",
        "Vegetarian Pizza": "$20",
        "BBQ Chicken Pizza": "$21",
        "Garlic Bread": "$8",
        "Caesar Salad": "$12",
        "Soft Drinks": "$4"
    }

    const subheadingMenu = document.createElement("h3");
    subheadingMenu.textContent = "Menu"
    const menuEntry = document.createElement("ul");

    Object.entries(menuList).forEach(([item, price]) => {
        const priceItem = document.createElement("li");
        const foodItem = document.createElement("strong");
        foodItem.textContent = `${item}: `;
        const foodDetail = document.createElement("span");
        foodDetail.textContent = price;
        priceItem.append(foodItem, foodDetail)
        menuEntry.append(priceItem);
    })

    div1.append(subheadingMenu, menuEntry);
}

export { menu }
