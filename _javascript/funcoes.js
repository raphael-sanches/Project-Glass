
function entrada(a) {
    let icones = document.getElementById('icone-trans')
    if (a ==1) {
    icones.innerHTML = '<img id="icone" src="_imagens/_icones/home.png" ></img>'} 
    if (a ==2) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/specs.png" ></img>'}
    if (a ==3) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/pictures.png" ></img>'}
    if (a ==4) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/video.png" ></img>'}
    if (a==5) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/contact.png" ></img>'} 
    }

function saida(b) {
    let icones = document.getElementById('icone-trans')
    if (b==1) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/glass-oculos-preto-grd.png">'
    }
    if (b==2) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/specs.png">'
    }
    if (b==3) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/pictures.png">'
    }
    if (b==4) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/video.png">'
    }
    if (b==5) {
        icones.innerHTML = '<img id="icone" src="_imagens/_icones/contact.png">'
    }
}

function entradainterativo(b) {
    let specstxt = document.getElementById('conteudo-interativo')
    if (b == 1) {
        specstxt.innerHTML =  '<article id="top"><header><h1>Tela</h1><h2>Como o mundo vai aparecer</h2></header><p>De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça.</p></article> '  
    }
    if (b == 2) {
        specstxt.innerHTML = '<article id="top"><header><h1>Câmera</h1><h2>Filme e fotografe a qualquer momento</h2></header><p>Com o Google Glass será possível tirar fotos com até 5 megapixels e gravar vídeos com 720 linhas de resolução. Os primeiros vídeos e fotos capturados com o aparelho já começaram a circular pela rede, mas até agora ninguém tem muitas informações técnicas.</p></article>'
    }
    if (b == 3) {
        specstxt.innerHTML = '<article id="top"><header><h1>Sensores</h1><h2>A sensibilidade de um simples óculos</h2></header><p>Quem pensa que para comandar o Google Glass vai precisar de teclado e mouse, se engana redondamente. O dispositivo vem com vários tipos de sensores e microfones embutidos. Assim, para dar um comando, basta falar ou passar o dedo na lateral do óculos.</p></article>'
    }
if (b == 4) {
    specstxt.innerHTML = '<article id="top"><header><h1>Bateria e Gadgets</h1><h2>Quais são os dispositivos que complementam o Glass</h2></header><p>Segundo a própria Google, o Glass virá com uma bateria que tem autonomia suficiente para durar um dia inteiro. Apenas algumas atividades como videoconferências e longas filmagens vão exigir um pouco mais. Além disso ele vem com WiFi, Bluetooth, 3G/4G e muito mais.</p></article>'
}
}

function saidainterativo() {
    let specstxt = document.getElementById('conteudo-interativo')
    specstxt.innerHTML =  '<article id="top"> <header> <h2>Passe o Mouse e Clique sobre as áreas destacadas em vermelho<img src="_imagens/mao.png" alt="" width="300px" ></h2> </header></article>' 
}

function image(a) {
    let specstxt = document.getElementById('conteudo-interativo')
    if (a == 1) {
    specstxt.innerHTML =  '<img src="_imagens/det-tela.png" alt="" class="img-i" >'
         }
    if (a == 2) {
        specstxt.innerHTML =  '<img src="_imagens/det-camera.png" alt="" class="img-i" >'
        }
        if (a == 3) {
        specstxt.innerHTML =  '<img src="_imagens/det-touch.png" alt="" class="img-i" >'
        }    
    if (a == 4) {
        specstxt.innerHTML =  '<img src="_imagens/det-bateria.png" alt="" class="img-i" >'    
        }
}

function zoomin (b) {
    if (b == 1) {
    let photodata = document.getElementById('foto01')
    photodata.innerHTML = '<img src="_imagens/galeria-01.jpg" width="100px" onmouseover="zoomin(1)" onmouseout="zoomout(1)" onclick="zoom(1)">'
    }
    if (b == 2) {
        let photodata = document.getElementById('foto02')
        photodata.innerHTML = '<img src="_imagens/galeria-02.jpg" width="100px" onmouseover="zoomin(2)" onmouseout="zoomout(2)" onclick="zoom(2)">'
    }
    if (b == 3) {
    let photodata = document.getElementById('foto03')
    photodata.innerHTML = '<img src="_imagens/galeria-03.jpg"  width="100px" onmouseover="zoomin(3)" onmouseout="zoomout(3)" onclick="zoom(3)">'
    }
    if (b == 4) {
        let photodata = document.getElementById('foto04')
        photodata.innerHTML = '<img src="_imagens/galeria-04.jpg"  width="100px" onmouseover="zoomin(4)" onmouseout="zoomout(4)" onclick="zoom(4)">'
     }
    if (b == 5) {
    let photodata = document.getElementById('foto05')
    photodata.innerHTML = '<img src="_imagens/galeria-05.jpg"  width="100px" onmouseover="zoomin(5)" onmouseout="zoomout(5)" onclick="zoom(5)">'
    }
    if (b == 6) {
        let photodata = document.getElementById('foto06')
        photodata.innerHTML = '<img src="_imagens/galeria-06.jpg" width="100px" onmouseover="zoomin(6)" onmouseout="zoomout(6)" onclick="zoom(6)">'
    }
}

function zoomout (c) {
    if (c == 1) {
    let photodata = document.getElementById('foto01')
    photodata.innerHTML = '<img src="_imagens/galeria-01-b.jpg" width="100px" onmouseover="zoomin(1)" onmouseout="zoomout(1)" onclick="zoom(1)">'
    }
    if (c == 2) {
            let photodata = document.getElementById('foto02')
            photodata.innerHTML = '<img src="_imagens/galeria-02-b.jpg"  width="100px" onmouseover="zoomin(2)" onmouseout="zoomout(2)" onclick="zoom(2)">'
    }
    if (c == 3) {
                let photodata = document.getElementById('foto03')
                photodata.innerHTML = '<img src="_imagens/galeria-03-b.jpg" width="100px" onmouseover="zoomin(3)" onmouseout="zoomout(3)" onclick="zoom(3)">'
    }
    if (c == 4) {
                    let photodata = document.getElementById('foto04')
                    photodata.innerHTML = '<img src="_imagens/galeria-04-b.jpg" width="100px" onmouseover="zoomin(4)" onmouseout="zoomout(4)" onclick="zoom(4)">'
    }
    if (c == 5) {
        let photodata = document.getElementById('foto05')
        photodata.innerHTML = '<img src="_imagens/galeria-05-b.jpg"  width="100px" onmouseover="zoomin(5)" onmouseout="zoomout(5)" onclick="zoom(5)">'
    }    
    if (c == 6) {
            let photodata = document.getElementById('foto06')
            photodata.innerHTML = '<img src="_imagens/galeria-06-b.jpg"  width="100px" onmouseover="zoomin(6)" onmouseout="zoomout(6)" onclick="zoom(6)">'
    }
}

function zoom (d) {
    if (d == 1) {
    let photobig = document.getElementById('foto-zoom')
    photobig.innerHTML = '<img src="_imagens/galeria-01.jpg" >'
    }
    if (d == 2) {
        let photobig = document.getElementById('foto-zoom')
        photobig.innerHTML = '<img src="_imagens/galeria-02.jpg" >'
    }
    if (d == 3) {
        let photobig = document.getElementById('foto-zoom')
        photobig.innerHTML = '<img src="_imagens/galeria-03.jpg" >'
    }
    if (d == 4) {
        let photobig = document.getElementById('foto-zoom')
        photobig.innerHTML = '<img src="_imagens/galeria-04.jpg" >'
    }
    if (d == 5) {
        let photobig = document.getElementById('foto-zoom')
        photobig.innerHTML = '<img src="_imagens/galeria-05.jpg" >'
    }
    if (d == 6) {
        let photobig = document.getElementById('foto-zoom')
        photobig.innerHTML = '<img src="_imagens/galeria-06.jpg" >'
    }
}
