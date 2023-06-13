import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://images.vexels.com/media/users/3/200060/isolated/preview/e39eb7217c7b5157d2c9154564d76598-icono-de-carrito-de-compras-rosa.png"
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
            <strong>10</strong>
        </div>
    )
}

export default CartWidget