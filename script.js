function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

const modeSwitch = document.getElementById('modeSwitch');

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // Add event listener to the checkbox to trigger the toggleDarkMode function
    modeSwitch.addEventListener('change', toggleDarkMode);
