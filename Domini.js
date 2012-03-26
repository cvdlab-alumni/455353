
	
	var d = DOMAIN([[1.5,5.5]])([4])
	var d2 = DOMAIN([[1.5,5.5],[1,3]])([4,2])
	var d3 = DOMAIN([[1,5],[1,5],[1,5]])([3,3,3])

	// tralazione
	var domain = DOMAIN([[0,1]])([10]);
	var mapping = function(p){
		var u = p[0];
		return [u, 1];
	};       

	var mapped = MAP(mapping)(domain)

	// bisettrice
	var bisettrice = function(p){
		var u = p[0];
		return [u,u];

	}
	var mapped = MAP(bisettrice)(domain)

	// sinusoide

	var domain = DOMAIN([[0,4*Math.PI]])([1000]);
	var mapping = function(p){
		var u = p[0];
		return [u, Math.sin(u)];
	};       

	var mapped = MAP(mapping)(domain)
	DRAW(mapped);
	COLOR([1,0,0])(mapped)