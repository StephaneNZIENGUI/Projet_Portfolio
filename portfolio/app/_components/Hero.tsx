import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";


const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) =>{
    return (
    <span 
    className={cn("bg-accent/30 font-mono border hover:bg-accent/50 transition-color border-accent px-1 py-0.5 text-primary rounded-sm",className)} 
    {...props } 
    />
);
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption text-5xl text-primary">François NGOYE NZIENGUI</h2>
            <h3 className="text-3xl font-caption">Developpeur Front-End & spécialiste CyberSécurité </h3>
            <p>
                Je suis un professionnel polyvalent qui combine le développement <Code>front-end</Code> avec une expertise 
                en <Code>cybersécurité</Code>, une compétence rare qui me permet de créer des solutions à la fois performantes et sûres. Mes capacités 
                analytiques, associées à une approche proactive, me permettent de prévenir les risques tout en 
                innovant constamment. Je suis déterminé à apporter des contributions significatives à votre 
                équipe en alliant performance technique et sécurité.
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img 
            src="https://avatars.githubusercontent.com/u/101138487?v=4"  
            className="w-full h-auto max-w-xs rounded-full max-md:w-56" 
            alt="François picture" 
            />
        </div>
    </Section>
  );
};
