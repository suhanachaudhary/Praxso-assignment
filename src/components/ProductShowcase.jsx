
import { useEffect, useRef, useState } from "react";

const products = [
    {
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        name: "Sourlittles",
        brand: "YumEarth",
        score: 84,
        description: "This product's score is impacted mainly by processed sugars..."
    },
    {
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        name: "Crackers",
        brand: "Healthy Co",
        score: 46,
        description: "Low score due to artificial ingredients..."
    },
    {
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        name: "Snack Mix",
        brand: "Nature",
        score: 72,
        description: "Balanced but contains moderate sugar..."
    }
];


export default function ProductShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto change slide
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % products.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex items-center justify-center overflow-hidden">


            <div className="absolute top-1/2 left-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_10px_30px_rgba(245,250,246,0.9)] z-0">
                <div className="flex gap-6 animate-scroll">
                    {[...products, ...products, ...products, ...products].map((item, i) => (
                        <img
                            key={i}
                            src={item.image}
                            className="w-28 h-20 rounded-2xl object-cover opacity-40 blur-[2px]"
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 w-[320px] bg-white border-[14px] border-gray-200 border-b-0 rounded-[40px] shadow-2xl p-4 mb-[-16px] pb-12">

                <div className="w-24 h-6 bg-black rounded-full mx-auto mb-6"></div>

                <div className="flex justify-center mb-4">
                    <img
                        src={products[activeIndex].image}
                        className="w-40 h-40 object-cover rounded-xl transition-all duration-500"
                    />
                </div>

                {/* TITLE */}
                <h2 className="text-center font-semibold">
                    {products[activeIndex].name}
                </h2>
                <p className="text-center text-sm text-gray-500">
                    {products[activeIndex].brand}
                </p>

                {/* SCORE */}
                <div className="flex justify-center items-center gap-2 mt-2">
                    <span className="text-green-500">●</span>
                    <span>{products[activeIndex].score}/100</span>
                </div>

                {/* CARD */}
                <div className="bg-gray-100 mt-4 p-3 rounded-xl text-xs text-gray-600">
                    <p className="font-semibold mb-1">Oliver Says:</p>
                    <p>{products[activeIndex].description}</p>
                </div>
            </div>
        </div>
    );
}

