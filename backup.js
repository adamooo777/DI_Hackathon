console.log('Shalom');

class Item {
  constructor(id, name, co2) {
    this.id = id;
    this.name = name;
    this.co2 = co2;
  }
}

var allcat = [];

//Present Product List - Variables
var categories = [];

//// Product List Strings for H4 Titel
var prodList = [
  'Meat',
  'Diary',
  'Fish',
  'Fruit & Vegetables',
  'Cupboard',
  'Bakery',
  'Drinks',
  'Alternative'
];

//Product Divs
var productAll = document.getElementById('rowAll');

var meat = [];
allcat.push(meat);
meat.push(new Item('101', 'Beef', 27000)); // 0
meat.push(new Item('102', 'Lamb', 39200)); // 1
meat.push(new Item('103', 'Chicken', 6900)); // 2
meat.push(new Item('104', 'Veal', 35700)); // 3
meat.push(new Item('105', 'Sausage', 8000)); // 4
meat.push(new Item('106', 'Turkey', 10900)); // 5
meat.push(new Item('107', 'Deli Meat', 8000)); // 6
meat.push(new Item('108', 'Salami', 9300)); // 7

var diary = [];
allcat.push(diary);
diary.push(new Item('201', 'Milk', 1900)); // 0
diary.push(new Item('202', 'Hard cheese', 13500)); // 1
diary.push(new Item('203', 'Butter', 23800)); // 2
diary.push(new Item('204', 'Yoghurt', 1250)); // 3
diary.push(new Item('205', 'Cottage Cheese', 1950)); // 4
diary.push(new Item('206', 'Crème fraîch', 7600)); // 5
diary.push(new Item('207', 'Margarine', 1350)); // 6
diary.push(new Item('208', 'Eggs', 1950)); // 7

var fish = [];
allcat.push(fish);
fish.push(new Item('301', 'Salmon (fresh)', 1190)); // 0
fish.push(new Item('302', 'Talpia', 10550)); // 1
fish.push(new Item('303', 'Sea Bass', 10400)); // 2
fish.push(new Item('304', 'Carp', 5300)); // 3
fish.push(new Item('305', 'Cod', 2800)); // 4
fish.push(new Item('306', 'Tuna (fresh)', 4070)); // 5
fish.push(new Item('307', 'Herring', 1300)); // 6
fish.push(new Item('308', 'Mackrei', 1100)); // 7

var fruitVeg = [];
allcat.push(fruitVeg);
fruitVeg.push(new Item('401', 'Apple', 550)); // 0
fruitVeg.push(new Item('402', 'Banana', 1370)); // 1
fruitVeg.push(new Item('403', 'Orange', 1300)); // 2
fruitVeg.push(new Item('404', 'Avocado', 2500)); // 3
fruitVeg.push(new Item('405', 'Onion', 80)); // 4
fruitVeg.push(new Item('406', 'Potatoe', 2900)); // 5
fruitVeg.push(new Item('407', 'Tomato', 1100)); // 6
fruitVeg.push(new Item('408', 'Cucumber', 140)); // 7

var cupboard = [];
allcat.push(cupboard);
cupboard.push(new Item('501', 'Sugar (refined)', 3930)); // 0
cupboard.push(new Item('502', 'Mixed Nuts', 2300)); // 1
cupboard.push(new Item('503', 'Beans', 2000)); // 2
cupboard.push(new Item('504', 'Oats', 570)); // 3
cupboard.push(new Item('505', 'Dark Chocolate', 5000)); // 4
cupboard.push(new Item('506', 'Chips', 3420)); // 5
cupboard.push(new Item('507', 'Lentils', 900)); // 6
cupboard.push(new Item('508', 'Rice', 2700)); // 7

var bakery = [];
allcat.push(bakery);
bakery.push(new Item('601', 'White Bread (Medium Slice)', 1354)); // 0
bakery.push(new Item('602', 'Brown Bread', 990)); // 1
bakery.push(new Item('603', 'Pita', 1300)); // 2
bakery.push(new Item('604', 'Wholemeal', 977)); // 3
bakery.push(new Item('605', 'Wholemeal (Medium Slice)', 990)); // 4
bakery.push(new Item('606', 'Challah', 1350)); // 5
bakery.push(new Item('607', 'Sourdough', 1350)); // 6
bakery.push(new Item('608', 'Gluten-Free Bread', 780)); // 7

var drinks = [];
allcat.push(drinks);
drinks.push(new Item('701', 'Coffee', 2500)); // 0
drinks.push(new Item('702', 'Black Tea', 1900)); // 1
drinks.push(new Item('703', 'Coca Cola', 1656)); // 2
drinks.push(new Item('704', 'Coca Zero', 1150)); // 3
drinks.push(new Item('705', 'Fanta', 1656)); // 4
drinks.push(new Item('706', 'Sprite', 1656)); // 5
drinks.push(new Item('707', 'Bottled Water', 1720)); // 6
drinks.push(new Item('708', 'Orange Juice', 1670)); // 7

var alternative = [];
allcat.push(alternative);
alternative.push(new Item('801', 'Soy Milk', 1080)); // 0
alternative.push(new Item('802', 'Almond Milk', 800)); // 1
alternative.push(new Item('803', 'Oat Milk', 900)); // 2
alternative.push(new Item('804', 'Coconut Butter', 1350)); // 3
alternative.push(new Item('805', 'Tempeh', 2000)); // 4
alternative.push(new Item('806', 'Tofu', 1900)); // 5
alternative.push(new Item('807', 'Seitan', 560)); // 6
alternative.push(new Item('808', 'Vegan Cheese', 1980)); // 7

console.log(
  "The item's name is: " +
    allcat[0][0].name +
    " and it's Co2 emission is: " +
    allcat[0][0].co2
);
console.log(
  "The item's name is: " +
    allcat[0][1].name +
    " and it's Co2 emission is: " +
    allcat[0][1].co2
);
console.log(
  "The item's name is: " +
    allcat[1][0].name +
    " and it's Co2 emission is: " +
    allcat[1][0].co2
);
console.log(
  "The item's name is: " +
    allcat[1][1].name +
    " and it's Co2 emission is: " +
    allcat[1][1].co2
);

// Create Divs for Products

function createProduct() {
  for (let i = 0; i < 8; i++) {
    // Div + bootstrap class
    prodDivs = document.createElement('div');
    prodDivs.setAttribute('class', 'col-md-4');
    productAll.appendChild(prodDivs);
    // Image Product Category
    prodImg = document.createElement('img');
    prodImg.setAttribute('src', `/images/${i + 1}.jpg`);
    prodImg.setAttribute('class', 'img-fluid');
    prodDivs.appendChild(prodImg);
    // Titel
    prodTitel = document.createElement('h4');
    prodTitelText = document.createTextNode(prodList[i]);
    prodTitel.appendChild(prodTitelText);
    prodDivs.appendChild(prodTitel);
    // Prepare Product List
    allCategories = allcat[i];
  //  console.log(allCategories);
    // Bootstrap component

    prodBoot.innerHTML = "Test";
    prodBoot.appendChild(prodDivs);


    // Product List
    prodItems = document.createElement('p');
    console.log(prodItems)
  //  allCategories = allcat[i];
  //  prodItems.innerHTML = String(allCategories);
    //prodItems.appendChild(categories);
  //  prodTitel.appendChild(prodItems);
    //prodItemsText = document.createTextNode(category1);
    //prodItems.appendChild(prodItemsText);
    //prodTitel.appendChild(prodItems);
    //console.log(prodItems);
  }
}

createProduct();
