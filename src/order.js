function takeOrder(order, array)
{
  if (array.length>=3)
  {
    return order;
  }
  array.push(order);
  return order;
}

function refundOrder(orderNumber, deliveryOrders)
{
  for(i in deliveryOrders)
  {
    if (deliveryOrders[i].orderNumber == orderNumber)
    {
      deliveryOrders.splice(i,1);
    }
  }
  return (deliveryOrders);
}

function listItems(array)
{
  var string = ""
 for(i in array)
 {
    string= string + array[i].item + ", ";
 }
 
 return(string.substring(0,string.length - 2));
}

function searchOrder(array, item)
{
  for(i in array)
  {
    if(array[i].item == item)
    {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}