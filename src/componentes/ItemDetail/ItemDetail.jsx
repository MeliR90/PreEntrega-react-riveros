import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h2>Precio: ${precio}</h2>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo minima, eveniet aperiam rerum quis commodi aliquam ex obcaecati et, sint quas cum nihil, officia quos hic autem. Ab, ullam.</p>
        <img src={img} alt={nombre} />
        
        
        
        </div>
  )
}

export default ItemDetail