export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => (item.price * item.qty) + amount, 0);

export const getTotalQty = (basket)=> {
  let sum = 0;
  basket.forEach(item => {sum += item.qty});
  return sum;
}
