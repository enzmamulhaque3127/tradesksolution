const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('night');
    
    if(document.body.classList.contains('night')){
        toggleButton.textContent = '☀️ Day Mode';
    } else {
        toggleButton.textContent = '🌙 Night Mode';
    }
});
