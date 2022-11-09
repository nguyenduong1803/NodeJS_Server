const users = [
  { password: "123", name: "Product", id: 1, role: 1 },
  { password: "123", name: "Product 2", id: 2, role: 2 },
];

const login = (req, res) => {
  const userInfo = req.body;
  const user = users.find(
    (user) => user.name === userInfo.name && user.password === userInfo.password
  );
  res.json({ message: "login success", user });
};
export { login };
