/*
	O: smallest substring contains target
	E: empty str => null, 
		empty target => empty, 
		empty target && empty str => empty,
		str has no target => null
	Q: target is unique

	declare:count object; key: each letter in target, val: occurance in str
					declare start and end for the smallest index of substring, init with 0, Infinity
					charMiss init as target.length keep track of total missing char
	iterate through target to populate count object with val 0
	
	iterate through str
		
	
*/

function minimumWindowSubstring(str, target) {
	let counts = {},
			start = 0,
			end = Infinity,
			charMiss = target.length,
			j = 0,
			targetInStr = false;
	if (target === '') return ''
	for (let cur of target) {
		counts[cur] = 0;
	}
	for (let i = 0; i < str.length; i++) {
		if (str[i] in counts) {
			if (counts[str[i]] === 0) {
				charMiss--;
			}
			counts[str[i]]++;
		}
		while (charMiss === 0) {
			targetInStr = true;
			// if local min < global min, replace global min
			if (i - j < end - start) {
				end = i;
				start = j;
			}
			// if slow points to a char in count
			if (str[j] in counts) {
				// decrement count for that char
				counts[str[j]]--;
				// if decremented count is less than 0
				if (counts[str[j]] <= 0) {
					charMiss++;
				}

			}
			j++;
		}
	}
	if (!targetInStr) return null;
	return str.slice(start, end + 1);
}





console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC") === 'BANC');
console.log(minimumWindowSubstring("ADOBECODEBANC", "ABCZ") === null);
console.log(minimumWindowSubstring("ADOBECODEBANC", "") === '');
console.log(minimumWindowSubstring("", "ADOBECODEBANC") === null);

