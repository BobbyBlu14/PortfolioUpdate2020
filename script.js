$(function () {

    var $container = $('#container2').masonry({
        itemSelector: '.item',
        columnWidth: 200
    });

    // reveal initial images
    $container2.masonryImagesReveal($('#images').find('.item'));
});

$.fn.masonryImagesReveal = function ($items) {
    var msnry = this.data('masonry');
    var itemSelector = msnry.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append($items);
    $items.imagesLoaded().progress(function (imgLoad, image) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $(image.img).parents(itemSelector);
        // un-hide item
        $item.show();
        // masonry does its thing
        msnry.appended($item);
    });

    return this;
};