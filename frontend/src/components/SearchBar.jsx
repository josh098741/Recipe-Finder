import React,{ useState } from 'react'
import { Search } from 'lucide-react'

function SearchBar({ onSearch } ){

    const [query, setQuery] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(query)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="border m-5 h-14 border-slate-900 rounded flex">
                <div className="flex items-center px-5 ">
                    <Search className="w-10 cursor-not-allowed" />
                    <input 
                    type="text" 
                    value={query} 
                    onChange={(event) => setQuery(event.target.value)}
                    className="w-[600px] h-10 outline-none p-5 cursor-pointer text-xl border border-slate-900" />
                    <button type="submit" className="border m-5 h-10 w-[100px] border-slate-900">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar