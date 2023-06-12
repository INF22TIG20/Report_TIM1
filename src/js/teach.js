fetch('/src/xml/ensinar/ensinar.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");

    let treinos = xmlDoc.getElementsByTagName("treino");

    let ul = document.createElement('ul');

    for(let i = 0; i < treinos.length; i++) {
      let treino = treinos[i];

      let li = document.createElement('li');
      li.textContent = treino.getElementsByTagName("titulo")[0].textContent;

      let ol = document.createElement('ol');
      
      let items = treino.getElementsByTagName("item");

      for(let j = 0; j < items.length; j++) {
        let itemLi = document.createElement('li');
        itemLi.textContent = items[j].textContent;
        ol.appendChild(itemLi);
      }

      li.appendChild(ol);
      ul.appendChild(li);
    }

    const contentDiv = document.getElementById('teach-list');
    contentDiv.appendChild(ul);
  })
  .catch(error => console.error('Error:', error));
