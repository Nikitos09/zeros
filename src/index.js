  module.exports = function getZerosCount(number) {
    let zeros = 0;
      for (i=5; i<=number; i = i*5){
        zeros = zeros + Math.floor(number/i);
      }
      return (zeros);
}
