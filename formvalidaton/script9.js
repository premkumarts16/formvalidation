function validatename() {
  let text = document.getElementById("inputname").value;
  reg = /^[a-zA-z ]+$/;
  if (reg.test(text)) {
    document.getElementById("warning").innerHTML = "success";
    document.getElementById("warning").style.color = "green";
    return true
  } else {
    document.getElementById("warning").innerHTML = "failed";
    document.getElementById("warning").style.color = "red";
    return false
  }
}

function validatemobnum() {
  let text = document.getElementById("mnum").value;
  let reg = /^[0-9]{10}$/;
  if (reg.test(text)) {
    document.getElementById("warning-mob").innerHTML = "success";
    document.getElementById("warning-mob").style.color = "green";
    return true
  } else {
    document.getElementById("warning-mob").innerHTML = "failed";
    document.getElementById("warning-mob").style.color = "red";
    return false
  }
}
function validateEmail() {
  let text = document.getElementById("emailinput").value;
//   dot work cheyyunilla
  reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
  if (reg.test(text)) {
    document.getElementById("emailerror").innerHTML = "success";
    document.getElementById("emailerror").style.color = "green";
    return true
  } else {
    document.getElementById("emailerror").innerHTML = "failed";
    document.getElementById("emailerror").style.color = "red";
    return false
  }
}




function validateAllFields(){
  const message=document.getElementById("message");
  const inputname=document.getElementById("inputname").value;
  if(inputname.length==0){
    message.innerText="Please Enter Your Details"
    message.style.display="block"
    return false
  }
  alert ("successs")
  return false
}