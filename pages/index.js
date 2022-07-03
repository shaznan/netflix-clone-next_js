import MainSection from "../components/Landing/MainSection";
import OurStorySection from "../components/Landing/OurStorySection";
import FAQ from "../components/Landing/FAQ";
import axios from "axios";

export default function Landing() {
  return (
    <div>
      <MainSection />
      <OurStorySection />
      <FAQ />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const data = await axios.get(
      "https://aqakub0ie3.execute-api.us-east-1.amazonaws.com/api/v1/landing/faq"
    );

    return {
      props: data,
    };
  } catch (error) {
    console.log(error);
  }
}
