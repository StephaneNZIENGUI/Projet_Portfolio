import { Card } from '@/components/ui/card';
import { Section } from './Section'
import { ALargeSmall, ArrowUpRight, Code, LucideIcon, MessageCircle, Rss, StickyNote, Weight } from 'lucide-react';
import Link from "next/link";
import { Badge } from '@/components/ui/badge';



export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
    <div className='flex-[3] w-full'>
    <Card className="flex-[3] w-full p-4 flex flex-col gap-2 w-full">
        <p className='text-lg text-muted-foreground'>Side, fun projects...</p>
        <div className='flex flex-col gap-4'>
          {SIDE_PROJECTS.map((project, index) => (
            <SideProject
            key={index}
            Logo={project.Logo}
            title={project.title}
            description={project.description}
            url='/'
            />
          ))}
        </div>
    </Card>
    </div>
    <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className='p-4 flex-1'>        
          <p className='text-lg text-muted-foreground'>Work</p>
          <div className='flex flex-col gap-4'>
          {WORKS.map((work, index) => (
            <Work
            key={index}
           {...work}
            />
          ))}
        </div>
        </Card>
        <Card className='p-4 flex-1 flex flex-col gap-2'>
          <p className='text-lg text-muted-foreground'>Contact me</p>
          <ContactCard 
          name="@stayfine_w" 
          image="https://avatars.githubusercontent.com/u/101138487?v=4" 
          mediumImage='https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid' 
          description="16.000" />
           <ContactCard 
          name="François NGOYE NZIENGUI" 
          image="https://avatars.githubusercontent.com/u/101138487?v=4" 
          mediumImage='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/150px-LinkedIn_icon.svg.png' 
          description="12.000" />
        </Card>
    </div>
    </Section>
  );
};

const ContactCard = (props:{
  image: string; 
  mediumImage: string;
  name: string;
  description: string;
 }) =>{
  return(
    <Card className='p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4'>
      <div className='relative'>
        <img src={props.image} alt={props.name} className='w-10 h-10 rounded-full object-contain'/>
        <img 
        src={props.mediumImage} 
        alt={props.name} 
        className='w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain '/>
      </div>
      <div className='mr-auto'>
        <div className='flex items-center gap-2'>
      <p className='text-lg font-semibold'>{props.name}</p>
        </div>
      <p className='text-sm text-muted-foreground'>{props.description}</p> 
      </div>
      <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16}/>
    </Card>
  )
 }

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Codeline",
    description: "A platform for developers to share their",
    url:"/"
  },
  {
    Logo: StickyNote,
    title: "PowerNote",
    description: "A platform for developers to share their",
     url:"/"
  },
  {
    Logo: Rss,
    title: "PowerPost",
    description: "A platform for developers to share their",
     url:"/"
  },
  {
    Logo: MessageCircle,
    title: "Chat2Code",
    description: "A platform for developers to share their",
     url:"/"
  },
  {
    Logo: Weight,
    title: "LinkedLeads",
    description: "A platform for developers to share their",
     url:"/"
  },
  {
    Logo: ALargeSmall,
    title: "BulkCorrector",
    description: "A platform for developers to share their",
     url:"/"
  },
]

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link href={props.url} className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded'>
      
        <props.Logo size={16}/>
      
      <div>
      <p className='text-lg font-semibold'>{props.title}</p>
      <p className='text-sm text-muted-foreground'>{props.description}</p> 
      </div>
    </Link>
  )
};

const WORKS: WorkProps[] = [
  {
  image: "https://media.licdn.com/dms/image/v2/C560BAQEN4g7zm-IziQ/company-logo_100_100/company-logo_100_100/0/1630648695625/ecole_educatel_logo?e=1733961600&v=beta&t=xFoOuQnzTxqBWBQivdJHtmLKrexocwRSYDMxy8bf0Oc",
  title: "Educatel",
  role: "Expert Cybersécurité",
  date: "2023 - Present",
  url: "dvfvffg"
},
{
  image: "https://media.licdn.com/dms/image/v2/C4E0BAQHEFbgFjC4CiA/company-logo_100_100/company-logo_100_100/0/1646900906305/planon_logo?e=1733961600&v=beta&t=Uav2VPUebPOh9dHfO2JKlMLBhXF8hYznfNmcIyEcrZE",
  title: "Planon",
  role: "Développeur Web",
  date: "2022 - 2023",
  url: "dvfvffg",
  freelance: true,
},
{
  image: "https://media.licdn.com/dms/image/v2/C4D0BAQE6FGDs2WMaNw/company-logo_100_100/company-logo_100_100/0/1630554713127?e=1733961600&v=beta&t=s4wkW34KB7XMdAvk_cnQa1R51365rm4GVkFiCMQwe6k",
  title: "EPSI",
  role: "Développeur Web",
  date: "2021 - 2023",
  url: "dvfvffg"
},
]

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean
};

const Work = (props: WorkProps) => {
  return (
    <Link 
      href={props.url} 
      className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded'>
      
        <img 
        src={props.image} 
        alt={props.title} 
        className='w-10 h-10 object-contain rounded-md'/>
     
      <div className='mr-auto'>
        <div className='flex items-center gap-2'>
      <p className='text-lg font-semibold'>{props.title}</p>
      {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
      <p className='text-sm text-muted-foreground'>{props.role}</p> 
      </div>
      <p className='text-xs text-end text-muted-foreground'>{props.date}</p> 
    </Link>
  )
};
