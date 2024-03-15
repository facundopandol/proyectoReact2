import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCarritoContext } from "../context/CartContext"

export const CartWidget = () => {
  const {getItemQuantity} = useCarritoContext ()
    return (

        <button className="text-black px-4 py-2 flex items-center bg-transparent border-0">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            <span>{getItemQuantity()}</span>
        </button>

    );
}
