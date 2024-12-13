document.getElementById("generateButton").onclick = (e) =>{
    const text = document.getElementById("memoryDescription").value;

    if(text == ""){
        alert("Please enter a description");
    }
    
}