export default function renderTable(tableBody,employees,onDelete){
    tableBody.innerHTML="";
    employees.forEach((employee , index)=>{
        const tr =document.createElement("tr");
        tr.innerHTML=`
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.age}</td>
            <td>${employee.salary}</td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
        `;
        tr.querySelector(".deleteBtn")
        .addEventListener("click",()=>onDelete(index));
        tableBody.appendChild(tr);

    });

}