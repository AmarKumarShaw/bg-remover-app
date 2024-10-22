import { assets } from "../assets/assets"
const Hero =() => {
    return(
        <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
            {/* Left Side */}
            <div className="">
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">Remove the <br className="max-md:hidden" /> <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent ">background</span> from <br className="max-md:hidden"/>images for free</h1>
                <p className="my-6 text-gray-500 text-[15px]"> Let&apos;s remove the hassle of background removal</p>

                <div className="">
                    <input type="file" name="" id="upload1" hidden />
                    <label className="inline-flex flex-row gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 cursor-pointer hover:scale-105 transition-all duration-500" htmlFor="upload1">
                        <img src={assets.upload_btn_icon} alt="upload_icon" />
                        <p className="text-white text-sm">Upload your image </p>
                    </label>
                </div>
            </div>
            {/* Right Side  */}
            <div className="w-full max-w-md">
                <img src={assets.header_img} alt="hero_img" />
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default Hero