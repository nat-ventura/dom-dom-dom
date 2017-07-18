var thumbnailNodeList = document.querySelectorAll('.thumbnail-item');

// converts thumbnail nodeList into array
function toArray(thumbnailNodeList) {
    var arr = thumbnailNodeList;
    if (thumbnailNodeList.forEach === undefined) {
        arr = [].slice.call(thumbnailNodeList);
    }
    return arr;
}

console.log(toArray(thumbnailNodeList));