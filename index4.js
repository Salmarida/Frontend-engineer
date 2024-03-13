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
      age: 20,
      major: "Informatics"
    },
    {
      name: "Gilang",
      age: 22,
      major: "Engineering"
    }
  ];
  
  const update = (index, user) => {
    if (index >= 0 && index < users.length) {
      users[index] = user;
    } else {
      console.log("Index out of range. No user updated.");
    }
  };
  
  // Contoh penggunaan fungsi update
  const updatedUser = {
    name: "Nurul",
    age: 22,
    major: "Information System"
  };
  

  update(2, updatedUser);
  
  
  console.log(users);
  