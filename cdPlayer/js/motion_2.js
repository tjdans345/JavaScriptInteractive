
var prev_button, next_button;
var pageNum = 0;
var totalNum = 0;
var album;
var pointBynAll;
var bgArray = new Array();
bgArray[0] = ["#0272a4", "#f6a564"];
bgArray[1] = ["red", "black"];
bgArray[2] = ["#b7c0c9", "#285c5a"]

window.onload = function( ) {
    prev_button = document.querySelectorAll("button")[0];
    next_button = document.querySelectorAll("button")[1];

    album = document.querySelectorAll(".album");
    totalNum = album.length;
    console.log(pageNum);
    
    prev_button.addEventListener("click", function(){
        if(pageNum > 0) {
            pageNum--;
        } else {
            pageNum = 0;
        }
        pageChangeFunc();
    });

    next_button.addEventListener("click", function() {

        if(pageNum < totalNum -1) {
            pageNum++;
        } else {
            pageNum = 0;
        }
        pageChangeFunc();
    });


    // 최초 실행
    pageNum = 1;
    pageChangeFunc();
}

function pageChangeFunc() {

    document.querySelector(".contentWrap").style.background = "linear-gradient(1200deg," + bgArray[pageNum[0]] + ","+bgArray[pageNum][1] + ")";


    for(var i=0; i<totalNum; i++) {
       if(pageNum == i) {
           // 현재 컨텐츠(페이지)
        album[i].classList.add("active")
        } else {
            album[i].classList.remove("active");
        }

}
}