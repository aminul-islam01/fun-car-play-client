import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/car.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);

    const handleCategory = (event) => {
        console.log(event)
    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleCategory('title1')}>Title 1</Tab>
                    <Tab onClick={() => handleCategory('title2')}>Title 2</Tab>
                    <Tab onClick={() => handleCategory('title2')}>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            <div className="grid grid-cols-3 gap-10 my-20">
                {
                    products.map(product => <ShopCard
                        key={product.id}
                        product={product}></ShopCard>)
                }
            </div>
        </div>
    );
};

export default Shop;