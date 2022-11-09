const products = [
  { id: 1, name: "Product", price: 222 },
  { id: 2, name: "Product 2", price: 11222 },
  { id: 3, name: "Product 2", price: 300 },
];
// [GET] all product
const getAll = (req, res) => {
  res.send(res.json(products));
};
// [GET] product by id
const getProductById = (req, res) => {
  const product = products.find((prod) => prod.id === parseInt(req.params.id));
  res.send(res.json(product));
};
// [PUT] update product
const update = (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const newProduct = products.map((prod) => {
    return prod.id === id ? data : prod;
  });
  res.send(res.json(newProduct));
};
// [POST] add new product
const add = (req, res) => {
  const data = req.body;
  products.push(data);
  res.send(res.json(products));
};
// [DELETE] add new product
const remove = (req, res) => {
  const id = parseInt(req.params.id);
 const newProduct= products.filter(prod=>prod.id!==id)
  res.send(res.json(newProduct));
};
export { getAll, update, add, getProductById,remove };
