import React from "react";
import { Helmet } from "react-helmet";
import Landing from "./screens/Landing";


function App() {
  return (
    <>

      <Helmet>
        <title>ERP TECH</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Landing/>



    </>
  );
}

export default App;
