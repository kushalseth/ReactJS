import React from "react";
import ReactDOM from "react-dom";

// react Element
const heading = <h1 className="head">Hello from React</h1>;

// react functional component
const SubHeading = () => <h2 className="head">Thanks for Visit.</h2>;

// react functional component
const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <h1 className="head">Hello from functional component</h1>
      <SubHeading />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // rendering the React Element

root.render(<HeadingComponent />); // rendering functioncal component
