var input = document.body.getElementsByTagName("pre")[0].innerHTML.trim().split("\n\n");

 // 4-1
var passports = input.map(t => t.split(/\s/)
  	.map(x => x.split(':'))
		.filter(x => x[0] != "cid"))
	.filter(x => x.length == 7)
	.map(t => Object.assign(...t.map(k => ({ [k[0]]: k[1] }))))

// 4-2
passports.filter(x => x.byr >= 1920 && x.byr <= 2002)
	.filter(x => x.iyr >= 2010 && x.iyr <= 2020)
	.filter(x => x.eyr >= 2020 && x.eyr <= 2030)
	.filter(x => x.hgt.match(/^\d..cm$|^\d.in$/gm))
	.filter(x => x.hgt.indexOf("in") !== -1 || parseInt(x.hgt) >= 150 && parseInt(x.hgt) <= 193)
	.filter(x => x.hgt.indexOf("cm") !== -1 || parseInt(x.hgt) >= 59 && parseInt(x.hgt) <= 76)
	.filter(x => x.hcl.match(/^#([a-f]|\d){6}$/gm))
	.filter(x => x.ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/gm))
	.filter(x => x.pid.match(/^\d{9}$/))
