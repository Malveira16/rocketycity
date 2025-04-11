
import { Header } from "./components/Header"
import {Post} from "./post"

import styles from './App.module.css';
import './global.css'
export function App() {
  return(
     <div>
      <Header/>
      <div className= {styles.wrapper}>
        <aside></aside>
        <main>
          <Post
            author="João Vitor Malveira"
            content="Lorem ipsum"></Post>
        </main>
      </div>
     </div>
  )
}