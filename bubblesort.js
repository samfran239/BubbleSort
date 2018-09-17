const bubbleSort = (array) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[i + 1]) {
			let oldLeft = array[i];
			let switching = array[i + 1];
			array[i] = switching;
			array[i + 1] = oldLeft;
			bubbleSort(array);
		}
	}

	return array;
};

let checking = [ 5, 2, 7, 1, 12 ];

console.log(bubbleSort(checking));
