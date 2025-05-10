import { Banner } from "@/components/ui/banner";
import { Benefits } from "@/components/ui/benefits";
import { CookieConsent } from "@/components/ui/cookies";
import { Courses } from "@/components/ui/courses";
import MainContainer from "@/components/ui/main_container";
import { Prices } from "@/components/ui/prices";
import { Testimonials } from "@/components/ui/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <MainContainer>
        <Benefits />
        <Courses />
        <Prices />
        <Testimonials />
        <CookieConsent />
      </MainContainer>
    </div>
  );
}
