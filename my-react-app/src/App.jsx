import Header from "./Header"
import Footer from "./footer";
import Food from "./food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: "apple" },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <Footer />
      <Header />
      <Food />
      <Food />
      <Food />
      <Food />
      <Card />
      <Button />
      <Student />
      <Student name="Sponge Bob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={52} isStudent={false}/>
      <UserGreeting isLoggedIn={true} username="An4ikhUN733R"/>
      <UserGreeting/>
      {fruits.length > 0 && <List items={fruits} category={"Fruits"}/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );  
}

export default App
