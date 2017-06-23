/******************************************************/
console.log('Todo bien!');
/******************************************************/
// Efecto scroll de la navbar
$(window).scroll(function() 
{
  if ($("#top-menu").offset().top > 100) 
    $("#top-menu").addClass("bg-inverse");
  else 
    $("#top-menu").removeClass("bg-inverse");
});
/******************************************************/
//Esconder navbar responsive despues del click
$(document).on('click',function()
{
      $('.collapse').collapse('hide');
});
/******************************************************/
  //Grafica 
  new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'grafica',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2012', pasivos: 200,activos: 250 },
    { year: '2013', pasivos: 100,activos: 150 },
    { year: '2014', pasivos: 300,activos: 250 },
    { year: '2015', pasivos: 100,activos: 150 },
    { year: '2016', pasivos: 200,activos: 250 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['pasivos','activos'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Pasivos','Activos'],

  lineColors: ['#43D089', '#FF754B'],
    lineWidth: '3px',
    resize: true,
    redraw: true
});
/******************************************************/