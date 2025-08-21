# Viper Pit

A real-time animated snake pit built with HTML5 Canvas and JavaScript.
Each snake moves with chaotic patterns and has a custom monster head
(`snakehead.png`) at the front.

Check out the [Live Demo](https://viepertech.github.io/viper-pit/)

## Features

- Animated multi-snake movement  
- Custom image-based snake heads  
- Randomized speed, direction, color, and length  
- Responsive full-screen canvas  
- No libraries or frameworks  

## How to Run Locally

Clone the repository and open the index.html in your browser:

```bash
git clone https://github.com/Viepertech/viper-pit.git
cd viper-pit
```

Then just open `index.html` in your favorite browser.
Make sure `snakehead.png` is in the same directory as your `script.js`.
Or add your own custom `snakehead.png` file

## File Structure

```text
viper-pit/
├── index.html        # HTML structure and canvas element
├── script.js         # Core animation logic for snakes
├── style.css         # Fullscreen canvas styling
├── snakehead.png     # Image for snake heads
└── README.md         # You're reading this!
```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Github Actions

- ![SBOM](https://github.com/Viepertech/viper-pit/actions/workflows/sbom.yml/badge.svg)
- ![Markdown Lint](https://github.com/Viepertech/viper-pit/actions/workflows/lint-markdown.yml/badge.svg)
- ![JS Lint](https://github.com/Viepertech/viper-pit/actions/workflows/lint-js.yml/badge.svg)
- ![HTML CSS Lint](https://github.com/Viepertech/viper-pit/actions/workflows/lint-html-css.yml/badge.svg)
- ![Link Checker](https://github.com/Viepertech/viper-pit/actions/workflows/check-links.yml/badge.svg)
- ![Dependency Audit](https://github.com/Viepertech/viper-pit/actions/workflows/dependency-audit.yml/badge.svg)
- ![Vulnerability Scan](https://github.com/Viepertech/viper-pit/actions/workflows/vulnerability-scan.yml/badge.svg)

## DevSecOps Highlights
- CI/CD with GitHub Actions (tests and scans run on every push)  
- Automated SBOM generation for supply chain visibility  
- Dependency & vulnerability scanning for secure builds  
- Linting and code quality checks across multiple languages  
