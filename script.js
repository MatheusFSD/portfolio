function clickmenu() {
  let botaoportifolio = document.querySelector('.linktree');
  let progressbar = document.getElementsByClassName('progress');

  if (menuhamburger.classList == 'menuhamburger'){
    menuhamburger.classList.replace('menuhamburger','menuhamburger-ativado');
    document.getElementById("iconemenu").innerHTML = 'close';
    // mascara.classList.add("mascaramenu-ativado");
    mascara.style.background = '#333'
    mascara.style.opacity = '80%'

    if (botaoportifolio != null) {
      botaoportifolio.style.backgroundColor = '#333'
    }
    if (progressbar != null) {
      for(i = 0; i < progressbar.length; i++) {
        progressbar[i].style.border = 'none'
        progressbar[i].style.boxShadow = 'none'
      }
    }
  } else {
    menuhamburger.classList.replace('menuhamburger-ativado','menuhamburger');
    document.getElementById("iconemenu").innerHTML = 'menu';
    mascara.style.background = 'linear-gradient(159.02deg, rgba(255, 255, 255, 0.9) 9.93%, rgba(255, 255, 255, 0) 130.65%)'
    mascara.style.opacity = '100%' 

    if (botaoportifolio != null) {
      botaoportifolio.style.backgroundColor = '#FFFFFF'
    }
    if (progressbar != null) {
      for(i = 0; i < progressbar.length; i++) {
        progressbar[i].style.border = '1px solid #fff'
        progressbar[i].style.boxShadow = '0 0 10px #aaa'
      }
    }
    
  } 
}

iconemenu.addEventListener('click', clickmenu)
let mascara = document.querySelector("main");






let barra = {
  htmlcss: '87%',
  javascript: '80%',
  figma: '96%',
  git: '65%',
  react: '60%',
  node: '56%',
}

if (document.querySelector('.progress') != null) {
  for (let campo in barra) {
    setTimeout(() => {
      let bar = document.querySelector(`.${campo}`);
      bar.style.setProperty("--progress", `${barra[campo]}`);
    }, 0);
  }
}

