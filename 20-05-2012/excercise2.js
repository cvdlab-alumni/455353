//Hawker Sea Hurricane Ib

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

//Pilota
var knots1 = [0,0,0,1,2,3,3,3];
var casco1 = NUBS(S0)(2)(knots1)([[-0.4,0,0],[-0.4,0,0.1],[0,0,0.3],[0.3,0,0.15],[0.3,0,0]]);
var casco2 = NUBS(S0)(2)(knots1)([[-0.4,0,0],[-0.4,0,-0.1],[0,0,-0.3],[0.3,0,-0.15],[0.3,0,0]]);
var casco3 = NUBS(S0)(2)(knots1)([[-0.45,0.1,0],[-0.45,0.1,-0.15],[0,0.1,-0.25],[0.3,0.1,-0.20],[0.3,0.1,0]]);
var casco4 = NUBS(S0)(2)(knots1)([[-0.45,0.1,0],[-0.45,0.1,0.15],[0,0.1,0.25],[0.3,0.1,0.20],[0.3,0.1,0]]);
var casco5 = NUBS(S0)(2)(knots1)([[-0.4,0.15,0],[-0.4,0.15,0.1],[0,0.15,0.3],[0.3,0.15,0.15],[0.3,0.15,0]]);
var casco6 = NUBS(S0)(2)(knots1)([[-0.4,0.15,0],[-0.4,0.15,-0.1],[0,0.15,-0.2],[0.3,0.15,-0.15],[0.3,0.15,0]]);
var casco7 = NUBS(S0)(2)(knots1)([[-0.2,0.3,0],[-0.1,0.3,-0.15],[0,0.3,-0.2],[0.2,0.3,-0.15],[0.2,0.3,0]]);
var casco8 = NUBS(S0)(2)(knots1)([[-0.2,0.3,0],[-0.1,0.3,0.15],[0,0.3,0.2],[0.2,0.3,0.15],[0.2,0.3,0]]);

var s18 = BEZIER(S1)([casco1,casco4,casco5,casco8]);
var surf18 = MAP(s18)(domain2);
var s27 = BEZIER(S1)([casco2,casco3,casco6,casco7]);
var surf27 = MAP(s27)(domain2);
var tappo = BEZIER(S1)([casco7,[0,0.3,0]]);
var surftappo = MAP(tappo)(domain2);
var tappo2 = BEZIER(S1)([casco8,[0,0.3,0]]);
var surftappo2 = MAP(tappo2)(domain2);

var casco = T([0,1])([3.5,0.4])(COLOR([1,0,0])(STRUCT([surf18,surf27,surftappo,surftappo2])))
DRAW(casco)

//Griglia Vetro

var curvaGriglia1 = CUBIC_HERMITE(S0)([[2.5,0.35,0.35],[2.5,0.35,-0.35],[0,0.8,0],[0,-0.8,0]])
var curvaGriglia2 = CUBIC_HERMITE(S0)([[2.6,0.35,0.35],[2.6,0.35,-0.35],[0,1.2,0],[0,-1.2,0]])
var curvaGriglia3 = CUBIC_HERMITE(S0)([[3.75,0.30,0.38],[3.75,0.30,-0.38],[0.8,1.85,0],[-0.8,-1.85,0]])
var curvaGriglia4 = CUBIC_HERMITE(S0)([[3.65,0.30,0.38],[3.65,0.30,-0.38],[0.8,1.85,0],[-0.8,-1.85,0]])

var surfGriglia1 = BEZIER(S1)([curvaGriglia1,curvaGriglia2]);
var surfGrigliaAvanti =COLOR([0])(MAP(surfGriglia1)(domain2));
DRAW(surfGrigliaAvanti);

var surfGriglia2 = BEZIER(S1)([curvaGriglia3,curvaGriglia4]);
var surfGrigliaDietro =COLOR([0])(MAP(surfGriglia2)(domain2));
DRAW(surfGrigliaDietro);