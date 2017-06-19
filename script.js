console.log('Todo bien!');

new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'grafica',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2012', Valor1: 200,Valor2: 250 },
    { year: '2013', Valor1: 100,Valor2: 150 },
    { year: '2014', Valor1: 300,Valor2: 250 },
    { year: '2015', Valor1: 100,Valor2: 150 },
    { year: '2016', Valor1: 200,Valor2: 250 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Valor1','Valor2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Valor 1','Valor 2'],

  lineColors: ['#2EE9DE', '#FF754B'],
    lineWidth: '3px',
    resize: true,
    redraw: true
});
