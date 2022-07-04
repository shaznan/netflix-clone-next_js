import MainSection from "../components/Landing/MainSection";
import OurStorySection from "../components/Landing/OurStorySection";
import FAQ from "../components/Landing/FAQ";
import axios from "axios";
import { LandingWrapper } from "../components/Landing/style";

export default function Landing({ data }) {
  return (
    <LandingWrapper>
      <MainSection />
      <OurStorySection />
      <FAQ data={data} />
    </LandingWrapper>
  );
}

export async function getStaticProps() {
  let faqData = [];

  try {
    let {
      data: { data },
    } = await axios.get(
      "https://aqakub0ie3.execute-api.us-east-1.amazonaws.com/serveLandingPage"
    );
    faqData = data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: faqData,
    },
  };
}
