document.addEventListener('DOMContentLoaded', function () {
    // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    // Select the modal and its components
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Variable to keep track of the current image index
    let currentIndex;

    // Function to open the modal with the clicked image
    function openModal(index) {
        const imgSrc = galleryItems[index].querySelector('img').src;
        const caption = galleryItems[index].querySelector('.caption').innerText;
        modalImage.src = imgSrc;
        modalCaption.innerText = caption;
        modal.style.display = 'block';
        currentIndex = index;
    }

    // Function to close the modal
    function closeModalFunc() {
        modal.style.display = 'none';
    }

    // Function to show the previous image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openModal(currentIndex);
    }

    // Function to show the next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openModal(currentIndex);
    }

    // Add click event listener to each gallery item to open the modal
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            openModal(index);
        });
    });

    // Add click event listener to the close button to close the modal
    closeModal.addEventListener('click', closeModalFunc);

    // Add click event listener to the window to close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    // Add click event listeners to the navigation buttons
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
});
