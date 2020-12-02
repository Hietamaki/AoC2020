var numbers_str = document.body.getElementsByTagName("pre")[0].innerHTML
var numbers = numbers_str.trim().split("\n").map(number => Number(number))

// 1-1
numbers.flatMap(n1 => numbers.map(n2 => [n1 + n2, n1 * n2]))
	.find(sum => sum[0] == 2020)

// 1-2
numbers.flatMap(n1 => numbers.map(n2 => [n1 + n2, n1 * n2]))
	.flatMap(n1 => numbers.map(n2 => [n1[0] + n2, n1[1] * n2]))
	.find(sum => sum[0] == 2020)


// prototype (1-1 & 1-2)
for (const number of numbers) {for (const number2 of numbers) {if ((Number(number)+Number(number2))==2020) console.log(number * number2) }}
for (const number of numbers) {for (const number2 of numbers) {for (const number3 of numbers) if ((Number(number)+Number(number2)+Number(number3))==2020) console.log(number * number2 * number3) }}

// prototype 2 (1-1)
numbers.reduce((acc, number1) =>
	acc > 0 ? acc :
		(numbers.find(number2 =>
			number1 + number2 == 2020) * number1 || 0), 0)
