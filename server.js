const sum = require("./modules/sum")

// add some example to run actual project
console.log("Blank string", sum(""))
console.log("Sum of single number", sum("5"))
console.log("Sum of two comma separated numbers", sum("5,10"))
console.log("Sum of N number of comma separated numbers", sum("5,12,34"))
console.log("Sum of 'N numbers' of comma separated or '\\n' delimeter between two numbers in string", sum("5\n7,4,5\n6"))
console.log("supports custom delimiters", sum("//*\n12*3"))
console.log("Ignore If number are bigger than 1000", sum("2,1001"))
console.log("supports custom delimiters with any length", sum("//[***]\n12***3"))
console.log("Allow Multiple delimiters with single character", sum("//[*][#]\n1*2#3"))
console.log("Allow Multiple delimiters with multiple character", sum("//[-*-][-#-]\n1-*-2-#-3"))
console.log("Negative", sum("1,-2,-3"))