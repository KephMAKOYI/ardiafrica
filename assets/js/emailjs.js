function sendMail(){
    (function(){
        emailjs.init("Tawg44O02Uab-Nmk6");
    })();

    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };
    
    const serviceID = "service_uopbmzo";
    const templateID = "template_b8fn2gf";

    emailjs.send(serviceID, templateID, params).then(
        (res)=> {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value= "";
        console.log(res);
        alert ("Your message sent successfully");
    })
    .catch((err) => console.log(err)); 
}