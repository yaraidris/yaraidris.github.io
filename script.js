

window.addEventListener("load", function (event){

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


})
