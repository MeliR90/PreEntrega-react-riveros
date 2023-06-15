import CartWidget from '../CartWidget/CartWidget'
import './NavBar/NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Mi tienda online</h1>

        <nav>
            <ul>
                <li>Remeras</li>
                <li>Buzos</li>
                <li>Camperas</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar