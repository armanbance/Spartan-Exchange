app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/users', (request, response) => {
    response.json(notes)
  })