import * as React from 'react';

// Use to define interface for AppProps -> actually {} for linting reasons
// export interface AppProps {}

// This is the way to go for the properties in the component
// App: React.SFC<AppProps> = (props) => {}

const App: React.SFC = () => {
    return <h1>Hello React Typescript!</h1>;
};

export default App;
