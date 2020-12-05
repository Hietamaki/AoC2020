const input = document.body.innerText.trim();

//5-1
const seats = input.split('\n')
    .map(x => parseInt(
        x.replace(/F|L/g, 0)
         .replace(/B|R/g, 1), 2))

const highest = seats.reduce((acc, cur) => acc = cur > acc ? cur : acc);

//5-2
const lowest = seats.reduce((acc, cur) => acc = cur < acc ? cur : acc);

Array.from({ length: highest - lowest + 1}, (_, i) => lowest + i)
    .filter(id => !seats.includes(id));
