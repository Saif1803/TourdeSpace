
function hamToggle() {
    let menu = document.querySelector('.hammenu');
    let icon = document.getElementsByTagName('i')[0];
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-arrow-right');
    menu.classList.toggle('hidden');
    
}

function switchDestination(selectedButton) {
    const destinations = document.querySelectorAll('.des-name');

    destinations.forEach(destination => {
        destination.classList.remove('active');
    });

    selectedButton.parentElement.classList.add('active');
}

