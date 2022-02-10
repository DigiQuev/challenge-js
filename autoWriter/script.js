    function typeWriter (element) {
        const textArray = element.innerHTML.split('');
        element.innerHTML = "";
        textArray.forEach ((lettre, i) => {
          setTimeout(function() {
            element.innerHTML += lettre;
          }, 75 * i)
        })
      }
      
      const titre = document.querySelector("h2");
      typeWriter(titre);