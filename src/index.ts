const personName: string = "Nicholas Hoult";
const age: number = 23;
const isMarried: boolean = false;

const personBio = (name: string, age: number, isMarried: boolean): void => {
  console.log(
    `My name is ${name}, my age is ${age} & I'm ${
      isMarried ? "not married" : "married"
    }`
  );
};

personBio(personName, age, isMarried);
