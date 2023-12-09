document.addEventListener('DOMContentLoaded', function () {
    var ratingForm = document.getElementById('ratingForm');
    var stars = document.getElementById('stars');

    // Check if JavaScript is enabled
    if (ratingForm && stars) {
        ratingForm.style.display = 'none'; // Hide the form
        stars.style.display = 'flex'; // Show the stars
    }
});