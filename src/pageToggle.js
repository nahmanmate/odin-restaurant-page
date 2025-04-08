import { home } from './home';
import { menu } from './menu';
import { about } from './about';

function pageToggle() {
    const navButtons = document.querySelectorAll(".navButton");
    const content = document.getElementById("content");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.id;
            content.innerHTML = '';
            console.log(content.innerHTML);
            if (id === 'homeButton') {
                home();
            }
            else if (id === 'menuButton') {
                menu();
            }
            else if (id === 'aboutButton') {
                about();
            }
        })
    })
}

export { pageToggle };