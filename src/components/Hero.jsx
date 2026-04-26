

import ProductShowcase from "./ProductShowcase";

export default function Hero() {
    return (
        <section className="text-center px-4 py-8">

            <div className="flex justify-center items-center gap-2 mb-12">
                <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/30?img=1" className="rounded-full border" />
                    <img src="https://i.pravatar.cc/30?img=2" className="rounded-full border" />
                    <img src="https://i.pravatar.cc/30?img=3" className="rounded-full border" />
                    <img src="https://i.pravatar.cc/30?img=1" className="rounded-full border" />
                    <img src="https://i.pravatar.cc/30?img=2" className="rounded-full border" />
                </div>
                <p className="text-sm text-gray-600">
                    Trusted by thousands of healthy families
                </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-bold text-[#2E3F1F]">
                The Safest Way to <br /> Shop for Groceries
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-[16px] mt-12 max-w-xl mx-auto">
                Use the Olive Food Scanner App to Instantly Eliminate <br></br> Harmful
                Ingredients from Your Family's Diet and Get <br></br> Expert-Backed Food Insights
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                <button className="bg-[#2E3F1F] text-white px-6 py-3 rounded-full">
                     Download for iOS
                </button>
            </div>

            {/* Phone */}
            <div className="relative py-10">

                <ProductShowcase />

            </div>
        </section>
    );
}