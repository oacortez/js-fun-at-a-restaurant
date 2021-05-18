function nameMenuItem(name){
return `Delicious ${name}`;
}

function createMenuItem (name,price,type){
  var menuItem = {
    name : name,
    price : price,
    type : type
  }
  return menuItem;
}

function addIngredients (name,ingredients){
  if (ingredients.includes(name)){
    return ingredients;
  } else {
    ingredients.push(name);
  }

  return ingredients;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
