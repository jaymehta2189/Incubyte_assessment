 class StringCalculator {
    constructor() {
        this.callCount = 0;
    }
    add(numbers) {
        this.callCount++;
        if (numbers === '') {
            return 0;
        }
        let nums = numbers.split(',').map(n => parseInt(n, 10));
        return nums.reduce((acc, num) => acc + num, 0);
    }
    getCalledCount() {
        return this.callCount;
    }
}

module.exports = StringCalculator;