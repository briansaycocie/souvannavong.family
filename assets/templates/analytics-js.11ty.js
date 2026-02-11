const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

class AnalyticsJSTemplate {
  data() {
    return {
      permalink: '/js/analytics-enhanced.js',
      eleventyExcludeFromCollections: true
    };
  }

  async render() {
    const jsPath = path.join(__dirname, '..', 'js', 'analytics-enhanced.js');
    const jsContent = fs.readFileSync(jsPath, 'utf8');

    try {
      const minified = await minify(jsContent, {
        mangle: true,
        compress: true
      });
      return minified.code;
    } catch (error) {
      console.error('JS minification error for analytics-enhanced.js:', error);
      return jsContent;
    }
  }
}

module.exports = AnalyticsJSTemplate;
