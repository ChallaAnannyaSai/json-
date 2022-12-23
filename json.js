let d = document.getElementById("b1")
d.addEventListener("click", function f1(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data=> handledata(data))

})
 let table = document.getElementById("t1")
function handledata(data){
    for (i in data){
        let row =
        `<tr>
        <td>${data[i].id}</td> 
        <td>${data[i].name}</td> 
        </tr>`
        table.innerHTML+=row
    }
}