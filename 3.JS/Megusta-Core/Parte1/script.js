console.log("page loading...");

var likeCount = 3;
let likeSpan1 = document.querySelector("#post-1");

function like(id) {
    likeCount++;
    likeSpan1.innerText= likeCount + "like(s)";


}