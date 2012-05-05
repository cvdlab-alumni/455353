//Disegno Ala Hawker Sea Hurricane Ib

var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,30,20]);

var controls0 = [[2.6,0.25,0],[1.2,0.6,0],[0.3,0.5,0],[0,0.25,0],[0.3,0,0],[1.2,0,0],[2.6,0.25,0]];
var knots0 = [0,0,0,1,2,3,4,5,5,5];
var c0 = NUBS(S0)(2)(knots0)(controls0);
var curve0 = MAP(c0)(domain1);

var controls1 = [[2.5,0.25,0.5],[1.2,0.6,0.5],[0.3,0.5,0.5],[0,0.25,0.5],[0.3,0,0.5],[1.2,0,0.5],[2.5,0.25,0.5]];
var knots0 = [0,0,0,1,2,3,4,5,5,5];
var c1 = NUBS(S0)(2)(knots0)(controls1);
var curve1 = MAP(c1)(domain1);

var s0 = BEZIER(S1)([c0,c1]);
var surf0 = MAP(s0)(domain2);

var controls2 = [[1.6,0.4,4.3],[0.8,0.6,4.3],[0.4,0.5,4.3],[0.2,0.4,4.3],[0.4,0.3,4.3],[0.8,0.3,4.3],[1.6,0.4,4.3]];
var knots0 = [0,0,0,1,2,3,4,5,5,5];
var c2 = NUBS(S0)(2)(knots0)(controls2);
var curve2 = MAP(c2)(domain1);

var s1 = BEZIER(S1)([c1,c2]);
var surf1 = MAP(s1)(domain2);

var controls3 = [[1.6,0.4,4.3],[0.9,0.4,5],[0.25,0.4,4.3],];
var c3 = BEZIER(S0)(controls3);
var curve3 = MAP(c3)(domain1);
var controls4 = [[1.6,0.4,4.3],[0.9,0.35,4.3],[0.25,0.4,4.3],];
var c4 = BEZIER(S0)(controls4);
var curve4 = MAP(c4)(domain1);

var s2 = BEZIER(S1)([c3,c4]);
var surf2 = MAP(s2)(domain2);

var s3 = CUBIC_HERMITE(S1)([c2,c3,[0,0,0],[0,0,0]]);
var solid1 = MAP(s3)(domain2);

var out0 = COLOR([0.33,0.42,0.18])(STRUCT([surf0,surf1,surf2,solid1]))
var outt = T([0,1,2])([2,-0.4,0.38])(out0)
DRAW(outt);


