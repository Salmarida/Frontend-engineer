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
      age: 22,
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
  
  const destroy = (index) => {
    if (index >= 0 && index < users.length) {
      users.splice(index, 1);
    } else {
      console.log("Index out of range. No user deleted.");
    }
  };
  
  
  destroy(3);
  

  console.log(users);
  