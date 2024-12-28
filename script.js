// notif and content
const orientationNotification = document.getElementById('orientationNotification');
const notificationText = document.getElementById('notificationText');
const content = document.getElementById('content');

// check if the device is in landscape mode
function checkOrientation() {
    const isLandscape = window.innerWidth > window.innerHeight;
  
    if (isLandscape) {
      // hide notif w fade
      setTimeout(() => {
        orientationNotification.classList.remove('show-notification');
      }, 500); // fade first then hide
      content.style.visibility = 'visible';
    } else {
      // show notif dim rest
      notificationText.textContent = 'Please put your phone horizontally so you can see :3';
      orientationNotification.classList.add('show-notification');
      orientationNotification.style.opacity = '1'; // let there be light
      content.style.visibility = 'hidden';
    }
  }

// watch the resize
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

// page load
window.onload = checkOrientation;
