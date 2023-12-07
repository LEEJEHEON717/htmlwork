
window.onload = function(){
  //이미지 슬라이드
  let picture = ["images/header0.jpg", "images/header1.jpg",
            "images/header2.jpg"];
  let picIdx = 0;

  showSlide();

  function showSlide(){
    //이미지 경로 - src 속성 사용
    document.getElementById("pic").src = picture[picIdx];
    picIdx += 1;
    if(picIdx == picture.length){
      picIdx = 0;
    }
    setTimeout(showSlide, 3000);
  }

  //시계 생성
  setInterval(myWatch, 1000);

  function myWatch(){
    const now = new Date(); //날짜와 시간 함께 생성
    let time = now.toLocaleTimeString(); //시간만 출력
    console.log(time);

    let watch = document.getElementById("show")
    watch.innerHTML = time;
    watch.style.color = "blue";
  }
}
