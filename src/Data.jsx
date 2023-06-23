const Data = () => {
  const cards = [
    {
      name: "AbdulRahman",
      email: "AbdulRahman@gmail.com",
      tel: "123-456-7890",
      photo: "https://github.com/aldukhn.png",
    },
    {
      name: "Juan",
      email: "jane@example.com",
      tel: "055-555-5555",
    },
    {
      name: "Magda",
      email: "Magda@example.com",
      tel: "555-555-5555",
    },
  ];
  return { cards: cards, title: "My Cards" };
};

export default Data;
