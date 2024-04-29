// Select input Element

const colorPicker= document.getElementById("color")

// Event-->> Change//

colorPicker.addEventListener('change',()=>{
    console.log(colorPicker.value)
    document.body.style.backgroundColor= colorPicker.value;
});