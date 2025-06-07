import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gradient-to-br from-[#9f70fd] to-[#a167ff] py-12">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                <p className="text-gray-100 mb-6 max-w-xl mx-auto">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to the coolest accessories, we have it all!
                </p>

                <div className='text-center'>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-purple-100 transition"            >
                        Shop Now
                    </button>
                </div>
                {/* Image Card */}
                <div className="mt-10 p-1 bg-white rounded-3xl shadow-lg inline-block">
                    <img
                        src="/public/assets/banner.jpg" // 👈 Use your actual image path
                        alt="Gadget Display"
                        className="rounded-2xl w-full max-w-5xl object-cover"
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
