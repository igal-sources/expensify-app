import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../actions/filters";

it("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

it("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

it("should generate set text filter provide value action object", () => {
  const action = setTextFilter("text filter");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "text filter"
  });
});

it("should generate set text filter provide default value action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

it("should generate sort by date action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

it("should generate sort by amount action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
