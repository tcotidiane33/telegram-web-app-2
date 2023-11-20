import pull from "../images/2.jpg";
import belt from "../images/belt.jpg";
import jacket_1 from "../images/jacket-1.jpg";
import jacket_2 from "../images/jacket-2.jpg";
import jacket_3 from "../images/jacket-3.jpg";
import shoe_1 from "../images/shoe-1.jpg";
import shoe_2 from "../images/shoe-2.jpg";
import shoe_3 from "../images/shoe-3.jpg";
import shoe_4 from "../images/shoe-4.jpg";
import sport_3 from "../images/sports-3.jpg";
import sport_6 from "../images/sports-6.jpg";
import watch_2 from "../images/watch-2.jpg";
import watch_4 from "../images/watch-4.jpg";


export function getData() {
  return [
    { title: "Pull Over", price: 12.000, Image: pull, id:1 },
    { title: "Belt", price: 15.000, Image: belt, id:2 },
    { title: "Jacket 1", price: 17.000, Image: jacket_1, id:3},
    { title: "Jacket 2", price: 15.500, Image: jacket_2, id:4 },
    { title: "Jacket 3", price: 18.000, Image: jacket_3, id:5 },
    { title: "Shoe 1", price: 44.000, Image: shoe_1, id:6 },
    { title: "Shoe 2", price: 54.000, Image: shoe_2, id:7},
    { title: "Shoe 3", price: 85.000, Image: shoe_3, id:8 },
    { title: "Sport 3", price: 54.000, Image: sport_3, id:9 },
    { title: "Sport 6", price: 9.000, Image: sport_6, id:10 },
    { title: "Shoe 4", price: 14.000, Image: shoe_4, id:11 },
    { title: "Watch 2", price: 34.000, Image: watch_2, id:12 },
    { title: "Watch 4", price: 24.000, Image: watch_4, id:13 },


  ];
}
