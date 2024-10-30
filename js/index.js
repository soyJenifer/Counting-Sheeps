function countSheeps(list) {
    let sheeps = 0;

    for(let i=0; i<list.length; i++) {
        if(list[i]) {
            sheeps++;
        }
    }

    if(sheeps > 0) {
        return `There are ${sheeps} sheeps in total`;
    }

    if(sheeps == 0) {
        return `UPS!!! Wolfs ate all sheeps`;
    }
}

list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
list2 = [false, false, false];

console.log(countSheeps(list1));
console.log(countSheeps(list2));