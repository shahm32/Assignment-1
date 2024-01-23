document.addEventListener("DOMContentLoaded", function () {
    var galleryImages = document.querySelectorAll('.image-gallery img');

    galleryImages.forEach(function (image) {
        image.addEventListener('click', function () {
            enlargeImage(image);
        });
    });

    function enlargeImage(image) {
        // Open a new window or modal to display the enlarged image
        alert("Enlarged image: " + image.alt);
    }
});