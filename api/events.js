const moment = require('moment')

module.exports = app =>{
    const getEvents = (req, res)=>{
        
        app.db('EventView')     
            .then(events => res.json(events))
            .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {
       /* if(!req.body.name.trim()){
            return res.status(400).send('Nome é u   m campo obrigatório')
        }
        */
       // req.body.userId = req.user.id //pega o id do usuário do token, requisiçao e add
                                      //no corpo a ser adicionado na tabela
            app.db('events')
                .insert(req.body)
                .then(_=> res.status(204).send())
                .catch(
                    //err => res.status(400).json(err)                    
                    err => {console.log(err)
                    res.status(400).json(err)
                    }
                    )
        }

    const update = (req, res) =>{

        const DataToUpd = {
            date: req.body.date,
            startedAt: req.body.startedAt,
            endedAt: req.body.endedAt,
            Obs: req.body.Obs,
            eventType: req.body.eventType,
            student:  req.body.student
        }

        app.db('events')
        .where({id: req.params.id})
        .update(DataToUpd)
        .then(_=> res.status(204).send())
        .catch(
            //err => res.status(400).json(err)                    
            err => {console.log(err)
            res.status(400).json(err)
            })
    }   
    

    const remove = (req, res) => {
        app.db('events')
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


    return {getEvents, save, remove, update}
}