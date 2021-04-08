const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const catscopy = [...cats, 'Broom'];
    return catscopy;
}

function prependCat() {
    const copycats = ["Arnold",...cats];
    return copycats;
}

function removeLastCat() {
    const newcats = cats.slice(0, cats.length -1);
    return newcats;
}

function removeFirstCat() {
    const lastcat = cats.slice(1);
    return lastcat;
}