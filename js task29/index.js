function ascci(){
    var a = document.getElementById("namet").value
    var b = document.getElementById("dobt").value
    var c = ""
    
     for (let index = 0; index < a.length; index++) {
        var asciiCode = a.charCodeAt(index);
        b+=asciiCode
    }
    document.getElementById("licenset").textContent = b 
}
