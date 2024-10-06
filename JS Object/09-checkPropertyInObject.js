const rectangle = {
  length: 2,
  breadth: 4,

  draw: function () {
    console.log("Drawing rectangle");
  },
// $ is used for adding dynamic properties and add into string
  area: function () {
    console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
  },
};
// Check Property in Object present or not
if ("length" in rectangle) {
  console.log("Length Property Exists in Rectangle");
} else {
  console.log("Absent");
}
