import React from "react";
import { render } from "@testing-library/react";

import Message from "./Message";
import { MessageProps } from "./Message.types";

describe("Test Component", () => {
  let props: MessageProps;

  beforeEach(() => {
    props = {
      type: "normal",
      text: 'This is a normal message'
    }
  });

  const renderComponent = () => render(<Message {...props} />);

  it("should render foo text correctly", () => {
    props.type = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Message");

    expect(component).toHaveTextContent("harvey was here");
  });
});
