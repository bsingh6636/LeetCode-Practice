let longestCommonPrefix = (str) => {
	if (!str || str.length === 0) {
		return "";
	}
	let prefix = str[0]
	for (let i = 1; i < str.length; i++) {
		while (str[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1)
			if (prefix === "") {
				return ""
			}
		}
	}
	return prefix;
}
let strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));  // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); //Output: empty
console.log(longestCommonPrefix(["elephant","elegant","elapse"]))