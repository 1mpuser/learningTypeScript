class FirstClass {
    name : string
    constructor (name : string) {
        this.name = name;
    }
    info() : string {
        return `${this.name}, ur conditionning sucks`;
    }
}
const Khabib : FirstClass = new FirstClass('Khabib');
console.log(Khabib.info());
//just simple static typesation features
class SomeReadonlyFields {
    readonly tall : number | undefined;
    weight : number;
    constructor (StrTall?: string, NumberTall?: number){
        if (StrTall) this.tall = Number(StrTall);
        if (!StrTall && !NumberTall) this.tall = undefined;
        if (NumberTall) this.tall = NumberTall
    }
    getTall(): number | undefined {
        return this.tall;
    }
}


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