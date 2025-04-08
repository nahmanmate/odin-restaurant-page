function home () {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    content.append(main);

    const pageHeading = document.createElement("h2");
    pageHeading.textContent = "Thanks for dropping in!"

    const div1 = document.createElement("div");
    div1.setAttribute("id", "div1")
    const div2 = document.createElement("div");
    div2.setAttribute("id", "div2")
    main.append(pageHeading, div1, div2);

    const hoursObject = {
        Monday: "11am to 4pm",
        Tuesday: "11am to 4pm",
        Wednesday: "11am to 4pm",
        Thursday: "Closed",
        Friday: "11am to 4pm",
        Saturday: "11am to 10pm",
        Sunday: "11am to 4pm"
    }

    const subheadingHours = document.createElement("h3");
    subheadingHours.textContent = "Opening Hours"
    const hoursEntry = document.createElement("ul");

    Object.entries(hoursObject).forEach(([day, hours]) => {
        const hourItem = document.createElement("li");
        const dayItem = document.createElement("strong");
        dayItem.textContent = `${day}: `;
        const hoursDetail = document.createElement("span");
        hoursDetail.textContent = hours;
        hourItem.append(dayItem, hoursDetail)
        hoursEntry.append(hourItem);
    })

    const subheadingLocation = document.createElement("h3");
    subheadingLocation.textContent = "Location"
    const address = document.createElement("p");
    address.textContent = "123 Fake Street, Springfield, Springfield"
    div1.append(subheadingHours, hoursEntry);
    div2.append(subheadingLocation, address);

}

export { home }