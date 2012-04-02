
	
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
	var domain = DOMAIN([[0,20]])([10]);
	var bisettrice = function(p){
		var u = p[0];
		return [u,u*u];

	}
	var mapped = MAP(bisettrice)(domain)
	DRAW(mapped);
	COLOR([1,0,0])(mapped)
		// parabola

	var domain = DOMAIN([[0,6],[0,2*PI]])([10,10]);
	var mapping = function(p){
		var u = p[0];
		var v = p[1];
		return [u,u*u];
	};    
		var mapped = MAP(mapping)(domain)
	DRAW(mapped);
	COLOR([1,0,0])(mapped)


	// sinusoide

	var domain = DOMAIN([[0,4*Math.PI]])([1000]);
	var mapping = function(p){
		var u = p[0];
		return [u, SIN(u)];
	};       
		// sinusoide bidimensionale

	var domain = DOMAIN([[0,4*Math.PI],[1,5]])([1000,100]);
	var mapping = function(p){
		var u = p[0];
		var v = p[1];
		return [u, SIN(u),v,SIN(v)];
	};    

	var mapped = MAP(mapping)(domain)
	DRAW(mapped);
	COLOR([1,0,0])(mapped)


	// cerchio

	var domain = DOMAIN([[0,2*PI]])([1000]);

	var drawCircle = function(r){
			var u = r[0];
			return[2*SIN(u),2*COS(u),2]

	} 
	var mapped = MAP(drawCircle)(domain)
	DRAW(mapped);
	COLOR([1,0,0])(mapped);


	//cilindro

		var domain = DOMAIN([[0,2*PI],[0,10]])([100,2]);

	var drawCircle = function(r){
			var u = r[0];
			var h = r[1]
			return[COS(u),SIN(u),h]

	} 
	var cilindro = MAP(drawCircle)(domain)
	DRAW(cilindro);
	COLOR([1,0,0])(cilindro);

	// sfera
function sfera(g){
	var g= g;
	 var domain = DOMAIN([[0,2*PI],[0,PI],[0,g]])([35,35,35]);
		var drawSfera = function(r){
			var phi = r[0];
			var teta = r[1];
			var raggio = r[2];
			return[raggio*SIN(teta)*SIN(phi),raggio*SIN(teta)*COS(phi),raggio*COS(teta)];

		} 
	var mapped = MAP(drawSfera)(domain)
	DRAW(mapped);
	return COLOR([0,0,1])(mapped);
}

	//cono

		 var domain = DOMAIN([[0,2*PI],[0,6]])([20,20]);
	var drawCono = function(r){
			var base = r[0];
			var h = r[1];
			return[h*COS(base),h*SIN(base),h-6];

	} 
	var mapped = MAP(drawCono)(domain)
	DRAW(mapped);
	COLOR([0,0,1])(mapped);

//sfera mezzi
	 var domain = DOMAIN([[0,2*PI],[0,(-PI/2)],[0,6]])([10,10,10]);
		var drawSfera = function(r){
			var phi = r[0];
			var teta = r[1];
			var raggio = r[2];
			return[raggio*SIN(teta)*SIN(phi),raggio*SIN(teta)*COS(phi),raggio*COS(teta)];

		} 
	var mapped = MAP(drawSfera)(domain)
	DRAW(mapped);
	return COLOR([1,1,1])(mapped);

//prova cupola
			var domain = DOMAIN([[0,2*PI],[1,5]])([100,2]);

	var drawCircle = function(r){
			var u = r[0];
			var h = r[1]
			return[h*COS(u),h*SIN(u),h]

	} 
	var cilindro = MAP(drawCircle)(domain)
	DRAW(cilindro);
	COLOR([1,0,0])(cilindro);