# Answers

1.  What is React JS and what problems does it try and solve?

React is a UI library that is used in various forms to create complex, rich user interfaces. 

DOM operations are quite expensive in terms of performance, and any application that has much of DOM operations in the background will render slowly. For instance, while using the Twitter mobile site or Quora, as you scroll down the page you see an option saying 'show newer feeds'. Similar interactions are seen in Facebook as well. The Ads change, the trending topics list change over time, so there are lots of DOM operations going on in the background.

If the page has data that changes over time at high rates (for example, lots of people commenting on a post, likes being generated etc), then there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data.

React solves this problem, without even having the page reload. It does by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.

1.  What does it mean to _think_ in react?
Thinking in React means thinking how to build an app with React. How to make different components , and join them together to a container component to make  a application. Which components to be made stateful and which one without state on them depending on the user interactions. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.

A class component requires you to extend from React.Component and create a render function which returns a React element. 

Functional components are simpler. They don’t manage their own state or have access to the lifecycle methods provided by React Native. They are literally plain old JavaScript functions. They are also known as stateless components.

Class components are used as container components to handle state management and wrap child components. Functional components generally are just used for display purposes - these components call functions from parent components to handle user interactions or state updates.

1.  Describe state.

In React, we divide the complex UI into basic components. After developing the basic components we again add 
all these components to create a complex UI which also called as complex component. React controls the data flow in the components with state and props. The data in states and props are used to render the Component with dynamic data.

In the React  “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state.It is mostly used to update the component when user performed some action like clicking button, typing some text, pressing some key, etc.
Simply put, if you’d like your app to do anything – if you want interactivity, adding and deleting things, logging in and out – that will involve state.
State can be set up on a constructor function.
State is mutable and can be changed by using the setState method.

1.  Describe props.

In ReactJS we use props to send data to components.The direction in which data flows is top to bottom.
Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.




