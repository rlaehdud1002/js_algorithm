// 상품 코드

const fs = require("fs");

const [prod2_id, code2] = fs.readFileSync(0).toString().trim().split(" ");

class Product {
  constructor(name = "codetree", code = 50) {
    this.name = name;
    this.code = code;
  }
}

const firstProduct = new Product();
const inputProduct = new Product(prod2_id, Number(code2));

console.log(`product ${firstProduct.code} is ${firstProduct.name}`);
console.log(`product ${inputProduct.code} is ${inputProduct.name}`);
