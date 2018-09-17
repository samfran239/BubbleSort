describe('Bubble Sort', function() {
	it('handles an empty array', function() {
		expect(bubbleSort([])).toEqual([]);
	});
	it('returns a sorted array', function() {
		expect(bubbleSort([ 5, 6, 13, 2, 4, 29, 66 ])).toEqual([ 2, 4, 5, 6, 13, 29, 66 ]);
	});
	it('sorts an array of only one item', function() {
		expect(bubbleSort([ 1 ])).toEqual([ 1 ]);
	});
});
