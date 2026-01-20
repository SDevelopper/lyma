import Hero from "@/features/pages/main/components/heroBanner";
import SecondBanner from "@/features/pages/main/components/secondBanner";
import ThreeBanner from "@/features/pages/main/components/threeBanner";
import hero from "@/assets/images/hero.jpg"
import innovation from "@/assets/images/innovation.jpg";
import FourBanner from "@/features/pages/main/components/fourBanner";
import ScrollBanner from "@/features/pages/main/components/scrollBanner";

export default function Home() {
  return (<>
    <Hero image={hero} title="THE FUTURE OF WELLNES."
    description="The perfect balance of scines, nature and technology. Prepare to look and fell
                your absolute best."/>
    <SecondBanner/>
    <ThreeBanner/>
    <Hero image={innovation} title="WELLNES INNOVATION AT ITS SCIENTIFIC BEST."/>
    <FourBanner/>
    <ScrollBanner/>
  </>);
};
