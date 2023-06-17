(function ($) {
  'use strict';
  $(function () {
    $('#show').avgrund({
      height: 500,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'x',
      onBlurContainer: '.container-scroller',
      template: '<p>So implement your design and place content here! If you want to close modal, please hit "Esc", click somewhere on the screen or use special button.</p>' +
        '<div>' +
        '<a href="http://twitter.com/voronianski" target="_blank" className="twitter btn btn-twitter btn-block">Twitter</a>' +
        '<a href="http://dribbble.com/voronianski" target="_blank" className="dribble btn btn-dribbble btn-block">Dribbble</a>' +
        '</div>' +
        '<div className="text-center mt-4">' +
        '<a href="#" target="_blank" className="btn btn-success me-2">Great!</a>' +
        '<a href="#" target="_blank" className="btn btn-light">Cancel</a>' +
        '</div>'
    });
  })
})(jQuery);