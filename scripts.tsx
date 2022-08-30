let isLightMode: boolean = false;
let r = document.documentElement;

r.style.setProperty('--body', 'var(--nord6)');
r.style.setProperty('--cont', 'var(--nord0)');
r.style.setProperty('--contless', 'var(--nord4)');

function ModeToggle() {
    if(isLightMode == false) {
        r.style.setProperty('--body', 'var(--nord0)');
        r.style.setProperty('--cont', 'var(--nord6)');
        r.style.setProperty('--contless', 'var(--nord3)');
        document.getElementById("Moon").style.visibility = 'hidden';
        document.getElementById("Sun").style.visibility = 'visible';
        isLightMode = true;
    } else if (isLightMode == true){
        r.style.setProperty('--body', 'var(--nord6)');
        r.style.setProperty('--cont', 'var(--nord0)');
        r.style.setProperty('--contless', 'var(--nord4)');
        document.getElementById("Moon").style.visibility = 'visible';
        document.getElementById("Sun").style.visibility = 'hidden';
        isLightMode = false;
    } else {
        window.alert("Dark mode broken, please reload");
        console.log(isLightMode);
    }
}