console.log("dom desde la consola");

// Captura del encabezado existente
var head = document.getElementById('head');
console.log(head);

var encabezado = document.getElementsByClassName('encabezado');
console.log(encabezado);

var superior = document.getElementsByTagName('header');
console.log(superior);

// Captura del cuerpo
var contain = document.querySelector('#container'); // Por ID
console.log(contain);

var cuerpo = document.querySelector('.cuerpo'); // Por clase
console.log(cuerpo);

var main = document.querySelector('main'); // Por etiqueta
console.log(main);

var parrafos = document.querySelector('.parrafo');
console.log(parrafos);

var parrafos1 = document.querySelectorAll('.parrafo');
console.log(parrafos1);

// Captura de clase h1 y h3
var tit = document.querySelector('h1');
console.log(tit);

var pies = document.querySelector('h3');
console.log(pies);

// Crear elementos en el HTML desde JS

// Header dinámico
var nuevoHeader = document.createElement("header");
nuevoHeader.className = "nuevo-encabezado";
nuevoHeader.style.backgroundColor = "#4CAF50";
nuevoHeader.style.padding = "20px";
nuevoHeader.style.color = "white";
nuevoHeader.style.textAlign = "center";
nuevoHeader.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
nuevoHeader.innerHTML = `
    <nav>
        <ul style="list-style: none; display: flex; justify-content: space-around; padding: 0; margin: 0; font-size: 1.2em;">
            <li><a href="#" style="color: white; text-decoration: none;">Inicio</a></li>
            <li><a href="#" style="color: white; text-decoration: none;">Nosotros</a></li>
            <li><a href="#" style="color: white; text-decoration: none;">Productos</a></li>
            <li><a href="#" style="color: white; text-decoration: none;">Contacto</a></li>
        </ul>
    </nav>
`;
document.body.insertBefore(nuevoHeader, document.body.firstChild);

// Footer dinámico
var nuevoFooter = document.createElement("footer");
nuevoFooter.className = "nuevo-pie";
nuevoFooter.style.backgroundColor = "#333";
nuevoFooter.style.color = "white";
nuevoFooter.style.padding = "20px";
nuevoFooter.style.textAlign = "center";
nuevoFooter.style.marginTop = "20px";
nuevoFooter.style.boxShadow = "0 -4px 8px rgba(0, 0, 0, 0.2)";
nuevoFooter.innerHTML = `
    <div>
        <p style="margin: 5px 0;">&copy; 2024 Nombre del Proyecto. Todos los derechos reservados.</p>
        <p style="margin: 5px 0;">Contacto: <a href="mailto:contacto@proyecto.com" style="color: #4CAF50; text-decoration: none;">contacto@proyecto.com</a></p>
        <p style="margin: 5px 0;">Teléfono: +57 123 456 7890</p>
    </div>
`;
document.body.appendChild(nuevoFooter);

// Main trabajo clase
// Crear nodo para agregar
var ovalo = document.querySelector('main');

// Crear todo lo que se va a agregar
var h1 = document.createElement("h1");
var section = document.createElement("section");
var article = document.createElement("article");
var article1 = document.createElement("article1");
var p = document.createElement("p");
var p1 = document.createElement("p1");
var img = document.createElement("img");
var img2 = document.createElement('img');

// Unir las variables creadas para la construcción del HTML
var texh1 = document.createTextNode("PRODUCTOS");
var texp = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste ex explicabo, rem nostrum quisquam voluptatem optio quia autem repudiandae aliquid! Unde nisi corrupti, doloremque vel perferendis molestiae voluptatem");
var texp1 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste ex explicabo, rem nostrum quisquam voluptatem optio quia autem repudiandae aliquid! Unde nisi corrupti, doloremque vel perferendis molestiae voluptatem");

ovalo.appendChild(h1);
h1.appendChild(texh1);

ovalo.appendChild(section);
section.appendChild(article);
section.appendChild(article1);
article.appendChild(p);
article1.appendChild(p1);
article.appendChild(img);
article1.appendChild(img2);
p.appendChild(texp);
p1.appendChild(texp1);

img.src ="img/gojo.jpg";
img2.src ="img/sukuna.jpg";

// Estilos
h1.style.textAlign ="center";
h1.style.fontFamily = "Arial, sans-serif";
h1.style.color = "#333";
h1.style.margin = "20px 0";

section.style.display= "flex";
section.style.border = "1px solid black";
section.style.margin = "10px";
section.style.padding = "10px";
section.style.backgroundColor = "#f9f9f9";
section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

main.style.border="1px solid green";
main.style.margin = "20px";
main.style.borderRadius = "8px";
main.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
main.style.padding = "10px";

img.style.margin = "10px";
img.style.border = "2px solid rgb(2, 194, 253)";
img.style.borderRadius = "8px";
img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

img2.style.margin = "10px";
img2.style.border = "2px solid red";
img2.style.borderRadius = "8px";
img2.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

p.style.margin ="10px";
p.style.fontFamily = "Georgia, serif";
p.style.lineHeight = "1.6";
p.style.color = "#555";

p1.style.margin ="10px";
p1.style.fontFamily = "Georgia, serif";
p1.style.lineHeight = "1.6";
p1.style.color = "#555";

let btn = document.getElementById('cambiar');

btn.onclick= function(){
    cambiarTexto();
};

function cambiarTexto(){
    document.getElementById("miTexto").innerHTML="¡¿Como Estas?!";
}
