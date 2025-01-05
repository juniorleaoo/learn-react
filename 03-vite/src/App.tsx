import { useState, useEffect } from 'react'
import './App.css'
import PostModel from './model/PostModel'
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState<PostModel[]>([])

  useEffect(() => {
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
      .then(r => r.json())
      .then(values => {

        setPosts(values.map((value: any) => {
          return {
            id: value.id,
            title: value.titulo,
            image: value.capa,
            subtitle: value.subtitulo,
            category: value.categoria
          }
        }))

      })
  }, [])

  return (
    <>
      <div className='title'>
        <header>
          <strong>Posts</strong>
        </header>
      </div>

      <section className='container'>
      {posts.map(post => {
        return (
          <Post post={post} />
        )
      }
    )}
    </section>
    </>
  )
}

export default App
