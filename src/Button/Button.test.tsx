// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      type:"primary",
      label: "Primary Button"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.type = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("harvey was here");
  });
});
