function tabula(num){
for(let i=1;i<11;i++){
let b="";
for(let a=1;a<num+1;a++){
    b+=a*i+" ";
}
console.log(b);
b="";
}


}
//tabula(7);

//=============
var shape={
  type:"triangle",  
   getType:function i(){
return this.type;
    }
}

//console.log(shape.getType());


//=========

class Triangle {
    constructor(a,b,c){
        Object.assign(this.__proto__,{...shape});

        this.getPerimeter=()=>{
            return (a+b+c);
                }

}
}
let a= new Triangle(1,1,2);

//console.log(a.constructor===Triangle,a.getType(),a.getPerimeter());
//let b={...a};
//console.log(Object.getOwnPropertyNames(a));
//=========
//Array.__proto__.ap=7;
Array.prototype.shuffle=function(){
let a=this;
a=a.sort((t,b)=>{
    return Math.random()>0.5 ? t-b:b-t;
})
console.log(a);
};
let b=[1,23,23123];
b.shuffle();