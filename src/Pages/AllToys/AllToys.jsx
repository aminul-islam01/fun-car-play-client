import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    useTitle('All-toys');
    const loadedAllToys = useLoaderData();
    const [allToys, setAllToys] = useState(loadedAllToys)
    
    const handleSearch = event => {
        event.preventDefault();
        const text = event.target.text.value;
        fetch(`https://fun-car-play-server.vercel.app/getCarsByText/${text}`)
        .then(res=> res.json())
        .then(data=> setAllToys(data))
    }

    return (
        <div>
            <div className="form-control my-5 ">
                <form onSubmit={handleSearch} className="input-group justify-center">
                    <input type="text" name="text" placeholder="Search…" className="input input-bordered" />
                    <button type="submit" className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button> 
                </form>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allToys.map((toy, index) =>
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-28 h-28">
                                                <img src={toy.image_url} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{toy.name}</div>
                                        <div className="text-sm opacity-50">added by: {toy.seller_name}</div>
                                    </div>
                                </td>
                                <td>{toy.sub_category}</td>
                                <td>{toy.price} $</td>
                                <td>{toy.quantity}</td>
                                <th>
                                    <Link to={`/details/${toy._id}`} className="btn btn-warning">View Details</Link>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;