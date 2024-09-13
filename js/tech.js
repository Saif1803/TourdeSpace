
function hamToggle() {
    let menu = document.querySelector('.hammenu');
    let icon = document.getElementsByTagName('i')[0];
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-arrow-right');
    menu.classList.toggle('hidden');
    
}

let techs = [];

fetch('js/tech.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        techs = data.tech;
        displayTech(0);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function switchTech(index) {
    const buttons = document.querySelectorAll('.tech-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    buttons[index].classList.add('active');

    techToggle(index);
}

function techToggle(index) {
    const tech = techs[index];
    document.getElementById('techImage').src = tech.images.png; 
    document.getElementById('name').textContent = tech.name; 
    document.getElementById('about').textContent = tech.about; 
}