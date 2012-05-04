		
Braccio.
		var link = T([0,1])([-1,-19])(CUBOID([2,20]))//cpstruisco il primo segmento

		var joint = function(alpha){
			return COMP([T([1])([-18]),R([2])(alpha*PI/180)])//lo ruoto e lo traslo delle gisute misure il singolo pezzo
		}

		var arm = function(a1,a2,a3){//a1 ecc sono degli angoli
			return STRUCT([link,joint(a1),link,joint(a2),link,joint(a3),link])//applico la funzione al braccio

		}
		DRAW(arm(45,30,60))