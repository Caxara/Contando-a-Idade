
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = window.document.getElementById("txtano")
    var resultado = window.document.querySelector("div#res")

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsexo = window.document.getElementsByName("radsex")
        var idade = ano - Number(formularioAno.value)
        var gênero = ""

        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsexo[0].checked) {
            gênero = "Homem"

            if(idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute("src", "/img/foto-bebe-m.png")

            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "/img/foto-jovem-m.png")
            
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "/img/foto-adulto-m.png")
            
            } else {
                //idoso
                img.setAttribute("src", "/img/foto-idoso-m.png")
            }


        } else if (fsexo[1].checked) {
            gênero = "Mulher"

            if(idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute("src", "/img/foto-bebe-f.png")

                } else if (idade < 21) {
                    //jovem
                    img.setAttribute("src", "/img/foto-jovem-f.png")

                } else if (idade > 21 && idade < 50) {
                    //adulto
                    img.setAttribute("src", "/img/foto-adulto-f.png")

                } else {
                    //idoso
                    img.setAttribute("src", "/img/foto-idoso-f.png")
                }
        }
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}