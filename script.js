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
    content.style.visibility = 'visible';
  } else {
    // show and hide content
    notificationText.textContent = window.innerWidth < window.innerHeight
      ? 'Please put your phone horizontally so you can see :3'
      : 'hey, put it back 3:<';
    orientationNotification.style.display = 'flex';
    content.style.visibility = 'hidden';
  }
}

// watch the resize
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

// page load
window.onload = checkOrientation;
