(function() {
    // Create the sticky icon
    const stickyIcon = document.createElement('div');
    stickyIcon.id = 'sticky-icon';
    stickyIcon.style.position = 'fixed';
    stickyIcon.style.bottom = '20px';
    stickyIcon.style.right = '20px';
    stickyIcon.style.width = '50px';
    stickyIcon.style.height = '50px';
    stickyIcon.style.backgroundColor = '#007bff'; // You can change this color
    stickyIcon.style.color = 'white';
    stickyIcon.style.borderRadius = '50%';
    stickyIcon.style.display = 'flex';
    stickyIcon.style.alignItems = 'center';
    stickyIcon.style.justifyContent = 'center';
    stickyIcon.style.cursor = 'pointer';
    stickyIcon.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    stickyIcon.style.zIndex = '1000';
    stickyIcon.innerHTML = '<span style="font-size: 24px;">💱</span>'; // Currency exchange icon

    // Append the sticky icon to the body
    document.body.appendChild(stickyIcon);

    // Event listener for click
    stickyIcon.addEventListener('click', function() {
        // Navigate to the currency converter page
        window.location.href = '/path/to/your/converter'; // Change this to your converter page URL
    });
})();
