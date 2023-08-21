import { Navbar } from "./ui"
import img from "@/shared/assets/bg.png"
import iPhone from "@/shared/assets/iPhone.png"
import earth from "@/shared/assets/Earth.png"

export const Home = () => {
  return (
    <div
      className="h-min-screen px-24 pt-12 bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Navbar />
      <div className="mt-20 text-white flex justify-between items-center">
        <div>
          <p className="home-txt-1 font-black mb-8 text-white">
            Safe social network <br /> for schools
          </p>
          <p className="home-txt-2 text-gray-txt font-medium">
            Children can freely share information with classmates, teachers{" "}
            <br /> and not worry about cyberbullying and unwanted content
          </p>
          <div className="req-form mt-16 grid">
            <input
              className="form-req-input h-14 font-bold rounded-full py-5 px-6"
              placeholder="Phone number"
            ></input>
            <button className="form-req-btn h-14 ml-6 text-center rounded-full font-bold bg-blue-btn">
              Leave a request
            </button>
          </div>
        </div>
        <img src={iPhone} alt="#" />
      </div>
      <img src={earth} alt="#" />
    </div>
  )
}
