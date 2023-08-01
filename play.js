var name = 'Aman';
var age = 22;
var hashHobbies = true;

function summarizeUser(userName, userAge, userHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    'and the user has hobbies: ' +
    userHobby
  );
}

console.log(summarizeUser(name, age, hashHobbies));
