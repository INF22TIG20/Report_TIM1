document.addEventListener('click', function(event) {
    let target = event.target;
    while (target != null) {
      if (target.classList.contains('share')) {
        var textToCopy = window.location.href;
        navigator.clipboard.writeText(textToCopy)
          .then(function() {
            alert("Link copied to clipboard!");
          })
          .catch(function(error) {
            console.error("Something went wrong", error);
          });
        break;
      }
      target = target.parentElement;
    }
  });
  