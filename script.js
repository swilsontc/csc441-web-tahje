
// Class 15: Step 1: This file is running.
console.log("script.js is running");

// Class 15: Step 2: put this year in the footer.
const yearSpan = document.querySelector("#year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15: Step 3: a button that changes the page theme
const themeButton = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

}

// Class 16: Step 4: handle the submit
const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    const formStatus = document.querySelector("#form-status");

    // Lab 16: Task 4: live character count
    const messageField = document.querySelector("#message");
    const messageCount = document.querySelector("#message-count");

    function updateMessageCount() {

        if (messageField && messageCount) {
            messageCount.textContent =
                messageField.value.length + " characters";
        }

    }

    if (messageField && messageCount) {
        messageField.addEventListener("input", updateMessageCount);
        updateMessageCount();
    }

    // Lab 16: Task 1: my own check before accepting it
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (message.length < 10) {

            formStatus.textContent =
                "Please write a bit more, at least 10 characters.";

            formStatus.classList.add("error");

            return;
        }

        formStatus.classList.remove("error");

        formStatus.textContent =
            "Thanks, " + name + ". Your message is ready to send.";

        contactForm.reset();

        updateMessageCount();

    });

    // Lab 16: Task 2: clear the error when they start fixing it
    contactForm.addEventListener("input", function () {

        if (formStatus.classList.contains("error")) {

            formStatus.textContent = "";

            formStatus.classList.remove("error");

        }

    });

}
