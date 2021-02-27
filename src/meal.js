function nameMenuItem(name) {
  return ("Delicious "+ name);
}

function createMenuItem(name, price, mealType){
  var menuItem = {};
  menuItem.name = name;
  menuItem.price = price;
  menuItem.type = mealType;
  return(menuItem);
}

function addIngredients(string, array){
  for(i in array)
  {
    if(array[i] == string)
    {
      return(array);
    }
  }
  array.push(string);
  return array;
}

function formatPrice(price){
  return("$"+price);
}

function decreasePrice(price){
  return(price*0.9);
}

function createRecipe(title, ingredients, menuItemType){
  var recipe = {};
  recipe.title = title;
  recipe.ingredients = ingredients;
  recipe.type = menuItemType;
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


