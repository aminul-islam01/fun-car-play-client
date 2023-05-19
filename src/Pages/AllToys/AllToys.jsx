import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys)

    return (
        <div>

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
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allToys.map((toy, index) => 
                        <tr key={toy._id}>
                            <th>{index+1}</th>
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
                            <button className="btn btn-warning">View Details</button>
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