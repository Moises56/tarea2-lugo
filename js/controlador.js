///-----------------------------------------------USUARIOS

var usuarios = [
    {
        nombre:"Pedro",
        apellido:"Martinez",
        ordenes:[
            {
                nombreProducto:"Producto 1P",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:6,
                precio:29.99
            },
            {
                nombreProducto:"Producto 2PP",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:19.99
            }
        ]
    },
    {
        nombre:"Juan",
        apellido:"Perez",
        ordenes:[
            {
                nombreProducto:"Producto 3J",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:3,
                precio:59.99
            },
            {
                nombreProducto:"Producto 4JJ",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:99.99
            }
        ]
    },
    {
        nombre:"Maria",
        apellido:"Rodriguez",
        ordenes:[
            {
                nombreProducto:"Producto 5M",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:4,
                precio:49.99
            },
            {
                nombreProducto:"Producto 6MM",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:3,
                precio:89.99
            }
        ]
    }
];


///-----------------------------------------------CATEGORIAS
var categorias = [
    {
        nombreCategoria:"Farmacias",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#FADB54",
        icono:"fas fa-clinic-medical",
        empresas:[
            {
                nombreEmpresa: "Empresa FARMANCIA 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto F1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa FARMANCIA 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto F5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa FARMANCIA 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto F9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Restaurantes",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#F3ADAC",
        icono:"fas fa-utensils",
        empresas:[
            {
                nombreEmpresa: "Empresa RESTAURANTE 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto R1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa RESTAURANTE 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto R5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa RESTAURANTE 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto R9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Salud",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#D98F6D",
        icono:"fas fa-user-md",
        empresas:[
            {
                nombreEmpresa: "Empresa SALUD1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto SA1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto SA2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto SA3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto SA4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa SALUD2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto S5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa SALUD3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto S9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Café",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fas fa-mug-hot",
        empresas:[
            {
                nombreEmpresa: "Empresa CAFE1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto CAF1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa CAFE2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto CAF5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa CAFE3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto CAF9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Bebidas",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#8ACEFB",
        icono:"fas fa-glass-martini-alt",
        empresas:[
            {
                nombreEmpresa: "Empresa BEBIDAS1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto DRINK 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa BEBIDAS2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto DRINK 5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa BEBIDAS3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto DRINK 9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
];

// console.log ('Usuarios', usuarios);
// console.log ('Categorias', categorias);


localStorage = window.localStorage
indiceSelect = null;
proSelect = null;

if (localStorage.getItem("categorias") == null) {
    localStorage.setItem("categorias", JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorage.getItem("categorias"));
}

if(localStorage.getItem('usuarios')==null){
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}


//* Cargar el Select list
for (const i in usuarios) {
    // console.log(categorias[i].nombreCategoria);
    nombreUser = usuarios[i].nombre //*obtiene el nombre del arreglo
    apellidoUser = usuarios[i].apellido

    document.getElementById('usuario-actual').innerHTML +=
    `<option value="${nombreUser} ${apellidoUser}">${nombreUser} ${apellidoUser}</option> ` 
}

//* Cambiar Usuario
function cambiarUsuario(){
    let userActual = document.getElementById('usuario-actual').value   
    document.getElementById('user-actual').innerHTML = 
    `<h1 class="nombre-inicial">!Hola ${userActual}!</h1>`

}cambiarUsuario()


//* Generar Categorias
function geneCategortias(){
    document.getElementById('categorias').innerHTML = ''; 
    categorias.forEach(function(app, i) {

        document.getElementById('categorias').innerHTML += 
        `<div data-bs-toggle="modal" data-bs-target="#categoriasModal" onclick="modalCategorias(${i})" class="col-12 col-xl-2 col-sm-6 col-md-4 pt-2">
            <div class="card targeta" style="background-color: ${app.color};">
                <a class="icono text-center"><i class="${app.icono} faIco"></i></a>
                <div class="card-body">
                    <h5 id="nombreCategoria" value="${app.nombreCategoria}" class="card-title categorias">${app.nombreCategoria}</h5>
                    <p class="card-text comercio">3 Comercio.</p>
                </div>
            </div>
        </div>
        `
       

});


}geneCategortias();

//* mostrar ordenes por usuario
function userOrder(){
    let userActual = document.getElementById('usuario-actual').value   
    document.getElementById('user-title').innerHTML =
    `<h5 class="modal-title title-order" id="exampleModalLabel">${userActual}, Estas son tus Ordenes </h5>`

    usuarios.forEach(function(user) {
        nomUser = user.nombre+' '+user.apellido

        if (userActual == nomUser) {
            order = user.ordenes
            document.getElementById('modalOrder').innerHTML = '';
            for (let i = 0; i < order.length; i++) {
                // console.log(order[i].nombreProducto);
                nombreProducto = order[i].nombreProducto
                cantidad = order[i].cantidad
                descripcion = order[i].descripcion
                precio = order[i].precio
                
                document.getElementById('modalOrder').innerHTML += ` 
                    <div class="col-12">
                        <h2 class="nombre-order">${nombreProducto}</h2>
                        <p class="descripcion-order">${descripcion}</p>
                        <p class="descripcion-order">Cantidad: <b>${cantidad }</b></p>
                        <span class="precio"><b>$${ precio}</b></span>
                        <hr>
                     </div>
                ` 
            }           
        }
        
    });
    // console.log('order');
}


// var array_valores = Array();

// function add(x)
// {

//     var input = document.getElementById('node');
//     array_valores.push(x.innerHTML);

//     input.value = array_valores.toString();                         

// }
   




//* mostrar categorias
function modalCategorias(i){
    indiceSelect = i  
    document.getElementById('modalCategorias').innerHTML ='';

    nombreCategoria = categorias[i].nombreCategoria
    document.getElementById('nomCate').innerHTML =
    `<h5 class="modal-title title-order" id="categoriasModalLabel">${nombreCategoria}</h5>`


    empresas = categorias[i].empresas   
    empresas.forEach(function(app,p) {
        // console.log(app.nombreEmpresa);
        nameEmpresa = app.nombreEmpresa
        imgEmpresa = app.imagen     

       

       
        productos = app.productos
        html ='';
        for (let p = 0; p < productos.length; p++) {
            
            // console.log(productos[p].nombreProducto);
            nombreProducto = productos[p].nombreProducto
            descripcion = productos[p].descripcion
            precio = productos[p].precio
       
            html+= ` <div class="card-body">
                        <h3 id="nombre-prod" name="nom-Pro" class="nombre-Producto">${nombreProducto}</h3>
                        <button onclick="prodSelect(${p})" data-bs-toggle="modal" data-bs-target="#procesarModal" type="button" class="btn btn-pedir">Pedir</button> 
                        <p id="descripcion-prod" class="descripcion-prod">${descripcion}</p>
                        <span id="precio-pro" class="precio2">$${precio}</span>
                        <hr> <br>
                    </div>`
     
        }
        document.getElementById('modalCategorias').innerHTML +=
        `<div class="col-6">
            <div class="card" > 
                <img src="${imgEmpresa}" class="card-img-top" alt="...">
                <h5 class="card-title nomEmpresa">${nameEmpresa}</h5>        
                ${html}            
            </div>
        </div> 
        `
        
    });

}

//*Procesar Pedido

function prodSelect(p){
    proSelect = p
    // var nombrePro = document.getElementById('nombre-prod').innerHTML;
    var  descripcionPro = document.getElementById('descripcion-prod').innerHTML; 
    var precioPro = document.getElementById('precio-pro').innerHTML;

    var a = document.getElementsByTagName('h3')
    console.log(a[p].innerHTML);

    document.getElementById('nPro').innerHTML = `<h2 class="nombre-Producto2">${a[p].innerHTML}</h2>`
    document.getElementById('desc').innerHTML = `<p class="descripcion-Producto2>${descripcionPro}</p>`
    document.getElementById('prec').innerHTML = `<span class="precio3" id="prec">${precioPro}</span>`
    
    
}

//* guarduar una orden para cada usuario
 function procesarOrden(){
     i = indiceSelect //*categoria
     o = proSelect //* # orden
     console.log('procesando2...',i);

     var a = document.getElementsByTagName('h3')
    console.log(a[o].innerHTML);
        
 
      let nomUserActual = document.getElementById('usuario-actual').value 
      if (nomUserActual == null) {
          nomUserActual = 'Pedro Martinez'
      }
      let user = usuarios;
       for (let i in user) {
           order = user[i].ordenes
           nome = user[i].nombre+ ' ' + user[i].apellido;
        //    console.log(nome);
          //*Compara nombre actual con el del arreglo
           if (nomUserActual == nome) {
        //    console.log(true);    
           ordenes = usuarios
           ordenes = {
                       nombreProducto:a[o].innerHTML,
                       descripcion:document.getElementById('descripcion-prod').innerHTML,
                       cantidad:document.getElementById('cant').value,
                       precio:document.getElementById('precio-pro').innerHTML
                   };
                   order.push(ordenes)
               
                 userOrder()
                 localStorage.setItem("usuarios", JSON.stringify(usuarios));
                 alert('Pedido con Exito')
           }
      }

 }


iconos = ['fab fa-atlassian', 'fas fa-atom', 'fab fa-apple']
for (let i = 0; i < iconos.length; i++) {
    document.getElementById('list-new').innerHTML +=
    `<option value="${iconos[i]}">Icono${i}</option>`    
}


 //* guarduar una nueva categoria
function newCategoria(){
    console.log('new categoria');

    nameNew = document.getElementById('name-new').value
    descNew = document.getElementById('desc-new').value
    colorNew = document.getElementById('color-new').value
    listNew = document.getElementById('list-new').value
    empreNew = document.getElementById('empre-new').value

    console.log(nameNew);
    console.log(descNew);
    console.log(colorNew);
    console.log(listNew);
    console.log(empreNew);

    category = {
        nombreCategoria:nameNew,
        descripcion:descNew,
        color:colorNew,
        icono:listNew,
        empresas:[
            {
                nombreEmpresa: empreNew,
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto N1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto N2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto N3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto N4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
    console.log(category);
    categorias.push(category)
    geneCategortias();
    localStorage.setItem("categorias", JSON.stringify(categorias));

}





