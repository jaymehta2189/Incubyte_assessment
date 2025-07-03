class StringCalculator {
    constructor() {
        this.callCount = 0;
    }
    static escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    add(numbers) {
        this.callCount++;
        if (!numbers) return 0;

        let input = numbers;
        let delimRegex = /,|\n/;  // default

        // custom single-char?
        if (input.startsWith('//')) {
            const [first, ...rest] = input.split('\n');
            const custom = first.charAt(2);
            delimRegex = new RegExp(StringCalculator.escapeRegExp(custom));
            input = rest.join('\n');
        }

        const nums = input
            .split(delimRegex)
            .map(n => parseInt(n, 10));

        return nums.reduce((sum, n) => sum + n, 0);
    }


    getCalledCount() {
        return this.callCount;
    }
}

module.exports = StringCalculator;