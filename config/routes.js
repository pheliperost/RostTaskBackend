module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

     app.route('/tasks')
        .all(app.config.passport.authenticate())
        .get(app.api.task.getTasks)
        .post(app.api.task.save)

    app.route('/eventtype')
        // .all(app.config.passport.authenticate())
        .get(app.api.eventtype.getAllEventTypes)
        .post(app.api.eventtype.save)
         
    app.route('/eventtype/:id')
        .delete(app.api.eventtype.remove)

    app.route('/events')
        // .all(app.config.passport.authenticate())
        .get(app.api.events.getEvents)
        .post(app.api.events.save)
        
    app.route('/events/:id')
        .delete(app.api.events.remove)

    app.route('/students')
       // .all(app.config.passport.authenticate())
        .get(app.api.students.getStudents)
        .post(app.api.students.save)
        
    app.route('/students/:id')
        .delete(app.api.students.remove)
        
    app.route('/tasks/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.task.remove)

    app.route('/task/:id/toggle')
        .all(app.config.passport.authenticate())
        .put(app.api.task.toggleTask)  
}