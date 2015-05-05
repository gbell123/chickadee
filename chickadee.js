$(function(){

  var data = {
    labels: ['1', '2', '3'],
    series: [
      //[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9]
    ]
  };

  function buildWidget() {
    var $baseWidget     = $('<div>'),
        $baseContent    = $('<div>');
    $baseWidget.addClass('grid-stack-item ui-draggable ui-resizable ui-resizable-autohide');
    $baseContent.addClass('grid-stack-item-content ui-draggable-handle');
    $baseWidget.append($baseContent);
    return $baseWidget;
  }

  function buildLineGraph() {
    var $baseWidget     = buildWidget();
    var $graphContainer = $('<div class="ct-chart">');
    
    var chart = new Chartist.Bar($graphContainer[0], data);
    $baseWidget.children().append($graphContainer);
    $graphContainer.data('chart', chart);
    return [$baseWidget, chart]
  }

  $('.grid-stack')
    .gridstack({
      vertical_gap: 4
    })
    .on('resizestop', function(ev) {
      $(window).trigger('resize');
      $(ev.target).children('.grid-stack-item-content').children('.ct-chart')
        .data('chart')
          .detach();
      $(ev.target).children('.grid-stack-item-content').children('.ct-chart').remove();

      var $graphContainer = $('<div class="ct-chart">');
      var chart           = new Chartist.Bar($graphContainer[0], data);
      $graphContainer.data('chart', chart);
      $(ev.target).children('.grid-stack-item-content').append($graphContainer)
    });

  var grid = $('.grid-stack').data('gridstack');
  
  $('.add').click(function() {
    var $el = buildLineGraph();
    $.chart = $el[1];
    grid.add_widget($el[0], null, null, 4, 4, true);
  });
});
