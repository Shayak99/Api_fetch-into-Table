const getdetails = async() =>{
    const response = await fetch('https://reqres.in/api/users?page=2');
    const data = await response.json();

    let temp="";
    
    data.data.forEach(item => {
        temp += "<tr>";
        temp += "<td>"+item.id+"</td>";
        temp += "<td>"+item.email+"</td>";
        temp += "<td>"+item.first_name+"</td>";
        temp += "<td>"+item.last_name+"</td>";
        temp += "<td>"+`<img src=${item.avatar}></img>`+"</td>"+"</tr>";
    })
    console.log(temp);
    document.getElementById("tbody").innerHTML = temp || "not found";
}

getdetails();