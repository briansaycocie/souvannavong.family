// Mobile navigation toggle with accessibility features
(function() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const navToggle = document.querySelector('.header__toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar__backdrop');

    if (!navToggle || !sidebar) {
      console.warn('Navigation elements not found');
      return;
    }

    function toggleSidebar() {
      const isOpen = sidebar.classList.contains('sidebar--active');

      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }

    function openSidebar() {
      sidebar.classList.add('sidebar--active');
      if (backdrop) {
        backdrop.classList.add('sidebar__backdrop--active');
      }
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'true');
      }
      // Focus first link on mobile for keyboard users
      if (window.innerWidth <= 1024) {
        const firstLink = sidebar.querySelector('a');
        if (firstLink) {
          setTimeout(function() {
            firstLink.focus();
          }, 100);
        }
      }
    }

    function closeSidebar() {
      sidebar.classList.remove('sidebar--active');
      if (backdrop) {
        backdrop.classList.remove('sidebar__backdrop--active');
      }
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }

    // Toggle sidebar when clicking the menu button
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebar();
    });

    // Close sidebar when clicking the backdrop
    if (backdrop) {
      backdrop.addEventListener('click', function(e) {
        e.preventDefault();
        closeSidebar();
      });
    }

    // Close sidebar when clicking a link on mobile
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
          closeSidebar();
        }
      });
    });

    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sidebar.classList.contains('sidebar--active')) {
        closeSidebar();
      }
    });

    // Handle focus trap in sidebar on mobile (dynamically check window size)
    sidebar.addEventListener('keydown', function(e) {
      if (!sidebar.classList.contains('sidebar--active') || window.innerWidth > 1024) return;

      if (e.key === 'Tab') {
        const focusableElements = sidebar.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled])'
        );

        if (focusableElements.length > 0) {
          const firstFocusable = focusableElements[0];
          const lastFocusable = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        }
      }
    });

    // Mark current page in navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar__nav-list a');
    navLinks.forEach(function(link) {
      try {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
          link.setAttribute('aria-current', 'page');
        }
      } catch(e) {
        // Skip invalid URLs
      }
    });
  }

})();
