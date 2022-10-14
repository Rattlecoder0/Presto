import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  // Non Veg Pizzas 
  NonVegFoodDetails = [
    {
      id:1,
      foodName:"Chicken Hamrella",
      foodDetails:"Chicken Ham, Cheese",
      s1:169,
      s2:269,
      s3:289,
      s4:549,
      foodImg:"assets/images/Pizzapics/chicken-hamrella.jpg"
    },
    {
      id:2,
      foodName:"Chicken Tikka Affair",
      foodDetails:"Chicken tikka, onion, capsicum",
      s1:209,
      s2:309,
      s3:349,
      s4:599,
      foodImg:"assets/images/Pizzapics/chicken-tikka.jpg"
    },
    {
      id:3,
      foodName:"Pepronica",
      foodDetails:"Pepperoni, Jalapeno",
      s1:209,
      s2:309,
      s3:379,
      s4:599,
      foodImg:"assets/images/Pizzapics/pepronica.jpg"
    },
    {
      id:4,
      foodName:"BBQ Sensation",
      foodDetails:"BBQ Chicken, Onion",
      s1:209,
      s2:309,
      s3:379,
      s4:599,
      foodImg:"assets/images/Pizzapics/bbq-sensation.jpg"
    },
    {
      id:5,
      foodName:"Tangy Chicken",
      foodDetails:"Chicken Tikka, Chicken Sausage, Onion, Jalapeno",
      s1:219,
      s2:329,
      s3:399,
      s4:599,
      foodImg:"assets/images/Pizzapics/tangy-chicken.jpg"
    },
    {
      id:6,
      foodName:"Meat Feast",
      foodDetails:"Mutton Keema, Chicken Meatballs, Redpaprika, Onion",
      s1:219,
      s2:329,
      s3:399,
      s4:599,
      foodImg:"assets/images/Pizzapics/meat-feast.jpg"
    },
    {
      id:7,
      foodName:"Zesty Chicken",
      foodDetails:"Chicken Ham, Chicken Sausage, Redpaprika",
      s1:219,
      s2:329,
      s3:399,
      s4:599,
      foodImg:"assets/images/Pizzapics/zesty-chicken.png"
    },
    {
      id:8,
      foodName:"Chickenrella",
      foodDetails:"BBQ Chicken, Smoked Chicken, Chicken Ham",
      s1:219,
      s2:329,
      s3:399,
      s4:599,
      foodImg:"assets/images/Pizzapics/chickenrella.jpg"
    },
    {
      id:9,
      foodName:"Smokin Spicy",
      foodDetails:"Chicken Tikka, BBQ Chicken, Jalapeno, Redpaprika, Onion",
      s1:229,
      s2:349,
      s3:409,
      s4:599,
      foodImg:"assets/images/Pizzapics/smokin-spicy.jpg"
    },
    {
      id:10,
      foodName:"Non-veg Overloaded",
      foodDetails:"BBQ Chicken, Chicken Tikka, Chicken Ham, Smoked Chicken, Pepproni, Onion",
      s1:229,
      s2:349,
      s3:409,
      s4:619,
      foodImg:"assets/images/Pizzapics/overloaded.jpg"
    }
  ]

  // veg pizza 
  VegFoodDetails = [
    {
      id:1,
      foodName:"Classic Cheese",
      foodDetails:"Margherita",
      s1:99,
      s2:199,
      s3:249,
      s4:399,
      foodImg:"assets/images/Pizzapics/vegpizza/classic-cheese.jpg"
    },
    {
      id:2,
      foodName:"Double Cheese",
      foodDetails:"Loaded Margherita",
      s1:139,
      s2:239,
      s3:289,
      s4:439,
      foodImg:"assets/images/Pizzapics/vegpizza/double-cheese.jpg"
    },
    {
      id:3,
      foodName:"Veggie Fun",
      foodDetails:"Onion, Capsicum",
      s1:179,
      s2:279,
      s3:329,
      s4:499,
      foodImg:"assets/images/Pizzapics/vegpizza/veggie-fun.jpg"
    },
    {
      id:4,
      foodName:"Italian Classic",
      foodDetails:"Sweetcorn, Capsicum, Onion",
      s1:179,
      s2:279,
      s3:329,
      s4:499,
      foodImg:"assets/images/Pizzapics/vegpizza/italian-classic.jpg"
    },
    {
      id:5,
      foodName:"Kidzza",
      foodDetails:"Pineapple, Sweetcorn, Paneer",
      s1:179,
      s2:279,
      s3:329,
      s4:499,
      foodImg:"assets/images/Pizzapics/vegpizza/kidzza.jpg"
    },
    {
      id:6,
      foodName:"Veggie Blast",
      foodDetails:"Onion, Capsicum, Mushroom",
      s1:179,
      s2:279,
      s3:329,
      s4:499,
      foodImg:"assets/images/Pizzapics/vegpizza/veggie-blast-pizza.jpg"
    },
    {
      id:7,
      foodName:"Paneer Delight",
      foodDetails:"Paneer, Capsicum, Onion",
      s1:179,
      s2:279,
      s3:329,
      s4:499,
      foodImg:"assets/images/Pizzapics/vegpizza/paneer-delight.png"
    },
    {
      id:8,
      foodName:"Veggie Fiesta",
      foodDetails:"Capsicum, Mushroom, Sweetcorn, Onion",
      s1:179,
      s2:279,
      s3:329,
      s4:499,
      foodImg:"assets/images/Pizzapics/vegpizza/veggie-fiesta.png"
    },
    {
      id:9,
      foodName:"Spicy Affair",
      foodDetails:"Redpaprika, Olive, Jalapeno, Onion",
      s1:219,
      s2:329,
      s3:359,
      s4:529,
      foodImg:"assets/images/Pizzapics/vegpizza/spicy-affair.jpg"
    },
    {
      id:10,
      foodName:"Veg Overloaded",
      foodDetails:"Capsicum, Mushroom, Corn, Olive, Paneer, Onion",
      s1:229,
      s2:349,
      s3:409,
      s4:619,
      foodImg:"assets/images/Pizzapics/vegpizza/.jpg"
    }
  ]

 

}
