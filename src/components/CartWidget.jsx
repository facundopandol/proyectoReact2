import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
    return (

        <button className="text-black px-4 py-2 flex items-center bg-transparent border-0">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            <span>0</span>
        </button>

    );
}
