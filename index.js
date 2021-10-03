
var ram = {
  name: "ram",
  power: 2500,
  yuga: "treta"
};
let krishna = {
  name: "krishna",
  power: 2325,
  yuga: "dwapar"
};

function compare() {
  let ramChar = 
    (ram.name.length*35)+ram.power
  
  let krishanaChar = krishna.name.length*35 +krishna.power
  if(ramChar>krishanaChar){
    return ramChar
  }else{
   return  krishanaChar
     
  }
}
compare(ram);
