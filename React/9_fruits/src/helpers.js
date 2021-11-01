

function choice(fruits) {
    let item = fruits[Math.floor(Math.random()*fruits.length)];
    return item
}

function remove(fruits, item) {
    for (let i = 0; i < fruits.length; i++) {
        if(fruits[i] === item){
            return [...fruits.slice(0,i), ...fruits.slice(i+1)];
        }
    }
}

export {choice, remove};