document.querySelectorAll('input[type=color]').forEach(function(picker) {
    var targetLabel = document.querySelector('label[for="' + picker.id + '"]');
    var colorArea = document.createElement('span');
    colorArea.classList.add('color-value'); // Add class for styling for the color value.

    colorArea.innerHTML = picker.value;
    targetLabel.appendChild(colorArea);

    // Now AddEventListener
    picker.addEventListener('input', function() {
        colorArea.innerHTML = picker.value;
        console.log(picker.value);
    });

    // Add click event listener to copy color value to clipboard
    colorArea.addEventListener('click', function(event) {
        // Prevent the default action of the click event
        event.preventDefault();
        
        // Copy color value to clipboard
        navigator.clipboard.writeText(picker.value).then(function() {
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
        }).catch(function(err) {
            console.error('Failed to copy color value: ', err);
        });
    });
});
