const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');

class CSSTemplate {
  data() {
    return {
      permalink: '/css/style.css',
      eleventyExcludeFromCollections: true
    };
  }

  render() {
    const cssPath = path.join(__dirname, '..', 'css', 'style.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    const minified = new CleanCSS({
      level: 2 // Advanced optimizations
    }).minify(cssContent);

    if (minified.errors.length > 0) {
      console.error('CSS minification errors:', minified.errors);
      return cssContent;
    }

    return minified.styles;
  }
}

module.exports = CSSTemplate;
