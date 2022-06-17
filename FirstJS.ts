const str : string = 'Da mihi esse optimum';

console.log(str);

//if (str) console.log('1');

const num : number = 3e10;

const arr : Array<number> = [1,2,3,4,];

//console.log(arr);


//there are custom types to make from ts

type randomType = boolean | string;

interface ToDo  {
    text : string,
    completed : boolean,
    memo : string,
}

const tmpTodo : ToDo  = {
    text : "Et occaecat quis id laborum.",
    completed : true,
    memo : '',
}
//console.log(tmpTodo);

//inheritace of interfaces

interface DateTodo extends ToDo {
    time : Date
}

const tmpDateTodo : DateTodo = {
    text : "Nulla do minim irure minim.",
    time : new Date(),
    memo : 'Veniam laboris veniam est incididunt ea duis cupidatat sunt quis cupidatat aliquip nisi et laboris.',
    completed : true
} 
//console.log(tmpDateTodo);

const genericObj = {} as DateTodo

interface InterfaceWithMethodsWhichIsStaticTyped {
    getString : ()=> string   
}


//this is just a simple record
interface Styles {
    [key : string] : string
}

const css : Styles = {
    marginTop : '5px',
    borderRadius : '2px',
}

//////////////enums


enum FirstEnum {
    Standart,
    Extended, 
    Pro
}


const ennum = FirstEnum.Pro
console.log(ennum);


enum StringEnum {
    firstStr = '1',
    secondStr = '2',
    thirdStr = '3',
}



console.log(StringEnum);



// functions for ts


