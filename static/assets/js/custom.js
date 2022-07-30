var Zoom_OFFSET = 80
var imgScaleFactor = 0
var translateY, translateX = 0

$('article .click-zoom img').click(function(e) {
  var image = $("article .click-zoom img").index(this);
    
  $('.click-zoom').not(':eq(' +image+ ')').removeAttr('style')
  $('article .click-zoom img').not(':eq(' +image+ ')').removeAttr('style')   

  if ($('.click-zoom').eq(image).css('transform').length == 4) {

    $(this).offsetWidth // repaint before animating
    
    var originalFullImageWidth  = $(this).prop('naturalWidth')
    var originalFullImageHeight = $(this).prop('naturalHeight')
   
    var scrollTop = $(window).scrollTop()
    
    var maxScaleFactor = originalFullImageWidth / $(this).width()
    
    var viewportHeight = ($(window).height() - Zoom_OFFSET)
    var viewportWidth  = ($(window).width() - Zoom_OFFSET)
    
    var imageAspectRatio    = originalFullImageWidth / originalFullImageHeight
    var viewportAspectRatio = viewportWidth / viewportHeight
    
    if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
        imgScaleFactor = maxScaleFactor

      } else if (imageAspectRatio < viewportAspectRatio) {
        imgScaleFactor = (viewportHeight / originalFullImageHeight) * maxScaleFactor

      } else {
        imgScaleFactor = (viewportWidth / originalFullImageWidth) * maxScaleFactor
    }
    
    
    var imageOffset = $(this).offset()
    var scrollTop   = $(window).scrollTop()
    
    var viewportY = scrollTop + ($(window).height() / 2)
    var viewportX = ($(window).width() / 2)
    
    var imageCenterY = imageOffset.top + ($(this).height() / 2)
    var imageCenterX = imageOffset.left + ($(this).width() / 2)
    
    translateY = viewportY - imageCenterY
    translateX = viewportX - imageCenterX

    var targetTransform = 'scale(' + imgScaleFactor + ')'
    var imageWrapTransform = 'translate(' + translateX + 'px, ' + translateY + 'px)'

    if ($.support.transition) {
      imageWrapTransform += ' translateZ(0)'
    }

    $('article .click-zoom img').eq(image)
        .css({
          '-webkit-transform': targetTransform,
              '-ms-transform': targetTransform,
                  'transform': targetTransform
        })
        
    $('.click-zoom').eq(image)
        .css({
          '-webkit-transform': imageWrapTransform,
              '-ms-transform': imageWrapTransform,
                  'transform': imageWrapTransform
        })
  } else {
    $('.click-zoom, article .click-zoom img, a.highslide-full-expand').not(image).removeAttr('style')
  }
});

$(window).scroll(function() {
    $('.click-zoom, article .click-zoom img, a.highslide-full-expand').removeAttr('style')
 });
 
$('.file-download li').click(function(e) {
    e.stopPropagation();
    var href = window.location.host + '/attachments/' + $(this).text().split(' (PDF)')[0] + '.pdf';
    var link = $('<a href="http://' + href + '" />');
    var file = $(this).text().split(' (PDF)')[0].replace('-', '').split(' ').join('').toLowerCase();
    var download = $(this).find('span');

    link.attr('target', '_blank');
    
    $.getJSON('https://'+ window.location.host + '/bythos.github.io/assets/json/downloads.json', function(data) {
        var downloaded = parseInt(data[file]) + 1;
        
        download.text(downloaded);
        
        $.ajax
        ({
          type: 'GET',
          dataType : 'json',
          async: false,
          url: 'http://'+ window.location.host + '/assets/json/downloads.html',
          data: { data: JSON.stringify(file) },
          success: function () { alert("Success!"); },
          failure: function() { alert("Error!"); }
        });
        
        window.open(link.attr('href'));
    })
});

