const name = 'Aman';
let age = 22;
const hashHobbies = true;

age = 23;

function summarizeUser(userName, userAge, userHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHobby
  );
}

console.log(summarizeUser(name, age, hashHobbies));
