function distinctPairSum(arr, k) {
  const hash = {};
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const first = arr[i];
		const second = arr[i + 1];
		if (first + second === k) {
			const pair = first <= second ? [first, second] : [second, first];
			if (!hash[pair]) {
				hash[pair] = true;
				result.push(pair);
			}
		}
	}
	return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * Create empty hash to tally occurences of pairs
 * Iterate through array and find pairs that add up to k
 * If sum is K, push to hash (and push value in such a way that lesser number is first in pair so that we account for order not mattering)
 */
