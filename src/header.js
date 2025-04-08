// Import the image so webpack can process it
function header() {
    //declare div#id as constant
    const body = document.querySelector("body")

    // create homepage, image, headline, some text etc.

    const hero = document.createElement("div");
    const content = document.getElementById("content")
    hero.classList = "hero";
    body.insertBefore(hero, content);

    const heading = document.createElement("h1");
    heading.textContent = "Little Mario's Pizzeria"
    const tagline = document.createElement("h2");
    tagline.textContent = "Almost Better than Mammas";
    hero.append(heading, tagline);
}
export { header }