import car1 from '../../../images/car1.jpg'
import car2 from '../../../images/car2.jpg'
import car3 from '../../../images/car3.jpg'
import car4 from '../../../images/car4.jpg'
import car5 from '../../../images/car5.jpg'
import car6 from '../../../images/car6.jpg'

const Gallery = () => {
    return (
        <div className='my-28'>
            <h2 className='text-4xl text-center mb-8'>Our Gallery</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 '>
                <img className='w-full h-64 shadow-md hover:scale-125 ease-in duration-300 rounded-lg' src={car1} />
                <img className='w-full h-64 shadow-md hover:scale-125 ease-in duration-300 rounded-lg' src={car2} />
                <img className='w-full h-64 shadow-md hover:scale-125 ease-in duration-300 rounded-lg' src={car3} />
                <img className='w-full h-64 shadow-md hover:scale-125 ease-in duration-300 rounded-lg' src={car4} />
                <img className='w-full h-64 shadow-md hover:scale-125 ease-in duration-300 rounded-lg' src={car5} />
                <img className='w-full h-64 shadow-md hover:scale-125 ease-in duration-300 rounded-lg' src={car6} />
            </div>
        </div>
    );
};

export default Gallery;