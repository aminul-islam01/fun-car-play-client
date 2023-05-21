import { useLoaderData } from "react-router-dom";

const Update = () => {
    const toys = useLoaderData();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.placeholder;
        const quantity = form.quantity.placeholder;
        const description = form.description.placeholder;
        const car = { price, quantity, description }

        fetch(`http://localhost:5000/cars/${toys._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className="flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder={toys.price} className="input input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder={toys.quantity} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" id="" cols="30" rows="8" placeholder={toys.description} className="resize-none p-5"></textarea>
                </div>
                <button type="submit" className="btn btn-block btn-primary mt-5">Update</button>
            </form>
        </div>
    );
};

export default Update;