// function for hamburger menu working
function hamToggle() {
    let menu = document.querySelector('.hammenu');
    let icon = document.getElementsByTagName('i')[0];
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-arrow-right');
    menu.classList.toggle('hidden');
}

let crews = [];

// Fetch the JSON data
fetch('crew.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        crews = data.crew;
        displayCrew(0);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to switch crew
function switchCrew(index) {
    const buttons = document.querySelectorAll('.tablinks');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    buttons[index].classList.add('active');

    displayCrew(index);
}

// Function to display crew details
function displayCrew(index) {
    const crew = crews[index];
    document.getElementById('crewImage').src = crew.images.png;
    document.getElementById('role').textContent = crew.role; 
    document.getElementById('name').textContent = crew.name; 
    document.getElementById('about').textContent = crew.about;



    //due to size difference in the images

}

