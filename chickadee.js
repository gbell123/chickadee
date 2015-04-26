$(function(){

  /*$('.gridster ul').gridster({
    widget_margins: [3, 3],
    widget_base_dimensions: [140, 140],
    resize: {enabled: true}
  });*/
  
  function buildWidget(content) {
    var $baseWidget  = $('<div>'),
        $baseContent = $('<div>');
    $baseWidget.addClass('grid-stack-item ui-draggable ui-resizable ui-resizable-autohide')
    $baseContent.addClass('grid-stack-item-content ui-draggable-handle');
    $baseWidget.append($baseContent.html(content));
    return $baseWidget
  }

  // function addWidget() {
  //   $('.addWidget').
  // }
  $('.grid-stack').gridstack({vertical_gap: 4});
  var grid = $('.grid-stack').data('gridstack');
  
  $('.add').click(function() {
    var el = buildWidget('test content');
    grid.add_widget(el, null, null, 4, 4, true);
  });
});
