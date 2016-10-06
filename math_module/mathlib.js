module.exports = function(){
	return {
		add: function(num1, num2){
			result = num1 + num2;
			console.log(result)
		},
		multiply: function(num1, num2){
			result = num1 * num2
			console.log(result)
		},
		square: function(num){
			console.log(Math.pow(num, 2))
		},
		random: function(min, max){
			console.log(Math.floor(Math.random() * (max - min) + min));
		}
	}
}