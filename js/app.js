// form register show
const addStudent = document.querySelector(".wrapper");
const addButton = document.querySelector("#QuickAdd");
addButton.addEventListener('click', e =>{
    addStudent.style.display = 'flex';
    container.style.display = "none";
    addBtn.style.display = "block";
    updatBtn.style.display = "none";
    Id.value = "";
    Name.value = "";
    gender[0].checked = false;
    gender[1].checked = false;
    startData.value = "";
    endData.value = "";
    email.value = "";
    select.value = "";
});

// Add list of students
let tbody = document.querySelector('tbody');
let Id = document.querySelector('#number');
let Name = document.querySelector('#fname');
let gender = fillForm.gender;
let email = document.querySelector("#email");
let startData = document.querySelector('#startDate');
let endData = document.querySelector('#endDate');
let select = document.querySelector('#theMajor');

function addItem(event) {
    event.preventDefault();
    // Create a tr 
    if (Id.value === "" || Name.value === "" || gender.value.length === 0 || startData.value.length === 0 || endData.value.length === 0 || email.value === "") {
        alert("All field cannot empty !")
    } else {
        if (startData.value <= endData.value) {
            warning.style.display = "none";
            let tr = document.createElement('tr');
            // Create 7 td
            let td1 = document.createElement('td');
            td1.textContent = Id.value;
            let td2 = document.createElement('td');
            td2.textContent = Name.value;
            let td3 = document.createElement('td');
            td3.textContent = gender.value;
            let td4 = document.createElement('td');
            td4.textContent = startData.value;
            let td5 = document.createElement('td');
            td5.textContent = endData.value;
            let td6 = document.createElement('td');
            td6.textContent = email.value;
            let td7 = document.createElement('td');
            td7.textContent = select.value;
            let td8 = document.createElement('td');
            td8.className = 'fa fa-pencil';
            let td9 = document.createElement('td');
            td9.className = 'fa fa-trash-o';

             // Clear value 
             Id.value = "";
             Name.value = "";
             gender[0].checked = false;
             gender[1].checked = false;
             startData.value = "";
             endData.value = "";
             email.value = "";
             select.value = "";

            // Add all td into tr
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);

            // Add tr to table
            tbody.appendChild(tr);

            addStudent.style.display = 'none';
            container.style.display = "block";
        } else {
            warning.style.display = "block";
        }
    }
}
let warning = document.querySelector('#warning');
let addBtn = document.querySelector('.submit_btn');
addBtn.addEventListener('click', addItem);

// Delete item
function removeItem(event) {
    let nameOfClass = event.target.className;
    if (nameOfClass === "fa fa-trash-o") {
        let toRemove = event.target.parentElement;
        toRemove.remove();
    } else if (nameOfClass === "fa fa-pencil") {
        list = event.target.parentElement;
        addStudent.style.display = 'flex';
        container.style.display = "none";
        updatBtn.style.display = "block";
        addBtn.style.display = "none";

        Id.value = list.children[0].textContent;
        Name.value = list.children[1].textContent;
        if (gender.value === "Male") {
            gender[0].checked = true;
        } else {
            gender[1].checked = true;
        }
        startData.value = list.children[3].textContent;
        endData.value = list.children[4].textContent;
        email.value = list.children[5].textContent;
        select.value = list.children[6].textContent;
        
        updatBtn.addEventListener('click', function() {
            list.children[0].textContent = Id.value;
            list.children[1].textContent = Name.value;
            list.children[2].textContent = gender.value;
            list.children[3].textContent = startData.value;
            list.children[4].textContent = endData.value;
            list.children[5].textContent = email.value;
            list.children[6].textContent = select.value;
            addStudent.style.display = "none";
            container.style.display = "block"
        });
    }
}
let getTable = document.querySelector('table');
getTable.addEventListener('click', removeItem);
let updatBtn = document.querySelector('.update_btn');

// Search Item
function searchItem() {
    let text = inputValue.value.toLowerCase();
    let item = document.querySelectorAll('tbody tr');
    for (let items of item) {
        let nameId = items.children[1].textContent.toLowerCase();
        if (nameId.indexOf(text) === -1) {
            items.style.display = 'none';
        } else {
            items.style.display = '';
        }
    }
}

let inputValue = document.querySelector(".search-data")
inputValue.addEventListener('keyup', searchItem);

// Hide show 
function close(event) {
    event.preventDefault();
    addStudent.style.display = "none";
    container.style.display = "block"
}
let cancelBtn = document.querySelector('.cancel_btn');
cancelBtn.addEventListener('click', close);

let container = document.querySelector('.body-content');
