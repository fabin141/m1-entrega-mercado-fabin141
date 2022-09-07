navMaker()
function navMaker (){
  let nav = document.createElement('nav')
  let body = document.querySelector("body")
  let main = document.querySelector(".container")
  body.insertBefore(nav,main)
  let img = document.createElement('img')
  img.src = "./img/brand/logo.svg"
  img.setAttribute("alt","Imagem da logotipo do Virtual Market de cor preta")
  img.setAttribute("title","Imagem da logotipo do Virtual Market de cor preta")
  document.querySelector("nav").appendChild(img)
  marketInit()
}

function marketInit(){
  // ----- Para Selecionar as categorias ---------------
   let inicioLoja = document.querySelector(".container")
   let categoryRepeat = []
   let classId = ['fruits','drinks','hygiene']
   let searchID = ['.fruits','.drinks','.hygiene']
  
   for(let i = 0 ; i < products.length;  i++ ){
     categoryRepeat.push(products[i].category)
   }
   let categoriaProdutos = Array.from(new Set(categoryRepeat))
   // ---- Para fazer o loop que coloca as tags no HTML -------------
  // Começando pelos elementos "pai" que estão dentro da section main
   for(let i = 0 ; i < categoriaProdutos.length ; i++){
      inicioLoja.innerHTML += `
        <section class="products-section"> 
          <h1>`+categoriaProdutos[i]+`</h1>
          <main class="products-content `+classId[i]+`" >
          </main>
        </section>
        `
        let productPlace = document.createElement('ul')
        productPlace.setAttribute("id",categoriaProdutos[i])
        document.querySelector(searchID[i]).appendChild(productPlace)
  // --- Criando elementos "filho" dos elementos criados anteriormente ---
      let productCategory = document.getElementById(categoriaProdutos[i])
      let produtosFiltrados = products.filter((item)=>item.category === categoriaProdutos[i])
      for (let x = 0 ; x < produtosFiltrados.length ; x++){
        productCategory.innerHTML += `
        <li class="product">
        <img
          src="`+produtosFiltrados[x].image+`"
          alt="`+produtosFiltrados[x].imageDescription+`"
          title="`+produtosFiltrados[x].title+`"
          class="product-img"
        />
        <main class="product-main">
          <h1 class="product-title">`+produtosFiltrados[x].title+`</h1>
          <h5 class="product-category">`+produtosFiltrados[x].category+`</h5>
          <strong class="product-price">R$ `+produtosFiltrados[x].price.toFixed(2)+`</strong>
        </main>
      </li>
        `
      }
    }
}