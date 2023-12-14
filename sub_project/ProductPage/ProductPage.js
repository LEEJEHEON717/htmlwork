// 변수 설정
let topTopMenu = document.querySelector(".top-top-menu");
let miniShortcut = document.querySelector(".mini-shortcut");
let topBottomMenu = document.querySelector(".top-btm-menu");
let addUl = document.createElement("ul");
let addLi = document.createElement("li");
let addA = document.createElement("a");
let addInput = document.createElement("input");


addMsShortcut();
addTtmMenu();
addtbMenu();
changeAd();
moveNav();

function addMsShortcut(){
    let addUl = document.createElement("ul");
    addUl.className = "ms-list";
    
    // 배열사용 목록 정의
    let itemList = [
        {text: "youtube", link: "https://www.youtube.com", target: "_black"},
        {text: "instagram", link: "https://www.instagram.com", target: "_black"},
        {text: "twitter", link: "https://www.twitter.com", target: "_black"}
    ];

    // 각 항목 목록에 추가
    itemList.forEach(function(item) {
        let addLi = document.createElement("li");
        let addA = document.createElement("a");
        addA.href = item.link;
        addA.textContent = item.text;
        addA.target = item.target;

        addLi.appendChild(addA);
        addUl.appendChild(addLi);
    })
    // div에 추가
    miniShortcut.appendChild(addUl);
}

function addTtmMenu(){
    let addUl = document.createElement("ul");
    addUl.className = "ttm-list";
    let itemsList = [
        { text: "JOIN", link: "/join.do" },
        { text: "LOG-IN", link: "/login.do" },
        { text: "MY-PAGE", link: "/mypage.do" },
        { text: "BASKET", link: "/basket.do" },
        { text: "ORDER-INQUIRY", link: "/orderinquiry.do" },
        { text: "BOARD", link: "/board.do" }
    ];

    itemsList.forEach(function(item) {
        let addLi = document.createElement("li");
        let addA = document.createElement("a");
        addA.href = item.link;
        addA.textContent = item.text;

        addLi.appendChild(addA);
        addUl.appendChild(addLi);
    });

    // 검색창 설정
    addInput.type = "text";
    addInput.id = "search";
    addLi.appendChild(addInput);
    addLi.innerHTML += " 🔍";
    
    // 검색창 목록에 추가
    addUl.appendChild(addLi);
    topTopMenu.appendChild(addUl);

    let uid = 'null';
    let ul = document.querySelector(".ttm-list");
    let loginLi = ul.getElementsByTagName("li");
    if(uid != "null"){
        loginLi[1].innerHTML = '<a href="/logout.do">LOG-OUT</a>'
        loginLi[0].remove();
    }
}   




function addtbMenu(){
    let addUl = document.createElement("ul");
    addUl.className = "tbm-list";

    let allMenuAddLi = document.createElement("li");
    let allMenuAddA = document.createElement("a");
    let addIcon = document.createElement("i");
    allMenuAddLi.className = "view-all-menu";
    addIcon.className = "fa-solid fa-bars";
    allMenuAddA.textContent = "전체 메뉴 "
    allMenuAddA.href = "/allmenu.do"
    allMenuAddA.appendChild(addIcon);
    allMenuAddLi.appendChild(allMenuAddA);
    addUl.appendChild(allMenuAddLi);
    topBottomMenu.appendChild(addUl);

    let AllMenu = document.querySelector(".view-all-menu");

    let itemsList = [
        {title: "강이지 먹거리", link: "/Dfood.do", items: ["사료", "간식", "영양제"], subLinks: ["/dfood.do", "/dsnack.do", "/dhealth.do"]},
        {title: "강이지 용품", link: "/Dthings.do", items: ["집", "장난감", "밥그릇", "옷", "산책용품"], subLinks: ["/dhouse.do", "/dplay.do", "/dbowl.do", "/dcloth.do", "/doutdoor.do"]},
        {title: "고양이 먹거리", link: "/Cfood.do", items: ["사료", "간식", "영양제"], subLinks: ["/cfood.do", "/csnack.do", "/chealth.do"]},
        {title: "고양이 용품", link: "/Cthings.do", items: ["집", "장난감", "밥그릇", "옷", "방콕용품"], subLinks: ["/chouse.do", "/cplay.do", "/cbowl.do", "/ccloth.do", "/cindoor.do"]},
        {title: "햄스터 먹거리", link: "/Hfood.do", items: ["사료", "간식", "영양제"], subLinks: ["/hfood.do", "/hsnack.do", "/hhealth.do"]},
        {title: "햄스터 용품", link: "/Hthings.do", items: ["집", "장난감", "밥그릇", "챗바퀴", "이갈이"], subLinks: ["/hhouse.do", "/hplay.do", "/hbowl.do", "/hwheel.do", "/htooth.do"]},
        {title: "이벤트 상품", link: "/eventproduct.do", items: ["기간 할인 상품", "신상품 할인 이벤트", "시즌 한정 상품"]}
    ]

    itemsList.forEach(function(menu){
        let addLi = document.createElement("li");
        let addA = document.createElement("a");
        addLi.className = "tbm-list-li";
        addA.textContent = menu.title;
        addA.href = menu.link;

        let subMenuUl = document.createElement("ul");
        subMenuUl.className = "sub_menu";

        menu.items.forEach(function(item, index){
            let addSubLi = document.createElement("li");
            let addSubA = document.createElement("a");
            
            addSubA.textContent = item;
            if (menu.subLinks && menu.subLinks[index]) {
                addSubA.href = menu.subLinks[index];
            }
            
            subMenuUl.appendChild(addSubLi);
            addSubLi.appendChild(addSubA);
        })
        addLi.appendChild(addA);
        addLi.appendChild(subMenuUl);
        addUl.appendChild(addLi);
    })
    topBottomMenu.appendChild(addUl);

    function viewAllMenu(){
        let addDiv = document.createElement("div");
        addDiv.className = "sub_all_menu";
        itemsList.forEach(function(menu){
            let addUl = document.createElement("ul");
            let addA = document.createElement("a");
            addA.textContent = menu.title;
            addA.href = menu.link;
            addUl.appendChild(addA);
    
            menu.items.forEach(function(item, index){
                let addSubLi = document.createElement("li");
                let addSubA = document.createElement("a");
                
                addSubA.textContent = item;
                if (menu.subLinks && menu.subLinks[index]) {
                    addSubA.href = menu.subLinks[index];
                }
                
                addSubLi.appendChild(addSubA);
                addUl.appendChild(addSubLi);
            })
            addDiv.appendChild(addUl);
            AllMenu.appendChild(addDiv);
        })
    }
    viewAllMenu();

}

function moveNav(){
    document.addEventListener('scroll', onScroll, {passive:true});
    let top = document.querySelector("#top");
    let height = top.clientHeight;

    function onScroll(){
        let scrollPosition = pageYOffset;

        let topNav = document.querySelector("#top-btm");
        let lSideNav = document.querySelector("#scroll_left");
        let rSideNav = document.querySelector("#scroll_right");
        let lNavBtn = document.querySelector("#left_scroll_btn");
        if (height <= scrollPosition){
            topNav.classList.add('top-btm_fixed');
            lSideNav.classList.add('fixed');
            rSideNav.classList.add('fixed');
            lNavBtn.classList.add('fixed_btn');
            lNavBtn.classList.remove('fix_btn');
          }
        else {
            topNav.classList.remove('top-btm_fixed');
            lSideNav.classList.remove('fixed');
            rSideNav.classList.remove('fixed');
            lNavBtn.classList.remove('fixed_btn');
            lNavBtn.classList.add('fix_btn');
          }
    }
}

function changeAd(){
    let nav = document.querySelector("#scroll_left");
    let addList = [
        {id: "ad1", link: "/ad1.do", class: "advertisement", src: "img/ad/광고_02_advertisement1.jpg"},
        {id: "ad2", link: "/ad2.do", class: "advertisement", src: "img/ad/광고_02_advertisement2.jpg"}
    ]
    
    addList.forEach(function(element){
        let addDiv = document.createElement("div");
        let addA = document.createElement("a");
        let addImg = document.createElement("img");

        addImg.className = element.class;
        addImg.src = element.src;
        addA.href = element.link;
        addDiv.id = element.id;

        addA.appendChild(addImg);
        addDiv.appendChild(addA);
        nav.appendChild(addDiv);
    })

    function AdChange(){
        let ad1 = document.querySelector("#ad1");
        let ad2 = document.querySelector("#ad2");
    }
}

function goTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function  goDown(){
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 100) {

    } else {

    }
 });