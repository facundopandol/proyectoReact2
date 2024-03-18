import { useRef } from "react";
import { useCarritoContext } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js";

export const Checkout = () => {
    const formRef = useRef();
    const navigate = useNavigate() // devuelve la locación actual de mi componente (ruta)
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(formRef.current); // formulario HTML a objeto iterator
        const cliente = Object.fromEntries(datForm); // objeto iterator a objeto simple

        // generar la orden de compra



        //modificar stock
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    console.log(`El stock del producto con ${prodBDD.title} no se puede comprar porque no tiene stock suficiente`)
                    aux.filter(prod => prod.id != prodBDD.id) // elimino el producto del carrito al no tener stock suficiente
                }
            })
        })


        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => console.log(`Gracias por comprar con nosotros ${ordenCompra.id}`))
        emptyCart()
        e.target.reset();
        navigate('/')
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                <form action="" onSubmit={handleSubmit} ref={formRef}>
                    <div className="mb-3">
                        <label className="block text-gray-700 mb-1">Nombre:</label>
                        <input type="text" className="w-full p-2 border rounded-md" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 mb-1">Apellido:</label>
                        <input type="text" className="w-full p-2 border rounded-md" name="apellido" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 mb-1">Dirección:</label>
                        <input type="text" className="w-full p-2 border rounded-md" name="direccion" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 mb-1">DNI:</label>
                        <input type="text" className="w-full p-2 border rounded-md" name="dni" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 mb-1">Email:</label>
                        <input type="text" className="w-full p-2 border rounded-md" name="email" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 mb-1">Telefono:</label>
                        <input type="text" className="w-full p-2 border rounded-md" name="telefono" />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Finalizar</button>
                </form>
            </div>
        </div>
    );
};
