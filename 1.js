var numbers_str = document.body.getElementsByTagName("pre")[0].innerHTML
var numbers = numbers_str.trim().split("\n").map(number => Number(number))

// 1-1
numbers.flatMap(n1 => numbers.map(n2 => [n1 + n2, n1 * n2]))
	.find(sum => sum[0] == 2020)

// 1-2
numbers.flatMap(n1 => numbers.map(n2 => [n1 + n2, n1 * n2]))
	.flatMap(n1 => numbers.map(n2 => [n1[0] + n2, n1[1] * n2]))
	.find(sum => sum[0] == 2020)
