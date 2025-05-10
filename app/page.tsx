import { Banner } from "@/components/ui/banner";
import { Benefits } from "@/components/ui/benefits";
import { Courses } from "@/components/ui/courses";
import MainContainer from "@/components/ui/main_container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <MainContainer>
        <Benefits />
        <Courses />
      </MainContainer>
    </div>
  );
}
