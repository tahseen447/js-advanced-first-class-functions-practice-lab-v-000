// Code your solution in this file!

const logDriverNames = function(drivers){
  drivers.forEach(function(item){
    console.log(item.name);
  });
}
const logDriversByHometown = function(drivers, matcher) {
  drivers.forEach(function(item){
    if(item.hometown === matcher)
    return item;
  });
});
