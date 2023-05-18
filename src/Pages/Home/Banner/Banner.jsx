
import image1 from '../../../images/banner1.png'

const Banner = () => {
    return (
        <div className="carousel w-full h-[100vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full object-cover" />
                <div className='absolute flex justify-center items-center text-center w-full h-full bg-gradient-to-b from-[#080808ba] to-[rgba(21, 21, 21, .5)]'>
                    <div className='md:w-1/2 px-2'>
                        <h2 className='text-2xl md:text-4xl font-bold text-center text-white mb-5'>Race to Fun and Adventure at <br /><span className='text-yellow-400 text-3xl md:text-5xl'>Fun Car Play</span> - Your Ultimate Destination for Toy Cars!</h2>
                        <p className='text-white mb-8'>
                            Rev Up the Fun with Our Spectacular Toy Car Collection! Discover the Ultimate Playground of Imagination and Adventure. Explore a Vast Selection of High-Quality, Lifelike, and Interactive Toy Cars. From Speedsters to Off-Road Warriors, Unleash Your Childs Inner Driver. Fuel Their Passion for Racing and Exploration. Experience Hours of Joyful Play and Unforgettable Memories. Start Your Engines and Let the Adventure Begin. Shop Now and Drive into a World of Endless Excitement!
                        </p>
                        <button className="btn btn-warning mr-3">Shop Now</button>
                        <button className="btn btn-outline btn-warning">About Us</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image1} className="w-full object-cover" />
                <div className='absolute flex justify-center items-center text-center w-full h-full bg-gradient-to-b from-[#080808ba] to-[rgba(21, 21, 21, .5)]'>
                    <div className='md:w-1/2 px-2'>
                        <h2 className='text-2xl md:text-4xl font-bold text-center text-white mb-5'>Race to Fun and Adventure at <br /><span className='text-yellow-400 text-3xl md:text-5xl'>Fun Car Play</span> - Your Ultimate Destination for Toy Cars!</h2>
                        <p className='text-white mb-8'>
                            Rev Up the Fun with Our Spectacular Toy Car Collection! Discover the Ultimate Playground of Imagination and Adventure. Explore a Vast Selection of High-Quality, Lifelike, and Interactive Toy Cars. From Speedsters to Off-Road Warriors, Unleash Your Childs Inner Driver. Fuel Their Passion for Racing and Exploration. Experience Hours of Joyful Play and Unforgettable Memories. Start Your Engines and Let the Adventure Begin. Shop Now and Drive into a World of Endless Excitement!
                        </p>
                        <button className="btn btn-warning mr-3">Shop Now</button>
                        <button className="btn btn-outline btn-warning">About Us</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image1} className="w-full object-cover" />
                <div className='absolute flex justify-center items-center text-center w-full h-full bg-gradient-to-b from-[#080808ba] to-[rgba(21, 21, 21, .5)]'>
                    <div className='md:w-1/2 px-2'>
                        <h2 className='text-2xl md:text-4xl font-bold text-center text-white mb-5'>Race to Fun and Adventure at <br /><span className='text-yellow-400 text-3xl md:text-5xl'>Fun Car Play</span> - Your Ultimate Destination for Toy Cars!</h2>
                        <p className='text-white mb-8'>
                            Rev Up the Fun with Our Spectacular Toy Car Collection! Discover the Ultimate Playground of Imagination and Adventure. Explore a Vast Selection of High-Quality, Lifelike, and Interactive Toy Cars. From Speedsters to Off-Road Warriors, Unleash Your Childs Inner Driver. Fuel Their Passion for Racing and Exploration. Experience Hours of Joyful Play and Unforgettable Memories. Start Your Engines and Let the Adventure Begin. Shop Now and Drive into a World of Endless Excitement!
                        </p>
                        <button className="btn btn-warning mr-3">Shop Now</button>
                        <button className="btn btn-outline btn-warning">About Us</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;