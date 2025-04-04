
import { Header } from "./components/Header"
import {Post} from "./post"

import './global.css'
export function App() {
  return(
     <div>
      <Header/>
      <Post 
        author = "João Vitor Malveira" 
        content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vero earum quibusdam hic dolorum id, mollitia dolore, a recusandae sunt, eos nisi consequatur dolores nihil officiis tempora vel odio necessitatibus." >

      </Post>
     </div>
  )
}