window.addEventListener("load", function (event) {

    let i = 0;
    let txt = 'Hello I am Yara!'; /* The text */
    let speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            let n = document.getElementById("name")
            console.log(n)
            n.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter()

    let edu = document.getElementById("education");
    let exp = document.getElementById("experience");
    let skill = document.getElementById("skills");

    edu.style.display = "block";
    exp.style.display = "none";
    skill.style.display = "none";


    document.getElementById("eduB").addEventListener("click", function(event) {
        edu.style.display = "block";
        exp.style.display = "none";
        skill.style.display = "none";
    })

    document.getElementById("expB").addEventListener("click", function(event) {
        edu.style.display = "none";
        exp.style.display = "block";
        skill.style.display = "none";
    })

    document.getElementById("skillsB").addEventListener("click", function(event) {
        edu.style.display = "none";
        exp.style.display = "none";
        skill.style.display = "flex";
    })

})

