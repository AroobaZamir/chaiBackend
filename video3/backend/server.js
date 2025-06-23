import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send("server is ready")
}); 

app.get('/jokes', (req, res)=>{
    const jokes = [
  {
    "id": 1,
    "title": "Bug in Code",
    "content": "Why do programmers hate nature? It has too many bugs."
  },
  {
    "id": 2,
    "title": "Array Humor",
    "content": "Why did the JavaScript array go to therapy? Because it had too many issues to sort."
  },
  {
    "id": 3,
    "title": "404 Joke",
    "content": "I tried to tell a joke about HTTP... but it got a 404 – joke not found!"
  },
  {
    "id": 4,
    "title": "Backend Life",
    "content": "I told my server a joke... it crashed from too much traffic!"
  },
  {
    "id": 5,
    "title": "Frontend vs Backend",
    "content": "Frontend: I make things look pretty. Backend: I make things work. DevOps: I make sure it stays alive."
  }
]

res.json(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`);
})