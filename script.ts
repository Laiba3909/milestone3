function onSubmit(){
    const userConfirmation = confirm("Are you sure you want to submit the form");
    if(userConfirmation){
        alert("Your form hhas been submit")
    }
  
}

function submitForm(): void {
   
    const form = document.getElementById('resumeForm') as HTMLFormElement | null;
    if (form === null) {
        console.error('Form not found');
        return;
    }
    const formData = new FormData(form);
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Field,Value\n";
    formData.forEach((value, key) => {
        csvContent += `${key},${value}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "resume.csv");
    document.body.appendChild(link); 


    link.click();

    document.body.removeChild(link);
}
