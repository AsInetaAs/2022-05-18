import express from 'express'

import { dirname } from 'path'
import { fileURLToPath } from 'url'


const _dirname =dirname(fileURLToPath(import.meta.url))

const app = express()

app.get('/', (req, res) => {
   res.sendFile(_dirname + '/uzduotys/index.html' )
}) 

app.get('/pirma_uzduotis', (req, res) => {
    res.sendFile(_dirname + '/uzduotys/1.html' )
    
 })

 app.get('/antra_uzduotis', (req, res) => {
    res.sendFile(_dirname + '/uzduotys/2.html' )
    
 })

 app.get('/trecia_uzduotis', (req, res) => {
    res.sendFile(_dirname + '/uzduotys/3.html' )
    
 })

 app.get('/ketvirta_uzduotis', (req, res) => {
    res.sendFile(_dirname + '/uzduotys/4.html' )
    
 })


app.listen(3000)