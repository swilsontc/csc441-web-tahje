// Class 15: Step 1: Tihs file is running.
console.log("script.js is running");

// Class 15: Step 2: put this year in the footer.
const yearSpan = document.querySelector("#year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    // Lab 15: Task 4: use the saved choice on arrival
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "Light";
    }


// Lab 15 Task 3: the label swaps
// Lab 15 Task 4: the Choice is remembered
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        }
        else {
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
    }
    else {
        greetingSpan.textContent = "Good evening";
    }
}