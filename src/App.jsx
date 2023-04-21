import {Greeting, UserCard} from "./Gretting";

function App() {
  return (
    <>
      <UserCard
        name="Ryan Ray"
        amount={3000}
        married={true}
        points={[99, 33.3, 22.2]}
        address={{ street: "123 Main Street", city: "New York" }}
        greet = {function () {alert("Hola")}}
      />
    </>
  );
}
export default App;
