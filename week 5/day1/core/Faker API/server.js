const express = require("express");
console.log(express);
const Port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require("@faker-js/faker");

const CreateUser = () => {
  const newFake = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    // phoneNumber:faker.phone.phoneNumber(),
    _id: faker.datatype.uuid(),
  };
  return newFake;
};
const FakeUser = CreateUser();
// console.log(FakeUser);

const CreateCompany = () => {
  const newFakeCompany = {
    _id: faker.datatype.uuid(),
    lastName: faker.person.lastName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newFakeCompany;
};
// const newFakeCompany = CreateCompany();
// // console.log(newFakeCompany);

// app.get("/api/users/new", (req, res) => {
//   res.json(FakeUser);
// });

// app.get("/api/companies/new", (req, res) => {
//   res.json(newFakeCompany);
// });

// app.get("/api/user/company", (req, res) => {
//   res.json({ FakeUser, newFakeCompany });
// });

const server = app.listen(Port, () => {
  console.log(`Server is locked and loaded on the port: ${Port}`);
});

console.log(">>>>>>>>>>>>>>>>>>>", faker.datatype.uuid());