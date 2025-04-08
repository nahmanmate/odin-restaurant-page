function pageToggle() {
    const navButtons = document.querySelectorAll(".navButton");
    const content = document.getElementById("content")

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(`You pressed a button: ${button.id}`);
            content.innerHTML = ''
            console.log(content.innerHTML);
        })
    })
}

export { pageToggle };