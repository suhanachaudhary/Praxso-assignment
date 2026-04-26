
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const menu = [
        { name: "Solutions", dropdown: true },
        { name: "Features" },
        { name: "Pricing" },
        { name: "Blog", dropdown: true },
        { name: "Restaurants" },
        { name: "Food", dropdown: true },
    ];

    return (
        <nav className="w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">

                    <span
                        className="material-symbols-rounded text-[#8BAE3F]"
                        style={{
                            fontSize: "50px",
                            fontVariationSettings: "'FILL' 1, 'wght' 700, 'opsz' 48",
                            marginRight: "-6px"
                        }}
                    >
                        nutrition
                    </span>
                    <h1 className="text-4xl font-bold text-[#8BAE3F]">Live</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-[16px] text-gray-500 font-medium">
                    {menu.map((item, i) => (
                        <li
                            key={i}
                            className="relative cursor-pointer hover:text-black transition"
                            onMouseEnter={() => setDropdown(i)}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <div className="flex items-center gap-1">
                                {item.name}
                                {item.dropdown && <ChevronDown size={16} />}
                            </div>

                            {/* Dropdown */}
                            {item.dropdown && dropdown === i && item.name === "Solutions" && (
                                <div className="absolute top-10 left-0 w-[650px] bg-white shadow-xl rounded-2xl p-10 z-50 flex gap-8">

                                    {/* LEFT COLUMN */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Allergy Scanning</h4>
                                            <p className="text-sm text-gray-500">
                                                Scan groceries and even bottled water to reveal hidden ingredients
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800">Dairy & Lactose</h4>
                                            <p className="text-sm text-gray-500">
                                                Detect common dairy-derived ingredients like casein, whey
                                            </p>
                                        </div>
                                    </div>

                                    {/* MIDDLE COLUMN */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Gluten Free</h4>
                                            <p className="text-sm text-gray-500">
                                                Flags gluten-containing ingredients instantly
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800">Ingredient Check</h4>
                                            <p className="text-sm text-gray-500">
                                                Decode complex labels in seconds
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-[220px] h-[230px] rounded-xl overflow-hidden relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                                            Modern Day Miracle in California →
                                        </div>
                                    </div>
                                </div>
                            )}

                            {item.dropdown && dropdown === i && item.name === "Blog" && (
                                <div className="absolute top-10 left-[-120px] w-[600px] bg-white shadow-xl rounded-2xl p-10 z-50 flex gap-8">

                                    {/* LEFT BLOG */}
                                    <div className="flex gap-4 cursor-pointer group w-1/2">
                                        <img
                                            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                                            className="w-[110px] h-[110px] rounded-xl object-cover transition duration-300 group-hover:scale-105"
                                        />

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm leading-snug">
                                                Modern-Day Miracle in Salinas, California
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">
                                                One author's journey from faith-based organic advocacy...
                                            </p>
                                        </div>
                                    </div>

                                    {/* RIGHT BLOG */}
                                    <div className="flex gap-4 cursor-pointer group w-1/2">
                                        <img
                                            src="https://images.unsplash.com/photo-1560807707-8cc77767d783"
                                            className="w-[110px] h-[110px] rounded-xl object-cover transition duration-300 group-hover:scale-105"
                                        />

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm leading-snug">
                                                We Bought Eggs From Every Store... What We Discovered
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Not all eggs are created equal. We decoded labels...
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )}

                            {item.dropdown && dropdown === i && item.name === "Food" && (
                                <div className="absolute top-10 left-0 w-[350px] bg-white shadow-xl rounded-2xl p-4 z-50 flex gap-8 text-[16px]">

                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h4 className=" text-gray-500">Allergy Scanning</h4>
                                        </div>

                                        <div>
                                            <h4 className="text-gray-500">Dairy & Lactose</h4>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-500">Allergy Scanning</h4>
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h4 className=" text-gray-500">Gluten Free</h4>
                                        </div>

                                        <div>
                                            <h4 className=" text-gray-500">Ingredient Check</h4>
                                        </div>
                                        <div>
                                            <h4 className=" text-gray-500">Allergy Scanning</h4>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </li>
                    ))}


                </ul>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="text-gray-500 font-medium hover:text-black">
                        Sign in
                    </button>

                    <button className="bg-[#2E3F1F] text-[18px] font-semibold text-white px-5 py-2.5 rounded-full shadow-sm hover:opacity-90 transition">
                        Get Olive →
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                mobileOpen && (
                    <div className="md:hidden px-6 pb-6 bg-[#F7F8F5]">
                        {menu.map((item, i) => (
                            <div key={i} className="py-2 border-b">
                                <p className="flex justify-between items-center text-gray-700">
                                    {item.name}
                                    {item.dropdown && <ChevronDown size={16} />}
                                </p>
                            </div>
                        ))}

                        <div className="mt-4 flex flex-col gap-3">
                            <button className="text-left text-gray-700">Sign in</button>
                            <button className="bg-[#2E3F1F] text-white py-2 rounded-full">
                                Get Olive →
                            </button>
                        </div>
                    </div>
                )
            }
        </nav >
    );
}