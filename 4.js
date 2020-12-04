var input = document.body.getElementsByTagName("pre")[0].innerHTML
	.trim().split("\n\n")
 
 // 4-1
 input.map(t=> t.split(/\s/)
	.filter(x => x.substr(0,3) != "cid"))
	.filter(x => x.length == 7)
