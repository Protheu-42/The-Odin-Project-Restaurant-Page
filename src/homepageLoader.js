export default  function homepageLoader() {
    const contentDiv = document.querySelector('#content')

    const firstDiv = document.createElement('div');

    // H1's
    const firstH1 = document.createElement('h1');
    firstH1.textContent = 'Craft';
    const secondH1 = document.createElement('h1');
    secondH1.textContent = 'Brewery';

    const companyIntro = document.createElement('p');
    companyIntro.textContent = 'Welcome to Hopster Brews! Crafting unique flavors, pouring passion into every pint. Explore our artisanal ales, savor the taste of handcrafted perfection. Cheers to unforgettable moments and exceptional brews!';

    const secondDiv = document.createElement('div');
    secondDiv.id = 'logo';

    //Appending Child Section
    contentDiv.appendChild(firstDiv);
    
    //firtDiv Childs
    firstDiv.appendChild(firstH1);
    firstDiv.appendChild(secondH1);
    firstDiv.appendChild(companyIntro);

    contentDiv.appendChild(secondDiv);
}