let mode = 0;
let r = document.documentElement;

function ModeToggle() {
    if(mode === 0) {
        mode = 1;
        r.style.setProperty('--body', 'var(--nord1)');
        document.getElementById('dmtg').style.backgroundColor = 'var(--nord5)';
    } else if (mode === 1){
        mode = 0;
        r.style.setProperty('--body', 'var(--nord6)');
        document.getElementById('dmtg').style.backgroundColor = 'var(--nord1)';
    } else {
        window.alert("Dark mode broken, please reload");
    }
}

