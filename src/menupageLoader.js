export default function menupageLoader() {
     const contentDiv = document.querySelector('#content');

     const menuContainerDiv = document.createElement('div');
     menuContainerDiv.id = 'menu-container';

     const h1PageTitle = document.createElement('h1');
     h1PageTitle.textContent = 'Welcome to Hopster Brews';

     const sectOneDiv = document.createElement('div');
     const h3Beers = document.createElement('h3');
     h3Beers.textContent = 'Beers on Tap:';
     const ulBeers = document.createElement('ul');
     const beersList = [{
        name: "Golden Ale",
        description: "A crisp and refreshing ale with hints of citrus and a smooth finish. ABV: 5.2% | IBU: 25"
     },
     {
        name: "IPA - India Pale Ale",
        description: "Bold hops with a balance of citrus and pine flavors. A favorite among hop lovers. ABV: 6.5% | IBU: 50"
     },
     {
        name: "Stout",
        description: "Rich and robust with notes of dark chocolate and coffee. Smooth and creamy texture. ABV: 7.0% | IBU: 30"
     }
    ];

    const sectTwoDiv = document.createElement('div');
    const h3Bottled = document.createElement('h3');
    h3Bottled.textContent = "Bottled Selections:";
    const ulBottled = document.createElement('ul');
    const bottledList = [
        {
            name: "Porter",
            description: "A dark ale with a blend of roasted malt and caramel flavors. ABV: 6.8% | IBU: 35"
        },
        {
            name: "Wheat Beer",
            description: "Light and refreshing with hints of banana and clove. Perfect for a sunny day. ABV: 4.5% | IBU: 20"
        }
    ];

    const sectThreeDiv = document.createElement('div');
    const h3Food = document.createElement('h3');
    h3Food.textContent = "Food Pairings:";
    const ulFood = document.createElement('ul');
    ulFood.classList.add("food");
    const foodList = [
        {
            name: "Pretzels with Beer Cheese Dip"
        },
        {
            name: "BBQ Pulled Pork Sliders"
        },
        {
            name: "Beer-Battered Fish Tacos"
        }
    ];

    const sectFourDiv = document.createElement('div');
    const h3Dessert = document.createElement('h3');
    h3Dessert.textContent = 'Desserts:';
    const ulDessert = document.createElement('ul');
    ulDessert.classList.add('food');
    const dessertList = [
        {
            name: 'Stout Brownie with Vanilla Ice Cream'
        },
        {
            name: 'Apple Crisp with Caramel Drizzle'
        }
    ];


    // Appending Child Section
    contentDiv.appendChild(menuContainerDiv);
    menuContainerDiv.appendChild(h1PageTitle);

    menuContainerDiv.appendChild(sectOneDiv);
    sectOneDiv.appendChild(h3Beers);
    sectOneDiv.appendChild(ulBeers);
    createLi(beersList, ulBeers);

    menuContainerDiv.appendChild(sectTwoDiv);
    sectTwoDiv.appendChild(h3Bottled);
    sectTwoDiv.appendChild(ulBottled);
    createLi(bottledList, ulBottled);

    menuContainerDiv.appendChild(sectThreeDiv);
    sectThreeDiv.appendChild(h3Food);
    sectThreeDiv.appendChild(ulFood);
    createLi(foodList, ulFood);

    menuContainerDiv.appendChild(sectFourDiv);
    sectFourDiv.appendChild(h3Dessert);
    sectFourDiv.appendChild(ulDessert);
    createLi(dessertList, ulDessert);

    function createLi(list, parentElement) {
        for (let i = 0; i < list.length; i++){
            let liName = document.createElement('li');
            liName.textContent = list[i].name;
            parentElement.appendChild(liName);
            if ('description' in list[i]) {
                let liDesc = document.createElement('p');
                liDesc.textContent = list[i].description;
                liName.appendChild(liDesc);
            }
        }
    }
}