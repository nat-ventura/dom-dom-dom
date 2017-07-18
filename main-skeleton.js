// You can use these selectors with document.querySelectorAll and document.querySelector
// to get references to the thumbnails, the main image, and the caption.

// This is the selector for the main image.
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';

// This is the selector for the caption.
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';

// This is the selector for a collection of the thumbnails
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  // Implement a function that accepts the URL
  // of an image and some text.
  // It should update the `src` attribute of the main image
  // and it should change the `textContent` of the
  // caption.
}

function imageFromThumb(thumbnail) {
  // This function should accept a reference
  // to one of the thumbnail anchor tags.
  // It should return the value of its
  // `data-image-url` attribute
}

function titleFromThumb(thumbnail) {
  // This function should accept a reference
  // to one of the thumbnail anchor tags.
  // It should return the value of its
  // `data-image-title` attribute
}

function setDetailsFromThumb(thumbnail) {
  // This function should accept a reference
  // to one of the thumbnail anchor tags.
  // It should get the image and title info
  // from its data attributes.
  // It should then update the main image
  // and the caption text using that information.
}

function addThumbClickHandler(thumb) {
  // Given a reference to a single thumbnail
  // anchor tag, add an event listener that
  // calls the `setDetailsFromThumb` function.
}

function getThumbnailsArray() {
  // Get a reference to all thumbnail anchor tags.
  // Convert this to an actual Array and return it.
}

function initializeEvents() {
  // Start everything off by
  // getting the thumbnails as an array,
  // iterate through them, and attach
  // the click handler.
}

initializeEvents();
