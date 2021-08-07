const moment = require('moment')

module.exports = app =>{
    const getAllEventTypes = (req, res)=>{
        
        app.db('eventType')     
            .then(eventType => res.json(eventType))
            .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {
       /* if(!req.body.name.trim()){
            return res.status(400).send('Nome é um campo obrigatório')
        }
        */
       // req.body.userId = req.user.id //pega o id do usuário do token, requisiçao e add
                                      //no corpo a ser adicionado na tabela
            app.db('eventType')
                .insert(req.body)
                .then(_=> res.status(204).send())
                .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('eventType')
            .where({ id: req.params.id})
            .del()
            .then(rowsDeleted => {
                if(rowsDeleted > 0){
                    res.status(204).send()
                }else{
                    const msg = `nao foi encontrado estudante com id ${req.params.id}.`
                    res.status(400).send(msg)
                }
            })            
            .catch(err => res.status(400).json(err))
    }   


    return {getAllEventTypes, save, remove}
}