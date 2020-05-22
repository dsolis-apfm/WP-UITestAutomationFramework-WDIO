//below are just a sample, to use it for your testcase
// you can parmetrised it based on your need
//SERVER value is given in the commandline while running the script eg: npx cross-env SERVER=stage  npm run test

let creds = {
  url: "https://communitycentral.aplaceformom.com",
  username: "jssegura.vri@gmail.com",
  password: "apfm@1234",
};

if (process.env.SERVER === "prod") {
  creds = {
    url: "https://communitycentral.aplaceformom.com",
    username: "jssegura.vri@gmail.com",
    password: "apfm@1234",
  };
}

if (process.env.SERVER === "stage") {
  creds = {
    url: "https://communitycentral.aplaceformom.com",
    username: "stage@gmail.com",
    password: "apfm@1234",
  };
}

if (process.env.SERVER === "qa") {
  creds = {
    url: "https://communitycentral.aplaceformom.com",
    username: "qa@gmail.com",
    password: "apfm@1234",
  };
}

module.exports = creds;
