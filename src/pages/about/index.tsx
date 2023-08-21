import bg from "@/shared/assets/about-bg.png"
import line from "@/shared/assets/line-2.png"
import children from "@/shared/assets/children.png"
import logo from "@/shared/assets/logos.png"
import line2 from "@/shared/assets/line-r.png"

export const About = () => {
  return (
    <div
      className="bg-center pt-20 px-24 text-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img src={line} alt="#" className="ml-40" />
      <p className="text-white text-5xl font-bold leading-10 mt-40">
        1 in 3 children worldwide suffer from <br /> cyberbullying
      </p>
      <p className="text-[24px] text-gray-txt mt-14">
        We have a solution that will reduce these rates and protect children
        from <br /> cyberbullying and unwanted content.
      </p>
      <div className="flex justify-center">
        <img src={children} alt="#" className="mt-12" />
      </div>
      <img src={logo} alt="#" className="mt-11" />
      <div className="flex justify-center mt-24">
        <img src={line2} alt="#" className="mb-14" />
      </div>
    </div>
  )
}
