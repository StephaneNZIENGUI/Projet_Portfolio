/* eslint-disable @next/next/no-img-element */

import { Section } from "./Section"

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-5xl">François NGOYE NZIENGUI</h2>
            <h3>Developpeur Front-End & spécialiste CyberSécurité </h3>
            <p>
                Je suis un professionnel polyvalent qui combine le développement front-end avec une expertise 
                en cybersécurité, une compétence rare qui me permet de créer des solutions à la fois performantes et sûres. Mes capacités 
                analytiques, associées à une approche proactive, me permettent de prévenir les risques tout en 
                innovant constamment. Je suis déterminé à apporter des contributions significatives à votre 
                équipe en alliant performance technique et sécurité
            </p>
        </div>
        <div className="flex-1">
            <img 
            src="https://avatars.githubusercontent.com/u/101138487?v=4"  
            className="w-full h-auto max-w-xs rounded-full" 
            alt="François picture" 
            />
        </div>
    </Section>
  );
};
