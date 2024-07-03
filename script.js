
function updatecard() {
    document.getElementById("schoolnameval").innerText = document.getElementById("schoolname").value;
    document.getElementById("studentnamval").innerText = document.getElementById("studentname").value;
    document.getElementById("dobval").innerText = document.getElementById("dob").value;
    document.getElementById("classval").innerText = document.getElementById("class").value;
    document.getElementById("rollnumberval").innerText = document.getElementById("Rollno").value;
    document.getElementById("genderval").innerText = document.getElementById("gender").value;
    document.getElementById("contactnumberval").innerText = document.getElementById("contno").value;

}

//  Now Make a function when click the Clear All button then all filling data will remove


function clearall() {
    document.getElementById("schoolname").value = "";
    document.getElementById("studentname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("class").value = "";
    document.getElementById("Rollno").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("contno").value = "";
    document.getElementById("schoolnameval").innerText = "";
    document.getElementById("studentnamval").innerText = "";
    document.getElementById("dobval").innerText = "";
    document.getElementById("classval").innerText = "";
    document.getElementById("rollnumberval").innerText = "";
    document.getElementById("genderval").innerText = "";
    document.getElementById("contactnumberval").innerText = "";
    }

// make a function to print student admit card


function printidcard() {
    alert("Are You Want TO sure Print Student Id Card...");
    window.print();
}