function about() {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    content.append(main);

    const pageHeading = document.createElement("h2");
    pageHeading.textContent = "About Little Mario's Pizzeria";
    
    const div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    const div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    main.append(pageHeading, div1, div2);

    // Story & Philosophy in div1
    const storyHeading = document.createElement("h3");
    storyHeading.textContent = "Our Story";
    
    const storyPara = document.createElement("p");
    storyPara.textContent = "Little Mario's Pizzeria was founded in 1985 by Mario Rossi, who brought his family's secret recipes from Naples to create authentic Italian pizza. What started as a small family business has grown into a beloved local institution, while still maintaining the traditional methods and quality ingredients that made us famous.";
    
    const philosophyHeading = document.createElement("h3");
    philosophyHeading.textContent = "Our Philosophy";
    
    const philosophyPara = document.createElement("p");
    philosophyPara.textContent = "At Little Mario's, we believe that great pizza comes from great ingredients. We source locally whenever possible and make our dough fresh daily. Our tomato sauce is made from Italian San Marzano tomatoes, and we use only the finest mozzarella cheese. We're committed to bringing you the authentic taste of Italy with every bite.";
    
    div1.append(storyHeading, storyPara, philosophyHeading, philosophyPara);

    // Community section in div2
    const communityHeading = document.createElement("h3");
    communityHeading.textContent = "Community Involvement";
    
    const communityPara = document.createElement("p");
    communityPara.textContent = "Little Mario's is proud to be an active member of our local community. We regularly participate in community events, sponsor local sports teams, and donate to local charities. We believe in giving back to the community that has supported us for over three decades.";
    
    div2.append(communityHeading, communityPara);
}

export { about };