window.onload = pageLoad;
function pageLoad(){
    var submitButton = document.getElementById("myForm");
    submitButton.onsubmit = validateForm;
    submitButton.onreset = resetForm;
}

function resetForm(){
    alert("Reset");
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var errormsg = document.getElementById("errormsg");
    var password = document.forms["myForm"]["password"];
    if(password[0].value == password[1].value){
        alert("Register Completed");
    }
    else{
        errormsg.innerHTML = "Wrong password confirmation.";
        return false;
    }
}