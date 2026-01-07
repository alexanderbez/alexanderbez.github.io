// Theme Toggle
function initTheme() {
  const theme = localStorage.getItem('theme') || 'dark';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Copy to Clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showCopyNotification();
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

function showCopyNotification() {
  const notification = document.getElementById('copy-notification');
  if (notification) {
    notification.classList.remove('opacity-0', 'pointer-events-none');
    notification.classList.add('opacity-100');

    setTimeout(() => {
      notification.classList.remove('opacity-100');
      notification.classList.add('opacity-0', 'pointer-events-none');
    }, 2000);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Copy email button
  const copyEmailBtn = document.getElementById('copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.dataset.email;
      if (email) {
        copyToClipboard(email);
      }
    });
  }
});
