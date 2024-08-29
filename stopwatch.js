let [m,s] = [0,0];
let time = document.getElementById("time");
let timer = null;

function play(){
        s++;
        if(s == 60){
            m++;
            s = 0;
            if(m == 60){
                m = 0;
            }
        }
    time.innerHTML = m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0');
}

function watchstart(){
    if(timer !== null)
        clearInterval(timer);
    timer = setInterval(play, 1000);
}

function watchstop(){
    clearInterval(timer);
}
function watchreset(){
    clearInterval(timer);
    [m,s,ms]=[0,0,0]
    time.innerHTML = m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0');

}
function navigateToInfo() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'info.html';
    }, 500); // Delay should match CSS transition duration
}

// Attach the navigate function to the click event
document.getElementById('info').addEventListener('click', navigateToInfo);