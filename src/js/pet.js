fetch('/src/xml/pets.xml')
  .then(response => response.text())
  .then(data => {
    // Now 'data' is the XML file as a string
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(data, "text/xml");

    // Get all the <pet> elements
    let pets = xmlDoc.getElementsByTagName('pet');

    // For each <pet>, create the corresponding HTML
    for (let pet of pets) {
      let lname = pet.getElementsByTagName('lname')[0].textContent;
      let name = pet.getElementsByTagName('name')[0].textContent;
      let type = pet.getElementsByTagName('type')[0].textContent;
      let location = pet.getElementsByTagName('location')[0].textContent;
      let image = `src/img/pets/${lname}1.png`;
    
      // Create the HTML
      let html = `
        <div class="pet">
          <div class="pet-image">
            <img src="${image}" />
          </div>
          <div class="info-pet">
            <p>meet</p>
            <h1><a href="${lname}.html">${name}</a></h1>
            <h3>${type}</h3>
            <div class="location">
              <span class="material-symbols-outlined"> location_on </span>
              <h2>${location}</h2>
            </div>
            <div class="learn">
              <h4><a href="${lname}.html">learn more</a></h4>
              <span class="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      `;
    
      // Add the HTML to your container
      document.querySelector('.pets-container').innerHTML += html;
    }
  });
