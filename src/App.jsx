import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://www.github.com/LeloMaiaDev.png',
      name: 'Lelo Maia',
      role: 'CEO @villapropaganda'
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera.' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-19')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://www.github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera.' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-20')
  },
]

export function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}