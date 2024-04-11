document.querySelectorAll('input[type=color]').forEach(function(picker) {
    var targetLabel = document.querySelector('label[for="' + picker.id + '"]');
    var colorArea = document.createElement('span'); // Corrected

    colorArea.innerHTML = picker.value;
    targetLabel.appendChild(colorArea);

    // Now AddEventListener
    picker.addEventListener('input', function() { // Changed 'change' to 'input' for real-time updates
        colorArea.innerHTML = picker.value;
        // console.log(picker.value);
    });

    // Add click event listener to copy color value to clipboard
    colorArea.addEventListener('click', function() {
        // Create a temporary textarea element
        var tempTextarea = document.createElement('textarea');
        tempTextarea.value = picker.value;
        document.body.appendChild(tempTextarea);
        
        // Select the value and copy it to clipboard
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Create and show notification
        var notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = 'Color value copied to clipboard: ' + picker.value;
        document.body.appendChild(notification);
        
        setTimeout(function() {
            notification.classList.add('show');
            setTimeout(function() {
                notification.classList.remove('show');
                setTimeout(function() {
                    document.body.removeChild(notification);
                }, 300);
            }, 2000);
        }, 100);
    });
});
