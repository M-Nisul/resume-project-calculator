const calculator = (() => {

    const numbers = [];
    
    const addition = (a, b) => {
        return a + Number(b);
    }

    const subtraction = (a, b) => {
        return a - Number(b);
    }

    const multiplication = (a, b) => {
        return a * Number(b);
    }

    const division = (a, b) => {
        return a / Number(b);
    }

    return {numbers, addition, subtraction, multiplication, division};
})();

export default calculator;