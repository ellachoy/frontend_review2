console.log('hi')
	
// alert(1+1);
// Math.pow(3,2);       // 9,   3의 2승 
// Math.round(10.6);    // 11,  10.6을 반올림
// Math.ceil(10.2);     // 11,  10.2를 올림
// Math.floor(10.6);    // 10,  10.6을 내림
// Math.sqrt(9);        // 3,   3의 제곱근
// Math.random();       // 0부터 1.0 사이의 랜덤한 숫자
// Math.round(100 * Math.random());
var a = 1;
// alert(a+1);  //2
 
var a = 2;
// alert(a+1);  //3

// condional statement
// if(true){
//    alert('result : true');
// }

// if(false) {
//     alert(1);
// }else if(true){
//     alert(2);
// }

// id = prompt('아이디를 입력해주세요.')
// if(id=='egoing'){
//     alert('아이디가 일치 합니다.')
// } else {
//     alert('아이디가 일치하지 않습니다.')
// }
// var id = prompt('아이디를 입력해주세요.');
// if(id=='egoing'){
//     var password = prompt('비밀번호를 입력해주세요.');
//     if(password==='111111'){
//         alert('인증 했습니다.');
//     } else {
//         alert('인증에 실패 했습니다.');
//     }
// } else {
//     alert('인증에 실패 했습니다.');
// }

// var id = prompt('input your id');
// if(id=='ellachoy'){
//     var password= prompt('plaese enter your password')
//     if(password='1111'){
//         alert('password correct')
//     }else{
//         alert('password incorrect')
//     }
//     alert('ellachoy is loged in')
// }else{
//     alert('versuch noch ein mal!')
// }
// &&
// let id=prompt('input your id');
// let password=prompt('password');
// if(id=='ellachoy' && password=='1111'){
//     alert('hallo'+id +'yourloged in')

// }else{
//     alert('falsch!!')
// }
// || || |||\\
// let id=prompt('enter your id');
// let password=prompt('password');
// if((id==="ellachoy" || id==="sangi" || id==="eeee") && password==="1111"){
//     alert('correct')
// }else{
//     alert('try again')
// }
// loop / iterate 
// let i = 0;
// // 종료조건으로 i의 값이 10보다 작다면 true, 같거나 크다면 false가 된다.
// while(i < 10){
//     // 반복이 실행될 때마다 coding everybody <br />이 출력된다. <br /> 줄바꿈을 의미하는 HTML 태그
//     // document.write('coding everybody <br />');
//      document.write('* '+i+'<br />');
//     // i의 값이 1씩 증가한다.
//     // i++ 
//     i=i+1;
// }
// star pattern 
let n=3;// row or column count
let string="";// defining an empty string
for(let x = 0; x < n; x++){// external loop
    for(let y = 0; y < n; y++){// internal loop
        string += "n";
    }
    string += "<br>";// newline after each row
}
document.write(string);// printing the string
document.write('------------------------'+'<br />');

let star="";// defining an empty string
for(let i =0; i<3;i++){// external loop
    for(let j=0; j<=i;j++){// internal loop
        star +='*';
    }
    star +='<br/>';// newline after each row
}
document.write(star);// printing the string

// 0부터 9까지 변수 x에 순차적으로 값을 할당        
for(var x = 0; x < 3; x++){
    // 0부터 9까지의 변수를 y의 값에 순차적으로 할당
    for(var y = 0; y < 3; y++){    
        // x와 y의 값을 더한 후에 출력
        // String은 숫자인 x와 y의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
        // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
        document.write(String(x)+String(y)+'<br />');
        // document.write(x+y+'<br />'); ohne String
    }
    // document.write('<br />');
}
document.write('<br />');

for(var i = 0; i < 10; i++){
    if(i===2){
        break;
    }
    document.write('coding everybody'+i+'<br />');
}
document.write('-------------------------'+'<br/>');
// Function
// function numbering(){
//     // document.write(1);
//     // let b=0; //while
//     // while(b<10){
//     //     document.write(b );
//     //     b += 1;
//      for(let b=0; b<10;b++) {
//          document.write(b);
//      }   
//     }
// numbering();
let numbering=function() {
    for(let b=0; b<10;b++) {
                 document.write(b);
             }   
}
numbering();
document.write('<br/>'+'-------------------------'+'<br/>');

function get_member1(){
    return 'egoing';
}
 
function get_member2(){
    return 'k8805';
}
 
document.write(get_member1()+'<br />');
document.write(get_member2()+'<br />');
document.write('-------------------------'+'<br/>');

// function input
function get_argument(arg){
    // return arg;
    return arg*1000;
}
document.write(get_argument(1)+'<br />');
document.write(get_argument(2)+'<br />');
document.write('-------------------------'+'<br/>');
function get_arguments(arg1, arg2) {
    return arg1+arg2;
}
document.write(get_arguments(10,20)+'<br />');
document.write(get_arguments(20,30)+'<br />');
document.write('-------------------------'+'<br/>');
// Array
let member=['ella', 'Fabian', 'John']
document.write(member+'<br />');
document.write(member[0]+'<br />');
document.write('-------------------------'+'<br/>');
// mit function
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
var members = get_members();
// document.write(get_members());// egoing,k8805,sorialgi
document.write(members[0]+'<br/>');//egoing 
document.write('-------------------------'+'<br/>');
for(m=0; m<members.length; m++){ //grossgeschrieben
    document.write(members[m].toUpperCase()+'<br/>')
}
document.write('-------------------------'+'<br/>');
// arry: push, concat, unshift, splice,delete
let mi=['a', 'b', 'c', 'd', 'e',];
mi.push('ella');
document.write(mi+'<br/>');
let mb = mi.concat(['fabian', 'george']);
document.write(mb+'<br/>');
mi.unshift('z');
document.write(mi+'<br/>');
document.write('-------------------------'+'<br/>');
//shift/pop 
mi.shift();
document.write(mi+'<br/>');
document.write('-------------------------'+'<br/>');
// object
let grades={
    'egoing':10,
    'ella':20,
    'Fabian':50,
};
document.write(grades['Fabian'])
// for(g=0;g<grades.length;g++) {//mein vorgestellte codes=falsch!!
//     return grades[g];
// }
// document.write(grades[g])
document.write('-------------------------'+'<br/>');

var grades1 = {
    'egoing': 10,
     'k8805': 6, 
     'sorialgi': 80};
// for(key in grades1) {
//     document.write("key : "+key+" value : "+grades1[key]+"<br />");
// }
for(let namekey in grades1) {
        document.write("<li>key : "+namekey+" , value : "+grades1[namekey]+"</li>");
}
document.write('-------------------------'+'<br/>');
var grades2 = {
    'list': {'egoing': 10, 
             'k8805': 6, 
             'sorialgi': 80
            },
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades2.show();
document.write('-------------------------'+'<br/>');
// regualr expression
//Function: 
let vscope = 'global';
function fscope() {
    //  let vscope = 'local';
    vscope = 'local5';
    document.write(vscope);
   
}
fscope();
document.write(vscope);
document.write('<br/>'+'-------------------------'+'<br/>');

// function a (){
//     var i = 0;
// }
// for(var i = 0; i < 5; i++){
//     a();
//     document.write(i);
// }
let MYAPP ={}// global variable , object
MYAPP.calculator={
    'left':null,
    'right':null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
MYAPP.calculator.left=10;
MYAPP.calculator.right=20;
function sum(){
    return MYAPP.calculator.left+MYAPP.calculator.right;
}
document.write(sum());
// (function(){ 익명함수 함수 안에 MYAPP선언
//     var MYAPP = {} //local variable
//     MYAPP.calculator = {
//         'left' : null,
//         'right' : null
//     }
//     MYAPP.coordinate = {
//         'left' : null,
//         'right' : null
//     }
//     MYAPP.calculator.left = 10;
//     MYAPP.calculator.right = 20;
//     function sum(){
//         return MYAPP.calculator.left + MYAPP.calculator.right;
//     }
//     document.write(sum());
// }())
document.write('<br/>'+'-------------------------'+'<br/>');
// function2 as value and callbacks 
function a(){}
a={
    b:function(){

    }
};
function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
document.write(cal(increase, 1));
document.write(cal(decrease, 1));
document.write('<br/>'+'-------------------------'+'<br/>');

function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
document.write(cal('plus')(2,1));
document.write(cal('minus')(2,1));  
document.write('<br/>'+'-------------------------'+'<br/>');

var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
document.write(input);
document.write('<br/>'+'-------------------------'+'<br/>');

function sortNumber(a,b){
    // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
    return b-a;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
document.write(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]
document.write('<br/>'+'-------------------------'+'<br/>');
// {"title" :"Javascript",
//   "autor" :"egoing"
// }
// $.get('./datasource.json.js', function(result){
//     console.log(result);
// }, 'json');

// closure
// function outter(){
//     function inner(){
//         var title = 'coding everybody'; 
//         document.write(title);
//     }
//     inner();
// }
// outter();
function outter(){
    var title = 'coding everybody';  
    function inner(){        
        document.write(title);
    }
    inner();
}
outter();
document.write('<br/>'+'-------------------------'+'<br/>');
// var arr1 =[]
// for(var i=0; i<5; i++) {
//     arr1[i]= function(){
//        return(i);
//     }
// }
// for(var index in arr1){
//     document.write(arr1[index]());
// }
var arr2 = []
for(var i = 0; i < 5; i++){
    arr2[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr2) {
   document.write(arr2[index]());
}
document.write('<br/>'+'-------------------------'+'<br/>');
// arguments
function sum(){
    var i, _sum=0;
    for(i=0; i<arguments.length;i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));
document.write('<br/>'+'-------------------------'+'<br/>');

function sum1(arg1,arg2){
    return arg1+arg2;
}
document.write(sum.apply(null, [1,2]))
document.write('<br/>'+'-------------------------'+'<br/>');
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function summ(){
    var _summ = 0;
    for(name in this){
        _summ += this[name];
    }
    return _summ;
}
document.write(summ.apply(o1)) // 6
document.write(summ.apply(o2)) // 185
document.write('<br/>'+'-------------------------'+'<br/>');
// oop
//new