//Data Modules

//päivitä budjetti
var budgetController = (function() {
  var x = 23;

  var add = function(sum) {
    return x + sum;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }

})();

// lisää uusi item taulukkoon


//UI Module

// lisää uusi item UI:hin

// päivitä UI

var UIController = (function() {

})();

// hae input valuet


//Controller Module

var controller = (function(budgetCtrl, UICtrl) {

  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }

})(budgetController, UIController);

// add eventlistener ok napille
