import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { Status } from './components/Status';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';


function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Jane',
      last: 'Bond'
    }
  ]
  return (
    <div className="App">
      <Greet name="Jane" messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Michelle Yeoh!</Heading>
      </Oscar>
      <Greet name='Bruce' isLoggedIn={true}/>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
