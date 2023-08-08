import './App.css';
import Header from './components/Header';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const client =  new ApolloClient({
  url: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <>
      <Header/>
      <div>
        
      </div>
    </>
  );
}

export default App;
