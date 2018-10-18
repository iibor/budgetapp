//Data Modules

//BUDGET CONTROLLER

//päivitä budjetti
var budgetController = (function() {

  //Function constructor for Expense and Income
  var Expense = function(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  };

  var Income = function(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    };

  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      //create new ID
      if (data.allItems[type].length > 0) {
          ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }


      if(type === 'exp') {
          newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      //Push the new item into our data structure
      data.allItems[type].push(newItem);
      //return the item
      return newItem;

    }
  };

})();

// lisää uusi item taulukkoon



//UI CONTROLLER
//UI Module

// lisää uusi item UI:hin


// päivitä UI
var UIController = (function() {
  //UIController on IIFE-funktio, joten sen sisällä pitää palauttaa
  //funktio, sitä voidaan käyttää

  //luodaan muuttuja string-typeille, jotta riittää niiden muuttaminen vain yhteen
  //paikkaan jos tarvitsee

  var DOMstrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    addBtn: '.add__btn'
    };

  return {
    getInput: function() {
      return {
        desc: document.querySelector(DOMstrings.inputDesc).value,
        value: document.querySelector(DOMstrings.inputValue).value,
        type: document.querySelector(DOMstrings.inputType).value
      };
    },
    //tehdään DOMstrings-muuttujasta julkinen
    getDOMstrings: function() {
      return DOMstrings;
    }
  }
})();

// hae input valuet




//Controller Module
//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  //Luodaan funktio event listenereille

  var setEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);



  // enterin painaminen tekee saman kuin klikkaus
    document.addEventListener('keypress', function(event) {
      //which-property on vanhemmille selaimille, jotka eivätem
      //tue keycodea
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };



  var ctrlAddItem = function() {
    var input, newItem;
    // 1. get the input Data
    input = UICtrl.getInput();



    // 2. add the item to the budget CONTROLLER

    newItem = budgetCtrl.addItem(input.type, input.desc, input.value);

    // 3. add the item to the UI

    // 4. calculate the budget__title

    //5. display the budget__title

  };

  return {
    init: function() {
      console.log('application started');
      setEventListeners();
    }
  };



})(budgetController, UIController);

controller.init();
