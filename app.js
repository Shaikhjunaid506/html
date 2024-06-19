// function below.........

// function sum(){
//     let a=5;
//     let b=10;
//     let sum=a+b;
//     return sum;
// }
// let ans=sum();
//  console.log(ans);
// function sum(num3=3,num4=4){
//         let a=5;
//         let b=10;
//         return a+b+num3+num4;
       
//     }
//     let ans=sum();
//      console.log(ans);
// object below
let person={
    a:5,
    b:10,
    c:true,
    fn:function sum(){
        console.log(" hey there")
        return this.a+this.b;
    }
}
let ans= person.fn();
console.log(ans);