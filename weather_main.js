 function weatherscript()
{
    var fail = document.getElementById("city").value;
    console.log(fail);
    if(fail!==""){
        document.getElementById("if-failed").innerHTML='';
        console.log("Success!!");
    }
        
    else   
        document.getElementById("if-failed").innerHTML='<div class="alert alert-info" id="if-failed"><strong>Alert!</strong> Enter City.</div>';
}