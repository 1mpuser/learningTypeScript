var str = 'Da mihi esse optimum';
console.log(str);
//if (str) console.log('1');
var num = 3e10;
var arr = [1, 2, 3, 4,];
var tmpTodo = {
    text: "Et occaecat quis id laborum.",
    completed: true,
    memo: ''
};
var tmpDateTodo = {
    text: "Nulla do minim irure minim.",
    time: new Date(),
    memo: 'Veniam laboris veniam est incididunt ea duis cupidatat sunt quis cupidatat aliquip nisi et laboris.',
    completed: true
};
//console.log(tmpDateTodo);
var genericObj = {};
var css = {
    marginTop: '5px',
    borderRadius: '2px'
};
//////////////enums
var FirstEnum;
(function (FirstEnum) {
    FirstEnum[FirstEnum["Standart"] = 0] = "Standart";
    FirstEnum[FirstEnum["Extended"] = 1] = "Extended";
    FirstEnum[FirstEnum["Pro"] = 2] = "Pro";
})(FirstEnum || (FirstEnum = {}));
var ennum = FirstEnum.Pro;
console.log(ennum);
var StringEnum;
(function (StringEnum) {
    StringEnum["firstStr"] = "1";
    StringEnum["secondStr"] = "2";
    StringEnum["thirdStr"] = "3";
})(StringEnum || (StringEnum = {}));
console.log(StringEnum);
// functions for ts
