// yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
// yarn add enzyme-to-json@3.0.1
import React from "react";
import { shallow } from "enzyme";

import Header from "../../components/Header";

it("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
