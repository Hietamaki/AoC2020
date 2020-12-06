// 6-1
// Make sets of all the answers
document.body.innerText
    .split('\n\n')
    .map(x => x.replaceAll('\n', ''))
    .map(x => Array.from(new Set(x.split(''))))
    .reduce((acc, x) => acc += x.length, 0)
