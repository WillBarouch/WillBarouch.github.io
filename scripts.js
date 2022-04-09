let mode = 0;
let r = document.documentElement;

function ModeToggle() {
    if(mode === 0) {
        mode = 1;
        r.style.setProperty('--body', 'var(--nord0)');
        r.style.setProperty('--cont', 'var(--nord6)');
    } else if (mode === 1){
        mode = 0;
        r.style.setProperty('--body', 'var(--nord6)');
        r.style.setProperty('--cont', 'var(--nord0)');
    } else {
        window.alert("Dark mode broken, please reload");
    }
}

