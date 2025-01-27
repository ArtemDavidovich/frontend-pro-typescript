interface IHero {
  id: number;
  name: string;
  age: number;
  isDark: boolean;
  weapons: string[];
  image: string;
}

export const fellowship: IHero[] = [
  {
    id: 1,
    name: "Gandalf",
    age: 2000,
    isDark: false,
    weapons: ["magic sword", "magic staff"],
    image:
      "https://imgcdn.stablediffusionweb.com/2024/4/21/f3736c4c-ce62-4156-b682-0c012dde551f.jpg",
  },
  {
    id: 2,
    name: "Saruman",
    age: 1800,
    isDark: true,
    weapons: ["palantir"],
    image: "https://cinema-quotes.com/wp-content/uploads/2024/05/Saruman.jpg",
  },
  {
    id: 3,
    name: "Frodo",
    age: 35,
    isDark: false,
    weapons: ["ring"],
    image:
      "https://imgcdn.stablediffusionweb.com/2024/2/24/f4dd7ebe-1b47-41ff-ab5f-541345f19c2b.jpg",
  },
  {
    id: 4,
    name: "Gimli",
    age: 50,
    isDark: false,
    weapons: ["axe"],
    image:
      "https://tolkiengateway.net/w/images/thumb/6/6f/Matt_Stewart_-_Forty-Two.jpg/640px-Matt_Stewart_-_Forty-Two.jpg",
  },
  {
    id: 5,
    name: "Arwen",
    age: 2901,
    isDark: false,
    weapons: [],
    image:
      "https://wegotthiscovered.com/wp-content/uploads/2022/08/Arwen_the_Lord_of_the_Rings.jpg",
  },
  {
    id: 6,
    name: "Gorlum",
    age: 200,
    isDark: true,
    weapons: ["teeth", "hands", "rocks"],
    image:
      "https://gamesartist.co.uk/wp-content/uploads/2023/03/srdjan-orelj-gollum-00.jpg",
  },
];

// * при именном экспорте (export const) можно совершить несколько экспортов из одного файла
// export const arr = ['red', 'green', 'blue']

// const newFellowship = fellowship.map(char => {
//     return char.name + ' is ' + char.age + ' years';
// })

// console.log(newFellowship);
