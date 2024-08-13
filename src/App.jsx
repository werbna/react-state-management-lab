import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const calculateTotal = (team) => {
    const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0);
    const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);
    setTotalStrength(totalStrength);
    setTotalAgility(totalAgility);
  };

  const handleAddToTeam = (fighter) => {
    if (money >= fighter.price) {
      const newTeam = [...team, fighter];
      setTeam(newTeam);
      setMoney(money - fighter.price);
      calculateTotal(newTeam);
    } else {
      console.log("Not enough money to add this fighter!");
    }
  };

  const handleRemoveFromTeam = (fighter) => {
    const newTeam = team.filter(member => member.name !== fighter.name);
    setTeam(newTeam);
    setMoney(money + fighter.price);
    calculateTotal(newTeam);
  };

  return (
    <>
      <div>
        <h2>Your Team</h2>
        <p>Current Money: ${money}</p>
        <p>Total Team Strength: {totalStrength}</p>
        <p>Total Team Agility: {totalAgility}</p>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter) => (
              <li key={fighter.name}>
                <img src={fighter.img} alt={fighter.name} />
                <h2>{fighter.name}</h2>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFromTeam(fighter)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
        
      <ul>Zombie List!
        {zombieFighters.map((fighter) => (
          <li key={fighter.name}>
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddToTeam(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
