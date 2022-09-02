
import { useDispatch} from "react-redux";
import { filterAuthor, filterCategory } from "../redux/filter/actions";

const Blog = ({ blog }) => {
    const { author, title, category, img, read_time, time, auth_img } = blog;

    const dispatch = useDispatch();

    const categoryHandler = (item) => {
        console.log("helo click");
        dispatch(filterCategory(item))
    }
    const authorHandler = (item) => {
        console.log("helo click");
        dispatch(filterAuthor(item))
    }

    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full cursor-pointer text-sm font-medium bg-indigo-100 text-indigo-800"
                            onClick={() => categoryHandler(category)}
                        >
                            {category}
                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={auth_img}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 cursor-pointer "
                            onClick={() => authorHandler(author)}
                        >
                            {author}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time dateTime="2020-03-16"
                            >{time}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {read_time} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default Blog