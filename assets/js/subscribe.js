$('#myModal').on('show.bs.modal', function (e) {
var button = e.relatedTarget;
if($("#submitForm").val().length==0) {
e.stopPropegation();
}  
});






/*let cupCup = function cup () {
    let cups = document.getElementById('cups').value;
}

let brewBrew = function brew (){
 let brewStyle = document.querySelectorAll('input[name="brewChoice"]')
 let selectedBrew;
 for (let brew of brewStyle){
     if(brew.checked){
         selectedBrew=brew.value;
     }
 }



 break
}

btn.onclick = function calc() {
   let result = cupCup * brewBrew / 250;
     document.getElementById('my-total').innerHTML = (`asdasdasd ${result}`);
}
*/