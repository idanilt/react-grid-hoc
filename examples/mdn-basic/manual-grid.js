const repeat = TBD => ({});
const minmax = TBD => ({});

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: repeat(3, "1fr"),
    gridGap: "10px",
    gridAutoRows: minmax("100px", "auto")
  },
  one: {
    gridColumn: "1 / 3",
    gridRow: 1
  },
  two: {
    gridColumn: "2 / 4",
    gridRow: "1 / 3"
  },
  three: {
    gridColumn: 1,
    gridRow: "2 / 5"
  },
  four: {
    gridColumn: 3,
    gridRow: 3
  },
  five: {
    gridColumn: 2,
    gridRow: 4
  },
  six: {
    gridColumn: 3,
    gridRow: 4
  }
};
console.log(styles);
React = {
  createElement: preact.h
};

dom = preact.render(React.createElement(
  "div",
  { className: "wrapper" },
  React.createElement(
    "div",
    { className: "one" },
    "One"
  ),
  React.createElement(
    "div",
    { className: "two" },
    "Two"
  ),
  React.createElement(
    "div",
    { className: "three" },
    "Three"
  ),
  React.createElement(
    "div",
    { className: "four" },
    "Four"
  ),
  React.createElement(
    "div",
    { className: "five" },
    "Five"
  ),
  React.createElement(
    "div",
    { className: "six" },
    "Six"
  )
));

document.body.appendChild(dom);
