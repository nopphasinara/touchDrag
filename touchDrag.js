export default class TestClass{
    constructor(item){
        this.item = item;
        this.test();
    }

    test(){
        console.log(this.item);
    }
}
console.log('test 4');
new TestClass(document.querySelector('body'));