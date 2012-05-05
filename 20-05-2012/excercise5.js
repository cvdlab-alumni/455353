//Airstrip

var erba1 = T([1,2])([-2.7,-20])(COLOR([0,1,0])(SIMPLEX_GRID([[30],[1],[10]])));
var erba2 = T([1,2])([-2.7,10])(COLOR([0,1,0])(SIMPLEX_GRID([[30],[1],[10]])));
var pista1 = T([1,2])([-2.7,-10])(SIMPLEX_GRID([[30],[1],[10]]));
var pista2 = T([1])([-2.7])(SIMPLEX_GRID([[30],[1],[10]]));
var linee = T([1,2])([-1.7,-9])(COLOR([1,1,0])(SIMPLEX_GRID([REPLICA(8)([2,-0.5]),[0.05],[0.5]])));
var linee2 = T([1,2])([-1.7,9])(COLOR([1,1,0])(SIMPLEX_GRID([REPLICA(8)([2,-0.5]),[0.05],[0.5]])));
var airstrip = STRUCT([erba1,erba2,pista1,pista2,linee,linee2]);
DRAW(airstrip);