var Names = [
  
    "Cheese Pizza--> Mozzorela Cheese, Margrita Cheese",
    "Veg Extragavanza Pizza --> Mozzorela Cheese, Bell Peppers, Onions, Tomatos, Olives, Jalapenos, Mushrooms, Corn",
    "Pepperoni Pizza--> Mozzorela Cheese, Tomatos, Olives, Garlic Clove, Basil Leaves, Oregano, Tomato Sause, Olive Oil, Parmesan Cheese, Pepperoni",
    "Mushromm Pizza--> Mozzorela Cheese, Bell Peppers, Onions, Tomatos, Olives, Jalapenos, Mushrooms,Corn"
    ]
  
  var images = [
    "cheese.jpg",
    "vegextravaganza.jpg",
    "pepperoni.jpg",
    "mushroom.jpg"
    ]

    var NI=5;

    var i= 0;

  for(i=0; i<NI; i++){
    function nextslide12(){
      i++;
      if(i>4){
        i=0;
      }
        document.getElementById("reasontxt").innerHTML=Names[i];
        document.getElementById("album").src= images[i];
      }
  }
