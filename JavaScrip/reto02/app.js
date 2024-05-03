function wrapGifts(gifts) {
    if (gifts.length === 0) return [];

    const wrappedGifts = [];
    const maxLength = gifts[0].length + 2;

    wrappedGifts.push('*'.repeat(maxLength));
    for (const gift of gifts) {
        wrappedGifts.push(`*${gift}*`);
    }
    wrappedGifts.push('*'.repeat(maxLength));

    return wrappedGifts;
}

console.log(wrapGifts(["📷", "⚽️"]));