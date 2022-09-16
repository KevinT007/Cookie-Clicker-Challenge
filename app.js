var num = document.getElementById("num");
var per = document.getElementById("per");
var click = document.getElementById("click");
var upgrade1 = document.getElementById("smallUpgrade");
var upgrade2 = document.getElementById("bigUpgrade");
var autoclick1 = document.getElementById("autoClick");
var autoclick2 = document.getElementById("bigAutoClick");
var persec, percli, auto1, auto2, cost1, cost2, cost3, cost4, amount;
persec = 1;
percli = 1;
auto1 = false;
auto2 = false;
amount = 0;

function increase() {
  num.innerHTML = amount++;
}
function smallUpgrade() {
  amount = amount + persec;
  upgrade1 = 1 + persec;
  document.getElementById("click").innerHTML++;
}
