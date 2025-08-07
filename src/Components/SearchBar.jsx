import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data,show }) => {
    const navigate = useNavigate();
    const [value, setValue] = useState(data ? data : '');
    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate('');
    }
    return (
        <div className={`transition-transform duration-300 ease-in-out rounded-full overflow-hidden bg-gray-200 
  origin-left flex items-center 
  ${show ? 'scale-x-100 opacity-100 w-[250px]' : 'scale-x-0 opacity-0 w-0'}`}>
  <form onSubmit={onSearchHandler} className="flex w-full">
    <input
      type="text"
      className="flex-grow h-[35.99px] outline-none bg-gray-200 pl-2"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <button className="px-3 bg-orange-500 h-[35.99px] text-white rounded-full text-sm whitespace-nowrap">
      Search
    </button>
  </form>
</div>

    )
}

export default SearchBar
