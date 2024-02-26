import { useCounter } from "../hooks/useCounter";

export const ItemCount = ({ stock }) => {
    const { count, increment, decrement } = useCounter(1, stock, 1);

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito");
    };

    return (
        <div className="container mx-auto mt-8 flex flex-col items-center justify center">
            <div className="flex items-center justify-center space-x-4">
                <button className="text-sm py-1 px-2 rounded btn btn-outline-success" onClick={decrement}>
                    -
                </button>
                <span className="text-4xl font-bold">{count}</span>
                <button className="text-sm py-1 px-2 rounded btn btn-outline-success" onClick={increment}>
                    +
                </button>
            </div>
            <button className="mt-2 text-sm py-1 px-4 rounded btn btn-outline-success" onClick={handleAddToCart}>
                Agregar al carrito
            </button>
        </div>
    );
};
