async function cadastrarNaAPI () {
   
    const botaoCadastrar = document.querySelector('#cadastrar')
    const botaoVoltarLogin = document.querySelector('#voltar-login')
    const botaoVoltarLoginTopo = document.querySelector('.voltar-para-login')

    botaoCadastrar.addEventListener('click', async function (e) {
        const usuario = document.querySelector('#usuario')
        const usuarioValue = usuario.value
       
        const email = document.querySelector('#email')
        const emailValue = email.value
    
        const foto = document.querySelector('#foto')
        const fotoValue = foto.value
    
        const senha = document.querySelector('#senha')
        const senhaValue = senha.value

    

       
        if (usuarioValue.length > 0 && emailValue.length > 0 && fotoValue.length > 0 && senhaValue.length > 0 ){
            
            botaoCadastrar.innerHTML = ""
            botaoCadastrar.insertAdjacentHTML('beforeend', `
            <img class="carregando" src="/src/carregando.svg">
            `)
            
            const status = await cadastrarUsuarioNaAPI()
            console.log(status)
            try {
                if (status === 200) {
                    
                    body.innerHTML = ""
                    criandoLogin()
                    irParaPaginaCadastrar()
                    logIn()
                    const ladoDireito = document.querySelector('.lado-direito-login')
                    ladoDireito.insertAdjacentHTML('beforeend', `
                    <div class="toast" >
                        <div class="toast-conta-criada">
                            <img src="/src/toast.svg" class="toast-verde">
                            <p class="p-toast">Sua conta foi criada com sucesso!</p>
                        </div>
                        <p class="toast-mensagem">Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login:<button type="button" class="acessar-pagina">Acessar página de login</button> </p>

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
            }
            catch {
                console.log(`${status}`)
            }
            finally {
                botaoCadastrar.insertAdjacentHTML('beforeend', `
                Cadastrar
                `)
    
                
            }
            
        }
    })
    botaoVoltarLoginTopo.addEventListener('click', function(){
    
        body.innerHTML = ""
       
        criandoLogin()
        irParaPaginaCadastrar()
        logIn()
    })  
    
    
    botaoVoltarLogin.addEventListener('click', function(e){
        body.innerHTML = ""
      
        criandoLogin()
        irParaPaginaCadastrar()
        logIn()
    })
    
}
cadastrarNaAPI()

function irParaPaginaCadastrar () {

    const botaoCadastrar = document.querySelector('#cadastrar-usuario')
    
    botaoCadastrar.addEventListener('click', function (){
       
        body.innerHTML = ""
        criandoCadastrar()
        cadastrarNaAPI()
        
    })
}
irParaPaginaCadastrar()

async function logIn () {
    
    const botaoAcessar = document.querySelector('#acessar')
    const email = document.querySelector('#email-cadastro')
    const senha = document.querySelector('#senha-input')
    botaoAcessar.disabled=true
        document.addEventListener('keyup', function(){
            const emailValue = email.value
            const senhaValue = senha.value
            if (emailValue.length > 0 && senhaValue.length > 0){
                botaoAcessar.disabled = false
            }
            if(senhaValue.length == 0 || emailValue.length == 0) {
                const senhaIncorreta = document.querySelector('.senha-incorreta-show')
                senhaIncorreta.setAttribute('class', 'senha-incorreta-none')
            }
        })
   
        botaoAcessar.addEventListener('click',async function(){
            botaoAcessar.innerHTML = ""
            
            botaoAcessar.insertAdjacentHTML('beforeend', `
            <img class="carregando" src="/src/carregando.svg">
            `)
            const emailValue = email.value
            const senhaValue = senha.value
            const data = await dadosDoUsuario()               
        
            try {
                if (data.email == emailValue) {
                    console.log(data)
                    const dataString = JSON.stringify(data)
                    localStorage.setItem('usuario', dataString)
                    window.location.href = "http://127.0.0.1:5500/pages/login/home.html"
              
                }
                else {
                    const senhaIncorreta = document.querySelector('.senha-incorreta-none')
                    senhaIncorreta.setAttribute('class', 'senha-incorreta-show')
                }
            }
            catch {
                console.log(data)
            } 
            finally{
                botaoAcessar.innerHTML="Acessar"
            }
        })
}
logIn()
function logOut () {

}