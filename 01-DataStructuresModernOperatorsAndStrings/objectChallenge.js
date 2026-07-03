const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

mark.calcBMI();

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi} `
  );
} else {
  console.log(
    `${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi} `
  );
}
