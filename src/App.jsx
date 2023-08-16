import { Post } from "./Post";
import { Header } from "./components/Header";

import './styles.css';

export function App() {
  return(
    <div>
      <Header />
      <Post
        author='Lelo Maia'
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores delectus molestias mollitia fuga assumenda. Dolor natus nemo facere tempora laudantium maiores veniam cumque! Quas iusto modi laboriosam in aliquid laudantium?'
      />
      <Post
        author='Rafaella Pinto'
        content='Financeiro em dias.'
      />
    </div>
  );
}