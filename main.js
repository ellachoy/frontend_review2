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
let n=5;// row or column count
let string="";// defining an empty string
for(let x = 0; x < n; x++){// external loop
    for(let y = 0; y < n; y++){// internal loop
        string += "*";
    }
    string += "<br>";// newline after each row
}
document.write(string);// printing the string
document.write('------------------------'+'<br />');

let star="";// defining an empty string
for(let i =0; i<10;i++){// external loop
    for(let j=0; j<=i;j++){// internal loop
        star +='*';
    }
    star +='<br/>';// newline after each row
}
document.write(star);// printing the string

// // 0부터 9까지 변수 i에 순차적으로 값을 할당        
// for(var i = 0; i < 10; i++){
//     // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
//     for(var j = 0; j < 10; j++){    
//         // i와 j의 값을 더한 후에 출력
//         // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
//         // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
//         document.write(String(i)+String(j)+'<br />');
//     }
// }
