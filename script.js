function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

   const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/ken.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/bladerunner.png")
    }
  

 
}