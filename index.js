let first = document.getElementById("first")
let second = document.getElementById("Second")
let show = document.getElementById('display')
function bola() {
    let me = first.value
    let we = second.value
    if (Number(me) > Number(we)) {
        alert("countdown begins")
        countdown();
    } else {
        alert("invalid input")
    }

}
function countdown() {
    let me = first.value
    let we = second.value
    timer = setInterval(() => {
        show.innerHTML = me--
        if (show.innerHTML == we) {
            clearInterval(timer)
            setTimeout(() => {
                 alert("time out")
            }, 1000);
        }

    }, 1000);
}
