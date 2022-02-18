interface IPerson {
  name: string;
  age: number;
  isMarried: boolean;
}

const person: IPerson = {
  name: "Eren Yaeger",
  age: 22,
  isMarried: false,
};

const intro = (person: IPerson): void => {
  console.log(
    `My name is ${person.name}, my age is ${person.age} & I'm ${
      person.isMarried ? "married" : "not married"
    }`
  );
};

intro(person);
