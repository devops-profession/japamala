document.querySelectorAll('.openModal01').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        openModal('openModal01');
    });
});
document.querySelectorAll('.openModal02').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        openModal('openModal02');
    });
});
document.querySelectorAll('.openModal03').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        openModal('openModal03');
    });
});

        // Modal functions
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Close modal when clicking outside
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.style.display = 'none';
                }
            });
        });

        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay[style*="flex"]').forEach(m => {
                    m.style.display = 'none';
                });
            }
        });