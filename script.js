//object

const myDog = {
  fullName: "Yahto Keroma",
  breed: "Greyhound",
  sex: "male",
  color: "blue",
  earBrand: "nbaqp",
  bornIn: 2012,
  dogAge: function () {
    return 2022 - this.bornIn;
  },
  barks: function () {
    console.log("Voof! Voof");
  },
  tired: function () {
    console.log("Yawwwn!");
  },
  sniffing: function () {
    console.log("Infff! Infff!");
  },
  repeatSex: function () {
    return this.sex;
  },

  getName: function () {
    return this.fullName.toLocaleUpperCase();
  },

  getBreed: function () {
    return this.breed.toLocaleUpperCase();
  },

  getBrand: function () {
    return this.earBrand.toUpperCase();
  },
};

console.log(myDog.getName());
console.log(myDog.getBreed());
console.log(myDog.getBrand());

// object union

const myFirstFloor = {
  firstRoom: "Kitchen",
  secondRoom: "Bathroom",
  thirdRoom: "Livingroom",
};

const MySecondFloor = {
  fourthRoom: "Laundry",
  fifthRoom: "Terrace",
};

const myHouse = Object.assign(myFirstFloor, MySecondFloor);
console.log(myHouse);

console.log(
  "My Dog",
  myDog.getName(),
  "lives in My House and can visit every room."
);
