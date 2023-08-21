import bg from "@/shared/assets/ad-bg.png"
import env from "@/shared/assets/safe-environment.png"
import monitoring from "@/shared/assets/monitoring.png"
import support from "@/shared/assets/support.png"
import resources from "@/shared/assets/resources.png"
import communication from "@/shared/assets/communication.png"

export const Advantages = () => {
  return (
    <div className="pt-14 px-64" style={{ backgroundImage: `url(${bg})` }}>
      <p className="text-white text-5xl font-bold text-center">
        Application Benefits
      </p>
      <div className="mt-14 flex bg-white rounded-3xl">
        <div className="pt-16 pl-8 pb-36 pr-5">
          <p className="adv-header">Safe environment</p>
          <p className="adv-txt">
            Shuttle offers a safe platform for school children to <br />{" "}
            socialise, where only students and teachers have
            <br /> access. A controlled environment is established to
            <br /> prevent unwanted content or cyberbullying.
          </p>
        </div>
        <div>
          <img className="min-h-full" src={env} alt="#"></img>
        </div>
      </div>
      <div className="flex">
        <div className="bg-white mt-6 pt-11 mr-9 rounded-3xl flex flex-col justify-between overflow-hidden">
          <div>
            <p className="adv-header pl-8">Monitoring</p>
            <p className="adv-txt pl-8 pr-8 mb-9">
              Shuttle enables teachers and school <br /> administrators to
              monitor students more <br /> effectively. They can detect warning
              signs of <br />
              cyberbullying and take appropriate measures <br /> to prevent it.
            </p>
          </div>
          <div>
            <img className="min-h-full" src={monitoring} alt="#"></img>
          </div>
        </div>
        <div className="bg-white mt-6 pt-11 rounded-3xl">
          <div>
            <p className="adv-header pl-8">
              Support and <br /> advice
            </p>
            <p className="adv-txt pl-8 pr-8 mb-16">
              Through a closed social network, the school <br /> community,
              including teachers and school <br /> psychologists, can provide
              support and advice <br /> to students who face cyberbullying. This
              creates <br /> a trusting environment in which children can <br />{" "}
              seek help and support.
            </p>
          </div>
          <div>
            <img className="min-w-full" src={support} alt="#"></img>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white flex rounded-3xl">
        <div>
          <img src={resources} alt="#"></img>
        </div>
        <div className="ml-6 pt-11 pr-8">
          <p className="adv-header">
            Educational resources <br /> and materials
          </p>
          <p className="adv-txt">
            Shuttle can provide students with access to educational resources
            <br />
            and materials that enhance their skills and knowledge. This supports{" "}
            <br /> active learning and personal development for students.
          </p>
        </div>
      </div>
      <div className="mt-6 bg-white flex space-between rounded-3xl">
        <div className="pt-11 pl-8">
          <p className="adv-header">Communication with parents</p>
          <p className="adv-txt mb-12">
            The closed social network can also be used as a platform for <br />
            communication and cooperation with parents. Parents can be informed
            <br />
            about school events, curricula, projects and resources, and can
            actively
            <br /> participate in discussions related to security and the
            prevention of cyberbullying.
          </p>
        </div>
        <div>
          <img className="min-h-full" src={communication} alt="#"></img>
        </div>
      </div>
    </div>
  )
}
