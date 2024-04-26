import Image from "next/image";
import { BackgroundGradientAnimation } from "./componenets/ui/background-gradient-animation";
import { BackgroundGradientAnimationDemo } from "./componenets/BgAnimation";
import Footer from "./componenets/Footer"
import  {HeroParallaxDemo}  from "./componenets/Hero";

export default function Home() {
  return (
   <>

   <BackgroundGradientAnimationDemo/>
  <HeroParallaxDemo/>
   <Footer/>
    
   </>
  );
}
