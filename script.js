// notif and content
const orientationNotification = document.getElementById('orientationNotification');
const notificationText = document.getElementById('notificationText');
const content = document.getElementById('content');

// check if the device is in landscape mode
function checkOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;

  if (isLandscape) {
    // hide notif and show
    orientationNotification.classList.add('hidden');
    content.style.visibility = 'visible';
  } else {
    // show and hide content
    notificationText.textContent = 'Please put your phone horizontally so you can see :3';
    orientationNotification.classList.remove('hidden');
    content.style.visibility = 'hidden';
  }
}

// watch the resize
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

// page load
window.onload = checkOrientation;
