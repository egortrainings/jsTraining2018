function Machine(power) {
  this._power = power;
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function FridgeMachine (power) {
	Machine.apply(this, arguments);

	var foodMaxCount = power / 100;
	var foodCount = 0;
    
	var food = [];

	initFood = function() {
		$.getJSON( "food.json", function(data) {
			food = data.data;
		});
	};
    
	initFood();

	this.getFood = function() {
        var f = food.slice();
        return f;
    	};
    
	this.addFood = function(...items) {
		if (!this._enabled) {
			alert('Enable the machine');
			return;
		}
        
        var freeSpace = foodMaxCount - foodCount;
        
        if (freeSpace === 0) {
			alert('Too much food. You do not have a free space for new item(s).');
			return;
		}
        
		if (arguments.length > freeSpace) {
			alert('Too much food. You have free space for ' + freeSpace + ' item(s).');
			return;
		}
        
        items.forEach(function(newItem){
            food.push({item: newItem });
            foodCount++;
        });
        
		console.log(food);

	};
}

var fridgeMachine = new FridgeMachine(300);