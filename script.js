// notif and content
const orientationNotification = document.getElementById('orientationNotification');
const notificationText = document.getElementById('notificationText');
const content = document.getElementById('content');

// check if the device is in landscape mode
function checkOrientation() {
    const isLandscape = window.innerWidth > window.innerHeight;
  
    if (isLandscape) {
      // hide notif and show
      orientationNotification.style.display = 'none';
      orientationNotification.style.backgroundColor = 'transparent'; // no background
      content.style.visibility = 'visible';
    } else {
      // show notif and hide web
      notificationText.textContent = 'Please put your phone horizontally so you can see :3';
      orientationNotification.style.display = 'flex';
      orientationNotification.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // dim effect
      content.style.visibility = 'hidden';
    }
  }

// watch the resize
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

// page load
window.onload = checkOrientation;
