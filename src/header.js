// Import the image so webpack can process it
function header() {
    //declare div#id as constant
    const content = document.getElementById("content");

    // create homepage, image, headline, some text etc.

    const hero = document.createElement("div");
    hero.classList = "hero";
    content.append(hero);

    const heading = document.createElement("h1");
    heading.textContent = "Little Mario's Pizzeria"
    const tagline = document.createElement("h2");
    tagline.textContent = "Almost Better than Mammas";
    hero.append(heading, tagline);
}
export { header }