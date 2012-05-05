//Airstrip

var erba1 = T([0,1,2])([-20,-2.7,-20])(COLOR([0,1,0])(SIMPLEX_GRID([[50],[1],[10]])));
var erba2 = T([0,1,2])([-20,-2.7,10])(COLOR([0,1,0])(SIMPLEX_GRID([[50],[1],[10]])));
var pista1 = T([0,1,2])([-20,-2.7,-10])(SIMPLEX_GRID([[50],[1],[10]]));
var pista2 = T([0,1])([-20,-2.7])(SIMPLEX_GRID([[50],[1],[10]]));
var linee = T([0,1,2])([-20,-1.7,-9])(COLOR([1,1,0])(SIMPLEX_GRID([REPLICA(15)([2]),[0.05],[0.5]])));
var linee2 = T([0,1,2])([-20,-1.7,9])(COLOR([1,1,0])(SIMPLEX_GRID([REPLICA(15)([2]),[0.05],[0.5]])));
var linee3 = T([0,1,2])([-20,-1.7,-0.25])(COLOR([1,1,0])(SIMPLEX_GRID([REPLICA(15)([2,-0.5]),[0.05],[0.5]])));
var airstrip = STRUCT([erba1,erba2,pista1,pista2,linee,linee2,linee3]);
DRAW(airstrip);

//Hangar

var muro1 = T([0,1,2])([14,-1.7,-9])(SIMPLEX_GRID([[15],[11],[0.5]]))
var muro2 = T([0,1,2])([14,-1.7,9])(SIMPLEX_GRID([[15],[11],[0.5]]))
var muro3 = T([0,1,2])([28.5,-1.7,-9])(SIMPLEX_GRID([[0.5],[11],[18]]))
var tetto = T([0,1,2])([14,9,-9])(SIMPLEX_GRID([[15],[0.5],[18.5]]))
var tettotrasp = BOUNDARY(COLOR([0,1,1,0.6])(tetto));
var struct = STRUCT([muro1,muro2,muro3,tettotrasp]);
DRAW(struct)

var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
var c0 = BEZIER(S0)([[0,-2,0],[2.5,2,0],[7.5,2,0],[10,-2,0]]);
var c1 = BEZIER(S0)([[0,4,9],[2.5,8,9],[7.5,8,9],[10,4,9]]);
var c2 = BEZIER(S0)([[0,-2,18],[2.5,2,18],[7.5,2,18],[10,-2,18]]);
var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);
var out2 = COLOR([0,1,0,0.7])(out)
DRAW(out2);
