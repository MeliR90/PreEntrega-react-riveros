
import NavBar from "./componentes/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda Online"} />
    </>
  )
}

export default App