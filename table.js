let array = [];
window.onload = () => {
    table();
}
// //table add//
function table(){
    array=JSON.parse(localStorage.getItem('array'))||[];
    let coloum="";
    for  (let i=0;i<array.length;i++){
        coloum+="<tr>";
        coloum+="<td>"+array[i].firstname+"</td>"
        coloum+="<td>"+array[i].lastname+"</td>"
        coloum+="<td>"+array[i].email+"</td>"
        coloum+="<td><button class='btn de' onclick='editForm("+i+")'>Edit</button>  <button class='btn de' onclick='deleteForm("+i+")'>Delete</button></td>";
        coloum += "</tr>";
    } 
  document.getElementById("tbody").innerHTML= coloum;
}


// function edit
function editForm(id){
 array=JSON.parse(localStorage.getItem('array'))||[];
index = id;      
window.location.href ="index.html?id="+id;
 }
 function returnPage() {
    window.location.href="index.html";
}
// function delete
function deleteForm(id){
    // array=JSON.parse(localStorage.getItem('array'))||[];
    array.splice(id,1)
    localStorage.setItem("array",JSON.stringify(array));
    table()
}




