import React, { useState } from 'react'
import { assets, productsDummyData } from '../assets/assets'
import ProductCard from '../Components/ProductCard'

const ProductList = () => {
    const catergory = ['Smartphone', 'Laptop', 'Smartwatches', 'Headphone', 'Camera', 'Tablets', 'Accessories',
        'Earphone'
    ]
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategory = (category) => {
        setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
    }
    const [sort, setSort] = useState("Relevant");

    const filteredProducts = selectedCategories.length === 0 ? productsDummyData : productsDummyData.filter(product => selectedCategories.includes(product.category))
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === 'Low') return a.offerPrice - b.offerPrice;
        if (sort === 'High') return b.offerPrice - a.offerPrice;
        if (sort === 'New') return b.date - a.date;
        return 0;
    })

    const types = [
        "iOS Devices",
        "Android Devices",
        "Noise Cancelling",
        "Touchscreen",
        "OLED Display",
        "M-Series Chips",
        "Fitness-Oriented",
        "Productivity",
        "Entertainment"
    ];
    const [btnActive, setBtnActive] = useState(false);
    const [openFilter, setOpenFilter] = useState(true);

    return (
        <div className="w-full flex flex-col md:flex-row md:px-16 px-4 py-6 gap-6">
            {/* Filters Sidebar */}
            <div className="md:w-1/4 md:top-0 md:sticky w-full">
                <button onClick={() => { setBtnActive(prev => !prev); setOpenFilter(prev => !prev) }} className={`cursor-pointer  border-[1px] rounded-full border-gray-600 px-2 py-1 text-[12px] font-semibold mb-4 flex ${btnActive ? 'bg-white text-black' : 'bg-black text-white'} `}>FILTERS</button>

                {/* Categories Filter */}
                <div className={`border p-4 transform transition-all origin-top mb-6 md:block ${openFilter ? 'block scale-y-100 opacity-100 h-auto' : 'hidden h-0 overflow-hidden scale-y-0 opacity-0'}`}>
                    <h3 className="font-bold mb-3">CATEGORIES</h3>
                    {catergory.map((category, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <input type="checkbox" id={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategory(category)} />
                            <label htmlFor={category} className="text-sm">{category}</label>
                        </div>
                    ))}
                </div>

                {/* Type Filter */}
                <div className={`border p-4 transform transition-all md:block ${openFilter ? 'block scale-y-100 origin-top opacity-100 h-auto' : 'hidden h-0 overflow-hidden scale-y-0 opacity-0'}`}>
                    <h3 className="font-bold mb-3">TYPE</h3>
                    {types.map((type, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <input type="checkbox" id={type} />
                            <label htmlFor={type} className="text-sm">{type}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Products Section */}
            <div className="md:w-3/4 w-full flex flex-col">
                {/* Sort by Dropdown */}
                <div className="flex justify-between items-center mb-4 ">
                    <h1 className="text-2xl font-semibold">ALL COLLECTIONS</h1>
                    <select className="border text-sm p-2 rounded-md" onChange={(e) => setSort(e.target.value)} value={sort}>
                        <option value={"Relevant"}>Sort by: Relevant</option>
                        <option value={"Low"}>Price: Low to High</option>
                        <option value={"High"}>Price: High to Low</option>
                        <option value={"New"}>Newest First</option>
                    </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        sortedProducts.map((product, index) => {
                            return <ProductCard product={product} key={index} />
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default ProductList
//   <div className='grid  mt-3 md:grid-cols-4   grid-cols-2 gap-5 w-full '>

//                 {
//                     productsDummyData.map((product, index) => {
//                         return <ProductCard product={product} key={index} />
//                     })
//                 }
//             </div>