import { useCallback, useEffect} from 'react'
import searchSVg from '../assets/search.svg'
import { useSelector } from "react-redux";
import { debounce } from './Debounce';

const Searchbar = ({data, setData }) => {
    const blogs = useSelector((state) => state.blogs)

    const searchFn = (e) => {
        const search = e.target.value;
        const filtered = blogs.filter((result) => {
            if (search === "") {
                return result;
            } else if (result.title.toLowerCase().includes(search.toLowerCase())) {
                return result;

            }
        })
        setData(filtered);
    }

    useEffect(() => {
      
    setData(blogs)
     
    }, [])

const searchDebounce = useCallback(debounce(searchFn), [])

    return (
        <div>
            <div
                className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
            >
                <input
                    className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={searchDebounce}
                />
                <img
                    className="inline h-6 cursor-pointer"
                    src={searchSVg}
                    alt="Search"
                />
            </div>
        </div>
    )
}
export default Searchbar