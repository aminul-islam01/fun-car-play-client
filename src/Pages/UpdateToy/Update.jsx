import Swal from "sweetalert2";

const Update = ({toys}) => {
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = { price, quantity, description };

        fetch(`http://localhost:5000/cars/${toys._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Update successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    
    return (
        <div>
            <input type="checkbox" id="toy-details" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                <label htmlFor="toy-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleUpdate}>
                        <div className="flex gap-5 mb-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" id="" cols="30" rows="8" placeholder="Details" className="resize-none p-5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-block btn-primary mt-5">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;