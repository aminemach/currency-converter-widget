(function() {
    // Create the sticky icon
    const stickyIcon = document.createElement('div');
    stickyIcon.id = 'sticky-icon';
    stickyIcon.style.position = 'fixed';
    stickyIcon.style.bottom = '50%';
    stickyIcon.style.left = '0';
    stickyIcon.style.width = '50px';
    stickyIcon.style.height = '50px';
    stickyIcon.style.backgroundColor = '#FFFFFF'; 
    stickyIcon.style.color = 'white';
    stickyIcon.style.display = 'flex';
    stickyIcon.style.alignItems = 'center';
    stickyIcon.style.justifyContent = 'center';
    stickyIcon.style.cursor = 'pointer';
    stickyIcon.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    stickyIcon.style.zIndex = '1000';
    stickyIcon.innerHTML = '<span style="font-size: 24px;">💱</span>';
    stickyIcon.style.borderTopLeftRadius = '0'; 
    stickyIcon.style.borderBottomLeftRadius = '0'; 
    stickyIcon.style.borderTopRightRadius = '50%'; 
    stickyIcon.style.borderBottomRightRadius = '50%'; 

    document.body.appendChild(stickyIcon);

    stickyIcon.addEventListener('click', function() {
        const currentUrl = window.location.href;
        const urlParts = currentUrl.split('/');
        urlParts[urlParts.length - 1] = 'contact.html';
        const newUrl = urlParts.join('/');
        window.location.href = newUrl;
    });
})();
