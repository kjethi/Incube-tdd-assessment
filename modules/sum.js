const sum = (numbers) => {
    if (numbers === "") return 0;
    let delimeterRegEx = /[\n,]/

    if (numbers.startsWith("//")) {
        const nlIndex = numbers.indexOf("\n");
        const newDelimiter = numbers.substring(2, nlIndex);
        delimeterRegEx = new RegExp(`[${newDelimiter}\n]`);
        numbers = numbers.substring(nlIndex + 1);
    }
    const numberArr = numbers.split(delimeterRegEx).filter(n => n <= 1000);
    const negativeNumber = numberArr.filter(n => 0 > n)

    if (negativeNumber.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumber.join(", ")}`);
    }
    return numberArr.reduce((prevVal, currVal) => {
        return Number(prevVal) + Number(currVal)
    }, 0)

}

module.exports = sum;
