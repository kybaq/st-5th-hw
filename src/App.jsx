import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
// import { AppContext } from "./context/AppContext";

function App() {
  // TODO: texts 를 redux 로 리팩터링

  return (
    <>
      {/* <AppContext.Provider value={{ texts, setTexts }}> */}
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
      {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
