var FirstClass = /** @class */ (function () {
    function FirstClass(name) {
        this.name = name;
    }
    FirstClass.prototype.info = function () {
        return this.name + ", ur conditionning sucks";
    };
    return FirstClass;
}());
var Khabib = new FirstClass('Khabib');
console.log(Khabib.info());
//just simple static typesation features
var SomeReadonlyFields = /** @class */ (function () {
    function SomeReadonlyFields(StrTall, NumberTall) {
        if (StrTall)
            this.tall = Number(StrTall);
        if (!StrTall && !NumberTall)
            this.tall = undefined;
        if (NumberTall)
            this.tall = NumberTall;
    }
    SomeReadonlyFields.prototype.getTall = function () {
        return this.tall;
    };
    return SomeReadonlyFields;
}());
// const firstReadOnlyClass = new SomeReadonlyFields('Str');
// console.log(firstReadOnlyClass.getTall());
// const secondReadOnlyClass = new SomeReadonlyFields(2);
// result => no something in this way u need just dog-nail with arguments so thats shit 
// console.log(secondReadOnlyClass.getTall());
// const thirdReadOnlyClass = new SomeReadonlyFields();
//access modificatror
// public - default, can be inherited
// protected can be inherited, but cant be acceses throuth fiels from class
//private - all just not accesable not inherited
// some code
