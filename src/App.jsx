import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Lelo Maia'
            content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores delectus molestias mollitia fuga assumenda. Dolor natus nemo facere tempora laudantium maiores veniam cumque! Quas iusto modi laboriosam in aliquid laudantium?'
          />
          <Post
            author='Rafaella Pinto'
            content='Financeiro em dias.'
          />
        </main>
      </div>
    </div>
  );
}