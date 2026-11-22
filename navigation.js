// Page navigation is presentation-only. Existing workout and cloud storage stay unchanged.
(function () {
  const allowed = ['workout', 'progress', 'history', 'settings'];
  const tabs = [...document.querySelectorAll('.nav-tab')];
  function showPage(page, save = true) {
    if (!allowed.includes(page)) page = 'workout';
    for (const key of allowed) {
      const panel = document.getElementById('view-' + key);
      panel.hidden = key !== page;
    }
    for (const tab of tabs) {
      const active = tab.dataset.view === page;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-current', active ? 'page' : 'false');
    }
    if (save) localStorage.setItem('healthTrackerActivePage', page);
    window.scrollTo({top: 0, behavior: 'instant'});
    if (page === 'progress') {
      // Chart.js cannot measure a canvas inside a hidden panel.
      requestAnimationFrame(() => {
        if (typeof renderDashboard === 'function') renderDashboard();
      });
    }
  }
  tabs.forEach(tab => tab.addEventListener('click', () => showPage(tab.dataset.view)));
  showPage(localStorage.getItem('healthTrackerActivePage') || 'workout', false);
  const cloudStatus = document.getElementById('cloud-status');
  const headerStatus = document.getElementById('header-sync-status');
  if (cloudStatus && headerStatus) {
    const update = () => {
      const message = cloudStatus.textContent || '';
      headerStatus.textContent = /Connected\./.test(message) ? 'Cloud connected' : /Not signed in/.test(message) ? 'Not signed in · Open Settings' : 'Sync status in Settings';
    };
    new MutationObserver(update).observe(cloudStatus, {childList:true,characterData:true,subtree:true});
    update();
  }
})();
