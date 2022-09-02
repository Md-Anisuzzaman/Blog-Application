import logo from '../assets/favicon.png'

const Navigation = () => {
    return (
        <div>
            <nav className="bg-slate-100 shadow-md">
                <div
                    className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
                >
                    <img
                        className="h-10 "
                        src={logo}
                        alt="Learn with Sumit"
                    />
                   <div><button className="text-sky-600 text-xl">LOGIN</button></div>
                </div>
            </nav>
        </div>
    )
}
export default Navigation