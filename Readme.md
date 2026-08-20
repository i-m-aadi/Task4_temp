# 🌡️ Temperature Converter

A clean, responsive temperature conversion web application built with **HTML5, CSS3, and vanilla JavaScript**.

The application converts temperatures between **Celsius, Fahrenheit, and Kelvin** in real time while providing validation for physically invalid values.

## ✨ Features

* Convert between Celsius, Fahrenheit, and Kelvin
* Live conversion while typing
* Select the input temperature unit
* Absolute-zero validation
* Clear error messages for invalid input
* Reset button
* Responsive design for desktop, tablet, and mobile
* Accessible form labels and live status messages
* No external libraries or frameworks required

## 🛠️ Technologies Used

* **HTML5** — semantic page structure
* **CSS3** — responsive layout and modern UI
* **JavaScript (ES6+)** — conversion logic, validation, and DOM manipulation

## 📁 Project Structure

```text
temperature-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 📐 Conversion Formulas

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Fahrenheit to Celsius

```text
°C = (°F − 32) × 5/9
```

### Kelvin to Celsius

```text
°C = K − 273.15
```

## 🚫 Validation

The application prevents temperatures below absolute zero:

| Unit       | Minimum Valid Value |
| ---------- | ------------------- |
| Celsius    | -273.15 °C          |
| Fahrenheit | -459.67 °F          |
| Kelvin     | 0 K                 |

## 🚀 How to Run

No installation or build process is required.

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in any modern web browser.

For development, you can also use the **Live Server** extension in Visual Studio Code.

## 🎯 Learning Objectives

This project demonstrates:

* HTML forms and semantic elements
* CSS responsive design
* JavaScript functions
* Mathematical calculations
* Event listeners
* DOM manipulation
* Input validation
* Real-time UI updates

## 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile phones

## 🔮 Future Improvements

* Dark mode
* Conversion history
* Copy-to-clipboard functionality
* Unit swap button
* Conversion animations
* Keyboard shortcuts
* PWA support

## 📄 License

This project is open for personal and educational use.

---

### Author

**Aditya Pandey**

Built as a frontend practice project using HTML, CSS, and JavaScript.
