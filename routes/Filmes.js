const express = require('express')
const Router = express.Router()
const {Filmes} = require('../models')

Router.get('/', async (req,res) =>{
    const Getfilmes = await Filmes.findAll()
    res.status(201).json(Getfilmes)
})

Router.post('/', async (req,res) =>{
    const filmes = req.body
    const Novofilme = await Filmes.create(filmes)
    res.status(200).json({message: "Filme adicionado com sucesso!", Novofilme})
})

Router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const listadefilmes = req.body

    const iddofilme = await Filmes.findByPk(id)
    const Filmeatualizado = iddofilme.update(listadefilmes)

    res.status(200).json({message: "Filme atualizado com sucesso", Filmeatualizado})

});

Router.delete('/:id', async (req,res) =>{
    const {id} = req.params
    const listadefilmes = req.body

    const getfilme = await Filmes.findByPk(id)
    const filmedeletado = await getfilme.destroy(listadefilmes)

    res.status(200).json({message: "Filme deletado com sucesso!", filmedeletado})
})

module.exports = Router