import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Blog from './Blog';
import Searchbar from './Searchbar';


const Blogs = () => {
    const [data, setData] = useState([])
    const filters = useSelector((state) => state.filters)

    const filterResult = (blogs, filters) => {
        let newArr = [];
        if (filters.category === "ALL" && filters.author === "ALL") {
            newArr= blogs.map(elem => elem);
        } 
        else if(filters.category !== "ALL" && filters.author === "ALL") {
            newArr = blogs.filter(elem => filters.category === elem.category)
                .map(elem => elem);
        } else if(filters.author !== "ALL" && filters.category === "ALL"){
            newArr = blogs.filter(elem => filters.author === elem.author)
                .map(elem => elem);
        } else {
            newArr= blogs.filter(elem => filters.category === elem.category && filters.author === elem.author)
                .map(elem => elem);
        }
        return newArr;
    };


    return (
        <div>
            <Searchbar data={data} setData={setData}></Searchbar>
            <section
                className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
            >
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"></div>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2
                            className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                        >
                            SEARCH YOUR FAVOURITE BLOG TOPIC
                        </h2>
                        <p
                            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                        >
                            You'll learn everything from us, Thrilling topics to look out for,
                            Taking every content to reality.
                        </p>
                    </div>

                    <div
                        className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                    >
                        {
                            filterResult(data, filters).map((blog) => <Blog blog={blog} key={blog.id} ></Blog>)
                        }
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Blogs;