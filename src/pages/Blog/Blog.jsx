import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Blog = () => {
    return (
        <div className='bg-dark'>
            <NavigationBar></NavigationBar>
            <div className='container'>
              <h2 className='mt-4 mb-4 text-white' >Some Question and Their Answer</h2>
      <h3 className='text-danger'>
        1. Tell us the differences between uncontrolled and controlled
        components ?{" "}
      </h3>
      <p className='text-white'>
        <strong>Answer : </strong>In the context of software development,
        uncontrolled components and controlled components refer to two different
        approaches for creating reusable UI elements. Uncontrolled components
        are UI elements that manage their own state internally, without any
        external control or manipulation. These components handle their own
        events and manage their own data, making them simpler to use and
        implement in a project. However, this also means that the developer has
        less control over the behavior of the component.
      </p>

      <h3 className='text-danger'>2. How to validate React props using PropTypes</h3>
      <p className='text-success'>
        <strong>Answer : </strong> Define the types and requirements of each
        prop in the propTypes object. PropTypes provides a range of type
        validators, including string, number, boolean, object, array, and more.
        You can also set the isRequired flag to ensure that a prop is passed to
        the component. ..React will automatically validate the props against the
        propTypes object and log a warning in the console if any of the props do
        not match the defined types or requirements... Using PropTypes to
        validate props is a good practice in React, as it helps to catch errors
        early in the development process and ensure that components are used
        correctly.
      </p>

      <h3 className='text-danger'>3 . Tell us the difference between nodejs and express js.</h3>

      <p className='text-white'>
        <strong>Answer : </strong>Node.js is a runtime environment that allows
        developers to run JavaScript code outside of a web browser. Node.js is
        used for building server-side applications, such as web servers,
        command-line tools, and desktop applications. Node.js provides built-in
        modules for file system operations, network communication, and other
        low-level system operations.
      </p>

      <h3 className='text-danger'>
        {" "}
        4 .What is a custom hook, and why will you create a custom hook?
      </h3>
      <p className='text-success'>
      <strong>Answer : </strong>
        In React, a custom hook is a reusable function that encapsulates
        stateful logic and can be shared between components. Custom hooks allow
        developers to extract complex logic from components and reuse it across
        different parts of the application. Custom hooks follow a naming
        convention of starting with the word "use" to indicate that they are
        hooks. Developers may create custom hooks for several reasons,
        including: Code reusability: Custom hooks allow developers to extract
        and reuse complex logic across different components, promoting code
        reusability and reducing code duplication. Encapsulation: Custom hooks
        allow developers to encapsulate complex logic within a single function,
        making it easier to understand and maintain. Abstraction: Custom hooks
        can abstract away complex implementation details and provide a simpler
        and more intuitive interface to other components. Separation of
        concerns: Custom hooks can separate concerns within a component,
        allowing developers to focus on the presentation layer and leave the
        stateful logic to the custom hook.
      </p>
    </div>
        </div>
    );
};

export default Blog;