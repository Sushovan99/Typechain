interface IPerson {
  name: string;
  age: number;
  isMarried: boolean;
}

class Human {
  constructor(
    public name: string,
    public age: number,
    public isMarried: boolean
  ) {}
}

const ishida = new Human("Ishida Nara", 25, false);

const intro = (person: IPerson): void => {
  console.log(
    `My name is ${person.name}, my age is ${person.age} & I'm ${
      person.isMarried ? "married" : "not married"
    }`
  );
};

intro(ishida);
