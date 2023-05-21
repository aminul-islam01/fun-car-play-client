
import { useState } from "react";


const ShopCard = ({ product }) => {
    const { _id, name, image_url, price, rating } = product;
    const [toys, setToys] = useState({})
    const handleDetails = (id) => {
        fetch(`http://localhost:5000/singleCar/${id}`)
            .then(res => res.json())
            .then(data => setToys(data))
        }
        console.log(toys.name)
    return (
        <div>
            <div className="shadow hover:shadow-lg rounded-md">
                <img className="h-52 w-full" src={image_url} />
                <div className="p-5">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <div className="flex justify-between my-5">
                        <p>Price: <span className="text-yellow-400 font-semibold">{price}$</span></p>
                        <p> Ratings: {rating}</p>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => handleDetails(_id)} className="btn btn-warning">View Details</button>
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>     
        </div>
    );
};

export default ShopCard;