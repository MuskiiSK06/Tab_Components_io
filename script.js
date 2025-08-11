// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".content-section");

// Loop through each tab button
tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // Remove 'is-active' from all buttons & content
        tabButtons.forEach(b => b.classList.remove("is-active"));
        tabContents.forEach(c => c.classList.remove("is-active"));

        // Add 'is-active' to clicked button & matching content
        btn.classList.add("is-active");
        tabContents[index].classList.add("is-active");
    });
});