const body = document.querySelector('body')

async function criandoLogin() {
     
    body.insertAdjacentHTML("beforeend", `
    <div class="container-login" style="font-family: Inter, sans-serif" > 

        <div class="lado-esquerdo-login">
            <div class="caixa-login-1">
                <h2 class="h2-petInfo">Petinfo</h2>
                <h2 class="amor-e-carinho"> <pre class="azul">Amor </pre> e  <pre class="azul"> carinho </pre> <pre class="pre-p">por</pre> meio do conhecimento</h2>
                <p class="p-texto">Todas as informações para melhorar a vida do seu pet em um só lugar</p>
                <div class="fotos-lado-direito">
                    
                    <div class="gato-foto">
                        <div class="div-gato-foto">
                            <img src="/src/gato7.svg" class="gato">
                            <img src="/src/gato8.svg" class="gato">
                        </div>
                        <img class="gato-2" src="/src/gato6.svg">
                    </div>
                    <img src="/src/gato5.svg" alt="foto de gato">
                </div>
            </div>
        </div>
        <div class="lado-direito-login">
            <div class="caixa-login-2">
                <div class="cadastro">
                    <h2 class="h1-cadastro">Login</h2>
                    
                </div>
                <form class="form-cadastro">
                    
                    <label for="email-cadastro" class="label">Email</label>
                    <input class="input" type="email" placeholder="Digite seu email aqui" id="email-cadastro">
                
                    <label for="senha-input" class="label">Senha</label>
                    <input class="input-password" type="password" placeholder="Digite sua senha aqui" id="senha-input">
                    <p class="senha-incorreta-none">A senha está incorreta</p>
                    <button class="botao-cadastrar" type="button" id="acessar">Acessar</button>
                </form>
                <div class="texto-cadastrar">
                    <p class="p-cadastrar">Ainda não possui conta?</p>
                    <p class="p-texto-cadastrar">Clicando no botão abaixo, você pode se cadastrar rapidamente</p>
                </div>
                <button class="botao-voltar" type="button" id="cadastrar-usuario">Cadastrar</button>
            </div>
                
        </div>

    </div>
    `)
}

async function criandoCadastrar (){
    body.insertAdjacentHTML("beforeend", `
  
    <div class="container-cadastrar" style="font-family: Inter, sans-serif">
        <div class="lado-esquerdo">
            <div class="caixa-1">
                <div class="cadastro">
                    <h2 class="h1-cadastro">Cadastro</h2>
                    <button class="voltar-para-login">Voltar para o login</button>
                </div>
                <form class="form-cadastro">
                    <label for="usuario" class="label">Usuário</label>
                    <input required class="input" type="text" placeholder="Digite seu usuário aqui" id="usuario">
    
                    <label for="email" class="label">Email</label>
                    <input required class="input" type="email" placeholder="Digite seu email aqui" id="email">
    
                    <label for="foto" class="label">Link da foto do perfil</label>
                    <input required class="input" type="url" placeholder="Insira o link aqui" id="foto">
    
                    <label for="senha" class="label">Senha</label>
                    <input required class="input" type="password" placeholder="Digite sua senha aqui" id="senha">
    
                    <button class="botao-cadastrar" type="button" id="cadastrar">Cadastrar</button>
                </form>
                <button class="botao-voltar" type="button" id="voltar-login">Voltar para o login</button>
            </div>
            
        </div>
        <div class="lado-direito">
            <div class="caixa-2">
                <h2 class="h2-petInfo">Petinfo</h2>
                <h2 class="oba">Oooooooba!</h2>
                <p class="p-texto">Agora vamos poder contribuir para o bem estar do seu pet por meio do conhecimento</p>
                <div class="fotos-lado-direito">
                    <img src="/src/gato1.svg" alt="foto de gato">
                    <div class="gato-foto">
                        <div class="div-gato-foto">
                            <img src="/src/gato2.svg" class="gato">
                            <img src="/src/gato3.svg" class="gato">
                        </div>
                        <img class="gato-2" src="/src/gato4.svg">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    `)
}

async function criandoFeed() {
    const dadosStorage = localStorage.getItem('usuario')
    const dadosParse = JSON.parse(dadosStorage)
    body.insertAdjacentHTML("beforeend", `
    <div class="container-feed" style="font-family: Inter, sans-serif">
       
        <div class="quadrado-sair-da-conta-none" >
            <p class="usuario-sair-da-conta">@${dadosParse.username}</p>
            <div class="div-sair">
                <img class="img-sair" src="/src/sair.svg">
                <p class="sair-da-conta">Sair da conta</p>
            </div>
        </div>
        <header class="header">
                <h1 class="logo">Petinfo</h1>
                <div class="div-header">
                    <button class="botao-header">Criar publicação</button>
                    <img class="img-foto" id="nao-mostrar" src=${dadosParse.avatar}>
                </div>
        </header>
        <div class="div-feed"><h2 class="feed">Feed</h2></div>

        
        <ul class="ul-container-feed-2">
           
        </ul>
       
    </div>
    `)
}

async function criandoModalVerMais(){
    body.insertAdjacentHTML("beforeend", `
    <div class="modal-ver-mais" style="font-family: Inter, sans-serif">
        
        <div class="box-modal">
            <button class="close">X</button>
            <div class="header-modal">
                <img class="img-div-modal" src="/src/gato2.svg">
                <p class="p-div-modal"> nome</p>
                <p class="p-div-modal-data"> data</p>
            </div>
            <h2 class="titulo-modal">título</h2>
            <p class="publicacao-modal">texto</p>
        </div>
   
    </div>  
    `)
}

async function criandoModalEdicao () {
    body.insertAdjacentHTML("beforeend", `
    <div class="modal-edicao" style="font-family: Inter, sans-serif">
        <div class="box-modal">
            <h2 class="titulo-edicao" >Edição</h2>
            <button class="close">X</button>

            <label class="label-edicao" for="titulo-input">Título do post</label>
            <input class="input-titulo" type="text" id="titulo-input" maxlenght="100">

            <label class="label-edicao" for="conteudo-label">Conteúdo do post</label>
            <input class="input-edicao" type="text" id="conteudo-label" maxlength="600">

            <div class="botao-modal">
                <button class="botao-cancelar">Cancelar</button>
                <button class="botao-salvar-alteracoes">Salvar alterações</button>
            </div>
        </div>
    
    </div>
    `)
}

async function criandoModalNovoPost (){
    body.insertAdjacentHTML("beforeend", `
    <div class="modal-novo-post" style="font-family: Inter, sans-serif">
        <div class="box-modal">
            <h2 class="titulo-edicao" >Criando novo post</h2>
            <button class="close">X</button>

            <label class="label-edicao" for="titulo">Título do post</label>
            <input class="input-titulo" type="text" id="titulo" maxlength="100">

            <label class="label-edicao" for="conteudo">Conteúdo do post</label>
            <textarea class="input-edicao" type="text" id="conteudo" maxlength="1000" rows="5" cols="30" wrap="hard"></textarea>

            <div class="botao-modal">
                <button class="botao-cancelar">Cancelar</button>
                <button class="botao-salvar-alteracoes" id="botao-publicar">Publicar</button>
            </div>
        </div>
        
    </div>
    `)
}
async function criandoModalExclusao(){
    body.insertAdjacentHTML("beforeend", `
    <div class="modal-exclusao" style="font-family: Inter, sans-serif">
        <div class="box-modal">
            <h2 class="titulo-exclusao">Confirmação de exclusão</h2>
            <button type="button" class="close">X</button>
    
            <h2 class="h2-confirmacao">Tem certeza que deseja excluir esse post?</h2>
            <p class="p-aviso">Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir</p>
            
            <div class="botoes-modal-excluir">
                <button class="botao-cancelar" type="button">Cancelar</button>
                <button class="excluir-post" type="button">Sim, excluir post</button>
            </div>
        </dvi>
    </div>
    `)
}