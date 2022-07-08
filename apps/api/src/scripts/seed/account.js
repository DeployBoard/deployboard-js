const generateAccounts = () => {
  let accounts = [];
  accounts.push({
    name: "Seed",
    auth: "local",
    environments: ["Development", "Staging", "Production"],
    passwordPolicy: {
      length: 6,
      lowercase: 1,
      uppercase: 1,
      number: 1,
      special: 1,
    },
  });
  accounts.push({
    name: "SeedSaml",
    auth: "saml",
    environments: ["Development", "Staging", "Production"],
    passwordPolicy: {
      length: 6,
      lowercase: 1,
      uppercase: 1,
      number: 1,
      special: 1,
    },
  });
  return accounts;
};

export { generateAccounts };
