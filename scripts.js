let mode = 0;
let r = document.documentElement;

r.style.setProperty('--body', 'var(--nord6)');
r.style.setProperty('--cont', 'var(--nord0)');
r.style.setProperty('--contless', 'var(--nord4)');

function ModeToggle() {
    if(mode < 1) {
        r.style.setProperty('--body', 'var(--nord0)');
        r.style.setProperty('--cont', 'var(--nord6)');
        r.style.setProperty('--contless', 'var(--nord3)');
        document.getElementById("Moon").style.visibility = 'hidden';
        document.getElementById("Sun").style.visibility = 'visible';
        mode = 1;
    } else if (mode > 0){
        r.style.setProperty('--body', 'var(--nord6)');
        r.style.setProperty('--cont', 'var(--nord0)');
        r.style.setProperty('--contless', 'var(--nord4)');
        document.getElementById("Moon").style.visibility = 'visible';
        document.getElementById("Sun").style.visibility = 'hidden';
        mode = 0
    } else {
        window.alert("Dark mode broken, please reload");
        console.log(mode)
    }
}


