
var textos = ["El rancho del emanuel", "El dia del ramen en el yokuzuna", "Tu fiesta de cumpleaños", "la primera ves que fuimos al cine"," La ves que fuimos a comer sushi"," El día del cuartito del tec"," Nuestro picnic en el parque 87" ," Nuestro picnic en el parque 87"," Nuestra llamada con camara"," Nuestra llamada con camara","My foto favorita",     "El desfile del tec",  "El dia que te preste ropa", " Nuestra mejor salida"," Uno de los días del tec"," Uno de los días del tec","El día de la tarjeta del camion", "La salida todos juntos"];

var imagenes = ["img/mes_7_dia_30.jpg", "img/mes_8_dia_2.jpg",             "img/mes_8_dia_19.jpg",  "img/mes_8_dia_26.jpg"              , "img/mes_9_dia_22.jpg"           ,"img/mes_9_dia_28.jpg"        ,"img/mes_10_dia_13_(2).jpg","img/mes_10_dia_13_(1).jpg" ,"img/mes_10_dia_23.jpg",    "img/mes_10_dia_23_2.jpg"                   ,"img/mes_10_dia_27.jpg","img/mes_11_dia_5.jpg","img/mes_11_dia_9.jpg"                          ,"img/mes_11_dia_11.jpg","img/mes_11_dia_17_(2).jpg","img/mes_11_dia_17_(1).jpg","img/mes_12_dia_1.jpg" ,"img/mes_12_dia_3.jpg" ];

var indiceActual = 0;

function cambio()
{
var titulo = document.getElementById('titulo');
var img = document.querySelector('img');

img.setAttribute('src', imagenes[indiceActual]);
titulo.textContent = textos[indiceActual];

indiceActual = (indiceActual + 1);

if (indiceActual==18) 
{
clearInterval(intervalo);
}
}

var intervalo = setInterval(cambio, 3000);