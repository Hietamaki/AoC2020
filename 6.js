// 6-1
// Make answers into sets and get total size
document.body.innerText
	.split('\n\n')
	.map(x => x.replaceAll('\n', ''))
	.map(x => new Set(x.split('')))
	.reduce((acc, x) => acc += x.size, 0)

// 6-2
// Use first form of the group to get intersection of the sets
document.body.innerText.trim()
	.split('\n\n')
	.map(group => group
		.split('\n')[0]
		.split('')
		.filter(answer => group
			.split('\n')
			.every(form => form.includes(answer))
		)
	)
	.reduce((acc, x) => acc += x.length, 0)
