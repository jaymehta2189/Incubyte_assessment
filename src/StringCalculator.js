class StringCalculator {
  constructor() {
    this.callCount = 0;
  }
  static escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  add(numbers) {
    this.callCount++;
    if (!numbers) return 0;

    let input = numbers, delimiters = [',', '\n'];

    if (input.startsWith('//')) {
      const [first, ...rest] = input.split('\n');
      const spec = first.slice(2);
      input = rest.join('\n');

      const matches = spec.match(/\[([^\]]+)\]/g);
      if (matches) {
        delimiters = matches.map(m => m.slice(1, -1));
      } else {
        delimiters = [spec];
      }
    }

    const regex = new RegExp(
      delimiters.map(d => StringCalculator.escapeRegex(d)).join('|')
    );
    const nums = input.split(regex).map(n => parseInt(n, 10));

    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
      throw new Error('negatives not allowed: ' + negatives.join(','));
    }

    return nums
      .filter(n => n <= 1000)
      .reduce((sum, n) => sum + n, 0);
  }
  getCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;