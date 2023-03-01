function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //ano atual
    var form = document.querySelector("input#txtano") //ano declarado no formulario
    var res = document.querySelector("div#res")

    if (form.value.length == 0 || Number(form.value.length) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var sex = window.document.getElementsByName("radsex")
        var idade = ano - Number(form.value)
        var genero = ''
        var img= document.createElement("img") // atraves desse comando, o JS irá criar uma tag "img" no HTML
        
        //img.setAttribute('id','foto'), ensinado no curso mas nao foi usado

        if(sex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade <=12){
                //criança
                img.setAttribute("src","criançamenino.jpg")
            } else if (idade <18){
                //jovem
                img.setAttribute("src","jovemmenino.jpg")
            } else if (idade <60){
                //adulto
                img.setAttribute("src","adultohomem.jpg")
            } else { 
                //idoso
                img.setAttribute("src","idosohomem.jpg")
            }
            
        } else if(sex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade <=12){
                //criança
                img.setAttribute("src","criançamenina.jpg")
            } else if (idade <18) {
                //jovem
                img.setAttribute("src","jovemmenina.jpg")
            } else if (idade <60){
                //adulto
                img.setAttribute("src","adultomulher.jpg")
            } else {
                //idosa
                img.setAttribute("src","idosomulher.jpg")
            }
        }
        res.style.textAlign ="center" // é a mesma formatação de um CSS só que em JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // é o comando que irá fazer as imagens configuradas aparecerem
    }

}