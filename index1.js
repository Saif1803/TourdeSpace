
function hamToggle() {
    let menu = document.querySelector('.hammenu');
    let icon = document.getElementsByTagName('i')[0];
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-arrow-right');
    menu.classList.toggle('hidden');
    
}

let destinations = [];

// Fetch the JSON data
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        destinations = data.destinations; // Store the destinations data
        // Display the first destination by default
        displayDestination(0);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to switch destination
function switchDestination(index) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.des-name');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to the clicked button
    buttons[index].classList.add('active');

    // Display the selected destination details
    displayDestination(index);
}

// Function to display destination details
function displayDestination(index) {
    const destination = destinations[index];
    document.getElementById('destinationImage').src = destination.images.png;
    document.getElementById('destinationImage').alt = destination.name;
    document.querySelector('.destinationName').textContent = destination.name;
    document.getElementById('destinationDescription').textContent = destination.description;
    document.getElementById('destinationDistance').textContent = destination.distance;
    document.getElementById('destinationTravel').textContent = destination.travel;
}