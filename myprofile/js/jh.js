
//이미지 show
window.onload = function(){
//   let picture = ["images/cat-1.jpg", "images/cat-2.jpg", "images/cat-3.jpg"]
  let picture = ["images/apt-1.jpg", "images/apt-2.jpg", "images/apt-3.jpg",
                 "images/apt-4.jpg", "images/apt-5.jpg", "images/apt-6.jpg"]
  let p_idx = 0;

  showPicture(); 

  function showPicture() {
      document.querySelector("#pic").src = picture[p_idx];
      p_idx++;
      if(p_idx === picture.length)
          p_idx = 0;
      setTimeout(showPicture, 2000); //콜백 함수
  }

  // 디지털 시계
  setInterval(myWatch, 1000);

  function myWatch(){
      var date = new Date(); //날짜와 시간 함께 생성
      var now = date.toLocaleTimeString();  //시간만 출력
      document.getElementById("time").innerHTML = now;

    //   let watch = document.getElementById("show")
    //   //watch.innerHTML = time;
    //   if(time >= 12){
    //     watch.innerHTML = time.replace("오전", "am");
    //   }else
    //   watch.innerHTML = time.replace("오후", "pm");
  }
}

