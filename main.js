//렌덤 번호지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄다
// 런덤번호가 < 유저번호 DOWN
// 랜덤번호가 > 유저번호 업
//reset 버튼을 누르면 게임을 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼 사용불가)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다, 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면,알려준다, 기회를 깍지 않는다

let Num = 0
let playB = document.getElementById("play")
let userInput = document.getElementById("input")
let resultArea = document.getElementById("resultArea")


playB.addEventListener("click",play)

function RandomNum(){
    Num = Math.floor(Math.random()*100) + 1;
    console.log("정답",Num);
}
function play(){
  let userValue = userInput.value
  if(userValue < Num){
    resultArea.textContent = "UP!"
  } else if(userValue > Num){
    resultArea.textContent = "DOWN!"
  } else{
    resultArea.textContent = "정답이다 연금술사!!  가져가라 전부!!!"
  }
}


RandomNum()