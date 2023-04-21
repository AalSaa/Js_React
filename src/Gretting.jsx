function Greeting({ title, name = "nadie" }) {
  console.log(title);
  return (
    <>
      <h1>
        {title}, dice {name}
      </h1>
    </>
  );
}

function UserCard({name, amount, married, points, address, greet}) {
    console.log(name, amount, married, points, address, greet)
    greet()
  return (
    <div>
      <h1>Usuario: {name}</h1>
      <h2>Dinero: ${amount}</h2>
      <h2>Casado: {married ? "Si" : "No"}</h2>
      <h2>
        Direccion: {address.street}, {address.city}
      </h2>
      <h2>Puntos:</h2>
      <ul>
        <li>{points[0]}</li>
        <li>{points[1]}</li>
        <li>{points[2]}</li>
      </ul>
    </div>
  );
}

export {Greeting, UserCard};
