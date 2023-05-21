import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";


const ShopCard = ({ product }) => {
    const { _id, name, image_url, price, rating } = product;

    return (
        <div>
            <div className="shadow hover:shadow-lg rounded-md">
                <img className="h-52 w-full" src={image_url} />
                <div className="p-5">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <div className="flex justify-between my-5">
                        <p>Price: <span className="text-yellow-400 font-semibold">{price}$</span></p>
                        <Rating
                            style={{ maxWidth: 90 }}
                            readOnly
                            value={rating}
                        />
                    </div>
                    <div className="flex justify-between">
                        <Link to={`/details/${_id}`} className="btn btn-warning">View Details</Link>
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;