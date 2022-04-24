# create react app

`npx create-react-app <app_name>`

component = function that returns JSX

ex:-

```javascript
function SomeComponent(props) {
	return <div>Hello World</div>;
}
```

```javascript
function SomeComponent(props) {
	return <>Hello World</>;
}
```

some more ex:-

```javascript
function App() {
	const v = "something";
	return (
		<div className="App">
			<h1>Hello {v} From React!</h1>
		</div>
	);
}
function App() {
	// const truthy = true
	const truthy = false;
	return (
		<div className="App">
			{/* <h1>Hello {1+2} From React!</h1> */}
			<h1>Hello {truthy ? "Yes" : "No"}</h1>
		</div>
	);
}
```

There is also a defaultProps available so if no value is passed for a particular key as argument then value assigned to the same key can be used in the component.

props is an object so it can be destructured as well.

Using styles directly in a react component just like we use in HTML will require us to put 2 curly braces
ex:-

```javascript
<Todo style={{ color: red }}></Todo>
```

or

we can also do the following thing:-

```javascript
<Todo style={headingStyle}></Todo>
.
.
.

const headingStyle = {
	color:"red",
	backgroundColor:"black"
}
```
