var THUMBNAIL_SELECTOR_STRING = "[data-image-role='trigger']";
var TARGET_SELECTOR_STRING = "[data-image-role='target']";
var TITLE_SELECTOR_STRING = "[data-image-role='title']";

function setDetails(imageUrl, titleText) {
    var detailImage = document.querySelector(TARGET_SELECTOR_STRING);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(TITLE_SELECTOR_STRING);
    detailTitle.textContent = titleText;
}

function thumbImage(thumbnail) {
    return thumbnail.getAttribute('data-image-url');
}

function thumbTitle(thumbnail) {
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    setDetails(thumbImage(thumbnail), thumbTitle(thumbnail));
}

function thumbClicker(thumb) {
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function makeThumbArray() {
    var thumbnails = document.querySelectorAll(THUMBNAIL_SELECTOR_STRING);
    var thumbArray = [].slice.call(thumbnails);
    // it's okay to make this an short function because
    // it has such a specific use that you only use once
    return thumbArray;
}

function main() {
    var thumbnails = makeThumbArray();
    thumbnails.forEach(thumbClicker);
}

main();

// // converts thumbnail nodeList into array
// function toArray(nodelist) {
//     var arr = nodelist;
//     if (nodelist.forEach === undefined) {
//         arr = [].slice.call(nodelist);
//     }
//     return arr;
// }

// var thumbnailList = toArray(THUMBNAIL_LINK_SELECTOR);

// var target = document.querySelector(TARGET_SELECTOR_STRING);
// thumbnailList.forEach(function (thumbNav) {
//     thumbNav.addEventListener('click', function (event) {
//         event.preventDefault();
//         target.setAttribute('src', thumbNav.getAttribute('href'));
//     });
// });

// var trigger = document.querySelector(TRIGGER_SELECTOR_STRING);



// console.log(thumbnailList);