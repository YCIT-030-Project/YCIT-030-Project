const Data = () => {
  const cards = [
    {
      id: 0,
      name: "AbdulRahman",
      email: "AbdulRahman@gmail.com",
      tel: "123-456-7890",
      photo: "https://github.com/aldukhn.png",
    },
    {
      id: 1,
      name: "Juan",
      email: "Juan@example.com",
      tel: "055-555-5555",
    },
    {
      id: 2,
      name: "Magda",
      email: "Magda@example.com",
      tel: "555-555-5555",
    },
    {
      id: 3,
      name: "Franklin Ellermann",
      email: "Franklin_Ellermann@gmail.com",
      tel: "452-555-5555",
      photo: "https://xsgames.co/randomusers/assets/avatars/male/53.jpg",
    },
    {
      id: 4,
      name: "Reid Vanbrakle",
      email: "Reid_Vanbrakle@gmail.com",
      tel: "123-456-7890",
      photo: "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg",
    },
    {
      id: 5,
      name: "Victor Ganes",
      email: "Victor_Ganes@gmail.com",
      tel: "987-654-3210",
    },
  ];
  return { cards: cards, title: "My Cards", titles: "Home Page" };
};

export default Data;
