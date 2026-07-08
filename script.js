// Password checker
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const strengthText = document.getElementById("strength");

// Hash generator
const hashInput = document.getElementById("hashInput");
const generateHashBtn = document.getElementById("generateHash");
const hashOutput = document.getElementById("hashOutput");
const copyHashBtn = document.getElementById("copyHash");


// Show or hide password
togglePasswordBtn.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordBtn.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        togglePasswordBtn.textContent = "Show Password";
    }

});


// Check password strength
passwordInput.addEventListener("input", () => {

    const password = passwordInput.value;
    let score = 0;

    // Check each requirement
    if (password.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    // Display the strength
    if (password.length === 0) {

        strengthText.textContent = "Strength:";
        strengthText.style.color = "white";

    } else if (score <= 2) {

        strengthText.textContent = "Strength: Weak";
        strengthText.style.color = "red";

    } else if (score <= 4) {

        strengthText.textContent = "Strength: Medium";
        strengthText.style.color = "orange";

    } else {

        strengthText.textContent = "Strength: Strong";
        strengthText.style.color = "lime";

    }

});


// Generate SHA-256 hash
async function generateSHA256(text) {

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

}


// Generate hash when button is clicked
generateHashBtn.addEventListener("click", async () => {

    const text = hashInput.value;

    if (text === "") {
        alert("Please enter some text.");
        return;
    }

    const hash = await generateSHA256(text);
    hashOutput.value = hash;

});


// Copy hash to clipboard
copyHashBtn.addEventListener("click", () => {

    if (hashOutput.value === "") {
        alert("Generate a hash first.");
        return;
    }

    navigator.clipboard.writeText(hashOutput.value);
    alert("Hash copied!");

});