import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(false);
    useEffect(() => {
        fetch('https://fun-car-play-server.vercel.app/cars')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [allProducts])

    const handleCategory = (event) => {
        fetch(`https://fun-car-play-server.vercel.app/cars/${event}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }

    return (
        <div>
            <h2 className='text-4xl font-semibold text-yellow-400 text-center mb-10'>Our Products</h2>
            <Tabs>
                <TabList>
                    <Tab onClick={() => setAllProducts(!allProducts)}>All</Tab>
                    <Tab onClick={() => handleCategory('sportsCar')}>sportsCar</Tab>
                    <Tab onClick={() => handleCategory('truck')}>truck</Tab>
                    <Tab onClick={() => handleCategory('miniPoliceCar')}>miniPoliceCar</Tab>
                </TabList>

                <TabPanel>
                    <h2>All categories</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Categories by sportsCar</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Categories by truck</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Categories by miniPoliceCar</h2>
                </TabPanel>
            </Tabs>
            <div className="grid md:grid-cols-3 gap-10 my-20">
                {
                    products.map(product => <ShopCard
                        key={product._id}
                        product={product}></ShopCard>)
                }
            </div>
        </div>
    );
};

export default Shop;