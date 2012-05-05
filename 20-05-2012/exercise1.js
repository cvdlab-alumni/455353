//Disegno Ala Hawker Sea Hurricane Ib

var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,30,20]);

var knots0 = [0,0,0,1,2,3,4,5,5,5];
var c0 = NUBS(S0)(2)(knots0)([[2.6,0.25,0],[1.2,0.6,0],[0.3,0.5,0],[0,0.25,0],[0.3,0,0],[1.2,0,0],[2.6,0.25,0]]);
var c1 = NUBS(S0)(2)(knots0)([[2.5,0.25,0.5],[1.2,0.6,0.5],[0.3,0.5,0.5],[0,0.25,0.5],[0.3,0,0.5],[1.2,0,0.5],[2.5,0.25,0.5]]);
var s0 = BEZIER(S1)([c0,c1]);
var surf0 = MAP(s0)(domain2);

var c2 = NUBS(S0)(2)(knots0)([[1.6,0.4,4.3],[0.8,0.6,4.3],[0.4,0.5,4.3],[0.2,0.4,4.3],[0.4,0.3,4.3],[0.8,0.3,4.3],[1.6,0.4,4.3]]);
var s1 = BEZIER(S1)([c1,c2]);
var surf1 = MAP(s1)(domain2);

var c3 = BEZIER(S0)([[1.6,0.4,4.3],[0.9,0.4,5],[0.25,0.4,4.3]]);
var c4 = BEZIER(S0)([[1.6,0.4,4.3],[0.9,0.35,4.3],[0.25,0.4,4.3]]);
var s2 = BEZIER(S1)([c3,c4]);
var surf2 = MAP(s2)(domain2);

var s3 = CUBIC_HERMITE(S1)([c2,c3,[0,0,0],[0,0,0]]);
var solid1 = MAP(s3)(domain2);

var out0 = COLOR([0.33,0.42,0.18])(STRUCT([surf0,surf1,surf2,solid1]))
var outt = T([0,1,2])([2,-0.4,0.38])(out0)
DRAW(outt);

//Ala DX, ottenuta per specchio con asse Z
var c1d = NUBS(S0)(2)(knots0)([[2.5,0.25,-0.5],[1.2,0.6,-0.5],[0.3,0.5,-0.5],[0,0.25,-0.5],[0.3,0,-0.5],[1.2,0,-0.5],[2.5,0.25,-0.5]]);
var s0d = BEZIER(S1)([c0,c1d]);
var surf0d = MAP(s0d)(domain2);

var c2d = NUBS(S0)(2)(knots0)([[1.6,0.4,-4.3],[0.8,0.6,-4.3],[0.4,0.5,-4.3],[0.2,0.4,-4.3],[0.4,0.3,-4.3],[0.8,0.3,-4.3],[1.6,0.4,-4.3]]);
var s1d = BEZIER(S1)([c1d,c2d]);
var surf1d = MAP(s1d)(domain2);

var c3d = BEZIER(S0)([[1.6,0.4,-4.3],[0.9,0.4,-5],[0.25,0.4,-4.3]]);
var c4d = BEZIER(S0)([[1.6,0.4,-4.3],[0.9,0.35,-4.3],[0.25,0.4,-4.3]]);
var s2d = BEZIER(S1)([c3d,c4d]);
var surf2d = MAP(s2d)(domain2);

var s3d = CUBIC_HERMITE(S1)([c2d,c3d,[0,0,0],[0,0,0]]);
var solid1d = MAP(s3d)(domain2);

var out0d = COLOR([0.33,0.42,0.18])(STRUCT([surf0d,surf1d,surf2d,solid1d]))
var outtd = T([0,1,2])([2,-0.4,-0.38])(out0d)
DRAW(outtd);




