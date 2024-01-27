let array=[]
let index; 
window.onload = () => {
    editForm();
    array =JSON.parse(localStorage.getItem('array'))||[]; 
}

function validateForm(event) {

    var firstname =document.getElementById("fname").value;
    var lastname =document.getElementById("last").value;
    var email  =document.getElementById("email").value;

    if(firstname.trim()===''){
        document.getElementById("firstError").innerHTML ="firstname is required";
        document.getElementById("fname").style.border="2px solid red";
       
    }
    else{
        document.getElementById("firstError").innerHTML ='';
        document.getElementById("fname").style.border="";
    }
    
    if(lastname.trim()===''){
        document.getElementById("lastError").innerHTML ="lastname is required";
        document.getElementById("last").style.border="2px solid red";
       
    }

    else{
        document.getElementById("lastError").innerHTML ='';
        document.getElementById("last").style.border="";
    }
    
    if(email.trim()===''){
        document.getElementById("emailError").innerHTML ="email is required";
        document.getElementById("email").style.border="2px solid red";
       
    }

    else{
        document.getElementById("emailError").innerHTML ='';
        document.getElementById("email").style.border="";
    }

    if(firstname =="" || lastname =="" || email ==""){
        event.preventDefault();
    }

    let obj={firstname,lastname,email};
    if(firstname!==""&&lastname!==""&&email!==""){
    if(index!==null){
        array[index]=obj;
       }
       else{
    array.push(obj);
    console.log(array);
}
  }
    localStorage.setItem("array",JSON.stringify(array))
    window.location.href="table.html";
    document.getElementById("fname").value=""
    document.getElementById("last").value=""
    document.getElementById("email").value="" 
}

function editForm(id){
    var url_string = window.location.href.toLocaleLowerCase();
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    array =JSON.parse(localStorage.getItem('array'))||[];
    index=id;
    console.log(id);
    if(id){
    document.getElementById("fname").value=array[id].firstname;
    document.getElementById("last").value=array[id].lastname;
    document.getElementById("email").value=array[id].email;
    }
}






  

 