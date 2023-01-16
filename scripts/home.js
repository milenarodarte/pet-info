

async function renderizarPaginaOuRetornarParaLogin () {
    const dadosStorage = localStorage.getItem('usuario')
    const dadosParse = JSON.parse(dadosStorage)
    
    if (dadosStorage == null){
        window.location.href = "http://127.0.0.1:5500/index.html"
    } else {
        await criandoFeed()
        await renderizarPosts()
       
        
        
    }   
}
renderizarPaginaOuRetornarParaLogin()

async function logOut (){
    const divSair = document.querySelector('.div-sair')
    const imgSair = document.querySelector('.img-sair')
    const pSair= document.querySelector('.sair-da-conta')
    const sair = document.querySelector('.img-foto')
    const quadradoSairNone = document.querySelector('.quadrado-sair-da-conta-none')
    const quadradoSair = document.querySelector('quadrado-sair-da-conta')


    sair.addEventListener('click', function(){
        
        
        if (sair.id == "nao-mostrar") {
            sair.id = 'mostar'
           
            quadradoSairNone.setAttribute('class', 'quadrado-sair-da-conta')   
            
        }
        else {

         
            quadradoSairNone.setAttribute('class', 'quadrado-sair-da-conta-none')
            sair.id="nao-mostrar"
        }
        
    })
    
    

    document.addEventListener('click', function(e){
        const el = e.target 
        if (el.classList.contains('div-sair') || el.classList.contains('img-sair') || el.classList.contains('sair-da-conta')){
            localStorage.clear()
            window.location.href = "http://127.0.0.1:5500/index.html"
        }
    })
}    
logOut()

async function fecharModal(){
    const botaoClose = document.querySelector('.close')
    const botaoCancear = document.querySelector('.botao-cancelar')
    const modalNovoPost = document.querySelector('.modal-novo-post')
    
    botaoClose.addEventListener('click', function(){
        modalNovoPost.remove()
        
    })
    botaoCancear.addEventListener('click', function(){
        modalNovoPost.remove()
        
    })
}

async function capturarPosts(){
    const token = await pegarTokenDoLocalStorage()
   
    const dadosStorage = localStorage.getItem('usuario')
    const dadosParse = JSON.parse(dadosStorage)

    const options = {
        method: 'GET',
        headers:{
            'content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    
    const resJson = await fetch('http://localhost:3333/posts', options)
    
    const res1 = await resJson.json()

    return res1
}
capturarPosts()



async function botaoPublicar () {

    
    const botaoPublicar = document.querySelector('#botao-publicar')
    
    
    botaoPublicar.addEventListener('click', async function(){

        const token = await pegarTokenDoLocalStorage()
        
        const titlePublicacao = document.querySelector('.input-titulo')
        const titleValue = titlePublicacao.value

        const publicacao = document.querySelector('.input-edicao')
        const publicacaovalue = publicacao.value

        

        const data = {
            title: `${titleValue}`,
            content: `${publicacaovalue}`
        }
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }
        const resJson = await fetch('http://localhost:3333/posts/create', options)
        
        
        
       renderizarPosts()
       const modalNovoPost = document.querySelector('.modal-novo-post')
        modalNovoPost.remove()

        

    })
    
}


async function renderizarPosts () {
    const arrayDePosts = await capturarPosts()
  
 
    const ul = document.querySelector('.ul-container-feed-2')
    ul.innerHTML = ""
    let contador = -1
    const dadosStorage = localStorage.getItem('usuario')
    const dadosParse = JSON.parse(dadosStorage)
    
    arrayDePosts.forEach( (post)=> { 
    
     contador ++
     
        if (post.user.username == dadosParse.username ){

            ul.insertAdjacentHTML('afterbegin', `
            <li class="li">
            <div class="div-li-header">
                <div class="div-detalhes">
                    <img src=${post.user.avatar} class="img-div">
                    <p class="p-div-nome">${post.user.username}</p>
                    <p class="p-div-mes-ano">outubro de 2022</p>
                </div>
                <div class="botoes-header">
                    <button class="botao-header-editar" id="${contador}">Editar</button>
                    <button class="botao-header-excluir" id="${post.id}">Excluir</button>
                </div>
            </div>
            <h2 class="titulo-li">${post.title}</h2>
            <p class="descricao-li">${post.content}</p>
            <button type="button" id="${post.id}" class="botao-acessar-publicacao">Acessar publicação</button>
                    
            </li>
        `)}
        else {
            ul.insertAdjacentHTML('afterbegin', `
            <li class="li">
            <div class="div-li-header">
                <div class="div-detalhes">
                    <img src=${post.user.avatar} class="img-div">
                    <p class="p-div-nome">${post.user.username}</p>
                    <p class="p-div-mes-ano">outubro de 2022</p>
                </div>
                <div class="botoes-header">

                </div>
            </div>
            <h2 class="titulo-li">${post.title}</h2>
            <p class="descricao-li">${post.content}</p>
            <button type="button" id="${post.id}" class="botao-acessar-publicacao">Acessar publicação</button>
                    
            </li>
            `)
        }

     }
    )
   
   
    excluirPost()
    editarPost()
    acessarPublicacao()
 }

async function criarNovoPost () {
    

    const botaoCriarPublicacao = document.querySelector('.botao-header')
    botaoCriarPublicacao.addEventListener('click', function(){
        
        criandoModalNovoPost()
        fecharModal()
        botaoPublicar()
        renderizarPosts()
       
        
    })
        
}    
criarNovoPost()

async function excluirPost() {
    
    const token = await pegarTokenDoLocalStorage()
    const excluir = document.querySelectorAll('.botao-header-excluir')
    
    excluir.forEach((botao)=> botao.addEventListener ('click', async function(e){
        const el = e.target 
        const idDoBotao = el.id

        criandoModalExclusao()

        const excluirPost = document.querySelector('.excluir-post')
        const cancelar = document.querySelector('.botao-cancelar')
        const botaoClose = document.querySelector('.close')
        const modalExclusao = document.querySelector('.modal-exclusao')
        
        botaoClose.addEventListener('click', function(){
            modalExclusao.remove()
        })
        cancelar.addEventListener('click', function(){
            modalExclusao.remove()
        })
        excluirPost.addEventListener('click', async function(){
           
            const options = {
                method: 'DELETE', 
                headers:{
                    'content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
            const deletaPost = await fetch(`http://localhost:3333/posts/${idDoBotao}`,options)
            const deletaPostjson = await deletaPost.json()
            
            modalExclusao.remove()
            renderizarPosts()
            toast()
        })
        
    }))
    
}
excluirPost()

async function editarPost () {
    const token = await pegarTokenDoLocalStorage()
    const editar = document.querySelectorAll('.botao-header-editar')
    editar.forEach((botao) => botao.addEventListener('click',async function (e){
        
        const el = e.target
        const index = el.id

        const arrayPosts = await capturarPosts()
        const arrayDePostsIndex = arrayPosts[index]
        

        criandoModalEdicao()
        const modalEdicao = document.querySelector('.modal-edicao')
        const botaoClose = document.querySelector('.close')
        const cancelar = document.querySelector('.botao-cancelar')
        const botaoSalvarAlteracoes = document.querySelector('.botao-salvar-alteracoes')

        botaoClose.addEventListener('click', function(){
           modalEdicao.remove()
        })
        cancelar.addEventListener('click', function(){
            modalEdicao.remove()
        })
        botaoSalvarAlteracoes.addEventListener('click', async function(){
            const tituloPost = document.querySelector('.input-titulo').value
            const edicaoPost = document.querySelector('.input-edicao').value
            
            const data = {
                title: `${tituloPost}`,
                content: `${edicaoPost}`
            }
            const options = {
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
            const resJson = await fetch(`http://localhost:3333/posts/${arrayDePostsIndex.id}`, options)
            renderizarPosts()
            modalEdicao.remove()
            
        })
        

    }) )

}



function toast (){
    const containerFeed= document.querySelector('.container-feed')
    containerFeed.insertAdjacentHTML('beforeend', `
        <div class="toast">
            <div class="toast-conta-criada">
                <img src="/src/toast.svg" class="toast-verde">
                <p class="p-toast">Post deletado com sucesso!</p>
            </div>
            <p class="toast-mensagem">O post selecionado para exlusão foi deletado, a partir de agora não aparecerá no seu feed </p>
        </div>
        `)

    setTimeout(function(){
    const toast = document.querySelector('.toast').animate([
        {transform: 'translateX(0px)'},
        {transform: 'translateY(+3000px)'}
    ], {duration: 3000,
        interation: 1})
    },3000);

    setTimeout(function(){
        const toastnone = document.querySelector('.toast').style.display = 'none'
    },3500)
}


async function acessarPublicacao () {
    const acessarPublicacaoNodeList = document.querySelectorAll('.botao-acessar-publicacao')
    const dadosStorage = localStorage.getItem('usuario')
    const dadosParse = JSON.parse(dadosStorage)
    const posts = await capturarPosts()

    console.log(posts)

    let contador = -1

    acessarPublicacaoNodeList.forEach( (botao) =>  {

        botao.addEventListener('click', function(){
        

            const post = posts.find(post => {
                
                if (post.id == botao.id) {return post}
            })
           

            body.insertAdjacentHTML("beforeend", `
            <div class="modal-ver-mais" style="font-family: Inter, sans-serif">
            
                <div class="box-modal">
                    <button class="close">X</button>
                    <div class="header-modal">
                        <img class="img-div-modal" src=${post.user.avatar}>
                        <p class="p-div-modal">${post.user.username}</p>
                        <p class="p-div-modal-data">outubro de 2022</p>
                    </div>
                    <h2 class="titulo-modal">${post.title}</h2>
                    <p class="publicacao-modal">${post.content}</p>
                </div>
    
            </div>  
        `)
        const botaoClose = document.querySelector('.close')
        botaoClose.addEventListener('click', function(){
            const divModalVerMais = document.querySelector('.modal-ver-mais')
            divModalVerMais.remove()
        })

        })
       
        
        

    })
    
}
acessarPublicacao()