function onSubmit() {
    var userConfirmation = confirm("Are you sure you want to submit the form");
    if (userConfirmation) {
        alert("Your form hhas been submit");
    }
}
function submitForm() {
    var form = document.getElementById('resumeForm');
    if (form === null) {
        console.error('Form not found');
        return;
    }
    var formData = new FormData(form);
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Field,Value\n";
    formData.forEach(function (value, key) {
        csvContent += "".concat(key, ",").concat(value, "\n");
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "resume.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
