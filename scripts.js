let mode = localStorage.getItem('mode') || 0;
let r = document.documentElement;

function ModeToggle() {
    if(mode === 0) {
        r.style.setProperty('--body', 'var(--nord0)');
        r.style.setProperty('--cont', 'var(--nord6)');
        mode = 1;
        localStorage.setItem('mode', 1);
    } else if (mode > 0){
        r.style.setProperty('--body', 'var(--nord6)');
        r.style.setProperty('--cont', 'var(--nord0)');
        mode = 0;
        localStorage.setItem('mode', 0);
    } else {
        window.alert("Dark mode broken, please reload");
    }
}


