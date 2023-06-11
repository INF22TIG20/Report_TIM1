document.getElementById('faq').addEventListener('click', function() {
    let resultDiv = document.getElementById('result');
    
    // If the resultDiv is not empty, clear it and return
    if (resultDiv.innerHTML.trim() !== "") {
        resultDiv.innerHTML = "";
        return;
    }
    
    // If the resultDiv is empty, fetch the data and populate it
    fetch('/src/xml/faq/faq.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            
            let faqis = xml.getElementsByTagName('faqi');
            let result = '';

            for(let i = 0; i < faqis.length; i++) {
                let pergunta = faqis[i].getElementsByTagName('pergunta')[0].textContent;
                let resposta = faqis[i].getElementsByTagName('resposta')[0].textContent;

                result += `<dt class="faq-item"><span class="qa">Q.</span> ${pergunta}</dt><dd><span class="qa">A.</span> ${resposta}</dd>`;
            }

            resultDiv.innerHTML = `<dl>${result}</dl>`;

            let questions = resultDiv.getElementsByTagName('dt');
            for (let i = 0; i < questions.length; i++) {
                questions[i].addEventListener('click', function() {
                    let answer = this.nextElementSibling;
                    if (answer.style.display === 'none') {
                        answer.style.display = 'block';
                    } else {
                        answer.style.display = 'none';
                    }
                });

                setTimeout(function() {
                    questions[i].style.opacity = '1';
                }, i * 200); 
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
