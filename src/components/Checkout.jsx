import { useRef } from "react";

export const Checkout = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(formRef.current); // formulario HTML a objeto iterator
        const data = Object.fromEntries(datForm); // objeto iterator a objeto simple
        console.log(data);
        e.target.reset();
    };

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
