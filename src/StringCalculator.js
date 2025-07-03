 class StringCalculator {
    constructor() {
        this.callCount = 0;
    }
    add(numbers) {
        this.callCount++;
        if (numbers === '') {
            return 0;
        }
        const delimiterRegex = /,|\n/;
        let nums = numbers.split(delimiterRegex).map(n => parseInt(n, 10));
        return nums.reduce((a, b) => a + b, 0);
    }
    getCalledCount() {
        return this.callCount;
    }
}

module.exports = StringCalculator;