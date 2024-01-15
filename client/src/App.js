import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Movies from "./components/Movies";
import Users from "./components/Users";

import './App.css';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Movies />
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
