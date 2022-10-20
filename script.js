function changeColor(){
    var a=document.getElementById('enterno').value;
   
    for(var i=1;i<=30;i++){
    if(a==i){
        document.getElementById(a).style.background="green";
    }
   
   
}

}