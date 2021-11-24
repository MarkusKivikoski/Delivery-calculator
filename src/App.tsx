import React from "react";
import Calculator from "./components/Calculator";
import Typography from "@material-ui/core/Typography";

const App = () => {
  return (
    <div
      style={{
        marginLeft: "10vh",
        marginRight: "10vh",
      }}
    >
      <Typography variant="h1">Delivery Fee Calculator</Typography>
      <Calculator />
    </div>
  );
};

export default App;
