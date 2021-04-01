let g = 0
document.querySelector(".start").onclick = function(e) {
    e.target.disabled=true
    reloader()
    function game() {
        g = Math.floor(Math.random() * 5)
        document.querySelectorAll(".bub")[g].style.top = "5%"
        setTimeout(game, 1700) 
        if(document.querySelectorAll(".bub")[g].style.top === "5%") {
            setTimeout(()=> {
                document.querySelectorAll(".bub")[g].style.top = "110%"
            }, 800)  
        }
    }
    game()
}

let c = 21 
let mas = []
function reloader() {
    c--
    document.querySelector(".time_info").innerHTML = c
    document.querySelectorAll(".bub").forEach(x => x.onclick = function(e){  
        mas.push("x")
        if(e.target.className.split(" ")[0]=="bub") {
            e.target.classList.add("bub_clip")
            setTimeout(function() {
                e.target.classList.remove("bub_clip")
            }, 1000)
        }
        document.querySelector(".score_info").innerHTML = mas.length
        if(mas.length>1) {
            document.querySelector(".statut_info").innerHTML = "You are a beginner."
        }
        if(mas.length>4) {
            document.querySelector(".statut_info").innerHTML = "Congratulations, You are a junior!"
        }
        if(mas.length>7) {
            document.querySelector(".statut_info").innerHTML = "Middle :)"
        }
        if(mas.length>9) {
            document.querySelector(".statut_info").innerHTML = " Oh Senior!"
        }
        if(mas.length>12) {
            document.querySelector(".statut_info").innerHTML = "WTF expert, nice work !!!"
        }
     })
    let timer = setTimeout(reloader, 1000);
    
    if(c<1) {
        document.querySelector(".finish").classList.remove("turnOff")
        const text_status =  document.querySelector(".statut_info").textContent
        const text_score =  document.querySelector(".score_info").textContent
        document.querySelector(".finish_status").innerHTML = text_status
        document.querySelector(".finish_score").innerHTML = text_score
        document.querySelector(".play_again").onclick = function() {
            window.location.reload()
        }
        clearTimeout(timer)
    }
}




