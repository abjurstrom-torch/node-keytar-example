import keytar from "keytar";
import inquirer from "inquirer";

const SERVICE = "keytar-workbench";

const foundCredentials = await keytar.findCredentials(SERVICE);
console.log(foundCredentials);

const { userName } = await inquirer.prompt([
  {
    type: "input",
    message: "What is your Red October user name?",
    name: "userName",
  },
]);

const foundPassword = await keytar.getPassword(SERVICE, userName);

if (!foundPassword) {
  console.log(
    "Account not found.  Save your password to the local key storage?"
  );
  const { userPassword } = await inquirer.prompt([
    {
      type: "password",
      message: "Enter your password please",
      name: "userPassword",
    },
  ]);

  const success = await keytar.setPassword(SERVICE, userName, userPassword);
}

const finalPassword = await keytar.getPassword(SERVICE, userName);
console.log("We know a password!", finalPassword);
