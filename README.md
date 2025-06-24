# Viper Pit

A real-time animated snake pit built with HTML5 Canvas and JavaScript. Each snake moves with chaotic patterns and has a custom monster head (`snakehead.png`) at the front.

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
Make sure `snakehead.png` is in the same directory as your `script.js`. Or add your own custom `snakehead.png` file

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

MIT License. Go wild, remix it, and make your own pit of horrors or beauty.

## Github Actions
- [![SBOM Status](https://img.shields.io/badge/SBOM-Generated-brightgreen)](https://github.com/Viepertech/viper-pit/actions)
- ![SBOM](https://github.com/Viepertech/viper-pit/actions/workflows/sbom.yml/badge.svg)
- ![Markdown Lint](https://github.com/Viepertech/viper-pit/actions/workflows/lint-markdown.yml/badge.svg)
- ![JS Lint](https://github.com/Viepertech/viper-pit/actions/workflows/lint-js.yml/badge.svg)
- ![HTML CSS Lint](https://github.com/Viepertech/viper-pit/actions/workflows/lint-html-css.yml/badge.svg)
   
## Fix Summary

| Error                             | Fix Applied                                                                 |
|----------------------------------|------------------------------------------------------------------------------|
| `MD013/line-length`              | Broke long lines or used two-space line breaks at 80 columns                |
| `MD022/blanks-around-headings`   | Ensured blank lines around all headings                                     |
| `MD040/fenced-code-language`     | Added `bash` and `text` to fenced code blocks                               |
| `MD032/blanks-around-lists`      | Added a blank line before the GitHub Actions badge list                     |
| `MD009/no-trailing-spaces`       | Removed extra trailing spaces                                               |
| `MD012/no-multiple-blanks`       | Removed consecutive blank lines   
