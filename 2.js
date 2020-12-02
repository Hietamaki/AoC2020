var input = document.body.getElementsByTagName("pre")[0].innerHTML
	.trim().split("\n")
	.map(line => line.split(/[- ]|: /))
	.map(line => ({
		low_n: Number(line[0]),
		high_n: Number(line[1]),
		needle: line[2],
		haystack: line[3],
		count: 0
	}))

function countOccurances(source, pattern) {
	return (source.match(new RegExp(pattern, "g")) || []).length
}

// 2-1
input.map(e => ({...e, count: countOccurances(e.haystack, e.needle)}))
	.filter(e => e.low_n <= e.count && e.high_n >= e.count)

// 2-2
input.filter(e =>
  	(e.needle === e.haystack[e.low_n - 1]) !== (e.needle === e.haystack[e.high_n - 1]))
