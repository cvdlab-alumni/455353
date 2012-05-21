	// Gibson les paul

var domain1 = INTERVALS(1)(12);
var domain2 = DOMAIN([[0,1],[0,1]])([12,12]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([12,12,5]);

//Body
var knots0 = [0,0,0,1,2,3,4,5,6,7,8,9,9,9];
var knots1 = [0,0,0,1,2,3,4,5,6,7,8,8,8];
var points = [[0,0,0],[-1.6,0.25,0],[-2,1.9,0],[-0.7,3,0],[-1.2,4.1,0],[-1.2,4.5,0],[-0.8,4.9,0],[-0.6,5,0],[-0.4,5,0],[-0.2,4.5,0],[0,4.5,0]]
var c0 = NUBS(S0)(2)(knots0)(points);
var curve0 = MAP(c0)(domain1);
var points2 =  [[0,0,0],[1.6,0.25,0],[2,1.9,0],[0.7,3,0],[1.2,4.1,0],[1.2,4.5,0],[0.8,4.9,0],[0.6,4.8,0],[0.4,4.5,0],[0,4,0]]
var c1 = NUBS(S0)(2)(knots1)(points2);
var curve1 = MAP(c1)(domain1);
var s0 = BEZIER(S1)([c0,[0,3.5,-0.1],c1]);	
var points3 = [[0,0,0.5],[-1.6,0.25,0.5],[-2,1.9,0.5],[-0.7,3,0.5],[-1.2,4.1,0.5],[-1.2,4.5,0.5],[-0.8,4.9,0.5],[-0.6,5,0.5],[-0.4,5,0.5],[-0.2,4.5,0.5],[0,4.5,0.5]]
var c3 = NUBS(S0)(2)(knots0)(points3);
var points4 =  [[0,0,0.5],[1.6,0.25,0.5],[2,1.9,0.5],[0.7,3,0.5],[1.2,4.1,0.5],[1.2,4.5,0.5],[0.8,4.9,0.5],[0.6,4.8,0.5],[0.4,4,0.5],[0,4.5,0.5]]
var c4 = NUBS(S0)(2)(knots1)(points4);
var s1 = BEZIER(S1)([c3,[0,4.2,0.7],c4]);

var solid = BEZIER(S2)([s0,s1]);
var body = COLOR([1,0.65,0])(MAP(solid)(domain3));
DRAW(body)


//Humbucker
var maph1 = CUBIC_HERMITE(S0)([[0.5,0,0],[0,0.25,0],[ 0,0.8,0],[ -1.5,0,0]]);
var maph2 = CUBIC_HERMITE(S0)([[-0.5,0,0],[0,0.25,0],[ 0,0.8,0],[ 1.5,0,0]]);
var maph1z = CUBIC_HERMITE(S0)([[0.5,0,0.1],[0,0.25,0.1],[ 0,0.8,0],[ -1.5,0,0]]);
var maph2z = CUBIC_HERMITE(S0)([[-0.5,0,0.1],[0,0.25,0.1],[ 0,0.8,0],[ 1.5,0,0]]);
var maph3 = CUBIC_HERMITE(S0)([[0.5,0,0],[0,-0.25,0],[ 0,-0.8,0],[ -1.5,0,0]]);
var maph4 = CUBIC_HERMITE(S0)([[-0.5,0,0],[0,-0.25,0],[ 0,-0.8,0],[ 1.5,0,0]]);
var maph3z = CUBIC_HERMITE(S0)([[0.5,0,0.1],[0,-0.25,0.1],[ 0,-0.8,0],[ -1.5,0,0]]);
var maph4z = CUBIC_HERMITE(S0)([[-0.5,0,0.1],[0,-0.25,0.1],[ 0,-0.8,0],[ 1.5,0,0]]);
var surfHumb1 = BEZIER(S1)([maph1,maph2]);
var surfHumb1z = BEZIER(S1)([maph1z,maph2z]);
var surfHumb2 = BEZIER(S1)([maph3,maph4]);
var surfHumb2z = BEZIER(S1)([maph3z,maph4z]);

var humbuckerBassoSolid1 = BEZIER(S2)([surfHumb1,surfHumb1z]);
var humbuckerBassoSolidMap1 = MAP(humbuckerBassoSolid1)(domain3);
var humbuckerBassoSolid2 = BEZIER(S2)([surfHumb2,surfHumb2z]);
var humbuckerBassoSolidMap2 = MAP(humbuckerBassoSolid2)(domain3);

var humbuckerX = COLOR([1,0.89,0.7])(STRUCT([humbuckerBassoSolidMap1,humbuckerBassoSolidMap2]))
var humbuckerAlto = COLOR([0.82,0.82,0.82])(T([2])([0.05])(SCALE([0,1])([0.8,0.8])(humbuckerX)));
var humbucker = T([1,2])([4,0.52])(STRUCT([humbuckerX,humbuckerAlto]))
DRAW(humbucker)

var humbucker2 = T([1])([-1.2])(humbucker);
DRAW(humbucker2)


//Ponte

var curvaPonte1 = CUBIC_HERMITE(S0)([[0.7,0,0],[-0.7,0,0],[0.2,-1,0],[0.2,1,0]])
var curvaPonte2 = CUBIC_HERMITE(S0)([[0.7,0,0],[-0.7,0,0],[0.2,1,0],[0.2,-1,0]])
var curvaPonte3 = CUBIC_HERMITE(S0)([[0.7,0,0],[-0.7,0,0],[0,0,3],[0,0,-3]])
var ponteMap = BEZIER(S1)([curvaPonte1,curvaPonte3,curvaPonte2]);
var ponte = COLOR([0.82,0.82,0.82])(T([1,2])([2,0.5])(MAP(ponteMap)(domain2)));
DRAW(ponte)



//Manico

var basemanico1 =  CUBIC_HERMITE(S0)([[0.3,0,0.6],[-0.3,0,0.6],[0,-0.3,0.3],[0,0.3,-0.3]])
var basemanico2 =  CUBIC_HERMITE(S0)([[0.3,0,0.35],[-0.3,0,0.35],[0,0,-0.5],[0,0,0.5]])
var s1 = BEZIER(S1)([basemanico1,basemanico2]);

var collomanico1 =  CUBIC_HERMITE(S0)([[0.2,4.5,0.1],[-0.2,4.5,0.1],[0,0,0.3],[0,0,-0.3]])
var collomanico2 =  CUBIC_HERMITE(S0)([[0.2,4.5,0],[-0.2,4.5,0],[0,0,-0.1],[0,0,0.1]])
var s2 = BEZIER(S1)([collomanico1,collomanico2]);

var manico = BEZIER(S2)([s1,s2]);
var manico1 = (COLOR([0.95,0.65,0.37])(MAP(manico)(domain3)));

//Paletta
var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([15,15]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,10]);

var basepaletta1 =  CUBIC_HERMITE(S0)([[0.25,4.7,0.15],[-0.25,4.7,0.15],[0,0,0],[0,0,0]])
var basepaletta2 =  CUBIC_HERMITE(S0)([[0.25,4.7,0],[-0.25,4.7,0],[0,0,0],[0,0,0]])
var s3 = BEZIER(S1)([basepaletta1,basepaletta2]);

var congiunzione = BEZIER(S2)([s2,s3]);
var congiunzione1 = (COLOR([0.15,0.15,0.15])(MAP(congiunzione)(domain3)));

var basepaletta3 =  CUBIC_HERMITE(S0)([[0.3,5.4,0.05],[-0.3,5.4,0.05],[0,0,0],[0,0,0]])
var basepaletta4 =  CUBIC_HERMITE(S0)([[0.3,5.4,-0.1],[-0.3,5.4,-0.1],[0,0,0],[0,0,0]])
var s4 = BEZIER(S1)([basepaletta3,basepaletta4]);

var basepaletta5 =  CUBIC_HERMITE(S0)([[0.25,5.5,-0.005],[-0.25,5.5,-0.005],[0,-0.2,0],[0,0.2,0]])
var basepaletta6 =  CUBIC_HERMITE(S0)([[0.25,5.5,-0.1],[-0.25,5.5,-0.1],[0,-0.2,0],[0,0.2,0]])
var s5 = BEZIER(S1)([basepaletta5,basepaletta6]);

var paletta = BEZIER(S2)([s3,s4,s5]);
var paletta1 = (COLOR([0.15,0.15,0.15])(MAP(paletta)(domain3)));

var tienicorda1 = T([0,1,2])([0.125,4.9,0.1])(CYL_SURFACE([0.04,0.13])([10]));
var tienicorda2 = T([0,1,2])([0.13,5.1,0.05])(CYL_SURFACE([0.04,0.13])([10]));
var tienicorda3 = T([0,1,2])([0.135,5.3,0])(CYL_SURFACE([0.04,0.13])([10]));
var tienicorda4 = T([0,1,2])([-0.125,4.9,0.1])(CYL_SURFACE([0.04,0.13])([10]));
var tienicorda5 = T([0,1,2])([-0.13,5.1,0.05])(CYL_SURFACE([0.04,0.13])([10]));
var tienicorda6 = T([0,1,2])([-0.135,5.3,0])(CYL_SURFACE([0.04,0.13])([10]));

var tieni = STRUCT([tienicorda6,tienicorda5,tienicorda4,tienicorda3,tienicorda2,tienicorda1]);

var sottoTienicorda1 = T([0,1,2])([0.125,4.85,-0.1])(CUBOID([0.12,0.1,0.1]));
var sottoTienicorda2 = T([0,1,2])([0.125,5.05,-0.11])(CUBOID([0.12,0.1,0.1]));
var sottoTienicorda3 = T([0,1,2])([0.125,5.25,-0.13])(CUBOID([0.12,0.1,0.1]));
var sottoTienicorda4 = T([0,1,2])([-0.250,4.85,-0.1])(CUBOID([0.12,0.1,0.1]));
var sottoTienicorda5 = T([0,1,2])([-0.250,5.05,-0.11])(CUBOID([0.12,0.1,0.1]));
var sottoTienicorda6 = T([0,1,2])([-0.250,5.25,-0.13])(CUBOID([0.12,0.1,0.1]));

	var palettacompleta = STRUCT([congiunzione1,paletta1,tieni,sottoTienicorda1,sottoTienicorda2
		,sottoTienicorda3,sottoTienicorda4,sottoTienicorda5,sottoTienicorda6])


//Frets
var f1 =  CUBIC_HERMITE(S0)([[0.3,0,0.6],[-0.3,0,0.6],[0,0,0.31],[0,0,-0.31]])
var f1f =  CUBIC_HERMITE(S0)([[0.3,0.05,0.595],[-0.3,0.05,0.595],[0,0,0.31],[0,0,-0.31]])
var sfret1 = BEZIER(S1)([f1,f1f]);
var fret1 = MAP(sfret1)(domain2);

var f2 =  CUBIC_HERMITE(S0)([[0.29,0.2,0.59],[-0.29,0.2,0.59],[0,0,0.22],[0,0,-0.22]])
var f2f =  CUBIC_HERMITE(S0)([[0.29,0.25,0.585],[-0.29,0.25,0.585],[0,0,0.22],[0,0,-0.22]])
var sfret2 = BEZIER(S1)([f2,f2f]);
var fret2 = MAP(sfret2)(domain2);

var f3 =  CUBIC_HERMITE(S0)([[0.29,0.4,0.57],[-0.29,0.4,0.57],[0,0,0.22],[0,0,-0.22]])
var f3f =  CUBIC_HERMITE(S0)([[0.29,0.45,0.565],[-0.29,0.45,0.565],[0,0,0.22],[0,0,-0.22]])
var sfret3 = BEZIER(S1)([f3,f3f]);
var fret3 = MAP(sfret3)(domain2);

var f4 =  CUBIC_HERMITE(S0)([[0.285,0.61,0.55],[-0.285,0.61,0.55],[0,0,0.22],[0,0,-0.22]])
var f4f =  CUBIC_HERMITE(S0)([[0.285,0.66,0.545],[-0.285,0.66,0.545],[0,0,0.22],[0,0,-0.22]])
var sfret4 = BEZIER(S1)([f4,f4f]);
var fret4 = MAP(sfret4)(domain2);

var f5 =  CUBIC_HERMITE(S0)([[0.282,0.83,0.525],[-0.282,0.83,0.525],[0,0,0.22],[0,0,-0.22]])
var f5f =  CUBIC_HERMITE(S0)([[0.282,0.88,0.52],[-0.282,0.88,0.52],[0,0,0.22],[0,0,-0.22]])
var sfret5 = BEZIER(S1)([f5,f5f]);
var fret5 = MAP(sfret5)(domain2);

var f6 =  CUBIC_HERMITE(S0)([[0.280,1.06,0.5],[-0.280,1.06,0.5],[0,0,0.22],[0,0,-0.22]])
var f6f =  CUBIC_HERMITE(S0)([[0.280,1.11,0.495],[-0.280,1.11,0.495],[0,0,0.22],[0,0,-0.22]])
var sfret6 = BEZIER(S1)([f6,f6f]);
var fret6 = MAP(sfret6)(domain2);

var f7 =  CUBIC_HERMITE(S0)([[0.27,1.30,0.475],[-0.27,1.30,0.475],[0,0,0.22],[0,0,-0.22]])
var f7f =  CUBIC_HERMITE(S0)([[0.27,1.35,0.47],[-0.27,1.35,0.47],[0,0,0.22],[0,0,-0.22]])
var sfret7 = BEZIER(S1)([f7,f7f]);
var fret7 = MAP(sfret7)(domain2);

var f8 =  CUBIC_HERMITE(S0)([[0.265,1.55,0.45],[-0.265,1.55,0.45],[0,0,0.22],[0,0,-0.22]])
var f8f =  CUBIC_HERMITE(S0)([[0.265,1.6,0.445],[-0.265,1.6,0.445],[0,0,0.22],[0,0,-0.22]])
var sfret8 = BEZIER(S1)([f8,f8f]);
var fret8 = MAP(sfret8)(domain2);

var f9 =  CUBIC_HERMITE(S0)([[0.26,1.81,0.42],[-0.26,1.81,0.42],[0,0,0.22],[0,0,-0.22]])
var f9f =  CUBIC_HERMITE(S0)([[0.26,1.86,0.415],[-0.26,1.86,0.415],[0,0,0.22],[0,0,-0.22]])
var sfret9 = BEZIER(S1)([f9,f9f]);
var fret9 = MAP(sfret9)(domain2);

var f10 =  CUBIC_HERMITE(S0)([[0.25,2.08,0.39],[-0.25,2.08,0.39],[0,0,0.22],[0,0,-0.22]])
var f10f =  CUBIC_HERMITE(S0)([[0.25,2.13,0.385],[-0.25,2.13,0.385],[0,0,0.22],[0,0,-0.22]])
var sfret10 = BEZIER(S1)([f10,f10f]);
var fret10 = MAP(sfret10)(domain2);

var f11 =  CUBIC_HERMITE(S0)([[0.245,2.36,0.36],[-0.24,2.36,0.36],[0,0,0.22],[0,0,-0.22]])
var f11f =  CUBIC_HERMITE(S0)([[0.245,2.41,0.355],[-0.24,2.41,0.355],[0,0,0.22],[0,0,-0.22]])
var sfret11 = BEZIER(S1)([f11,f11f]);
var fret11 = MAP(sfret11)(domain2);

var f12 =  CUBIC_HERMITE(S0)([[0.24,2.65,0.33],[-0.235,2.65,0.33],[0,0,0.22],[0,0,-0.22]])
var f12f =  CUBIC_HERMITE(S0)([[0.24,2.7,0.325],[-0.235,2.7,0.325],[0,0,0.22],[0,0,-0.22]])
var sfret12 = BEZIER(S1)([f12,f12f]);
var fret12 = MAP(sfret12)(domain2);

var f13 =  CUBIC_HERMITE(S0)([[0.235,2.95,0.295],[-0.23,2.95,0.295],[0,0,0.22],[0,0,-0.22]])
var f13f =  CUBIC_HERMITE(S0)([[0.235,3,0.29],[-0.23,3,0.29],[0,0,0.22],[0,0,-0.22]])
var sfret13 = BEZIER(S1)([f13,f13f]);
var fret13 = MAP(sfret13)(domain2);

var f14 =  CUBIC_HERMITE(S0)([[0.23,3.26,0.256],[-0.228,3.26,0.256],[0,0,0.22],[0,0,-0.22]])
var f14f =  CUBIC_HERMITE(S0)([[0.23,3.31,0.251],[-0.228,3.31,0.251],[0,0,0.22],[0,0,-0.22]])
var sfret14 = BEZIER(S1)([f14,f14f]);
var fret14 = MAP(sfret14)(domain2);

var f15 =  CUBIC_HERMITE(S0)([[0.22,3.58,0.225],[-0.22,3.58,0.225],[0,0,0.22],[0,0,-0.22]])
var f15f =  CUBIC_HERMITE(S0)([[0.22,3.63,0.22],[-0.22,3.63,0.22],[0,0,0.22],[0,0,-0.22]])
var sfret15 = BEZIER(S1)([f15,f15f]);
var fret15 = MAP(sfret15)(domain2);

var f16 =  CUBIC_HERMITE(S0)([[0.21,3.91,0.19],[-0.21,3.91,0.19],[0,0,0.22],[0,0,-0.22]])
var f16f =  CUBIC_HERMITE(S0)([[0.21,3.96,0.185],[-0.21,3.96,0.185],[0,0,0.22],[0,0,-0.22]])
var sfret16 = BEZIER(S1)([f16,f16f]);
var fret16 = MAP(sfret16)(domain2);

var f17 =  CUBIC_HERMITE(S0)([[0.2,4.45,0.13],[-0.2,4.45,0.13],[0,0,0.22],[0,0,-0.22]])
var f17f =  CUBIC_HERMITE(S0)([[0.2,4.5,0.125],[-0.2,4.5,0.125],[0,0,0.22],[0,0,-0.22]])
var sfret17 = BEZIER(S1)([f17,f17f]);
var fret17 = MAP(sfret17)(domain2);

var frets = STRUCT([fret1,fret2,fret3,fret4,fret5,fret6,fret7,fret8,fret8,fret9,
	fret10,fret11,fret12,fret13,fret14,fret15,fret16,fret17])

var corpo = T([1])([4.4])(STRUCT([manico1,frets,palettacompleta]))
DRAW(corpo)


//cvd lab

//c
var puntiC1 =  CUBIC_HERMITE(S0)([[0.1,0,0],[-0.1,0,0],[0,-0.4,0],[0,0.4,0]])
var puntiC2 =  CUBIC_HERMITE(S0)([[0.05,0,0],[-0.05,0,0],[0,-0.2,0],[0,0.2,0]])
var curveC0 = BEZIER(S1)([puntiC1,puntiC2]);
var c = MAP(curveC0)(domain2);

//v
var puntiV1 =  CUBIC_HERMITE(S0)([[-0.1,0,0],[0.1,0.05,0],[0,0,0],[0,0,0]])
var puntiV2 =  CUBIC_HERMITE(S0)([[-0.1,0.05,0],[0.1,0.1,0],[0,0,0],[0,0,0]])
var curveV0 = BEZIER(S1)([puntiV1,puntiV2]);
var superV0 = MAP(curveV0)(domain2);
var puntiV3 =  CUBIC_HERMITE(S0)([[0.1,0.05,0],[-0.1,0.1,0],[0,0,0],[0,0,0]])
var puntiV4 =  CUBIC_HERMITE(S0)([[0.1,0.1,0],[-0.1,0.15,0],[0,0,0],[0,0,0]])
var curveV1 = BEZIER(S1)([puntiV3,puntiV4]);
var superV1 = MAP(curveV1)(domain2);
var v = STRUCT([superV0,superV1]);

//d
var puntiD1 =  CUBIC_HERMITE(S0)([[0.1,0.05,0],[-0.1,0.05,0],[0,0.4,0],[0,-0.4,0]])
var puntiD2 =  CUBIC_HERMITE(S0)([[0.05,0.05,0],[-0.05,0.05,0],[0,0.2,0],[0,-0.2,0]])
var puntiD3 =  CUBIC_HERMITE(S0)([[0.1,0,0],[-0.1,0,0],[0,0,0],[0,0,0]])
var puntiD4 =  CUBIC_HERMITE(S0)([[0.1,0.05,0],[-0.1,0.05,0],[0,0,0],[0,0,0]])
var curveD0 = BEZIER(S1)([puntiD1,puntiD2]);
var d1 = MAP(curveD0)(domain2);
var curveD1 = BEZIER(S1)([puntiD3,puntiD4]);
var d2 = MAP(curveD1)(domain2);
var d = T([1])([0.15])(STRUCT([d1,d2]))


//l
var puntiL1 =  CUBIC_HERMITE(S0)([[0.1,0.,0],[-0.1,0,0],[0,0,0],[0,0,0]])
var puntiL2 =  CUBIC_HERMITE(S0)([[0.1,0.05,0],[-0.1,0.05,0],[0,0,0],[0,0,0]])
var curveL0 = BEZIER(S1)([puntiL1,puntiL2]);
var l1 = MAP(curveL0)(domain2);
var puntiL3 =  CUBIC_HERMITE(S0)([[0.05,0,0],[0.05,0.1,0],[0,0,0],[0,0,0]])
var puntiL4 =  CUBIC_HERMITE(S0)([[0.1,0,0],[0.1,0.1,0],[0,0,0],[0,0,0]])
var curveL1 = BEZIER(S1)([puntiL3,puntiL4]);
var l2 = MAP(curveL1)(domain2);
var l = STRUCT([l1,l2])

//a
var puntiA1 =  CUBIC_HERMITE(S0)([[0.1,0.1,0],[-0.1,0.15,0],[0,0,0],[0,0,0]])
var puntiA2 =  CUBIC_HERMITE(S0)([[0.1,0.15,0],[-0.1,0.2,0],[0,0,0],[0,0,0]])
var curveA0 = BEZIER(S1)([puntiA1,puntiA2]);
var superA0 = MAP(curveA0)(domain2);
var puntiA3 =  CUBIC_HERMITE(S0)([[-0.1,0.15,0],[0.1,0.2,0],[0,0,0],[0,0,0]])
var puntiA4 =  CUBIC_HERMITE(S0)([[-0.1,0.2,0],[0.1,0.25,0],[0,0,0],[0,0,0]])
var curveA1 = BEZIER(S1)([puntiA3,puntiA4]);
var superA1 = MAP(curveA1)(domain2);
var a = STRUCT([superA0,superA1]);

//b
var puntiB1 =  CUBIC_HERMITE(S0)([[0.1,0.25,0],[-0.1,0.25,0],[0,0,0],[0,0,0]])
var puntiB2 =  CUBIC_HERMITE(S0)([[0.1,0.30,0],[-0.1,0.30,0],[0,0,0],[0,0,0]])
var curveB0 = BEZIER(S1)([puntiB1,puntiB2]);
var b1 = MAP(curveB0)(domain2);
var puntiB3 =  CUBIC_HERMITE(S0)([[0.1,0.30,0],[0,0.30,0],[0,0.4,0],[0,-0.4,0]])
var puntiB4 =  CUBIC_HERMITE(S0)([[0.07,0.30,0],[0,0.30,0],[0,0.2,0],[0,-0.2,0]])
var curveB1 = BEZIER(S1)([puntiB3,puntiB4]);
var b2 = MAP(curveB1)(domain2);
var b = STRUCT([b1,b2])

var cvd = T([0,1,2])([-0.18,3.3,0.6])(STRUCT([c,v,d]));
DRAW(cvd)
var lab =T([0,1,2])([0.01,3.2,0.6])(STRUCT([l,a,b]));
DRAW(lab)

//Corda
	var corda1 = BEZIER(S0)([[-0.29,2,0.85],[-0.25,4.5,0.8],[-0.15,9.3,0.15]]);
	var miBasso = MAP(corda1)(domain1)
	var corda2 = BEZIER(S0)([[-0.2,2,0.85],[-0.15,4.5,0.8],[-0.1,9.5,0.15]]);
	var la = MAP(corda2)(domain1)
	var corda3 = BEZIER(S0)([[-0.06,2,0.85],[-0.06,4.5,0.8],[-0.06,9,0.15],[-0.1,9.7,0.15]]);
	var re = MAP(corda3)(domain1)
	var corda4 = BEZIER(S0)([[0.06,2,0.85],[0.06,4.5,0.8],[0.06,9,0.15],[0.1,9.7,0.15]]);
	var sol = MAP(corda4)(domain1)
	var corda5 = BEZIER(S0)([[0.2,2,0.85],[0.15,4.5,0.8],[0.1,9.5,0.15]]);
	var si = MAP(corda5)(domain1)
	var corda6 = BEZIER(S0)([[0.29,2,0.85],[0.25,4.5,0.8],[0.15,9.3,0.15]]);
	var miAlto = MAP(corda6)(domain1)

	var muta1 = COLOR([0.62,0.32,0.17])(STRUCT([miBasso,la,re]));
	var muta2 = COLOR([0.77,0.75,0.66])(STRUCT([miAlto,sol,si]));
	var muta = STRUCT([muta1,muta2]);
	DRAW(muta);
