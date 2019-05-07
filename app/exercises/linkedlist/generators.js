function *printNums(){
    const result = 1 + 1;
    return 20 + (yield result);
}

// const generator = printNums()

// console.log(generator.next());

function *list(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield* list2()
    yield 8
    yield 9
    yield 10
}


function *list2(){
    yield 5 
    yield 6
    yield 7 
}

const generator = list();
let listofNums = [];
for(let val of generator){
    listofNums.push(val)
}

console.log(listofNums);