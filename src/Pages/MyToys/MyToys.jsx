import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/Providers";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyToys = () => {
    const { user } = useContext(UserContext);
    const [allToys, setAllToys] = useState([]);

    const email = user?.email;
    console.log(email)
    const url = `http://localhost:5000/getCarByEmail/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [url])

    const handleDeleteToy = (id) => {
        fetch(`http://localhost:5000/cars/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = allToys.filter(coffee => coffee._id !== id);
                    setAllToys(remaining);
                    alert('delete successfully');
                }
            })
    }

    return (
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
                        <th>Actions</th>
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
                            <td className="font-bold">{toy.name}</td>
                            <td>{toy.sub_category}</td>
                            <td>{toy.price} $</td>
                            <td>{toy.quantity}</td>
                            <th>
                                <div className="flex gap-5">
                                    <Link to={`/update/${toy._id}`}>
                                        <FaEdit></FaEdit>
                                    </Link>
                                    <FaTrashAlt className="cursor-pointer" onClick={() => handleDeleteToy(toy._id)}></FaTrashAlt>
                                </div>
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;