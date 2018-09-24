
(function(){

  let customers =[];
let index = 0;

//object constructor myFunction

function Customer(name,img,text){
  this.name = name;
  this.img = img;
  this.text= text;
}

//create customer myFunction
function createCustomer(name, img,text){
  //full image
  let fullImg = 'img/customer-${img}.jpg';

//create a new customer instance
const customer = new Customer(name,fullImg,text);
//add to all customer
customer.push(customer);
}

createCustomer('john', 1,'')


})();
