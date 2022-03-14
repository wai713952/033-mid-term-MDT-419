function postFunction(){

    var tbox = document.getElementById("text1").value;
    var top1 = document.getElementById("topic1");
    var com1 = document.getElementById("comment1");
    var com2 = document.getElementById("comment2");

    if(top1.innerHTML == "")
    {
        top1.innerHTML = tbox;
    }
    else if(com1.innerHTML == "")
    {      
        com1.innerHTML = tbox;
    }
    else if(com2.innerHTML == "")
    {
        com2.innerHTML = tbox;
    }
}


function clearFunction(){

    var top1 = document.getElementById("topic1");
    top1.innerHTML = null;
    var com1 = document.getElementById("comment1");
    com1.innerHTML = null;
    var com2 = document.getElementById("comment2");
    com2.innerHTML = null;
}


// var Topic1;
// var Comment1;
// var Comment2

// window.onload = setvar;
// function setvar(){
//     Topic1 = document.getElementById("topic1").value;
//     Comment1 = document.getElementById("comment1").value;
//     Comment2 = document.getElementById("comment2").value;
// }

// function postFunction(){
//     var PostText = document.getElementById("text1").value;
//     if(Topic1.innerHTML == ""){
//         Topic1.innerHTML = PostText;
//     }
//     else if(Comment1.innerHTML == ""){
//         Comment1.innerHTML = PostText;
//     }
//     else if(Comment2.innerHTML == ""){
//         Comment2.innerHTML = PostText;
//     }
//     document.getElementById("text1").value = "";
// }

// function clearFunction(){
//     Topic1.innerHTML = null;
//     Comment1.innerHTML = null;
//     Comment2.innerHTML = null;
// }