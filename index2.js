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
    major: "Information System "
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

const all = () => {
  for (const user of users) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`);
  }
};


all();
