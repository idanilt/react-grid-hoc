# react-grid-hoc

[![Join the chat at https://gitter.im/react-grid-hoc/Lobby](https://badges.gitter.im/react-grid-hoc/Lobby.svg)](https://gitter.im/react-grid-hoc/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Extract grid functionality outside from the components like in css grid layout

# Please give feedback
[Useful or not? Better alternatives? Does it the right direction?](https://github.com/idanilt/react-grid-hoc/issues/1)

# Roadmap
* 0.0.1 - initialize the project with the motivation in mind
* 0.0.2 - Collect feedback, useful or not, better alternatives and does it the right direction?
* 0.0.3 - POC
* 0.0.4 - alpha - detect css grid disable; basic grid support;
* 0.0.5 - beta - toolchain: tests, benchmark, build (es, AMD, TS, CommonJS), start (dev mode); support browsers; alternative for react (preact, Inferno); React native;
* 0.0.6 - first stable release
# Browser goal:
IE9+, edge 13-15? Opera Mini, Opera Mobile, UC Browser for Android

# Motivation
We have a simple Login component (excuse my ugly mock)
```javascript
<Login>
      <User>
      <Pass>
      <LoginButton>
</Login>
```
Here we can see, we have 2 input and button, nice easy and declarative
Now, let's add some grid
```javascript
<Login>
  <Row>
    <Col>
      <User>
     </Col>
    <Col>
      <Pass>
    </Col>
  </Row>
  <Row>
    <Col>
      <LoginButton>
    </Col>
  </Row>
</Login>
```

It's got very ugly very fest, it's doesn’t matter if it's flexbox, bootstrap or any other grid it will look like that.
Flexbox can be good if you using only on dimension on your components 
But as soon as you have both horizontal and vertical elements you will have to again start use some extra components...

Css-grid-layout, exally solve this problem perfectly:
```javascript
<Login>
      <User>
      <Pass>
      <LoginButton>
</Login>
```
```CSS
Login {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
User {
}
Pass { 
}
LoginButton {
  grid-column: 1 / 3;
  grid-row: 2;
}
```
Here you can see the grid is extracted perfectly to other component
And as a bonus the grid behaver become match more declarative and easy to work with

**So why not CSS Grid Layout?**
There are 2 reasons right now:
1. It's still very new... browser support etc...
2. Other react targets not know what is css-grid (e.g. react native)

Another consideration, the Polyfill are still buggy and slowly because it's using the DOM and not VD like React
So here we go...

```javascript
const grid = {
  Login {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  User {
  }
  Pass { 
  }
  LoginButton {
    grid-column: 1 / 3;
    grid-row: 2;
  }
}
<GridHOC styles={grid}>
  <Login>
        <User>
        <Pass>
        <LoginButton>
  </Login>
</GridHOC>
```
Our code is nice and clean weee ;)
Than we can do:
1. Detect if we have css grid, than do nothing (trasform css-in-js to regular css)
2. Warp all children with grid elements, use flexbox as the foundation, we can run on old browser and react native
