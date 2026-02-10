const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

class EmailJSTemplate {
  data() {
    return {
      permalink: '/js/email.js',
      eleventyExcludeFromCollections: true
    };
  }

  async render() {
    const jsPath = path.join(__dirname, '..', 'js', 'email.js');
    const jsContent = fs.readFileSync(jsPath, 'utf8');

    try {
      const minified = await minify(jsContent, {
        mangle: true,
        compress: true
      });
      return minified.code;
    } catch (error) {
      console.error('JS minification error for email.js:', error);
      return jsContent;
    }
  }
}

module.exports = EmailJSTemplate;
