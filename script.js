document.addEventListener('DOMContentLoaded', () => {
    // Make notifications badge visible on load (already styled in CSS, but good to have JS control)
    const notificationBadge = document.querySelector('.notification-badge');
    if (notificationBadge) {
        notificationBadge.style.display = 'inline-block'; // Ensure it's visible
    }

    // Add a simple active state for navigation items (visual only)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (e.g., jumping to top)

            // Remove 'active' from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add 'active' to the clicked item
            item.classList.add('active');

            // Example of a simple alert for mock interaction
            const spanText = item.querySelector('span').textContent;
            alert(`You clicked on: ${spanText}! (No functionality implemented)`);

            // If it was the notifications, you might clear the badge
            if (item.id === 'notifications-link' && notificationBadge) {
                notificationBadge.textContent = '0'; // Or hide it
                notificationBadge.style.backgroundColor = '#CCC'; // Grey it out
                notificationBadge.style.borderColor = '#999';
            }
        });
    });

    // Optional: Simulate a loading progress bar for the IE status bar
    const ieProgressBar = document.querySelector('.ie-progress-bar');
    if (ieProgressBar) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            ieProgressBar.style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(interval);
                ieProgressBar.style.width = '0%'; // Reset or clear after "load"
            }
        }, 100); // Adjust speed
    }

    // Example of simple console logging for buttons
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        if (!button.classList.contains('ie-control-btn')) { // Exclude IE window controls
            button.addEventListener('click', () => {
                console.log(`Button clicked: ${button.textContent.trim()}`);
                // In a real app, this would trigger specific actions
            });
        }
    });

    // Simulate "Typing" in post box
    const newPostTextarea = document.querySelector('.new-post-box textarea');
    const postButton = document.querySelector('.new-post-box .post-btn');

    newPostTextarea.addEventListener('input', () => {
        if (newPostTextarea.value.trim().length > 0) {
            postButton.removeAttribute('disabled');
            postButton.style.opacity = '1';
            postButton.style.cursor = 'pointer';
        } else {
            postButton.setAttribute('disabled', 'disabled');
            postButton.style.opacity = '0.6';
            postButton.style.cursor = 'not-allowed';
        }
    });

    // Initial state for post button
    postButton.setAttribute('disabled', 'disabled');
    postButton.style.opacity = '0.6';
    postButton.style.cursor = 'not-allowed';
});
