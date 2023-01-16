async function cadastrarUsuarioNaAPI () {
    const usuario = document.querySelector('#usuario')
    const usuarioValue = usuario.value

    const email = document.querySelector('#email')
    const emailValue = email.value

    const foto = document.querySelector('#foto')
    const fotoValue = foto.value

    const senha = document.querySelector('#senha')
    const senhaValue = senha.value
    console.log('aaaaaaaa')
    const data = {
        username: `${usuarioValue}`,
        email:`${emailValue}`,
        password:`${senhaValue}`,
        avatar: `${fotoValue}`,
    }
    const options = {
        method: 'POST',
         headers: {
          'Content-Type': 'application/json', 
        },
      body: JSON.stringify(data)
    }
    const resJson = await fetch('http://localhost:3333/users/create', options )
    const response = await resJson.json()
    console.log(resJson.status)
    return resJson.status
}

async function retornaToken () {
    const email = document.querySelector('#email-cadastro')
    const emailValue = email.value

    const senha = document.querySelector('#senha-input')
    const senhaValue = senha.value

    const data = {
        email: `${emailValue}`,
        password: `${senhaValue}`
    }
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const resJson = await fetch('http://localhost:3333/login', options)
    const res = await resJson.json()
    const resToken = res.token
    console.log(resToken)
    return resToken
}


async function dadosDoUsuario () {
    const token = await retornaToken()
    const tokenString = JSON.stringify(token)

    console.log(tokenString)
    localStorage.setItem('token', tokenString)


    const options = {
        method: 'GET',
        headers:{
            'content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    
    const resJson = await fetch('http://localhost:3333/users/profile', options)
    const res = await resJson.json()
    return res
}
 async function pegarTokenDoLocalStorage () {
    const tokenlocal = localStorage.getItem('token')
    const token = JSON.parse(tokenlocal)
    return token

 }

