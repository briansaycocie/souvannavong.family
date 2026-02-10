const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

class NavigationJSTemplate {
  data() {
    return {
      permalink: '/js/navigation.js',
      eleventyExcludeFromCollections: true
    };
  }

  async render() {
    const jsPath = path.join(__dirname, '..', 'js', 'navigation.js');
    const jsContent = fs.readFileSync(jsPath, 'utf8');

    try {
      const minified = await minify(jsContent, {
        mangle: true,
        compress: true
      });
      return minified.code;
    } catch (error) {
      console.error('JS minification error for navigation.js:', error);
      return jsContent;
    }
  }
}

module.exports = NavigationJSTemplate;
