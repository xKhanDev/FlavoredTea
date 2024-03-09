import React from "react";
import {
  Navbar,
  AppSection,
  CardSection,
  MainSection,
  About,
  ViewMenu,
  Footer,
} from "./components/index";
import bg from "../public/images/bg.jpeg";

const App = () => {
  return (
    <>
      <div className="w-full h-full">
        <img src={bg} className="w-full cover relative blur-lg opacity-70" />
      </div>
      <div className="w-full md:p-4 md:my-0 md:mx-auto lg:p-10 lg:my-0 lg:mx-auto absolute left-0 top-0 bg-gray opacity-40">
        <Navbar />
        <MainSection />
        <CardSection />
        <About />
        <AppSection />
        <ViewMenu />
        <Footer />
      </div>
    </>
  );
};

export default App;
