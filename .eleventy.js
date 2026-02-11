module.exports = function(eleventyConfig) {
  // Copy assets folder to _site
  eleventyConfig.addPassthroughCopy("assets");

  // CSS and JS will be minified via template files, not copied directly

  // Copy SEO files
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("humans.txt");
  eleventyConfig.addPassthroughCopy("llms.txt");

  // Copy IndexNow key file
  eleventyConfig.addPassthroughCopy("c132507a884349febe565b5419b1e3b8.txt");

  // Watch CSS and JS files for changes
  eleventyConfig.addWatchTarget("assets/css");
  eleventyConfig.addWatchTarget("assets/js");

  // Add git last modified date filter
  eleventyConfig.addFilter("gitLastModified", function(filepath) {
    const { execSync } = require('child_process');
    const fs = require('fs');
    const path = require('path');

    try {
      // Get the last commit date for this file
      const lastModified = execSync(`git log -1 --format=%cd --date=format:'%B %d, %Y' -- "${filepath}"`)
        .toString()
        .trim()
        .replace(/'/g, '');

      // If git history exists, use it
      if (lastModified) {
        return lastModified;
      }

      // Otherwise, fall back to file modification time
      const stats = fs.statSync(filepath);
      const mtime = stats.mtime;
      return mtime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      // If everything fails, return current date
      const now = new Date();
      return now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  });

  // Extract first h1 from content
  eleventyConfig.addFilter("extractH1", function(content) {
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);
    return h1Match ? h1Match[1] : '';
  });

  // Remove first h1 from content
  eleventyConfig.addFilter("removeH1", function(content) {
    return content.replace(/<h1[^>]*>.*?<\/h1>/, '');
  });

  // SEO: Absolute URL helper
  eleventyConfig.addFilter("absoluteUrl", function(url, base) {
    const siteUrl = base || "https://souvannavong.family";
    try {
      return new URL(url, siteUrl).toString();
    } catch(e) {
      console.error("Invalid URL:", url);
      return url;
    }
  });

  // SEO: Get current year for copyright
  eleventyConfig.addFilter("currentYear", function() {
    return new Date().getFullYear();
  });

  // SEO: Format date for sitemap (ISO 8601)
  eleventyConfig.addFilter("isoDate", function(dateString) {
    if (!dateString) return new Date().toISOString();
    const date = new Date(dateString);
    return date.toISOString();
  });

  // SEO: Create a collection of all pages for sitemap
  eleventyConfig.addCollection("allPages", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      // Exclude non-page items and specific files
      return item.url &&
             !item.url.includes('/404') &&
             item.inputPath.endsWith('.md');
    });
  });

  // Configure markdown
  eleventyConfig.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  }));

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
