import githubIcon from './images/githubLogo.png'

function setFooter() {
    //initialise footer
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    body.append(footer);

    //add link to github
    const github = document.createElement("a");
    github.setAttribute('href', 'https://github.com/nahmanmate/')
    github.setAttribute('rel', 'noopener')
    const icon = document.createElement("img");
    icon.setAttribute("src", githubIcon)
    github.append(icon);

    //add copyright notice
    const copyright = document.createElement("p");
    copyright.textContent = `© James Johns ${new Date().getFullYear()}`

    footer.append(github, copyright);
}

export { setFooter }
