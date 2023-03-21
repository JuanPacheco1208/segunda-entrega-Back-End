import session from 'express-session'
import express from 'express'

const app = express ()

app.use(session({
    secret: 'silium',
    resave: true,
    saveUninitialized: true
}))

app.get('/preference', (req, res) => {
    let preference = {
        languaje: 'es',
        mode: 'dark',
        login: true
    }
    req.session.preference = preference
    res.send('Configuraciones guardadas con éxito.')
})

app.get('/Control-Panel', (req, res) => {
    if (req.cookies?.preference) {
    //let signedCookies = JSON.parse(req.signedCookies.preference)
    let session = req.session.preference
        res.send(`Bienvenido de vuelta. Tus configuraciones son: MODE=${preference.mode} LANGUAJE=${preference.languaje}`)

    } else {
        res.send('No estás logueado')
    }
})


//app.get('/cookie/set', (req, res) => {
    //res.cookie('login', 'true').send('Cookie seteada')

//})

//get the cookie
//app.get('/cookie/get', (req, res) => {
//    res.send(req.cookies)
//})

//delete the cookie
//app.get('/cookie/delete', (req, res) => {
//    res.clearCookie('login').send('Cookie Remove')
//})


app.listen(8080, () => console.log('Server Up!'))