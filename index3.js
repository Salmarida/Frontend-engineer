const users = [
    {
      name: "Aufa",
      age: 25,
      major: "Informatics"
    },
    {
      name: "Isfa",
      age: 22,
      major: "Engineering"
    },
    {
      name: "Nurul",
      age: 20,
      major: "Information System"
    },
    {
      name: "Salma",
      age: 22,
      major: "Informatics"
    },
    {
      name: "Gilang",
      age: 22,
      major: "Engineering"
    }
  ];
  
  const store = (user) => {
    users.push(user);
  };
  
  
  const newUser = {
    name: "Tri",
    age: 27,
    major: "Marketing"
  };
  
  store(newUser);
  
  
  console.log(users);
  