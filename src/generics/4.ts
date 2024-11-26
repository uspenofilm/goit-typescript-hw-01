type DefaultUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(data: Partial<DefaultUser>): DefaultUser {
  const defaultUser: DefaultUser = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...data };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
