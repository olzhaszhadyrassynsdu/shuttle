import img from "@/shared/assets/logo.png"
import line from "@/shared/assets/line.png"
import "./style.css"

export const Navbar = () => {
  return (
    <div className="text-white flex justify-between h-11 leading-10">
      <img src={img} alt="#" />
      <div className="menu flex">
        <div className="item">
          <p>About</p>
          <img src={line} alt="#" />
        </div>
        <div className="item">Advantages</div>
        <div className="item">Features</div>
        <div className="item">How to join</div>
        <button className="btn bg-light-blue font-bold rounded-full text-white">
          Support
        </button>
      </div>
    </div>
  )
}
