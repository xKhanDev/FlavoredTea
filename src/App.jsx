import React, { createContext } from "react";
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
import jsonData from "../data.json";

export const DataContext = createContext();
const App = () => {
  return (
    <>
      <DataContext.Provider value={jsonData}>
        <div className="w-full h-full hidden">
          <img
            src={bg}
            className="w-full h-full cover relative blur-lg opacity-70"
          />
        </div>
        <div className="w-full md:p-4 md:my-0 md:mx-auto lg:p-10 lg:my-0 lg:mx-auto absolute left-0 top-0 bg-gray">
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
