/*
TODO:
    Limit number input 제한 숫자 입력
    Disallow . from being entered multiple times . 여러 번 입력되지 않도록
    Clean up structure 구조 정리
*/

(function() {
 "use strict";

 // 요소 가져오기 바로가기
 var el = function(element) {
   if (element.charAt(0) === "#") { // ID가 통과되면..
     return document.querySelector(element); // ... 단일 요소를 반환합니다.
   }

   return document.querySelectorAll(element); // 그렇지 않으면 노드 목록을 반환합니다.
 };

 // 변수
 var viewer = el("#viewer"), // Calculator screen where result is displayed
   equals = el("#equals"), // Equal button
   nums = el(".num"), // List of numbers
   ops = el(".ops"), // List of operators
   theNum = "", // Current number
   oldNum = "", // First number
   resultNum, // Result
   operator; // Batman

 // 번호를 클릭합니다. 현재 선택된 번호 가져오기
 var setNum = function() {
   if (resultNum) { // 결과가 표시되면 번호를 재설정하세요
     theNum = this.getAttribute("data-num");
     resultNum = "";
   } else { // 그렇지 않으면 이전 숫자에 숫자를 추가합니다(이것은 문자열입니다!).
     theNum += this.getAttribute("data-num");
   }

   viewer.innerHTML = theNum; // 현재 번호 표시

 };

 // 연산자를 클릭했습니다. oldNum에 번호를 전달하고 연산자를 저장합니다
 var moveNum = function() {
   oldNum = theNum;
   theNum = "";
   operator = this.getAttribute("data-ops");

   equals.setAttribute("data-result", ""); // attr에서 결과 재설정
 };

 // 시기: 같음을 클릭합니다. 결과 계산
 var displayNum = function() {

   // 문자열 입력을 숫자로 변환
   oldNum = parseFloat(oldNum);
   theNum = parseFloat(theNum);

   // 작업수행
   switch (operator) {
     case "plus":
       resultNum = oldNum + theNum;
       break;

     case "minus":
       resultNum = oldNum - theNum;
       break;

     case "times":
       resultNum = oldNum * theNum;
       break;

     case "divided by":
       resultNum = oldNum / theNum;
       break;

       // 연산자 없이 등호를 누르면 숫자를 유지하고 계속합니다
     default:
       resultNum = theNum;
   }

   // NaN 또는 Infinity가 반환된 경우
   if (!isFinite(resultNum)) {
     if (isNaN(resultNum)) { // 결과가 숫자가 아닌 경우; 예를 들어 연산자를 두 번 클릭하여 시작됩니다.
       resultNum = "잘못된 계산.";
     } else { // 결과가 무한대인 경우 0으로 나누어 출발합니다.
       resultNum = "Look at what you've done";
       el('#calculator').classList.add("broken"); // 무너진 계산기
       el('#reset').classList.add("show"); // 그리고 재설정 버튼을 표시합니다.
     }
   }

   // 결과 표시!
   viewer.innerHTML = resultNum;
   equals.setAttribute("data-result", resultNum);

   // oldNum을 재설정하고 결과를 유지하세요.
   oldNum = 0;
   theNum = resultNum;

 };

 // oldNum을 재설정하고 결과를 유지하세요.
 var clearAll = function() {
   oldNum = "";
   theNum = "";
   viewer.innerHTML = "0";
   equals.setAttribute("data-result", resultNum);
 };

 /* 클릭 이벤트 */

 // 숫자에 클릭 이벤트 추가
 for (var i = 0, l = nums.length; i < l; i++) {
   nums[i].onclick = setNum;
 }

 // 연산자에 클릭 이벤트 추가
 for (var i = 0, l = ops.length; i < l; i++) {
   ops[i].onclick = moveNum;
 }

 // 등호에 클릭 이벤트 추가
 equals.onclick = displayNum;

 // 버튼 지우기에 클릭 이벤트 추가
 el("#clear").onclick = clearAll;
}());