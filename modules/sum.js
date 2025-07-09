const sum = (numbers) => {
    if (numbers === "") return 0;
    const numberArr = numbers.split(/[\n,]/);
    return numberArr.reduce((prevVal,currVal)=>{
        return Number(prevVal) + Number(currVal)
    },0)

}

module.exports = sum;
