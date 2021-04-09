const panels = document.querySelectorAll('.panel')

panels.forEach((panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
       panel.classList.add('acitve')
    });
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    });
};