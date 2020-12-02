// array version

var input = document.body.getElementsByTagName("pre")[0].innerHTML
	.trim().split("\n")
	.map(line => line.split(/[- ]|: /))

// 2-1
input.map(line => line.concat((line[3].match(new RegExp(line[2], "g")) || []).length))
	.filter(line => Number(line[0]) <= line[4] && Number(line[1]) >= line[4])

// 2-2
input.filter(line =>
  	(line[2] === line[3][line[0]-1]) !== (line[2] === line[3][line[1]-1]))
