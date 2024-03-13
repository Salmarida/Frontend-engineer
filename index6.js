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
      age: 21,
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
  
  const update = (index, user) => {
    if (index >= 0 && index < users.length) {
      users[index] = user;
    } else {
      console.log("Index out of range. No user updated.");
    }
  };
  
  const destroy = (index) => {
    if (index >= 0 && index < users.length) {
      users.splice(index, 1);
    } else {
      console.log("Index out of range. No user deleted.");
    }
  };
  
  const main = () => {
    console.log("Initial Users:");
    console.log(users);
  
    console.log("\nAdding a new user:");
    const newUser = {
      name: "Tri",
      age: 27,
      major: "Marketing"
    };
    store(newUser);
    console.log(users);
  
    console.log("\nUpdating user at index 2:");
    const updatedUser = {
      name: "Nurul",
      age: 22,
      major: "Information System"
    };
    update(2, updatedUser);
    console.log(users);
  
    console.log("\nDeleting user at index 3:");
    destroy(3);
    console.log(users);
  };
  

  main();
  