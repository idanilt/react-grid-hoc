# react-grid-hoc
Extract grid functionality outside from the components like in css grid layout

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
