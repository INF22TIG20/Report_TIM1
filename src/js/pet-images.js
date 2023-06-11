document.body.addEventListener('click', function(e) {
    var smallImage = e.target;
    
    if (smallImage.matches('.small')) {
        var bigImage = document.getElementById('big');
        
        bigImage.src = smallImage.src;
        document.querySelector('.active').classList.remove('active');
        smallImage.classList.add('active');
    }
});
