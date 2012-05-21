//Esercitazione

//Cubic_Hermite

var domain1 = INTERVALS(1)(30);
//var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
var domain2 =PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var controls = [[1,0,0],[0,1,0],[0,2,0],[-2,0,0]]; //p0,p1,t0,t1
var c1 = CUBIC_HERMITE(S0)(controls);
var curve1 = MAP(c1)(domain1);

var controls2 = [[2,0,0],[0,2,0],[0,4,0],[-4,0,0]]; //p0,p1,t0,t1
var c2 = CUBIC_HERMITE(S0)(controls2);
var curve2 = MAP(c2)(domain1);
var struct = STRUCT([curve1,curve2]);
DRAW(struct);


var s12 = BEZIER(S1)([c1,c2]);
var surface12 = MAP(s12)(domain2);
DRAW(surface12);

var s12 = CUBIC_HERMITE(S1)([c1,c2,[0,0,3],[0,0,-3]]);
var surface12 = MAP(s12)(domain2);
DRAW(surface12);

DRAW(SKELETON(1)(surface12));


// WING PROFILE

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

//Funzione per generare i punti di controllo
var POLYPOINT = function (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { 
    return [i];
  }));
}

//gli altri punti dopo p0 sono generati prendendo tutti i punti e magari traslati rispetto qualche asse
var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var p1 = p0.map(function (p) {return [p[0], p[1], p[2]+10]});
var p2 = p0.map(function (p) {return [p[0], p[1]-1, p[2]+20]});
var p3 = p0.map(function (p) {return [p[0], p[1]+1, p[2]+30]});
var p4 = p0.map(function (p) {return [p[0], p[1], p[2]+40]});

//LA funzione polypoint viene poi applicata a tutti i  nuovi punti generati
var curvesPoints = STRUCT(AA(POLYPOINT)([p0,p1,p2,p3,p4]));
DRAW(curvesPoints);

//Si generano con i punti di controllo le nuove curve di bezier
var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var controls = [c0,c1,c2,c3,c4]
// or 
var controls = AA(BEZIER(S0))([p0,p1,p2,p3,p4]);

//Applica a tutte le curve il dominio dove rappresentarle
var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));
DRAW(curves);

//Crea la superficie di bezier passando come punti le curve presenti in controls sotto forma di elementi di array.
var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(domain2);
DRAW(surf);


//NUBS non uniform B-Spline
// nubs
var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var controls1 = [[0,0,0],[2,5,0],[7,3,0],[9,7,0],[12,2,0]];
var knots1 = [0,0,0,1,2,3,3,3];
var c1 = NUBS(S0)(2)(knots1)(controls1);
var curve1 = MAP(c1)(domain1);
DRAW(curve1);


var controls2 = [[0,0,0],[2,5,3],[7,3,6],[9,7,-2],[12,2,-3]];
var knots2 = [0,0,0,1,2,3,3,3];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain1);
DRAW(curve2);


var s12 = BEZIER(S1)([c1,c2]);
var surf = MAP(s12)(domain2);
DRAW(surf);



