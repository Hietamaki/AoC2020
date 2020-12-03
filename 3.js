var input = document.body.getElementsByTagName("pre")[0].innerHTML
	.trim().split("\n")

// 3-1
input.map((line, i) => line[i * 3 % input[0].length])
	.filter(char => char == "#")

// 3-2
[[1,1], [3,1], [5,1], [7,1], [1,2]].reduce((acc, val) => (
	input.map((line, i) => (
			line[Math.floor(i * val[0] % (input[0].length * val[1]) / val[1])]))
		.filter((line, i) => i % val[1] == 0)
		.filter(char => char == "#").length * acc
	), 1) 
