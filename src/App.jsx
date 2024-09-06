import { Route, Router, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import List from "./pages/List"
import Home from "./pages/Home"
import About from "./pages/About"


function App() {

  return (
<Routes>
   <Route Component={Home} path = "/"/>
   <Route Component={About} path="/about"/>
   <Route Component={Contact} path="/contact" />
   <Route Component={List} path="/list"/>
</Routes>

  )
}

export default App
