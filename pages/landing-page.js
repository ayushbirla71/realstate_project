import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover Your Perfect Home" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5096px] flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          imageDimensions="/houseline.svg"
          dimensionText="/social-media-logo5.svg"
          dimensionCode="/social-media-logo6.svg"
          dimensionCodeImageUrl="/social-media-logo7.svg"
          dimensionCodeText="/social-media-logo8.svg"
          dimensionCodeText2="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
