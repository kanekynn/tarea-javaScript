function sumPairs(numbers, target) {
    const seenNumbers = new Set();

    for (const num of numbers) {
        const complement = target - num;
        if (seenNumbers.has(complement)) {
            return [complement, num];
        }
        seenNumbers.add(num);
    }

    return null;
}

console.log(sumPairs([5, 3, 5, 7, 2,8], 10));