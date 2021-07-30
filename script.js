const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      },
      get appetizers() {
        return this._courses.appetizers;
      },
      get mains() {
        return this._courses.mains;
      },
      get desserts() {
        return this._courses.desserts;
      },
      set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
      },
      set mains(mains) {
        this._courses.mains = mains;
      },
      set desserts(desserts) {
        this._courses.desserts = desserts;
      },
      get courses() {
        return {
          appetizers:  this.appetizers,
          mains:  this.mains,
          desserts:  this.desserts,
        };
      },
      addDishToCourse(courseName, dishName, dishPrice) {
        var dish = {
          name: dishName,
          price: dishPrice,
        };
       return this._courses[courseName].push(dish);
      },
  
  
  
      getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
      },
  
      generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and your total price is, $${totalPrice}.`
      },
  
  };
  
  menu.addDishToCourse('appetizers', 'wings', 3.00);
  menu.addDishToCourse('appetizers', 'salad', 2.00);
  menu.addDishToCourse('appetizers', 'fries', 9.00);
  
  menu.addDishToCourse('mains', 'lamb', 3.00);
  menu.addDishToCourse('mains', 'linguini', 2.00);
  menu.addDishToCourse('mains', 'hamburger', 3.00);
  
  menu.addDishToCourse('desserts', 'wings', 5.00);
  menu.addDishToCourse('desserts', 'salad', 7.00);
  menu.addDishToCourse('desserts', 'fries', 3.00);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  