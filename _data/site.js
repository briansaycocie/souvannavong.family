module.exports = {
  name: "The Souvannavong Family of Laos",
  description: "Historical documentation of the Souvannavong family: Royal advisors, diplomats, and custodians of Lao heritage from 1898 to present. Preserving four generations from royal governance through exile and resettlement.",
  url: "https://souvannavong.family",
  author: "Souvannavong Family",
  email: "hello@souvannavong.family",
  language: "en",
  locale: "en_US",

  // SEO metadata
  keywords: [
    "Souvannavong family",
    "Laos history",
    "Kingdom of Laos",
    "Lao royal family",
    "Southeast Asian history",
    "Lao diaspora",
    "family history",
    "historical preservation",
    "Outhong Souvannavong",
    "Lao diplomacy"
  ],

  // Social media defaults
  social: {
    twitter: "@souvannavongfam", // Update when created
    image: "/assets/images/og-default.jpg" // Will need to create this
  },

  // Organization structured data
  organization: {
    name: "Souvannavong Family Archive",
    description: "Preserving the history of the Souvannavong family of Laos",
    foundingDate: "1898"
  },

  // Cache busting version (timestamp when site.js is loaded)
  get version() {
    return Date.now();
  }
};
