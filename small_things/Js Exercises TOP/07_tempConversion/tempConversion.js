const convertToCelsius = function(f) {
  var c = (f - 32) * (5/9)
  //.round() will round to nearest int
  //by multiplying by 10 then dividing rounded number /10
  //we can achieve rounding to 1dp
  c =  Math.round(c*10)/10 ;
  console.log(`celsius: ${c}`);
  return c;


};

const convertToFahrenheit = function(c) {
  var f = c/(5/9) + 32;
  console.log(`f: ${f}`);
  f =  Math.round(f*10)/10
  return f;
};


convertToCelsius(20) // should be -6.7
convertToFahrenheit(20) //should be 68

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
