import { Github, Lightbulb, Linkedin } from "lucide-react"


const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-10">
            <aside>
                <Lightbulb className="w-10 h-10"/>
                     
                     <p className="font-bold">
                    NZIENGU
                    <span className="text-accent">-INNOVATION</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/ngoye-nziengui-fran%C3%A7ois/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://github.com/StephaneNZIENGUI" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-current" />
                    </a>
                   
                </div>
            </nav>
        </footer>
    )
}

export default Footer