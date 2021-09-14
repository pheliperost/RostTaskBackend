const moment = require('moment')

module.exports = app =>{
    const getStudents = (req, res)=>{
        
       /* app.db('students')
            .where({ name: req.body.name})            
            .orderBy('name')
            .then(students => res.json(students))
            .catch(err => res.status(500).json(err))
            */
            app.db('students')
            .modify(function(queryBuilder){
                if(req.body.name)
                    queryBuilder.where({ name: req.body.name});  
            })                      
            .orderBy('name')
            .then(students => res.json(students))
            .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {
        
      /*  if(!req.body.name.trim()){
            return res.status(400).send('Nome é um campo obrigatório')
        }
        */
        
        //Alert.Alert(req.body.desc)

     //   req.body.userId = req.user.id //pega o id do usuário do token, requisiçao e add
                                      //no corpo a ser adicionado na tabela
            app.db('students')
                .insert(req.body)
                .then(_=> res.status(204).send())
                .catch(err => res.status(400).json(err))
                
    }

    const remove = (req, res) => {
        app.db('students')
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

    const updateStudentStatus = (req, res, active) => {
        app.db('students')
            .where({id: req.params.id})
            .update({active})
            .then(_=> res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const toggleStudentStatus = (req, res) => {
        app.db('students')
            .where({id: req.params.id})
            .first()
            .then(student => {
                if(!student){
                    const msg = `Task com id ${req.params.id} nao encontrada`
                    return res.status(400).send(msg)
                }

                const active = student.active ? false : true
                updateStudentStatus(req, res, active)

            })
            .catch(err => res.status(400).json(err))
    }

    return {getStudents, save, remove, toggleStudentStatus}
}