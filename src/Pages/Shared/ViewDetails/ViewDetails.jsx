

const ViewDetails = ({ toys }) => {
    return (
        <div>
            <input type="checkbox" id="toy-details" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                <img src={toys.image_url}/>
                    <label htmlFor="toy-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{toys.name}</h3>
                    <p className="py-4">{toys.description}</p>
                    <p>Seller Name: {toys.seller_name}</p>
                    <p>Seller Email: {toys.seller_email}</p>
                    <p>Price: {toys.price} $</p>
                    <p>Available Quantity: {toys.quantity}</p>
                    <p>Ratings: {toys.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;