import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio.'},
      { type: 'link', content: 'gi.design/doctorcare' },
    ], 
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio, seu malucoooooo.'},
      { type: 'link', content: 'gi.design/doctorcare' },
    ], 
    publishedAt: new Date('2022-05-10 20:00:00')
  },

];

export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (<Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />)
        })}
      </main>
    </div>
    </div>
  )
}
