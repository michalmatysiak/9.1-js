var triangle1Area = getTriangleArea(10, 15),
  	triangle2Area = getTriangleArea(132, -5),
  	triangle3Area = getTriangleArea(0, 82);

function getTriangleArea(a, h) {

var triangleArea = a*h/2;

  if ( (a > 0) && (h > 0)) {
  } else {
    var triangleArea = 'Nieprawidłowe dane'
  }
  return triangleArea;
}
console.log(getTriangleArea(10,10));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);