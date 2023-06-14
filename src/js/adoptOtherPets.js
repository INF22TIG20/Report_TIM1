// Fetch XML data
fetch('/src/xml/pets/pets.xml')
  .then(response => response.text())
  .then(data => {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(data, "text/xml");

    let pets = Array.from(xmlDoc.getElementsByTagName('pet'));
    let selectedPets = [];

    // Get the current pet from the URL
    let pathArray = window.location.pathname.split('/');
    let currentPet = pathArray[pathArray.length - 1].replace('.html', '');

    // Filter out the current pet
    pets = pets.filter(pet => pet.getElementsByTagName('lname')[0].textContent !== currentPet);

    // Generate 3 random pets
    for(let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * pets.length);
      selectedPets.push(pets[randomIndex]);
      pets.splice(randomIndex, 1);
    }

    // Generate the HTML for each selected pet
    for(let pet of selectedPets) {
      let lname = pet.getElementsByTagName('lname')[0].textContent;
      let name = pet.getElementsByTagName('name')[0].textContent;
      let type = pet.getElementsByTagName('type')[0].textContent;
      let location = pet.getElementsByTagName('location')[0].textContent;
      let image = `/src/img/pets/${lname}1.png`;

      let html = `
        <div class="pet">
          <div class="pet-image">
            <img src="${image}" />
          </div>
          <div class="info-pet">
            <p>meet</p>
            <h1><a href="/src/pages/pets/${lname}.html">${name}</a></h1>
            <h3>${type}</h3>
            <div class="location">
              <span class="material-symbols-outlined"> location_on </span>
              <h2>${location}</h2>
            </div>
            <div class="learn">
              <h4><a href="/src/pages/pets/${lname}.html">learn more</a></h4>
              <span class="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      `;
    
      document.querySelector('.pets-container').innerHTML += html;
    }
  });
