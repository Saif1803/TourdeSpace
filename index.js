
function hamToggle() {
    let menu = document.querySelector('.hammenu');
    let icon = document.getElementsByTagName('i')[0];
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-arrow-right');
    menu.classList.toggle('hidden');
    
}