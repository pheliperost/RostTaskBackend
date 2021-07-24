const moment = require('moment')

module.exports = app =>{
    const getTask = (req, res)=>{
        const date = req.query.date ? req.query.date
            : moment().endOf('day').toDate()
        
        app.db('tasks')
            .where({ userId: req.user.id })
            .where('estimateAt','<=', date)
            .orderBy('estimateAt')
            .then(tasks => res.json(tasks))
            .catch(err => res.status(500).json(err))
    }
}