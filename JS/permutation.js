function permutation(str, i, n) {
	if (i === n - 1) {
		console.log(str);
		return;
	} 
	for (let j = i; j < n; j++) {
		[str[i], str[j]] = [str[j], str[i]];
		permutation(str, i + 1, n);
		[str[i], str[j]] = [str[j], str[i]];
	}
}


permutation([1, 2, 3], 0, 3);