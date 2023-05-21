
import image from '../../../images/newsletter.jpg'

const NewsLetter = () => {
    return (
        <div>
            <div className="carousel-item relative w-full h-80 mb-20">
                <img src={image} className="w-full object-cover" />
                <div className='absolute flex justify-center items-center text-center w-full h-full bg-gradient-to-b from-[#080808ba] to-[rgba(21, 21, 21, .5)]'>
                    <div className='md:w-1/2 px-2'>
                        <h2 className='text-4xl font-bold text-white'>Subscribe Our Newsletter & Get 30% Discounts For Next Order</h2>
                        <div className="mt-8">
                            <input type="text" placeholder="Your email" className="input input-bordered w-2/3 h-16 rounded-e-none" />
                            <button className="btn btn-primary w-1/3 h-16 rounded-s-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;