import React, { createContext } from "react";
import {
  Navbar,
  AppSection,
  CardSection,
  MainSection,
  About,
  ViewMenu,
  Footer,
  Menu,
} from "./components/index";
import bg from "../public/images/bg.jpg";
import jsonData from "./data.json";

export const DataContext = createContext();
const App = () => {
  return (
    <>
      <DataContext.Provider value={jsonData}>
        <div className="w-full h-full">
          <img
            src={bg}
            alt="background image"
            className="w-full h-full brightness-90 cover"
          />
        </div>

        <div className="w-full md:p-4 md:my-0 md:mx-auto lg:p-10 lg:my-0 lg:mx-auto absolute left-0 top-0 backdrop-blur-[35px] bg-gray-400/50 overflow-x-hidden">
          <Navbar />
          <MainSection />
          <CardSection />
          <About />
          <AppSection />
          <ViewMenu />
          <Footer />
        </div>
      </DataContext.Provider>
    </>
  );
};

export default App;
