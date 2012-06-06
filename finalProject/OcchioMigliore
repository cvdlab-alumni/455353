//Occhio

var domain1 = INTERVALS(1)(150);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([25,25,1]);

function knots (point) {

  var k = 2;	
  var m =point.length;
  var n = (m + k + 1);
  var first = 1;
  var last = n - 3;

  var knots = [];

  for (var i = 0; i < 3; i++) {
    	knots[i] = 0;
  		};

  for (var i = 3; i < last; i++,first++) {
    	knots[i] = first;
  		};

  for (var i = last; i < n; i++) {
    	knots[i] = first;
  		};
  return knots;
};

//Nervo Ottico

var nervoOtticoInternoBegin = [[0,4.5,0],[-0.25,4.5,-0.2],[0,4.5,-0.4]]
 var knots1 = knots(nervoOtticoInternoBegin);
  var CnervoOtticoInternoBegin = NUBS(S0)(2)(knots1)(nervoOtticoInternoBegin);
   //var mapCnervoOtticoInternoBegin = MAP(CnervoOtticoInternoBegin)(domain1)

var nervoOtticoInternoEnd = [[0,4,0.2],[-0.25,4,0],[0,4,-0.2]]
 var knots2 = knots(nervoOtticoInternoEnd);
  var CnervoOtticoInternoEnd = NUBS(S0)(2)(knots2)(nervoOtticoInternoEnd);
   //var mapCnervoOtticoInternoEnd = MAP(CnervoOtticoInternoEnd)(domain1)

var nervoOtticoEsternoBegin = [[0,4.5,0.15],[-0.5,4.5,-0.2],[0,4.5,-0.55]]
 var knots3 = knots(nervoOtticoEsternoBegin);
  var CnervoOtticoEsternoBegin = NUBS(S0)(2)(knots3)(nervoOtticoEsternoBegin);
   //var mapCnervoOtticoEsternoBegin = MAP(CnervoOtticoEsternoBegin)(domain1)

var nervoOtticoEsternoEnd = [[0,4,0.35],[-0.5,4,0],[0,4,-0.35]]
 var knots4 = knots(nervoOtticoEsternoEnd);
  var CnervoOtticoEsternoEnd = NUBS(S0)(2)(knots4)(nervoOtticoEsternoEnd);
   //var mapCnervoOtticoEsternoEnd = MAP(CnervoOtticoEsternoEnd)(domain1)

var nervoOtticoInternoRistringimento = [[0,3.8,0.15],[-0.2,3.8,0],[0,3.8,-0.15]]
 var knots5 = knots(nervoOtticoInternoRistringimento);
  var CnervoOtticoInternoRistringimento = NUBS(S0)(2)(knots5)(nervoOtticoInternoRistringimento);
   //var mapCnervoOtticoInternoRistringimento = MAP(CnervoOtticoInternoRistringimento)(domain1)

var nervoOtticoEsternoRistringimento = [[0,3.8,0.3],[-0.4,3.8,0],[0,3.8,-0.3]]
 var knots6 = knots(nervoOtticoEsternoRistringimento);
  var CnervoOtticoEsternoRistringimento = NUBS(S0)(2)(knots6)(nervoOtticoEsternoRistringimento);
   //var mapCnervoOtticoEsternoRistringimento = MAP(CnervoOtticoEsternoRistringimento)(domain1)


//Superficie Esterna nervo ottico/sclera

var curveSurfaceNervoOtticoEsterno = [CnervoOtticoEsternoBegin,CnervoOtticoEsternoEnd,CnervoOtticoEsternoRistringimento]
 var nervoOtticoEsterno = BEZIER(S1)(curveSurfaceNervoOtticoEsterno);
  var nervoOtticoEsternoMap = COLOR([1, 0.941176, 0.960784])(MAP(nervoOtticoEsterno)(domain2))
   DRAW(nervoOtticoEsternoMap)

//Superficie interna nervoottico/sclera

var curveSurfaceNervoOtticoInterno = [CnervoOtticoInternoBegin,CnervoOtticoInternoEnd,CnervoOtticoInternoRistringimento]
 var nervoOtticoInterno = BEZIER(S1)(curveSurfaceNervoOtticoInterno);
  //var nervoOtticoInternoMap = COLOR([1,0.89,0.76])(MAP(nervoOtticoInterno)(domain2))
   //DRAW(nervoOtticoInternoMap)

var nervoOttico3d = BEZIER(S2)([nervoOtticoEsterno,nervoOtticoInterno]);
 var nervoOttico3dMap = COLOR([1, 0.941176, 0.960784])(MAP(nervoOttico3d)(domain3));
  DRAW(nervoOttico3dMap)

//Vero e propria concavità nervo ottico

var TrueNervoOtticoInternoBegin = [[0,4.5,-0.1],[-0.15,4.5,-0.2],[0,4.5,-0.3]]
 var knots1p = knots(TrueNervoOtticoInternoBegin);
  var CTrueNervoOtticoInternoBegin = NUBS(S0)(2)(knots1p)(TrueNervoOtticoInternoBegin);

var TrueNervoOtticoInternoEnd = [[0,4,0.1],[-0.15,4,0],[0,4,-0.1]]
 var knots2p = knots(TrueNervoOtticoInternoEnd);
  var CTrueNervoOtticoInternoEnd = NUBS(S0)(2)(knots2p)(TrueNervoOtticoInternoEnd);

var TrueNervoOtticoInternoRistringimento = [[0,3.8,0.05],[-0.1,3.8,0],[0,3.8,-0.05]]
 var knots5p = knots(TrueNervoOtticoInternoRistringimento);
  var CTrueNervoOtticoInternoRistringimento = NUBS(S0)(2)(knots5p)(TrueNervoOtticoInternoRistringimento);

var curveSurfaceTrueNervoOtticoInterno = [CTrueNervoOtticoInternoBegin,CTrueNervoOtticoInternoEnd,CTrueNervoOtticoInternoRistringimento]
 var TrueNervoOtticoInterno = BEZIER(S1)(curveSurfaceTrueNervoOtticoInterno);

var TrueNervoOttico3d = BEZIER(S2)([nervoOtticoInterno,TrueNervoOtticoInterno]);
 var TrueNervoOttico3dMap = COLOR([1, 0.84, 0])(MAP(TrueNervoOttico3d)(domain3));
  DRAW(TrueNervoOttico3dMap)


//Sclera

var scleraEsternaBegin = [[0,3.6,1.1],[-0.5,3.6,1.1],[-1.4,3.6,0],[-0.5,3.6,-1.1],[0,3.6,-1.1]]
 var knots7 = knots(scleraEsternaBegin);
  var CscleraEsternaBegin = NUBS(S0)(2)(knots7)(scleraEsternaBegin);
   //var mapCscleraEsternaBegin = MAP(CscleraEsternaBegin)(domain1)

var scleraInternaBegin = [[0,3.6,0.95],[-0.4,3.6,0],[0,3.6,-0.95]]
 var knots8 = knots(scleraInternaBegin);
  var CscleraInternaBegin = NUBS(S0)(2)(knots8)(scleraInternaBegin);
   //var mapCscleraInternaBegin = MAP(CscleraInternaBegin)(domain1)

var scleraEsternaMiddle1 = [[0,3.4,1.4],[-0.9,3.4,1.4],[-2,3.4,0],[-0.9,3.4,-1.4],[0,3.4,-1.4]]
 var knots9 = knots(scleraEsternaMiddle1);
  var CscleraEsternaMiddle1 = NUBS(S0)(2)(knots9)(scleraEsternaMiddle1);
   //var mapCscleraEsternaMiddle1 = MAP(CscleraEsternaMiddle1)(domain1)

var scleraInternaMiddle1 = [[0,3.4,1.05],[-1.4,3.4,0],[0,3.4,-1.05]]
 var knots10 = knots(scleraInternaMiddle1);
  var CscleraInternaMiddle1 = NUBS(S0)(2)(knots10)(scleraInternaMiddle1);
   //var mapCscleraInternaMiddle1 = MAP(CscleraInternaMiddle1)(domain1)

var scleraEsternaMiddle2 = [[0,3.2,1.5],[-0.9,3.2,1.5],[-2,3.2,0],[-0.9,3.2,-1.5],[0,3.2,-1.5]]
 var knots11 = knots(scleraEsternaMiddle2);
  var CscleraEsternaMiddle2 = NUBS(S0)(2)(knots11)(scleraEsternaMiddle2);
   //var mapCscleraEsternaMiddle2 = MAP(CscleraEsternaMiddle2)(domain1)

var scleraInternaMiddle2 = [[0,3.2,1.35],[-1.65,3.2,0],[0,3.2,-1.35]]
 var knots12 = knots(scleraInternaMiddle2);
  var CscleraInternaMiddle2 = NUBS(S0)(2)(knots12)(scleraInternaMiddle2);
   //var mapCscleraInternaMiddle2 = MAP(CscleraInternaMiddle2)(domain1)

var scleraEsternaMiddle3 = [[0,3,1.5],[-1,3,1.5],[-2,3,0],[-1,3,-1.5],[0,3,-1.5]]
 var knots13 = knots(scleraEsternaMiddle3);
  var CscleraEsternaMiddle3 = NUBS(S0)(2)(knots13)(scleraEsternaMiddle3);
   //var mapCscleraEsternaMiddle3 = MAP(CscleraEsternaMiddle3)(domain1)

var scleraInternaMiddle3 = [[0,3,1.45],[-1.75,3,0],[0,3,-1.45]]
 var knots14 = knots(scleraInternaMiddle3);
  var CscleraInternaMiddle3 = NUBS(S0)(2)(knots14)(scleraInternaMiddle3);
   //var mapCscleraInternaMiddle3 = MAP(CscleraInternaMiddle3)(domain1)

var scleraEsternaMiddle4 = [[0,2.8,1.6],[-1,2.8,1.6],[-2,2.8,0],[-1,2.8,-1.6],[0,2.8,-1.6]]
 var knots15 = knots(scleraEsternaMiddle4);
  var CscleraEsternaMiddle4 = NUBS(S0)(2)(knots15)(scleraEsternaMiddle4);
   //var mapCscleraEsternaMiddle4 = MAP(CscleraEsternaMiddle4)(domain1)

var scleraInternaMiddle4 = [[0,2.8,1.45],[-1.85,2.8,0],[0,2.8,-1.45]]
 var knots16 = knots(scleraInternaMiddle4);
  var CscleraInternaMiddle4 = NUBS(S0)(2)(knots16)(scleraInternaMiddle4);
   //var mapCscleraInternaMiddle4 = MAP(CscleraInternaMiddle4)(domain1)

var scleraEsternaMiddle5 = [[0,2.5,1.6],[-1.1,2.5,1.6],[-2,2.5,0],[-1.1,2.5,-1.6],[0,2.5,-1.6]]
 var knots17 = knots(scleraEsternaMiddle5);
  var CscleraEsternaMiddle5 = NUBS(S0)(2)(knots17)(scleraEsternaMiddle5);
   //var mapCscleraEsternaMiddle5 = MAP(CscleraEsternaMiddle5)(domain1)

var scleraInternaMiddle5 = [[0,2.2,1.45],[-1.95,2.2,0],[0,2.2,-1.45]]
 var knots18 = knots(scleraInternaMiddle5);
  var CscleraInternaMiddle5 = NUBS(S0)(2)(knots18)(scleraInternaMiddle5);
   //var mapCscleraInternaMiddle5 = MAP(CscleraInternaMiddle5)(domain1)

var scleraEsternaMiddle6 = [[0,2.1,1.5],[-1,2.1,1.5],[-2,2.1,0],[-1,2.1,-1.5],[0,2.1,-1.5]]
 var knots19 = knots(scleraEsternaMiddle6);
  var CscleraEsternaMiddle6 = NUBS(S0)(2)(knots19)(scleraEsternaMiddle6);
   //var mapCscleraEsternaMiddle6 = MAP(CscleraEsternaMiddle6)(domain1)

var scleraInternaMiddle6 = [[0,2.1,1.45],[-2.15,2.1,0],[0,2.1,-1.45]]
 var knots20 = knots(scleraInternaMiddle6);
  var CscleraInternaMiddle6 = NUBS(S0)(2)(knots20)(scleraInternaMiddle6);
   //var mapCscleraInternaMiddle6 = MAP(CscleraInternaMiddle6)(domain1)

var scleraEsternaMiddle7 = [[0,1.9,1.5],[-0.9,1.9,1.5],[-1.8,1.9,0],[-0.9,1.9,-1.5],[0,1.9,-1.5]]
 var knots21 = knots(scleraEsternaMiddle7);
  var CscleraEsternaMiddle7 = NUBS(S0)(2)(knots21)(scleraEsternaMiddle7);
   //var mapCscleraEsternaMiddle7 = MAP(CscleraEsternaMiddle7)(domain1)

var scleraInternaMiddle7 = [[0,1.9,1.35],[-1.95,1.9,0],[0,1.9,-1.35]]
 var knots22 = knots(scleraInternaMiddle7);
  var CscleraInternaMiddle7 = NUBS(S0)(2)(knots22)(scleraInternaMiddle7);
   //var mapCscleraInternaMiddle7 = MAP(CscleraInternaMiddle7)(domain1)


var scleraEsternaMiddle8 = [[0,1.7,1.4],[-0.8,1.7,1.4],[-1.7,1.7,0],[-0.8,1.7,-1.4],[0,1.7,-1.4]]
 var knots23 = knots(scleraEsternaMiddle8);
  var CscleraEsternaMiddle8 = NUBS(S0)(2)(knots23)(scleraEsternaMiddle8);
   //var mapCscleraEsternaMiddle8 = MAP(CscleraEsternaMiddle8)(domain1)


var scleraInternaMiddle8 = [[0,1.7,1.25],[-1.75,1.7,0],[0,1.7,-1.25]]
 var knots24 = knots(scleraInternaMiddle8);
  var CscleraInternaMiddle8 = NUBS(S0)(2)(knots24)(scleraInternaMiddle8);
   //var mapCscleraInternaMiddle8 = MAP(CscleraInternaMiddle8)(domain1)

var scleraEsternaMiddle9 = [[0,1.5,1.3],[-0.7,1.5,1.3],[-1.5,1.5,0],[-0.7,1.5,-1.3],[0,1.5,-1.3]]
 var knots25 = knots(scleraEsternaMiddle9);
  var CscleraEsternaMiddle9 = NUBS(S0)(2)(knots25)(scleraEsternaMiddle9);
   //var mapCscleraEsternaMiddle9 = MAP(CscleraEsternaMiddle9)(domain1)

var scleraInternaMiddle9 = [[0,1.5,1.15],[-1.45,1.5,0],[0,1.5,-1.15]]
 var knots26 = knots(scleraInternaMiddle9);
  var CscleraInternaMiddle9 = NUBS(S0)(2)(knots26)(scleraInternaMiddle9);
   //var mapCscleraInternaMiddle9 = MAP(CscleraInternaMiddle9)(domain1)

var scleraEsternaMiddle10 = [[0,1.3,1.1],[-0.5,1.3,1.1],[-1.3,1.3,0],[-0.5,1.3,-1.1],[0,1.3,-1.1]]
 var knots27 = knots(scleraEsternaMiddle10);
  var CscleraEsternaMiddle10 = NUBS(S0)(2)(knots27)(scleraEsternaMiddle10);
   //var mapCscleraEsternaMiddle10 = MAP(CscleraEsternaMiddle10)(domain1)

var scleraInternaMiddle10 = [[0,1.3,0.85],[-1.05,1.3,0],[0,1.3,-0.85]]
 var knots28 = knots(scleraInternaMiddle10);
  var CscleraInternaMiddle10 = NUBS(S0)(2)(knots28)(scleraInternaMiddle10);
   //var mapCscleraInternaMiddle10 = MAP(CscleraInternaMiddle10)(domain1)

var scleraEsternaMiddle11 = [[0,1.15,0.5],[-0.25,1.15,0.4],[-0.4,1.15,0],[-0.25,1.15,-0.4],[0,1.15,-0.5]]
 var knots29 = knots(scleraEsternaMiddle11);
  var CscleraEsternaMiddle11 = NUBS(S0)(2)(knots29)(scleraEsternaMiddle11);
   //var mapCscleraEsternaMiddle11 = MAP(CscleraEsternaMiddle11)(domain1)

var scleraInternaMiddle11 = [[0,1.2,0.52],[-0.65,1.2,0],[0,1.2,-0.52]]
 var knots30 = knots(scleraInternaMiddle11);
  var CscleraInternaMiddle11 = NUBS(S0)(2)(knots30)(scleraInternaMiddle11);
   //var mapCscleraInternaMiddle11 = MAP(CscleraInternaMiddle11)(domain1)


/*Aggregazione delle curve dell'esterno/interno della sclera*/

var curveScleraEsterna = [CnervoOtticoEsternoRistringimento,CscleraEsternaBegin,CscleraEsternaMiddle1,CscleraInternaMiddle2,
						  CscleraEsternaMiddle3,CscleraEsternaMiddle4,CscleraEsternaMiddle5,CscleraEsternaMiddle6,
						  CscleraEsternaMiddle7,CscleraEsternaMiddle8,CscleraEsternaMiddle9,CscleraEsternaMiddle10,
						  CscleraEsternaMiddle11]
var scleraEsterna = BEZIER(S1)(curveScleraEsterna);
var scleraEsternaMap = COLOR([1, 0.941176, 0.960784])(MAP(scleraEsterna)(domain2))
DRAW(scleraEsternaMap)

var curveScleraInterna = [CnervoOtticoInternoRistringimento,CscleraInternaBegin,CscleraInternaMiddle1,CscleraInternaMiddle2,
						  CscleraInternaMiddle3,CscleraInternaMiddle4,CscleraInternaMiddle5,CscleraInternaMiddle6,
						  CscleraInternaMiddle7,CscleraInternaMiddle8,CscleraInternaMiddle9,CscleraInternaMiddle10,
						  CscleraInternaMiddle11]
var scleraInterna = BEZIER(S1)(curveScleraInterna);

var sclera = BEZIER(S2)([scleraEsterna,scleraInterna]);
var scleraMap = COLOR([ 1, 0.941176, 0.960784])(MAP(sclera)(domain3));
DRAW(scleraMap)


// IRIDE

var contornoIrideRaggioEsternoAnterioreDestro = [[0,1.2,0.5],[-0.25,1.2,0.4],[-0.4,1.2,0],[-0.25,1.2,-0.4],[0,1.2,-0.5]]
 var knots31 = knots(contornoIrideRaggioEsternoAnterioreDestro);
  var CcontornoIrideRaggioEsternoAnterioreDestro = NUBS(S0)(2)(knots31)(contornoIrideRaggioEsternoAnterioreDestro);
   //var mapCcontornoIrideRaggioEsternoAnterioreDestro = COLOR([0,0,1])(MAP(CcontornoIrideRaggioEsternoAnterioreDestro)(domain1))

var contornoIrideRaggioEsternoPosterioreDestro = [[0,1.3,0.5],[-0.25,1.3,0.4],[-0.4,1.3,0],[-0.25,1.3,-0.4],[0,1.3,-0.5]]
 var knots32 = knots(contornoIrideRaggioEsternoPosterioreDestro);
  var CcontornoIrideRaggioEsternoPosterioreDestro = NUBS(S0)(2)(knots32)(contornoIrideRaggioEsternoPosterioreDestro);
   //var mapCcontornoIrideRaggioEsternoPosterioreDestro = COLOR([0,0,1])(MAP(CcontornoIrideRaggioEsternoPosterioreDestro)(domain1))

var contornoIrideRaggioInternoAnterioreDestro = [[0,1.2,0.2],[-0.1,1.2,0.2],[-0.2,1.2,0],[-0.1,1.2,-0.2],[0,1.2,-0.2]]
 var knots33 = knots(contornoIrideRaggioInternoAnterioreDestro);
  var CcontornoIrideRaggioInternoAnterioreDestro = NUBS(S0)(2)(knots33)(contornoIrideRaggioInternoAnterioreDestro);
   //var mapCcontornoIrideRaggioInternoAnterioreDestro = COLOR([0,0,1])(MAP(CcontornoIrideRaggioInternoAnterioreDestro)(domain1))

var contornoIrideRaggioInternoPosterioreDestro = [[0,1.3,0.2],[-0.1,1.3,0.2],[-0.2,1.3,0],[-0.1,1.3,-0.2],[0,1.3,-0.2]]
 var knots34 = knots(contornoIrideRaggioInternoPosterioreDestro);
  var CcontornoIrideRaggioInternoPosterioreDestro = NUBS(S0)(2)(knots34)(contornoIrideRaggioInternoPosterioreDestro);
   //var mapCcontornoIrideRaggioInternoPosterioreDestro = COLOR([0,0,1])(MAP(CcontornoIrideRaggioInternoPosterioreDestro)(domain1))

var curveIridePosterioreDestro = [CcontornoIrideRaggioEsternoPosterioreDestro,CcontornoIrideRaggioInternoPosterioreDestro]
 var CcurveIridePosterioreDestro = BEZIER(S1)(curveIridePosterioreDestro);
  //var curveIridePosterioreDestroMap = COLOR([0.545098, 0.270588, 0.0745098])(MAP(CcurveIridePosterioreDestro)(domain2))
   //DRAW(curveIridePosterioreDestroMap)

var curveIrideAnterioreDestro = [CcontornoIrideRaggioEsternoAnterioreDestro,CcontornoIrideRaggioInternoAnterioreDestro]
 var CcurveIrideAnterioreDestro = BEZIER(S1)(curveIrideAnterioreDestro);
  //var curveIrideAnterioreDestroMap = COLOR([0.545098, 0.270588, 0.0745098])(MAP(CcurveIrideAnterioreDestro)(domain2))
   //DRAW(curveIrideAnterioreDestroMap)

var irideDestro = BEZIER(S2)([CcurveIrideAnterioreDestro,CcurveIridePosterioreDestro]);
 var irideDestroMap = COLOR([0.133333, 0.545098, 0.133333])(MAP(irideDestro)(domain3));
  DRAW(irideDestroMap)

//Lato sinistro IRIDE

var contornoIrideRaggioEsternoAnterioreSinistro = [[0,1.2,0.5],[0.25,1.2,0.4],[0.4,1.2,0],[0.25,1.2,-0.4],[0,1.2,-0.5]]
 var knots35 = knots(contornoIrideRaggioEsternoAnterioreSinistro);
  var CcontornoIrideRaggioEsternoAnterioreSinistro = NUBS(S0)(2)(knots35)(contornoIrideRaggioEsternoAnterioreSinistro);

var contornoIrideRaggioEsternoPosterioreSinistro = [[0,1.3,0.5],[0.25,1.3,0.4],[0.4,1.3,0],[0.25,1.3,-0.4],[0,1.3,-0.5]]
 var knots36 = knots(contornoIrideRaggioEsternoPosterioreSinistro);
  var CcontornoIrideRaggioEsternoPosterioreSinistro = NUBS(S0)(2)(knots36)(contornoIrideRaggioEsternoPosterioreSinistro);

var contornoIrideRaggioInternoAnterioreSinistro = [[0,1.2,0.2],[0.1,1.2,0.2],[0.2,1.2,0],[0.1,1.2,-0.2],[0,1.2,-0.2]]
 var knots37 = knots(contornoIrideRaggioInternoAnterioreSinistro);
  var CcontornoIrideRaggioInternoAnterioreSinistro = NUBS(S0)(2)(knots37)(contornoIrideRaggioInternoAnterioreSinistro);

var contornoIrideRaggioInternoPosterioreSinistro = [[0,1.3,0.2],[0.1,1.3,0.2],[0.2,1.3,0],[0.1,1.3,-0.2],[0,1.3,-0.2]]
 var knots38 = knots(contornoIrideRaggioInternoPosterioreSinistro);
  var CcontornoIrideRaggioInternoPosterioreSinistro = NUBS(S0)(2)(knots38)(contornoIrideRaggioInternoPosterioreSinistro);

var curveIridePosterioreSinistro = [CcontornoIrideRaggioEsternoPosterioreSinistro,CcontornoIrideRaggioInternoPosterioreSinistro]
 var CcurveIridePosterioreSinistro = BEZIER(S1)(curveIridePosterioreSinistro);

var curveIrideAnterioreSinistro = [CcontornoIrideRaggioEsternoAnterioreSinistro,CcontornoIrideRaggioInternoAnterioreSinistro]
 var CcurveIrideAnterioreSinistro = BEZIER(S1)(curveIrideAnterioreSinistro);

var irideSinistro = BEZIER(S2)([CcurveIrideAnterioreSinistro,CcurveIridePosterioreSinistro]);
 var irideSinistroMap = COLOR([0.133333, 0.545098, 0.133333])(MAP(irideSinistro)(domain3));
  DRAW(irideSinistroMap)

//Cornea


//Prima il lato destro.

var corneaEsternaDestraBegin = [[0,1.16,0.5],[-0.15,1.15,0.5],[-0.45,1.17,0],[-0.15,1.15,-0.5],[0,1.16,-0.5]]
 var knots39 = knots(corneaEsternaDestraBegin);
  var CcorneaEsternaDestraBegin = NUBS(S0)(2)(knots39)(corneaEsternaDestraBegin);
   //var mapCcorneaEsternaDestraBegin = MAP(CcorneaEsternaDestraBegin)(domain1)

var corneaInternaDestraBegin = [[0,1.15,0.4],[-0.15,1.15,0.4],[-0.4,1.15,0],[-0.15,1.15,-0.4],[0,1.15,-0.4]]
 var knots40 = knots(corneaInternaDestraBegin);
  var CcorneaInternaDestraBegin = NUBS(S0)(2)(knots40)(corneaInternaDestraBegin);
   //var mapCcorneaInternaDestraBegin = MAP(CcorneaInternaDestraBegin)(domain1)

var corneaEsternaDestraMiddle = [[0,1.1,0.3],[-0.1,1.1,0.3],[-0.3,1.1,0],[-0.1,1.1,-0.3],[0,1.1,-0.3]]
 var knots41 = knots(corneaEsternaDestraMiddle);
  var CcorneaEsternaDestraMiddle = NUBS(S0)(2)(knots41)(corneaEsternaDestraMiddle);
   //var mapCcorneaEsternaDestraMiddle = MAP(CcorneaEsternaDestraMiddle)(domain1)

var corneaInternaDestraMiddle = [[0,1.1,0.25],[-0.1,1.1,0.25],[-0.25,1.1,0],[-0.1,1.1,-0.25],[0,1.1,-0.25]]
 var knots42 = knots(corneaInternaDestraMiddle);
  var CcorneaInternaDestraMiddle = NUBS(S0)(2)(knots42)(corneaInternaDestraMiddle);
   //var mapCcorneaInternaDestraMiddle = MAP(CcorneaInternaDestraMiddle)(domain1)

var corneaEsternaDestraEnd = [[0,1.05,0.25],[-0.1,1.05,0.25],[-0.25,1.05,0],[-0.1,1.05,-0.25],[0,1.05,-0.25]]
 var knots43 = knots(corneaEsternaDestraEnd);
  var CcorneaEsternaDestraEnd = NUBS(S0)(2)(knots43)(corneaEsternaDestraEnd);
   //var mapCcorneaEsternaDestraEnd = MAP(CcorneaEsternaDestraEnd)(domain1)

var corneaInternaDestraEnd = [[0,1.05,0.2],[-0.1,1.05,0.2],[-0.2,1.05,0],[-0.1,1.05,-0.2],[0,1.05,-0.2]]
 var knots44 = knots(corneaInternaDestraEnd);
  var CcorneaInternaDestraEnd = NUBS(S0)(2)(knots44)(corneaInternaDestraEnd);
   //var mapCcorneaInternaDestraEnd = MAP(CcorneaInternaDestraEnd)(domain1)


var curveCorneaEsternaDestro = [CcorneaEsternaDestraBegin,CcorneaEsternaDestraMiddle,CcorneaEsternaDestraEnd,[0,1.1,0]]
 var CcurveCorneaEsternaDestro = BEZIER(S1)(curveCorneaEsternaDestro);
  var curveCorneaEsternaDestroMap = COLOR([0.498039, 1, 0.831373,0.7])(MAP(CcurveCorneaEsternaDestro)(domain2))
   DRAW(curveCorneaEsternaDestroMap)

var curveCorneaInternaDestro = [CcorneaInternaDestraBegin,CcorneaInternaDestraMiddle,CcorneaInternaDestraEnd,[0,1,0]]
 var CcurveCorneaInternaDestro = BEZIER(S1)(curveCorneaInternaDestro);
  //var curveCorneaInternaDestroMap = COLOR([0.498039, 1, 0.831373,0.7])(MAP(CcurveCorneaInternaDestro)(domain2))

var  corneaDestra = BEZIER(S2)([CcurveCorneaEsternaDestro,CcurveCorneaInternaDestro]);
 var  corneaDestraMap = COLOR([1, 0.941176, 0.960784,0.25])(MAP( corneaDestra)(domain3));
  //DRAW( corneaDestraMap)

var corneaSinistra = R([0,2])([PI])(curveCorneaEsternaDestroMap)
 DRAW(corneaSinistra)

//Cristallino

//Parte dalla base dell'iride e si estende di 0.2 lunghezza, 0,8 altezza max 0.2/0.3 larghezza

var  cristallinoBegin = [[0,1.35,0.25],[-0.1,1.35,0.25],[-0.25,1.35,0],[-0.1,1.35,-0.25],[0,1.35,-0.25],[0.1,1.35,-0.25],[0.25,1.35,0],
						[0.1,1.35,0.25],[0,1.35,0.25]]
 var knots45 = knots(cristallinoBegin);
  var CcristallinoBegin = NUBS(S0)(2)(knots45)(cristallinoBegin);

var  cristallinoMiddle = [[0,1.5,0.4],[-0.15,1.5,0.4],[-0.3,1.5,0],[-0.15,1.5,-0.4],[0,1.5,-0.4],[0.15,1.5,-0.4],[0.3,1.5,0],
						[0.15,1.5,0.4],[0,1.5,0.4]]
 var knots46 = knots(cristallinoMiddle);
  var CcristallinoMiddle = NUBS(S0)(2)(knots46)(cristallinoMiddle);

var  cristallinoEnd = [[0,1.6,0.25],[-0.1,1.6,0.25],[-0.25,1.6,0],[-0.1,1.6,-0.25],[0,1.6,-0.25],[0.1,1.6,-0.25],[0.25,1.6,0],
						[0.1,1.6,0.25],[0,1.6,0.25]]
 var knots47 = knots(cristallinoEnd);
  var CcristallinoEnd = NUBS(S0)(2)(knots47)(cristallinoEnd);

var curveCristallino = [[0,1.3,0],CcristallinoBegin,CcristallinoMiddle,CcristallinoEnd,[0,1.65,0]]
 var CcurveCristallino = BEZIER(S1)(curveCristallino)
  var curveCristallinoMap = COLOR([1, 1, 0.941176, 0.9])(MAP(CcurveCristallino)(domain2))
   DRAW(curveCristallinoMap)

var curveCristallino = [[0,1.3,0],CcristallinoBegin,CcristallinoMiddle,CcristallinoEnd,[0,1.65,0]]
 var CcurveCristallino = BEZIER(S1)(curveCristallino)
  var curveCristallinoMap = COLOR([1, 1, 0.941176, 0.7])(MAP(CcurveCristallino)(domain2))
   DRAW(curveCristallinoMap)


//Giunture(Zinn)

var curveCorpoMuscolare = [CscleraEsternaMiddle11,CcontornoIrideRaggioEsternoAnterioreDestro]
 var CcurveCorpoMuscolare = BEZIER(S1)(curveCorpoMuscolare)
  var curveCorpoMuscolareMap = COLOR([1, 1, 0.941176])(MAP(CcurveCorpoMuscolare)(domain2))
   DRAW(curveCorpoMuscolareMap)

var  cristallinoMiddleHalf = [[-0.2,1.5,0],[-0.15,1.5,0.4],[0,1.5,0.4],[0.15,1.5,0.4],[0.2,1.5,0]]
 var knots48 = knots(cristallinoMiddleHalf);
  var CcristallinoMiddleHalf = NUBS(S0)(2)(knots48)(cristallinoMiddleHalf);

var  cristallinoMiddleHalfDown = [[-0.2,1.5,0],[-0.15,1.5,-0.4],[0,1.5,-0.4],[0.15,1.5,-0.4],[0.2,1.5,0]]
 var CcristallinoMiddleHalfDown = NUBS(S0)(2)(knots48)(cristallinoMiddleHalfDown);

var curveSosprensoreCristallino1 = [CcristallinoMiddleHalf,[0,1.5,0.5],[0,1.6,1]]
 var CcurveSosprensoreCristallino1 = BEZIER(S1)(curveSosprensoreCristallino1)
  var curveSosprensoreCristallino1Map = COLOR([1, 1, 0.941176,0.9])(MAP(CcurveSosprensoreCristallino1)(domain2))
   DRAW(curveSosprensoreCristallino1Map)

var curveSosprensoreCristallino2 = [CcristallinoMiddleHalf,[0,1.5,-0.5],[0,1.6,-1]]
 var CcurveSosprensoreCristallino2 = BEZIER(S1)(curveSosprensoreCristallino2)
  var curveSosprensoreCristallino2Map = COLOR([1, 1, 0.941176,0.9])(MAP(CcurveSosprensoreCristallino2)(domain2))
   DRAW(curveSosprensoreCristallino2Map)


//Coroide...fino all'inizio dell'iride

var coroideBegin = [[0,3.6,0.5],[-0.6,3.6,0],[0,3.6,-0.5]]
 var knots49 = knots(coroideBegin);
  var CcoroideBegin = NUBS(S0)(2)(knots49)(coroideBegin);

var coroideMiddle1 = [[0,3.4,1.1],[-1,3.4,0],[0,3.4,-1.1]]
 var CcoroideMiddle1 = NUBS(S0)(2)(knots49)(coroideMiddle1);

var coroideMiddle2 = [[0,3.2,1.2],[-1.2,3.2,0],[0,3.2,-1.2]]
 var CcoroideMiddle2 = NUBS(S0)(2)(knots49)(coroideMiddle2);

var coroideMiddle3 = [[0,3,1.3],[-1.3,3,0],[0,3,-1.3]]
 var CcoroideMiddle3 = NUBS(S0)(2)(knots49)(coroideMiddle3);

var coroideMiddle4 = [[0,2.8,1.4],[-1.3,2.8,0],[0,2.8,-1.4]]
 var CcoroideMiddle4 = NUBS(S0)(2)(knots49)(coroideMiddle4);

var coroideMiddle5 = [[0,2.2,1.4],[-1.3,2.2,0],[0,2.2,-1.4]]
 var CcoroideMiddle5 = NUBS(S0)(2)(knots49)(coroideMiddle5);

var coroideMiddle6 = [[0,2,1.3],[-1.3,2,0],[0,2,-1.3]]
 var CcoroideMiddle6 = NUBS(S0)(2)(knots49)(coroideMiddle6);

var coroideMiddle7 = [[0,1.8,1.1],[-1.2,1.8,0],[0,1.8,-1.1]]
 var CcoroideMiddle7 = NUBS(S0)(2)(knots49)(coroideMiddle7);

var coroideMiddle8 = [[0,1.5,1],[-1,1.5,0],[0,1.5,-1]]
 var CcoroideMiddle8 = NUBS(S0)(2)(knots24)(coroideMiddle8);

var curvecoroide = [CnervoOtticoEsternoRistringimento,CcoroideBegin,CcoroideMiddle1,CcoroideMiddle2,
						  CcoroideMiddle3,CcoroideMiddle4,CcoroideMiddle5,CcoroideMiddle6,
						  CcoroideMiddle7,CcoroideMiddle8]
 var coroide = BEZIER(S1)(curvecoroide);

var coroideStrato = BEZIER(S2)([coroide,scleraInterna]);
 var coroideStratoMap = COLOR([ 0.576471, 0.439216, 0.858824])(MAP(coroideStrato)(domain3));
  DRAW(coroideStratoMap)

//Parte Ottica della retina

var otticaRetinaBegin = [[0,3.6,0.4],[-0.5,3.6,0],[0,3.6,-0.4]]
 var knots49 = knots(otticaRetinaBegin);
  var CotticaRetinaBegin = NUBS(S0)(2)(knots49)(otticaRetinaBegin);

var otticaRetinaMiddle1 = [[0,3.4,1],[-0.9,3.4,0],[0,3.4,-1]]
 var CotticaRetinaMiddle1 = NUBS(S0)(2)(knots49)(otticaRetinaMiddle1);

var otticaRetinaMiddle2 = [[0,3.2,1.1],[-1.1,3.2,0],[0,3.2,-1.1]]
 var CotticaRetinaMiddle2 = NUBS(S0)(2)(knots49)(otticaRetinaMiddle2);

var otticaRetinaMiddle3 = [[0,3,1.2],[-1.2,3,0],[0,3,-1.2]]
 var CotticaRetinaMiddle3 = NUBS(S0)(2)(knots49)(otticaRetinaMiddle3);

var otticaRetinaMiddle4 = [[0,2.8,1.3],[-1.2,2.8,0],[0,2.8,-1.3]]
 var CotticaRetinaMiddle4 = NUBS(S0)(2)(knots49)(otticaRetinaMiddle4);

var otticaRetinaMiddle5 = [[0,2.2,1.3],[-1.2,2.2,0],[0,2.2,-1.3]]
 var CotticaRetinaMiddle5 = NUBS(S0)(2)(knots49)(otticaRetinaMiddle5);

var otticaRetinaMiddle6 = [[0,2,1.2],[-1.2,2,0],[0,2,-1.2]]
 var CotticaRetinaMiddle6 = NUBS(S0)(2)(knots49)(otticaRetinaMiddle6);

var otticaRetinaMiddle7 = [[0,1.8,1],[-1.1,1.8,0],[0,1.8,-1]]
 var CotticaRetinaMiddle7 = NUBS(S0)(2)(knots49)(otticaRetinaMiddle7);

var otticaRetinaMiddle8 = [[0,1.5,0.9],[-0.9,1.5,0],[0,1.5,-0.9]]
 var CotticaRetinaMiddle8 = NUBS(S0)(2)(knots24)(otticaRetinaMiddle8);

var curveotticaRetina = [CnervoOtticoInternoRistringimento,CotticaRetinaBegin,CotticaRetinaMiddle1,CotticaRetinaMiddle2,
						  CotticaRetinaMiddle3,CotticaRetinaMiddle4,CotticaRetinaMiddle5,CotticaRetinaMiddle6,
						  CotticaRetinaMiddle7,CotticaRetinaMiddle8]
 var otticaRetina = BEZIER(S1)(curveotticaRetina);

var otticaRetinaStrato = BEZIER(S2)([otticaRetina,coroide]);
 var otticaRetinaStratoMap = COLOR([1, 0.84, 0])(MAP(otticaRetinaStrato)(domain3));
  DRAW(otticaRetinaStratoMap)

//Retina

var RetinaBegin = [[0,3.6,0.3],[-0.4,3.6,0],[0,3.6,-0.3]]
 var knots49 = knots(RetinaBegin);
  var CRetinaBegin = NUBS(S0)(2)(knots49)(RetinaBegin);

var RetinaMiddle1 = [[0,3.4,0.9],[-0.8,3.4,0],[0,3.4,-0.9]]
 var CRetinaMiddle1 = NUBS(S0)(2)(knots49)(RetinaMiddle1);

var RetinaMiddle2 = [[0,3.2,1],[-1,3.2,0],[0,3.2,-1]]
 var CRetinaMiddle2 = NUBS(S0)(2)(knots49)(RetinaMiddle2);

var RetinaMiddle3 = [[0,3,1.1],[-1.1,3,0],[0,3,-1.1]]
 var CRetinaMiddle3 = NUBS(S0)(2)(knots49)(RetinaMiddle3);

var RetinaMiddle4 = [[0,2.8,1.2],[-1.1,2.8,0],[0,2.8,-1.2]]
 var CRetinaMiddle4 = NUBS(S0)(2)(knots49)(RetinaMiddle4);

var RetinaMiddle5 = [[0,2.2,1.2],[-1.1,2.2,0],[0,2.2,-1.2]]
 var CRetinaMiddle5 = NUBS(S0)(2)(knots49)(RetinaMiddle5);

var RetinaMiddle6 = [[0,2,1.1],[-1.1,2,0],[0,2,-1.1]]
 var CRetinaMiddle6 = NUBS(S0)(2)(knots49)(RetinaMiddle6);

var RetinaMiddle7 = [[0,1.8,0.9],[-1,1.8,0],[0,1.8,-0.9]]
 var CRetinaMiddle7 = NUBS(S0)(2)(knots49)(RetinaMiddle7);

var RetinaMiddle8 = [[0,1.5,0.8],[-0.8,1.5,0],[0,1.5,-0.8]]
 var CRetinaMiddle8 = NUBS(S0)(2)(knots49)(RetinaMiddle8);

var curveRetina = [CnervoOtticoInternoRistringimento,CRetinaBegin,CRetinaMiddle1,CRetinaMiddle2,
						  CRetinaMiddle3,CRetinaMiddle4,CRetinaMiddle5,CRetinaMiddle6,
						  CRetinaMiddle7,CRetinaMiddle8]
 var Retina = BEZIER(S1)(curveRetina);

var RetinaStrato = BEZIER(S2)([Retina,coroide]);
 var RetinaStratoMap = COLOR([0.803922, 0.521569, 0.247059])(MAP(RetinaStrato)(domain3));
  DRAW(RetinaStratoMap)

//Giunzione2

var giunzione2 = [CRetinaMiddle8,CcontornoIrideRaggioEsternoPosterioreDestro]
 var Cgiunzione2 = BEZIER(S1)(giunzione2);
  var giunzione2Map = COLOR([0.803922, 0.521569, 0.247059])(MAP(Cgiunzione2)(domain2));
   DRAW(giunzione2Map)

//Canale Iodaleo...costruito attraverso i 2 corpi vitrei

var  canaleBeginSuperiore = [[0,1.7,0.1],[0,1,0.9],[0,1.7,1.4],[-0.3,1.7,0],[0,1.7,0.1]]
 var knots511 = knots(canaleBeginSuperiore);
  var CcanaleBeginSuperiore = NUBS(S0)(2)(knots511)(canaleBeginSuperiore);
   //var CcanaleBeginSuperioreMap = MAP(CcanaleBeginSuperiore)(domain1)

var  canaleMiddleSuperiore = [[0,2.6,0.2],[0,2.6,1.6],[-0.6,2.6,0],[0,2.6,0.2]]
 var knots51 = knots(canaleMiddleSuperiore);
  var CcanaleMiddleSuperiore = NUBS(S0)(2)(knots51)(canaleMiddleSuperiore);
   //var CcanaleMiddleSuperioreMap = MAP(CcanaleMiddleSuperiore)(domain1)

var  canaleEndSuperiore = [[0,3.2,0.1],[0,3.2,1.9],[-0.5,3.2,0],[0,3.2,0.1]]
 var CcanaleEndSuperiore = NUBS(S0)(2)(knots51)(canaleEndSuperiore);
  //var CcanaleEndSuperioreMap = MAP(CcanaleEndSuperiore)(domain1)

var corpoVitreoSuperiore = [[-0.05,1.65,0.05],CcanaleBeginSuperiore,CcanaleMiddleSuperiore,CcanaleEndSuperiore,[-0.05,3.7,0.05]]
 var CcorpoVitreoSuperiore = BEZIER(S1)(corpoVitreoSuperiore);
  var corpoVitreoSuperioreMap = COLOR([ 0.686275, 0.933333, 0.933333,0.7])(MAP(CcorpoVitreoSuperiore)(domain2));
   DRAW(corpoVitreoSuperioreMap)


var  canaleBeginInferiore = [[0,1.7,-0.1],[0,1,-0.9],[0,1.7,-1.4],[-0.3,1.7,0],[0,1.7,-0.1]]
 var CcanaleBeginInferiore = NUBS(S0)(2)(knots511)(canaleBeginInferiore);
  //var CcanaleBeginInferioreMap = MAP(CcanaleBeginInferiore)(domain1)

var  canaleMiddleInferiore = [[0,2.6,0.1],[0,2.6,-1.6],[-0.6,2.6,0],[0,2.6,0.1]]
 var CcanaleMiddleInferiore = NUBS(S0)(2)(knots51)(canaleMiddleInferiore);
  //var CcanaleMiddleInferioreMap = MAP(CcanaleMiddleInferiore)(domain1)

var  canaleEndInferiore = [[0,3.2,-0.1],[0,3.2,-1.9],[-0.5,3.2,0],[0,3.2,-0.1]]
 var CcanaleEndInferiore = NUBS(S0)(2)(knots51)(canaleEndInferiore);
  //var CcanaleEndInferioreMap = MAP(CcanaleEndInferiore)(domain1)

var corpoVitreoInferiore = [[-0.05,1.65,-0.05],CcanaleBeginInferiore,CcanaleMiddleInferiore,CcanaleEndInferiore,[-0.05,3.7,-0.05]]
 var CcorpoVitreoInferiore = BEZIER(S1)(corpoVitreoInferiore);
  var corpoVitreoInferioreMap = COLOR([ 0.686275, 0.933333, 0.933333,0.7])(MAP(CcorpoVitreoInferiore)(domain2));
   DRAW(corpoVitreoInferioreMap)

//Arteria della retina
 //Riprendiamo le curve iniziali

var arteriaInternoBegin = [[0,4.5,-0.1],[0.15,4.5,-0.2],[0,4.5,-0.3]]
 var knots1p = knots(arteriaInternoBegin);
  var CarteriaInternoBegin = NUBS(S0)(2)(knots1p)(arteriaInternoBegin);

var arteriaInternoEnd = [[0,4,0.1],[0.15,4,0],[0,4,-0.1]]
 var CarteriaInternoEnd = NUBS(S0)(2)(knots1p)(arteriaInternoEnd);

var arteriaInternoRistringimento = [[0,3.8,0.05],[0.1,3.8,0],[0,3.8,-0.05]]
 var CarteriaInternoRistringimento = NUBS(S0)(2)(knots1p)(arteriaInternoRistringimento);

var curveSurfacearteriaInterno = [CarteriaInternoBegin,CarteriaInternoEnd,CarteriaInternoRistringimento]
 var arteriaInterno = BEZIER(S1)(curveSurfacearteriaInterno);

var arteria3d = BEZIER(S2)([arteriaInterno,TrueNervoOtticoInterno]);
 var arteria3dMap = COLOR([1, 0, 0])(MAP(arteria3d)(domain3));
  DRAW(arteria3dMap)

//Vene
var vena1 = [[0,3.8,0],[-0.15,3.7,0.05],[-0.15,3.6,0.1],[-0.1,3.5,0.11]]
 var knots1p = knots(vena1);
  var Cvena1 = NUBS(S0)(2)(knots1p)(vena1);
   var Cvena1Map = COLOR([1,0,0])(MAP(Cvena1)(domain1))

var vena2 = [[-0.15,3.7,0.05],[-0.1,3.6,0.15],[-0.05,3.4,0.2]]
 var knots1p = knots(vena2);
  var Cvena2 = NUBS(S0)(2)(knots1p)(vena2);
   var Cvena2Map = COLOR([0,0,1])(MAP(Cvena2)(domain1))

var vena3 = [[-0.1,3.6,0.15],[-0.1,3.4,0.2],[-0.1,3.3,0.5]]
 var knots1p = knots(vena3);
  var Cvena3 = NUBS(S0)(2)(knots1p)(vena3);
   var Cvena3Map = COLOR([1,0,0])(MAP(Cvena3)(domain1))

var vena4 = [[0,3.8,0],[-0.15,3.7,-0.05],[-0.15,3.6,-0.1],[-0.1,3.5,-0.11]]
 var knots1p = knots(vena4);
  var Cvena4 = NUBS(S0)(2)(knots1p)(vena4);
   var Cvena4Map = COLOR([0,0,1])(MAP(Cvena4)(domain1))

var vena5 = [[-0.15,3.7,-0.05],[-0.1,3.6,-0.15],[-0.05,3.4,-0.2]]
 var knots1p = knots(vena5);
  var Cvena5 = NUBS(S0)(2)(knots1p)(vena5);
   var Cvena5Map = COLOR([1,0,0])(MAP(Cvena5)(domain1))

var vasi = STRUCT([Cvena1Map,Cvena2Map,Cvena3Map,Cvena4Map,Cvena5Map])
 DRAW(vasi)

//Animazione

var nervoOtticoEsternoMapRibaltato = COLOR([1, 0.941176, 0.960784])(SCALE([0])([-1])(nervoOtticoEsternoMap))
var scleraSinistraAppoggio = COLOR([1, 0.941176, 0.960784])(SCALE([0])([-1])(scleraEsternaMap))
var coroideSinistra = COLOR([0.576471, 0.439216, 0.858824])(SCALE([0])([-1])(coroideStratoMap))
var otticaRetinaSinistra = COLOR([1, 0.84, 0])(SCALE([0])([-1])(otticaRetinaStratoMap))

var scleraSinistra =STRUCT([scleraSinistraAppoggio,nervoOtticoEsternoMapRibaltato])


var scleraSinistra1 = COLOR([1, 0.941176, 0.960784,0.8])(scleraSinistra)
 var scleraSinistra2 = COLOR([1, 0.941176, 0.960784,0.7])(scleraSinistra)
  var scleraSinistra3 = COLOR([1, 0.941176, 0.960784,0.6])(scleraSinistra)
   var scleraSinistra4 = COLOR([1, 0.941176, 0.960784,0.5])(scleraSinistra)

var coroideSinistra1 = COLOR([0.576471, 0.439216, 0.858824,0.8])(coroideSinistra)
 var coroideSinistra2 = COLOR([0.576471, 0.439216, 0.858824,0.7])(coroideSinistra)
  var coroideSinistra3 = COLOR([0.576471, 0.439216, 0.858824,0.6])(coroideSinistra)
   var coroideSinistra4 = COLOR([0.576471, 0.439216, 0.858824,0.5])(coroideSinistra)

var otticaRetinaSinistra1 = COLOR([1, 0.84, 0,0.8])(otticaRetinaSinistra)
 var otticaRetinaSinistra2 = COLOR([1, 0.84, 0,0.7])(otticaRetinaSinistra)
  var otticaRetinaSinistra3 = COLOR([1, 0.84, 0,0.6])(otticaRetinaSinistra)
   var otticaRetinaSinistra4 = COLOR([1, 0.84, 0,0.5])(otticaRetinaSinistra)
 
DRAW(scleraSinistra)
 DRAW(scleraSinistra1)
 DRAW(scleraSinistra2)
 DRAW(scleraSinistra3)
 DRAW(scleraSinistra4)
  DRAW(coroideSinistra)
  DRAW(coroideSinistra1)
  DRAW(coroideSinistra2)
  DRAW(coroideSinistra3)
  DRAW(coroideSinistra4)
   DRAW(otticaRetinaSinistra)
   DRAW(otticaRetinaSinistra1)
   DRAW(otticaRetinaSinistra2)
   DRAW(otticaRetinaSinistra3)
   DRAW(otticaRetinaSinistra4)


//funzione per la finta animazione
function time()
{
  setTimeout("HIDE(scleraSinistra)",7010);
  setTimeout("HIDE(scleraSinistra1)",7310);
  setTimeout("HIDE(scleraSinistra2)",7610);
  setTimeout("HIDE(scleraSinistra3)",7910);
  setTimeout("HIDE(scleraSinistra4)",8210);
  setTimeout("HIDE(coroideSinistra)",9510);
  setTimeout("HIDE(coroideSinistra1)",9810);
  setTimeout("HIDE(coroideSinistra2)",10110);
  setTimeout("HIDE(coroideSinistra3)",10410);
  setTimeout("HIDE(coroideSinistra4)",10710);
  setTimeout("HIDE(otticaRetinaSinistra)",11710);
  setTimeout("HIDE(otticaRetinaSinistra1)",12010);
  setTimeout("HIDE(otticaRetinaSinistra2)",12310);
  setTimeout("HIDE(otticaRetinaSinistra3)",12610);
  setTimeout("HIDE(otticaRetinaSinistra4)",12910);
}
time();