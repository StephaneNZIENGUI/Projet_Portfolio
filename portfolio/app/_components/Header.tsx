import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
        <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary-foreground">Mon Portfolio</h1>
            <div className="flex-1"/>
            <ul className="flex items-center gap-2">
                <Link
                href="https://github.com/StephaneNZIENGUI" 
                className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                >
                    <GithubIcon size={12} className="text-foreground" />
                </Link>
                <Link
                href="https://x.com/stayfine_w" 
                className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                >
                    <TwitterIcon size={12} className="text-foreground" />
                </Link>
                <Link
                href="https://www.linkedin.com/in/ngoye-nziengui-fran%C3%A7ois/" 
                className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                >
                    <LinkedinIcon size={12} className="text-foreground" />
                </Link>
            </ul>
        </Section>
    </header>
  );
};

