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

//L'Exercise 1 finisce qui...in tale file sono state messe però tutte le componenti relative all'ala.

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


//Ruota Anteriore SX
//Struttura: 

var p1 = [[0,0],[0.4,1.1],[0.7,1.1],[0.6,0.3],[0.9,0],[0,0]]
var pol1 = POLYLINE(p1);
var struttura1 = EXTRUDE([0.1])(pol1);
var ruota1 = T([0,1,2])([0.4,0,-0.1])(COLOR([0,0,0])(TORUS_SURFACE([0.1,0.2])([30,30])));
var ruota2 = T([0,1,2])([0.4,0,-0.1])(COLOR([1,0,0])(TORUS_SURFACE([0.05,0.1])([30,30])));
var ruota3 = T([0,1,2])([0.4,0,0.01])(COLOR([0])(TORUS_SURFACE([0.01,0.05])([30,30])));
var struct1 = T([0,1,2])([2.5,-1.3,1])(STRUCT([struttura1,ruota1,ruota2,ruota3]));
DRAW(struct1);


//Ruota Anteriore DX
var struttura2 = T([2])([-0.2])(struttura1); 
var ruota1d = T([0,1,2])([0.4,0,-0.08])(COLOR([0,0,0])(TORUS_SURFACE([0.1,0.2])([30,30])));
var ruota2d = T([0,1,2])([0.4,0,-0.08])(COLOR([1,0,0])(TORUS_SURFACE([0.05,0.1])([30,30])));
var ruota3d = T([0,1,2])([0.4,0,-0.01])(COLOR([0])(TORUS_SURFACE([0.01,0.05])([30,30])));
var struct1d = T([0,1,2])([2.5,-1.3,-1])(STRUCT([struttura2,ruota1d,ruota2d,ruota3d]));
DRAW(struct1d);

//Ruota post

var curvasupporto1 = CUBIC_HERMITE(S0)([[7.6,-0.25,0.1],[7.6,-0.25,-0.1],[0,-1.5,0],[0,1.5,0]])
var curvasupporto2 = CUBIC_HERMITE(S0)([[7.65,-0.25,0.1],[7.65,-0.25,-0.1],[0,-1.4,0],[0,1.4,0]])
var carrellopost = BEZIER(S1)([curvasupporto1,curvasupporto2]);
var surfcarrello = MAP(carrellopost)(domain2);
var ruota1p = T([0,1,2])([7.62,-0.55,0])(COLOR([0,0,0])(TORUS_SURFACE([0.05,0.1])([30,30])));
var ruota2p = T([0,1,2])([7.62,-0.55,0])(COLOR([1,0,0])(TORUS_SURFACE([0.01,0.05])([30,30])));
var struct1p = (STRUCT([surfcarrello,ruota1p,ruota2p]));
DRAW(struct1p);

//Fuselage

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var c0 = BEZIER(S0)([[0,0,0],[0,0,0.35],[0,0.6,0.35],[0,0.6,-0.35],[0,0,-0.35],[0,0,0]]);
var c1 = BEZIER(S0)([[0.2,-0.1,0],[0.2,0.05,0.5],[0.2,0.7,0.5],[0.2,0.7,-0.5],[0.2,0.05,-0.5],[0.2,-0.1,0]]);
var c2 = BEZIER(S0)([[1.35,-0.6,0],[1.35,-0.6,0.8],[1.35,1.2,0.8],[1.35,1.2,-0.8],[1.35,-0.6,-0.8],[1.35,-0.6,0]]);
var c3 = BEZIER(S0)([[2.5,-0.6,0],[2.5,-0.6,0.8],[2.5,1.3,0.8],[2.5,1.3,-0.8],[2.5,-0.6,-0.8],[2.5,-0.6,0]]);
var s0 = BEZIER(S1)([c0,c1,c2,c3]);
var surf0 = MAP(s0)(domain2);

var c4 = BEZIER(S0)([[2.8,-0.6,0],[2.8,-0.6,0.8],[2.8,1.1,0.8],[2.8,1.1,-0.8],[2.8,-0.6,-0.8],[2.8,-0.6,0]]);
var c5 = BEZIER(S0)([[3.7,-0.6,0],[3.7,-0.6,0.8],[3.7,1.1,0.8],[3.7,1.1,-0.8],[3.7,-0.6,-0.8],[3.7,-0.6,0]]);
var s1 = BEZIER(S1)([c3,c4,c5]);
var surf1 = MAP(s1)(domain2);

var c6 = BEZIER(S0)([[3.85,-0.6,0],[3.85,-0.6,0.8],[3.85,0.6,0.4],[3.85,2,0],[3.85,0.6,-0.4],[3.85,-0.6,-0.8],[3.85,-0.6,0]]);

var s2 = BEZIER(S1)([c5,c6]);
var surf2 = MAP(s2)(domain2);

var c7 = BEZIER(S0)([[4,-0.6,0],[4,-0.6,0.8],[4,0.6,0.4],[4,2,0],[4,0.6,-0.4],[4,-0.6,-0.8],[4,-0.6,0]]);
var c8 = BEZIER(S0)([[4.8,-0.5,0],[4.8,-0.5,0.8],[4.8,0.6,0.4],[4.8,1.2,0],[4.8,0.6,-0.4],[4.8,-0.5,-0.8],[4.8,-0.5,0]]);
var c9 = BEZIER(S0)([[6,-0.45,0],[6,-0.45,0.7],[6,0.6,0.4],[6,0.8,0],[6,0.6,-0.4],[6,-0.45,-0.7],[6,-0.45,0]]);
var c10 = BEZIER(S0)([[7.5,-0.35,0],[7.5,-0.35,0.4],[7.5,0.4,0.3],[7.5,0.3,0],[7.5,0.4,-0.3],[7.5,-0.35,-0.4],[7.5,-0.35,0]]);
var c11 = BEZIER(S0)([[8.6,-0.20,0],[8.6,-0.20,0],[8.6,0.2,0.2],[8.6,0.2,0],[8.6,0.2,-0.2],[8.6,-0.20,-0],[8.6,-0.20,0]]);

var s3 = BEZIER(S1)([c6,c7,c8,c9,c10,c11]);
var surf3 = MAP(s3)(domain2);

var fusoliera = COLOR([0.33,0.42,0.18])(STRUCT([surf0,surf1,surf2,surf3]));
	DRAW(fusoliera);

var c12 = BEZIER(S0)([[-0.6,0.2,0],[-0.6,0.2,0]]);
//Becco
var s4 = BEZIER(S1)([c12,c0]);
var surf4 = COLOR([0])(MAP(s4)(domain2));
DRAW(surf4);

//Eliche
var knots1 = [0,0,0,1,1,1];
var e1 = NUBS(S0)(2)(knots1)([[-0.1,0.2,0],[0,0.9,0.4],[-0.1,0.9,0.8]]);
var e2 = NUBS(S0)(2)(knots1)([[-0.1,0.2,0],[-0.3,0.4,0.4],[-0.1,0.9,0.8]]);
var se1 = BEZIER(S1)([e1,e2]);
var surfe1 = MAP(se1)(domain2);

var e3 = NUBS(S0)(2)(knots1)([[-0.15,0.2,0],[0,0.9,-0.4],[-0.1,0.9,-0.8]]);
var e4 = NUBS(S0)(2)(knots1)([[-0.15,0.2,0],[0.3,0.4,-0.4],[-0.1,0.9,-0.8]]);
var se2 = BEZIER(S1)([e3,e4]);
var surfe2 = MAP(se2)(domain2);

var e5 = NUBS(S0)(2)(knots1)([[-0.1,0.2,0],[0,-0.4,0.2],[-0.1,-0.9,0]]);
var e6 = NUBS(S0)(2)(knots1)([[-0.1,0.2,0],[0.3,-0.4,-0.2],[-0.1,-0.9,0]]);
var se3 = BEZIER(S1)([e5,e6]);
var surfe3 = MAP(se3)(domain2);

var elica = COLOR([0])(STRUCT([surfe1,surfe2,surfe3]))
DRAW(elica);

//Vetro

var curvavetro = CUBIC_HERMITE(S0)([[2.5,0.35,0.35],[2.5,0.35,-0.35],[0,0.8,0],[0,-0.8,0]])
var curvev1 = MAP(curvavetro)(domain1);
var curvavetro2 = CUBIC_HERMITE(S0)([[2.8,0.35,0.35],[2.8,0.35,-0.35],[0,2,0],[0,-2,0]])
var curvev2 = MAP(curvavetro2)(domain1);
var curvavetro3 = CUBIC_HERMITE(S0)([[3.75,0.30,0.35],[3.75,0.30,-0.35],[0.8,1.81,0],[-0.8,-1.81,0]])
var curvev3 = MAP(curvavetro3)(domain1);

var surfvetro = BEZIER(S1)([curvavetro,curvavetro2,curvavetro3]);
var surfacevetro = MAP(surfvetro)(domain2);
var vetro = COLOR([0.69,0.87,0.9,0.7])(surfacevetro)
DRAW(vetro);

//Bocchettone bottom
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var b1 = BEZIER(S0)([[0,0,0.45],[0,0,0.8],[0,0.3,0.8],[0,0.3,0.1],[0,0,0.1],[0,0,0.45]]);
var b01 = BEZIER(S0)([[0.5,0,0.45],[0.5,0,0.8],[0.5,0.3,0.8],[0.5,0.3,0.1],[0.5,0,0.1],[0.5,0,0.45]]);
var knots0 = [0,0,0,1,2,3,4,4,4];
var b2 = NUBS(S0)(2)(knots0)([[1.0,0.2,0.45],[1.0,0.2,0.8],[1.0,0.3,0.8],[1.0,0.3,0.1],[1.0,0.2,0.1],[1.0,0.2,0.45]]);
var b3 = NUBS(S0)(2)(knots0)([[1.3,0.2,0.45],[1.3,0.2,0.8],[1.3,0.3,0.8],[1.3,0.3,0.1],[1.3,0.2,0.1],[1.3,0.2,0.45]]);
var bocchettone = BEZIER(S1)([b1,b01,b2,b3]);
var bocchettonefinale = MAP(bocchettone)(domain2);
var bocchettonefinale2 = T([0,1,2])([2,-0.75,-0.5])(COLOR([0.33,0.42,0.18])(bocchettonefinale))
DRAW(bocchettonefinale2);


//Pennacchi
var pennacchio1 = T([0,1,2])([1.4,0.5,-0.05])(CUBOID([0.05,0.3,0.05]))
var pennacchio2 = T([0,1,2])([4.5,0.5,-0.05])(CUBOID([0.05,0.7,0.05]))
var pennacchi = COLOR([0])(STRUCT([pennacchio1,pennacchio2]))
DRAW(pennacchi);

//Ali posteriori

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
//Pinna
var knots0 = [0,0,0,1,2,3,4,5,5,5];
var c0 = NUBS(S0)(2)(knots0)([[7.5,0.2,0],[7.8,1.3,0],[8.9,1.4,0],[9.1,0.6,0],[9,0,0],[8.8,-0.2,0],[8.6,-0.2,0]]);
var c1 = BEZIER(S0)([[8.6,-0.2,0],[8,-0.2,0.1],[7,-0.2,0],[8,-0.2,-0.1],[8.6,-0.2,0]]);
var s0 = BEZIER(S1)([c1,c0]);
var surf0 = COLOR([0.33,0.42,0.18])(MAP(s0)(domain2));
//Ala SX
var knots1 = [0,0,0,1,2,3,4,5,5,5];
var c2 = NUBS(S0)(2)(knots1)([[8.6,0.2,0],[7.6,0.2,0.05],[8,0.2,1.4],[8.6,0.2,2],[9,0.2,1.4],[9.2,0.2,0.3],[8.6,0.2,0]]);
var c3 = NUBS(S0)(2)(knots1)([[8.6,0.2,0],[7.6,0.1,0.05],[8,0.1,1.4],[8.6,0.2,2],[9,0.1,1.4],[9.2,0.1,0.3],[8.6,0.2,0]]);
var c4 = NUBS(S0)(2)(knots1)([[8.6,0.2,0],[8.6,0.2,0.05],[8.6,0.2,1.4],[8.6,0.2,2],[8.6,0.2,1.4],[8.6,0.2,0.3],[8.6,0.2,0]]);
var s1 = BEZIER(S1)([c2,c3,c4]);
var surf1 = COLOR([0.33,0.42,0.18])(MAP(s1)(domain2));
//Ala DX
var knots1 = [0,0,0,1,2,3,4,5,5,5];
var c5 = NUBS(S0)(2)(knots1)([[8.6,0.2,0],[7.6,0.2,-0.05],[8,0.2,-1.4],[8.6,0.2,-2],[9,0.2,-1.4],[9.2,0.2,-0.3],[8.6,0.2,0]]);
var c6 = NUBS(S0)(2)(knots1)([[8.6,0.2,0],[7.6,0.1,-0.05],[8,0.1,-1.4],[8.6,0.2,-2],[9,0.1,-1.4],[9.2,0.1,-0.3],[8.6,0.2,0]]);
var c7 = NUBS(S0)(2)(knots1)([[8.6,0.2,0],[8.6,0.2,-0.05],[8.6,0.2,-1.4],[8.6,0.2,-2],[8.6,0.2,-1.4],[8.6,0.2,-0.3],[8.6,0.2,0]]);
var s2 = BEZIER(S1)([c5,c6,c7]);
var surf2 = COLOR([0.33,0.42,0.18])(MAP(s2)(domain2));

var alaposteriore = STRUCT([surf0,surf1,surf2]);
DRAW(alaposteriore);