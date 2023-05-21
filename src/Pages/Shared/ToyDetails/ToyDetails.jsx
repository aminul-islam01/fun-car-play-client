import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useTitle from "../../../hooks/useTitle";

const ToyDetails = () => {
    useTitle('toy-details')
    const toy = useLoaderData();
    const { name, image_url, description, seller_name, seller_email, quantity, price, rating } = toy;

    return (
        <div className="card card-side bg-base-100 shadow-xl my-20 w-10/12 mx-auto overflow-hidden">
            <img className="w-1/2 h-80" src={image_url} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Description: {description}</p>
                <p>Seller Name: {seller_name}</p>
                <p>Seller Email: {seller_email}</p>
                <p>Available Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <Rating
                    style={{ maxWidth: 90 }}
                    readOnly
                    value={rating}
                />
            </div>
        </div>
    );
};

export default ToyDetails;