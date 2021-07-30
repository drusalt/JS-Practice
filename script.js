const menu = {
    _courses: {
      appetizers: [],
      main: [],
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
      set main(main) {
        this._courses.main = main;
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
        const dishes = this._courses(courseName);
        const randonIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
      },
  
      generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + desserts.price;
        return `Your meal is ${appetizer}, ${main}, ${desserts}, and your total is, ${totalPrice}.`
      },
  
  };
  
  menu.addDishToCourse('appetizers', 'wings', 3.00);
  menu.addDishToCourse('appetizers', 'salad', 3.00);
  menu.addDishToCourse('appetizers', 'fries', 3.00);
  
  menu.addDishToCourse('mains', 'lamb', 3.00);
  menu.addDishToCourse('mains', 'linguini', 3.00);
  menu.addDishToCourse('mains', 'hamburger', 3.00);
  
  menu.addDishToCourse('desserts', 'wings', 3.00);
  menu.addDishToCourse('desserts', 'salad', 3.00);
  menu.addDishToCourse('desserts', 'fries', 3.00);
  
  const meal = generateRandomMeal.menu();
  console.log(menu);
  