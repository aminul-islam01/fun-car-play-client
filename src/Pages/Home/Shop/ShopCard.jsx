

const ShopCard = ({ product }) => {
    const { name, image_url, price, rating } = product;
    return (
        <div>
            <div className="shadow hover:shadow-lg rounded-md">
                <img src={image_url} />
                <div className="p-5">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <div className="flex justify-between my-5">
                        <p>Price: <span className="text-yellow-400 font-semibold">{price}$</span></p>
                        <p> Ratings: {rating}</p>
                    </div>
                    <div className="flex justify-between">
                        <button className="btn btn-warning">View Details</button>
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;