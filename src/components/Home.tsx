import { Mail } from "lucide-react"
import img from '../assets/IMG_0874-Copy.jpg'


const Home = () => {
  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
    <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
            Bonjour, <br /> je suis {" "}
            <span className="text-accent">NGOYE NZIENGUI François</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
            Je suis freelance Développeur Front-end & Expert en Cybersécurité
            <br />
            avec 2 ans d'expérience, utilisant de nombreuses technologies comme React <br /> et Node.js.
            Contactez-moi si vous avez besoin de mes services.
        </p>
        <a href="mailto:stephanenziengui.sn@gmail.com?" className="btn btn-accent md:w-fit">
            <Mail className="w-5 h-5"/>
            Contactez-moi
        </a>
    </div>
        
    <div className="md:ml-60">
        <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
        style={{
            borderRadius : "30% 70% 56% 44% / 67% 20% 80% 33%"
        }}
        />
    </div>
    </div>
  )
}

export default Home