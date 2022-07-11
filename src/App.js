import './App.css';
import Container from './components/Container';
import { AvatarCreatorProvider } from './hooks'

const App = () => {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

const AppWrapper = props => (
  <AvatarCreatorProvider>
    <App {...props} />
  </AvatarCreatorProvider>
)

export default AppWrapper;
