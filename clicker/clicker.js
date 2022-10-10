let currency = 0;
let passivegen = 0;
let clickpower = 1;
let multiplier = 1;
let item1 = { baseprice: 10, gen: 0.1, amount: 0 };
let item2 = { baseprice: 125, gen: 4, amount: 0 };
let item3 = { baseprice: 1500, gen: 50, amount: 0 };
let item4 = { baseprice: 20000, gen: 100, amount: 0 };
let item5 = { baseprice: 100000, gen: 200, amount: 0 };
const counter = document.getElementById("counter");
const item1btn = document.getElementById("item1");
const item2btn = document.getElementById("item2");
const item3btn = document.getElementById("item3");
const item4btn = document.getElementById("item4");
const item5btn = document.getElementById("item5");

var test = setInterval(() => {
  currency += passivegen * multiplier;
  counter.innerHTML = currency.toFixed(1);
}, 100);

onbuy = () => {
  passivegen =
    item1.gen * item1.amount +
    item2.gen * item2.amount +
    item3.gen * item3.amount +
    item4.gen * item4.amount +
    item5.gen * item5.amount;
};

click1 = () => {
  currency += clickpower * multiplier;
  counter.innerHTML = currency.toFixed(1);
};

buyitem1 = () => {
  if (currency >= item1.baseprice) {
    item1.amount += 1;
    currency -= item1.baseprice;
    item1.baseprice = item1.baseprice * 1.5;
    item1btn.innerHTML = item1.baseprice;
    onbuy();
  }
};

buyitem2 = () => {
  if (currency >= item2.baseprice) {
    item2.amount += 1;
    currency -= item2.baseprice;
    item2.baseprice = item2.baseprice * 1.5;
    item2btn.innerHTML = item2.baseprice;
    onbuy();
  }
};

buyitem3 = () => {
  if (currency >= item3.baseprice) {
    item3.amount += 1;
    currency -= item3.baseprice;
    item3.baseprice = item3.baseprice * 1.5;
    item3btn.innerHTML = item3.baseprice;
    onbuy();
  }
};

buyitem4 = () => {
  if (currency >= item4.baseprice) {
    item4.amount += 1;
    currency -= item4.baseprice;
    item4.baseprice = item4.baseprice * 1.5;
    item4btn.innerHTML = item4.baseprice;
    onbuy();
  }
};

buyitem5 = () => {
  if (currency >= item5.baseprice) {
    item5.amount += 1;
    currency -= item5.baseprice;
    item5.baseprice = item5.baseprice * 1.5;
    item5btn.innerHTML = item5.baseprice;
    onbuy();
  }
};
