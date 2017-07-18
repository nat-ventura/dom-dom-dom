// identifies the constants
// identifies the types of data as target, title, or trigger
var MAIN_IMAGE_SELECTOR = '[data-image-role="target"]';
var TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
    var detailImage = document.querySelector(MAIN_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    setDetail(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function getThumbnailsArray() {
    var thumbnails = document.querySelectorAll(THUMBNAIL_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();