import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

it("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

it("should render ExpenseForm correctly with expense data", () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

it("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

it("should set description on input change", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);

  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });

  expect(wrapper.state("description")).toBe(value);
});

it("should set note on textarea change", () => {
  const value = "New note";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("textarea").simulate("change", {
    target: { value }
  });

  expect(wrapper.state("note")).toBe(value);
});

it("should set valid amount on input change", () => {
  const value = "23.5";
  const wrapper = shallow(<ExpenseForm />);

  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });

  expect(wrapper.state("amount")).toBe(value);
});

it("should set NOT valid amount on input change", () => {
  const value = "23.555";
  const wrapper = shallow(<ExpenseForm />);

  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });

  expect(wrapper.state("amount")).not.toBe(value);
});

it("should call onSubmit prop for valid submission", () => {
  //
  // example
  //
  const onSubmitSpy = jest.fn(); // create a mock function
  onSubmitSpy();
  expect(onSubmitSpy).toHaveBeenCalled();

  onSubmitSpy("igal", "israel");
  expect(onSubmitSpy).toHaveBeenCalledWith("igal", "israel");
  // --------------------------------------------------------

  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
  });
});

it("should call onSubmit prop for valid submission", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

it("should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
  expect(wrapper.state("calendarFocused")).toBe(focused);
});
