import MainSection from "../components/Landing/MainSection";
import OurStorySection from "../components/Landing/OurStorySection";
import FAQ from "../components/Landing/FAQ";
import axios from "axios";

export default function Landing({ data }) {
  return (
    <div>
      <MainSection />
      <OurStorySection />
      {/* <FAQ data={data} /> */}
    </div>
  );
}

export async function getStaticProps() {
  let faqData = [];

  try {
    let { data } = await axios.get(
      "https://aqakub0ie3.execute-api.us-east-1.amazonaws.com/api/v1/landing/faq"
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
