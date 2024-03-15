import { useState, createContext, useContext } from "react";

const CarritoContext = createContext() // creando el contexto

export const useCarritoContext = () => useContext(CarritoContext) //funcion para consultar mi context

export const CarritoProvider = (props) => { // forma de proveer el contexto

    const [carrito, setCarrito] = useState([])

    //buscar producto
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }


    //agregar producto
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito(aux)
        } else {
            const newItem = {
                ...item, //copiar objeto en js
                quantity: cantidad
            }
            setCarrito([...carrito, newItem]) //guardo en el carrito el nuevo producto
        }
    }

    //borrar producto
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))

        /*    const aux = [...carrito]
            const indice = aux.findIndex (prod => prod.id === id)
        
            if (indice!= -1) {
                setCarrito (aux.splice(indice,1))
            }
        */
    }

    //vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    //cantidad de productos
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }


    //precio total
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.price))
    }

    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}>
        {props.children}
        </CarritoContext.Provider>
    )



}