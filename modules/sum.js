const sum = (numbers) => {
    if (numbers === "") return 0;
    let delimeterRegEx = /[\n,]/

    if (numbers.startsWith("//")) {
        const nlIndex = numbers.indexOf("\n");
        const newDelimiter = numbers.substring(2, nlIndex);
        numbers = numbers.substring(nlIndex + 1);
        if (newDelimiter.startsWith("[")) {
            const endBracecIndex = newDelimiter.indexOf("]");
            const dlMatches = newDelimiter.substring(1,endBracecIndex);
            const escapedDelimiters = escapeRegExp(dlMatches);
            delimeterRegEx = new RegExp(escapedDelimiters);
        }
        else {
            delimeterRegEx = new RegExp(`[${newDelimiter}\n]`);
        }
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
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');


module.exports = sum;
