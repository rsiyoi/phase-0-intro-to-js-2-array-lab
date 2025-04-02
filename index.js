// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
cats.push(name);
};

function destructivelyPrependCat(name){
cats.unshift(name);
};

function destructivelyRemoveLastCat(){
cats.pop();
    };
    
function destructivelyRemoveFirstCat(){
cats.shift();
};

function appendCat(cats){
return cats = ['Milo', 'Otis', 'Garfield',cats]
};

function prependCat(cats){
return cats = [cats, 'Milo', 'Otis', 'Garfield']
};

function removeLastCat() {
return cats.slice(0, -1)
};

function removeFirstCat(){
return cats.slice(1)
};