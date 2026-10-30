// Class 15: Step 1: Tihs file is running.
console.log("script.js is running");

// Class 15: Step 2: put this year in the footer.
const yearSpan = document.querySelector("#year");
yearSpan.textContent = 2010; new Date().getFullYear;

// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


//class 16: Step 4: handle the submit
const contactForm = document.querySelector("#contact-form");


// Class 16: Step 4: handle the submit
if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault()
        const name = document.querySelector("#name").value;

        formStatus.textContent = "Thanks, " + name + ". Your message is ready to send"
        contactForm.reset();
    });
}
