import {assets} from "../assets/assets"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex items-center justify-between mx-4 py-4 lg:mx-44">
            <Link to="/"><img className="w-32 sm:w-44" src={assets.logo} alt="Logo" /></Link>
            <button className="flex text-white bg-zinc-800 gap-4 text-sm items-center py-3 px-8 sm:py-4  rounded-full">Get Started
                <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="arrow_icon" />
            </button>
        </div>
    )
}
export default Navbar