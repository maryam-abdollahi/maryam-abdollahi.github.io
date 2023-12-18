function createobject(){
    var name=document.getElementById('name').value;
    var name=document.getElementById('phonenum').value;
    var name=document.getElementById('pass').value;
    var newobj={name:name,phonenume:phonenume,pass:pass};
}
document.getElementById("sub").onclick = function() {myFunction()}; 
document.getElementById("page").onclick = function() {myFunction()};       
function myFunction() {
  document.getElementById("sub").innerHTML = "از شرکت در نظر سنجی سایت متشکریم";
  document.getElementById("page").innerHTML = "هم اکنون در صفحه نخست هستید";
  document.getElementById("click").style.color = "darkblue";


}