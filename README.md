# 🔐 SecurePass Toolkit

A web-based toolkit for checking password strength and generating SHA-256 hashes. Built using HTML, CSS, and JavaScript.

## Features

- Check password strength in real time
- Show or hide password
- Generate SHA-256 hashes
- Copy generated hash to clipboard
- Responsive and user-friendly interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Web Crypto API

## How to Run

1. Clone this repository.

```bash
git clone https://github.com/Shejali/SecurePass-Toolkit.git
```

2. Open the project folder.

3. Open `index.html` in your browser or use the **Live Server** extension in VS Code.

## Project Structure

```
SecurePass-Toolkit/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

### Password Strength Checker

The password is evaluated based on:
- Minimum length (8 characters)
- Uppercase letters
- Lowercase letters
- Numbers
- Special characters

The application displays whether the password is **Weak**, **Medium**, or **Strong**.

### SHA-256 Hash Generator

The hash generator uses the browser's **Web Crypto API** to convert user input into a SHA-256 hash. The generated hash can be copied to the clipboard with a single click.

## Future Improvements

- Password strength meter
- Multiple hashing algorithms (MD5, SHA-1, SHA-512)
- Password generator
- Dark/Light mode
- Password entropy calculation
- Estimated password crack time
- Better animations and UI enhancements

## Screenshot

<img width="1873" height="1299" alt="image" src="https://github.com/user-attachments/assets/d7845c1a-afd6-40a3-82e3-045a660943c1" />


## Author

**Shejali**
