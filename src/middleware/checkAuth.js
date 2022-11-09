const users = [
  { password: "123", name: "Product", id: 1, role: 1 },
  { password: "123", name: "Product 2", id: 2, role: 2 },
];

const checkAuth = (req, res, next) => {
  const userInfo = req.body;
  const user = users.find(
    (user) => user.name === userInfo.name && user.password === userInfo.password
  );
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  next();
};

export default checkAuth;
