function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    img.style.width = '200px'
    img.style.height = '200px'
    img.style.borderRadius = '50%'
    if(fsex[0].checked) {
      genero = ' homem'
      if (idade >=0 && idade<10) {
        //criança
        img.setAttribute('src', '1.jpg')
      } else if (idade < 21) {
         //jovem
         img.setAttribute('src', '2.jpg')
       } else if (idade < 58){
         //adulto
         img.setAttribute('src', '3.jpg')
       } else {
         //velho
         img.setAttribute('src', '4.jpg')
       }

      
    } else if(fsex[1].checked) {
      genero = 'a mulher'
       if (idade >=0 && idade<10) {
         //criança
         img.setAttribute('src', '5.jpg')
       } else if (idade < 21) {
         //jovem
         img.setAttribute('src', '6.jpg')
       } else if (idade < 58){
         //adulto
         img.setAttribute('src', '7.jpg')
       } else {
         //velho
         img.setAttribute('src', '8.jpg')
       }

    }
    //res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um${genero} com ${idade} anos.`
    
    res.appendChild(img)
  }
}