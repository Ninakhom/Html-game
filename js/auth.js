const API = 'http://localhost:4000'

function getValue(id){
    return document.getElementById(id).value
}

async function gandlelogin(){
try{
    const email = getValue('email')
    const password = getValue('pwd')
    const req = await fetch(
    `${API}/login`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email,password})
    })
    const res = await req.json()
    console.log(res)
    if(req.status != 200){
        return alert('Email or password is incorrect')
    }
    localStorage.setItem('token',res.token)
    window.location.href = 'index.html'
    
}catch (error){
    console.error(error)
}
}