/**
 * Enhanced Analytics for Souvannavong Family History
 *
 * Custom event tracking for Plausible Analytics
 * - Navigation engagement
 * - Scroll depth
 * - Reading time
 * - Outbound links
 * - Footer interactions
 *
 * Privacy-first: No personal data collected
 */

(function() {
  'use strict';

  // Guard: Only run if Plausible is loaded
  if (typeof plausible === 'undefined') {
    console.warn('Plausible not loaded, analytics enhanced features disabled');
    return;
  }

  // ===================================
  // 1. NAVIGATION TRACKING
  // ===================================
  function trackNavigation() {
    // Track sidebar section clicks
    var sidebarLinks = document.querySelectorAll('.sidebar__nav-list a');
    sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        plausible('Section Click', {
          props: { section: this.textContent.trim() }
        });
      });
    });

    // Track footer link clicks
    var footerLinks = document.querySelectorAll('.footer__link');
    footerLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        plausible('Footer Link', {
          props: { page: this.textContent.trim() }
        });
      });
    });
  }

  // ===================================
  // 2. OUTBOUND LINK TRACKING
  // ===================================
  function trackOutboundLinks() {
    var allLinks = document.querySelectorAll('a[href^="http"]');
    allLinks.forEach(function(link) {
      // Only track external links
      if (!link.href.includes('souvannavong.family')) {
        link.addEventListener('click', function() {
          plausible('Outbound Link', {
            props: {
              url: this.href,
              from: window.location.pathname
            }
          });
        });
      }
    });
  }

  // ===================================
  // 3. SCROLL DEPTH TRACKING
  // ===================================
  function trackScrollDepth() {
    var maxScroll = 0;
    var milestones = { 25: false, 50: false, 75: false, 100: false };

    function calculateScrollDepth() {
      var scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      maxScroll = Math.max(maxScroll, scrollPercent);

      // Track milestones once each
      [25, 50, 75, 100].forEach(function(milestone) {
        if (maxScroll >= milestone && !milestones[milestone]) {
          milestones[milestone] = true;
          plausible('Scroll Depth', {
            props: {
              depth: milestone + '%',
              page: window.location.pathname
            }
          });
        }
      });
    }

    // Throttle scroll events for performance
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          calculateScrollDepth();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===================================
  // 4. READING TIME TRACKING
  // ===================================
  function trackReadingTime() {
    var startTime = Date.now();
    var sent = false;

    function sendReadingTime() {
      if (sent) return;
      sent = true;

      var timeSpent = Math.round((Date.now() - startTime) / 1000); // seconds

      // Only track meaningful engagement (>10 seconds)
      if (timeSpent > 10) {
        var timeCategory = timeSpent < 30 ? 'Quick' :
                          timeSpent < 120 ? 'Medium' :
                          timeSpent < 300 ? 'Long' : 'Deep';

        plausible('Reading Time', {
          props: {
            duration: timeSpent,
            category: timeCategory,
            page: window.location.pathname
          }
        });
      }
    }

    // Send on page leave
    window.addEventListener('beforeunload', sendReadingTime);

    // Send on visibility change (tab switch, minimize)
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        sendReadingTime();
      }
    });
  }

  // ===================================
  // 5. FILE DOWNLOAD TRACKING
  // ===================================
  function trackFileDownloads() {
    var downloadLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".jpg"], a[href$=".png"], a[download]');
    downloadLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var filename = this.href.split('/').pop().split('?')[0]; // Remove query params
        var filetype = filename.split('.').pop();

        plausible('File Download', {
          props: {
            filename: filename,
            type: filetype,
            from: window.location.pathname
          }
        });
      });
    });
  }

  // ===================================
  // 6. EMAIL REVEAL TRACKING
  // ===================================
  function trackEmailReveals() {
    // Track when obfuscated emails are revealed
    var emailLinks = document.querySelectorAll('a[href^="mailto"]');
    emailLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        plausible('Email Reveal', {
          props: { from: window.location.pathname }
        });
      });
    });
  }

  // ===================================
  // 7. PAGE TYPE CLASSIFICATION
  // ===================================
  function trackPageType() {
    var pathname = window.location.pathname;
    var pageType = pathname.includes('/sections/') ? 'Historical' :
                   pathname.includes('/appendices/') ? 'Reference' :
                   pathname === '/' ? 'Homepage' : 'Informational';

    // Send custom property with initial pageview
    // Note: This requires Plausible to already have sent the pageview
    // We're adding supplementary data here
    plausible('Page Type View', {
      props: {
        type: pageType,
        path: pathname
      }
    });
  }

  // ===================================
  // INITIALIZATION
  // ===================================
  function init() {
    trackNavigation();
    trackOutboundLinks();
    trackScrollDepth();
    trackReadingTime();
    trackFileDownloads();
    trackEmailReveals();
    trackPageType();
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
