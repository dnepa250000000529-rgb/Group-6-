// 1. Target HTML Elements
const categoryForm = document.getElementById("categoryForm");
const txtCatName = document.getElementById("txtCatName");
const txtCatDesc = document.getElementById("txtCatDesc");
const btnAdd = document.getElementById("btnAdd");

const tableBody = document.getElementById("listIncomeCat");
const categoryBadge = document.getElementById("categoryBadge");


// 2. Function to update the category counter
function updateBadge() {

    // Mandatory technique from instruction
    const rowCount = tableBody.querySelectorAll("tr").length;

    categoryBadge.textContent = Active Categories: ${rowCount};
}


// 3. Add Category Function
btnAdd.addEventListener("click", function() {

    const categoryName = txtCatName.value.trim();
    const categoryDesc = txtCatDesc.value.trim();


    // Check if fields are empty
    if(categoryName === "" || categoryDesc === "") {
        alert("Please fill in all fields.");
        return;
    }


    // Create new table row
    const row = document.createElement("tr");


    row.innerHTML = `
        <td>${categoryName}</td>
        <td>
            ${categoryDesc}
            <button class="btn btn-danger btn-sm float-end"
            onclick="deleteCategory(this)">
            Delete
            </button>
        </td>
    `;


    // Add row to table
    tableBody.appendChild(row);


    // Update counter
    updateBadge();


    // Clear input fields
    txtCatName.value = "";
    txtCatDesc.value = "";

});


// 4. Delete Category Function
function deleteCategory(button) {

    // Remove the selected row
    button.closest("tr").remove();


    // Update counter after deletion
    updateBadge();

}
DAVEY JAMES A. KHEE, Now
const txtCatName = document.getElementById("txtCatName");
const txtCatDesc = document.getElementById("txtCatDesc");
const btnAdd = document.getElementById("btnAdd");

const tableBody = document.getElementById("listIncomeCat");
const categoryBadge = document.getElementById("categoryBadge");


function updateBadge() {

    const rowCount = tableBody.querySelectorAll("tr").length;

    categoryBadge.textContent = Active Categories: ${rowCount};

}


btnAdd.addEventListener("click", function(){

    const categoryName = txtCatName.value.trim();
    const categoryDesc = txtCatDesc.value.trim();


    if(categoryName === "" || categoryDesc === ""){
        alert("Please fill in all fields.");
        return;
    }


    const row = document.createElement("tr");


    row.innerHTML = `
        <td>${categoryName}</td>

        <td>
            ${categoryDesc}

            <button class="btn btn-danger btn-sm float-end"
            onclick="deleteCategory(this)">
            Delete
            </button>

        </td>
    `;


    tableBody.appendChild(row);


    updateBadge();


    txtCatName.value = "";
    txtCatDesc.value = "";

});


function deleteCategory(button){

    button.closest("tr").remove();

    updateBadge();

}
