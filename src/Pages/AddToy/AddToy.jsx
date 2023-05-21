import Swal from "sweetalert2";

const AddToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image_url = form.image.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const sub_category = form.Categories.value;
        const toy = {name, image_url, seller_name, seller_email, price, quantity, rating, description, sub_category};

        fetch('https://fun-car-play-server.vercel.app/cars', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.acknowledged) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }         
        })
    }

    return (
        <div className='bg-gray-300 p-10 my-10'>
            <h2 className="text-3xl font-semibold text-center">Add A Toy</h2>
            <form onSubmit={handleAddToy}>
                <div className="flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name="image" placeholder="Image Url" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="seller_name" placeholder="Seller name" className="input input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="seller_email" placeholder="Seller email" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Categories</span>
                        </label>
                        <select name="Categories" id="" className="input input-bordered">
                            <option value="sportsCar">sportsCar</option>
                            <option value="truck">truck</option>
                            <option value="miniPoliceCar">miniPoliceCar</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex gap-5 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" id="" cols="30" rows="8" placeholder="Details" className="resize-none p-5"></textarea>
                </div>
                <button type="submit" className="btn btn-block btn-primary mt-5">Add To DB</button>
            </form>
        </div>
    );
};

export default AddToy;