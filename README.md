# Crud APP 
[For visiting the website you can click here](https://marcodigio.github.io/crud-app)

This application is a simple CRUD interface that simulates the works of a backend under the hood.

The interface is a simple one, after you open the homepage, there is only a button and after you
click it, you will find yourself in the interface to add a Person. Fill in the form and check the
checkbox if you need to insert multiple entries in the database, when you are done, a notification
will pop-up and tell you that the operation was successful and depending if the checkbox is checked
or not, you will find yourself in the homepage again with the updated grid displayed.

On mobile devices, the grid on the homepage can be scrolled for viewing overflowing fields.
### How does it work behind the scenes?
The app uses a global component, served using React built-in context. Every action that is not illegal
to perform, is defined inside the Provider, as documented in the [React Docs](https://react.dev/reference/react/useContext "React useContext docs").

The Provider then modifies the state and the components that needs it are served according to their
needs, for example in the Insert page there is the add function (that serves to add a person) and
the list itself. 

The Provider is wrapped around the App component, that means that all the components
behind it can use the global component. The only custom type used in this app is defined in 
/types/types.ts.

The application use CSS modules to define the local styling of the pages and components,
and plain CSS for the global style. Every file that ends in .module.css is a CSS module file, meanwhile
the others are plain CSS (in this case only global.css).

The components folder contains the components used in the project, and the pages folder the various
pages used.

This application contains a pagination logic that is as follows: it shows the button for first page, the one
for last page and the buttons for the neighbors of the current page.

It is important to note that this app lacks a Search function, that needs further logic to be implemented
and goes beyond the goals of this crud app, because it is more of a backend logic than frontend.