// Class 15: Step 1: This file is running.
console.log("script.js is running");

// Class 15: Step 2: put this year in the footer.
const yearSpan = document.querySelector("#year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15: Step 3: a button that changes the page theme & remembers choice
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    // Lab 15: Task 4: use the saved choice on arrival
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "Light";
    }

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark";
            localStorage.setItem("theme", "light");
        }
    });
}

// Lab 15 Task 5: A greeting that knows the time
const greetingSpan = document.querySelector("#greeting");
if (greetingSpan) {
    const hours = new Date().getHours();
    if (hours < 12) {
        greetingSpan.textContent = "Good morning";
    } else {
        greetingSpan.textContent = "Good evening";
    }
}

// Class 16: Step 4: handle the submit & Lab 16 Tasks 1, 2, 4
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    // Lab 16: Task 4: live character count
    const messageField = document.querySelector("#message");
    const messageCount = document.querySelector("#message-count");

    function updateMessageCount() {
        if (messageField && messageCount) {
            messageCount.textContent = messageField.value.trim().length + " characters";
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
        const message = messageField.value.trim();

        if (message.length < 10) {
            formStatus.textContent = "Please write a bit more, at least 10 characters.";
            formStatus.classList.add("error");
            return;
        }

        formStatus.classList.remove("error");
        formStatus.textContent = "Thanks, " + name + ". Your message is ready to send.";
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