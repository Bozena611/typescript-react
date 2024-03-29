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
import { Counterclass } from './components/class/Counterclass';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';


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
      <Counterclass message='The countclass value is ' />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log (item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log (item)} />
      <List
        items={[
        {
          first: 'BElanna',
          last: 'Torres'
        },
        {
          first: 'Kathryn',
          last: 'Janeway'
        },
        {
          first: 'Seven',
          last: 'of nine'
        }
        ]}
        onClick={(item: any) => console.log(item)}
      />
     {/*domNumber value={10} isPositive isNegative isZero />*/}
      <RandomNumber value={10} isPositive />
      <Toast position='center'/>

      <CustomButton variant='primary' onClick={()=>console.log('Clicked')}>
        Primary Button
      </CustomButton>
      <CustomInput />
      <CustomComponent name='Bruce2' isLoggedIn={true} />
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
