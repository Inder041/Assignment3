// js file for Assignment 2
var bottlePrice = 0; // variable initialization
var wandPrice = 0;
var stickPrice = 0;
var bagPrice = 0;
var stonePrice = 0;
var beforeGst = 0;
var afterGst = 0;

function onSubmit() {
  // getting inputs from the user
  let customerName = document.getElementById("name").value;
  let customerPhone = document.getElementById("phone").value;
  let creditCardNumber = document.getElementById("number").value;
  let cardMonth = document.getElementById("month").value;
  let cardYear = document.getElementById("year").value;
  let dustBottle = document.getElementById("bottle").value;
  let magicWand = document.getElementById("wand").value;
  let broomSticks = document.getElementById("stick").value;
  let candyBags = document.getElementById("bag").value;
  let sStone = document.getElementById("stone").value;

  let bottleUnitpr = 5; //per Unit price
  let wandUnitpr = 20;
  let stickUnitpr = 200;
  let bagUnitpr = 10;
  let stoneUnitpr = 300;
  bottlePrice = 5 * dustBottle;
  wandPrice = 20 * magicWand;
  stickPrice = 200 * broomSticks;
  bagPrice = 10 * candyBags;
  stonePrice = 300 * sStone;
  beforeGst = bottlePrice + wandPrice + stickPrice + bagPrice + stonePrice; //subTotal
  gst = (13 / 100) * beforeGst; // gst calc
  afterGst = gst + beforeGst; //Total cost with gst

  // validations
  let errors = "";
  let phone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; // 10 digits only
  let credit = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; //16 digits only
  let month = /^[0-1][1-2]$/;
  let year = /^[0-9]{4}$/;

  if (customerName === "" || customerName == null) {
    errors += `Please enter a name <br>`;
  }
  if (!phone.test(customerPhone)) {
    errors += "Please enter a valid phone number <br>";
  }
  if (!credit.test(creditCardNumber)) {
    errors += `Please enter a valid credit card number <br>`;
  }
  if (!month.test(cardMonth)) {
    errors += `Please enter a valid month <br>`;
  }
  if (!year.test(cardYear)) {
    errors += `Please enter a valid year <br>`;
  }
  if (beforeGst < 10) {
    errors += "No order can be less $10. <br>";
  }
  if (errors !== "") {
    document.getElementById("errors").innerHTML = errors;
  } else {
    var table = `
    <h2>Receipt:</h2>
    <h3>Let us set up you with some magic!</h3>
    <table>
    <tr>
    <td>Name</td>
    <td>${customerName}</td>
    </tr>
    <tr>
    <td>Phone</td>
    <td>${customerPhone}</td>
    </tr>
    <br>
    <br>`;
    table += `</table>`;
    document.getElementById("details").innerHTML = table; // display table

    var table1 = `<table>
     <tr>
     <th>Item name</th>
     <th>Quantity</th>
     <th>Unit Price</th>
     <th>Cost</th>
     </tr>`;

    if (dustBottle != 0) {
      // code to enter item in table
      table1 += `<tr>                            
<td>Fairy Dust Bottles</td>
<td>${dustBottle}</td>
<td>${bottleUnitpr}</td>
<td>$ ${bottlePrice}</td>
</tr>`;
    }
    if (magicWand != 0) {
      table1 += `<tr>
<td>Wizard Wands</td>
<td>${magicWand}</td>
<td>${wandUnitpr}</td>
<td>$ ${wandPrice}</td>
</tr>`;
    }
    if (broomSticks != 0) {
      table1 += `<tr>
<td>Flying Broomsticks</td>
<td>${broomSticks}</td>
<td>${stickUnitpr}</td>
<td>$ ${stickPrice}</td>
</tr>`;
    }
    if (candyBags != 0) {
      table1 += `<tr>
<td>Magic Candy Bags</td>
<td>${candyBags}</td>
<td>${bagUnitpr}</td>
<td>$ ${bagPrice}</td>
</tr>`;
    }
    if (sStone != 0) {
      table1 += `<tr>
<td>Sorcerer's Stones</td>
<td>${sStone}</td>
<td>${stoneUnitpr}</td>
<td>$ ${stonePrice}</td>
</tr>`;
    }
    if (beforeGst > 10) {
      table1 += `<tr>
<td></td>
<td></td>
<td>Subtotal</td>
<td>$ ${beforeGst}</td>
</tr>`;
    } else {
      table1 += `<tr>
<td></td>
<td></td>
<td>GST</td>
<td>$ ${gst}</td>
</tr>`;
    }
    table1 += `<tr>
<td></td>
<td></td>
<td>Tax</td>
<td> $ ${gst}</td>
</tr>`;
    table1 += `<tr>
<td></td>
<td></td>
<td>Total</td>
<td> $ ${afterGst}</td>
</tr>`;
    table1 += `</table>`;
    document.getElementById("receipt").innerHTML = table1;
  }
  // Return false will not submit the form and keep it on the current page.
  return false;
}
