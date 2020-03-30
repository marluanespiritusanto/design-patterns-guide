const _userService = require("./user-service");
const _anotherUserService = require("./user-service");

console.log("(1) - Printing current users: ");
_userService
  .getUsers()
  .forEach(user => console.log(`${user.name}, ${user.lastname}`));

_anotherUserService.addUser({ id: 3, name: "Lucas", lastame: "Smith" });

console.log("(2) - Printing current users: ");
_userService
  .getUsers()
  .forEach(user => console.log(`${user.name}, ${user.lastname}`));
