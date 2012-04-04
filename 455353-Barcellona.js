var pav1 = SIMPLEX_GRID([[-1,38],[17],[1]]);
var pav2 = SIMPLEX_GRID([[-39,8],[-4,12],[1]]);
var pav3 = SIMPLEX_GRID([[-1,8],[-17,5],[1]]);
var pav4 = SIMPLEX_GRID([[-47,5],[-4,2],[1]]);
var pav5 = SIMPLEX_GRID([[1],[2],[1]]);
var pavimentazione = COLOR([0.66,0.66,0.66])(STRUCT([pav1,pav2,pav3,pav4,pav5]));
	DRAW(pavimentazione);

var acq1 = SIMPLEX_GRID([[-1,20],[-1,9],[-1,0.01]]);
var acq2 = SIMPLEX_GRID([[-47,4],[-5,11],[-1,0.01]]);
var acqua = COLOR([0,1,1])(STRUCT([acq1,acq2]));
DRAW(acqua);

var muro1 = SIMPLEX_GRID([[-1,7],[-1,0.1],[4]]);
var muro2 = SIMPLEX_GRID([[-1,0.1],[-1,21],[4]]);
var muro3 = SIMPLEX_GRID([[-1,8],[-22,0.1],[4]]);
var muro4 = SIMPLEX_GRID([[-9,0.1],[-17,5],[4]]);
var muroSX = COLOR([0.74,0.71,0.41])(STRUCT([muro1,muro2,muro3,muro4]));
DRAW(muroSX);

var muro5 = SIMPLEX_GRID([[-38,13],[-16,0.1],[4]]);
var muro6 = SIMPLEX_GRID([[-51,0.1],[-5,11.1],[4]]);
var muro7 = SIMPLEX_GRID([[-41,10],[-5,0.1],[4]]);
var muroDX = COLOR([0.74,0.71,0.41])(STRUCT([muro5,muro6,muro7]));
DRAW(muroDX);

var colonne = SIMPLEX_GRID([REPLICA(4)([0.3,-6]),REPLICA(2)([-7,0.3]),[-1,3]]);
var colonne1 = T([0])([26])(colonne);
DRAW(colonne1)

var muro8 = SIMPLEX_GRID([[-7,18],[-15,0.2],[4]]);
var muro9 = SIMPLEX_GRID([[-25,9],[-7.5,0.2],[4]]);
var muro10 = SIMPLEX_GRID([[-37,5],[-11.1,0.2],[4]]);
var muriInt = COLOR([0.77,0.75,0.66])(STRUCT([muro8,muro9,muro10]));
DRAW(muriInt);

var panchinaSopra = SIMPLEX_GRID([REPLICA(7)([2.1]),[-13.8,0.8],[-1.5,0.1]]);
var panchinaSopraApposto = T([0])([7.9])(panchinaSopra);
var panchinaSotto = SIMPLEX_GRID([REPLICA(8)([0.5,-1.5]),[0.5],[0.5]]);
var panchinaSottoApposto = T([0,1,2])([8,13.9,1])(panchinaSotto);
var panchina = COLOR([1,1,0])(STRUCT([panchinaSottoApposto,panchinaSopraApposto]));
DRAW(panchina);

var vetrataAssiSuperiori = SIMPLEX_GRID([[0.1],REPLICA(2)([2.8]),REPLICA(1)([0.05,-2.7,0.05])]);
var vetrataAssiLaterali = SIMPLEX_GRID([[0.1],REPLICA(2)([0.1,-2.65,0.1]),REPLICA(1)([2.8])]);
var vetro = SIMPLEX_GRID([[0.01],[-0.1,2.65,-0.2,2.65],[-0.05,2.7,-0.5]]);
var vetrata = T([0,1,2])([30,7.7,1])(STRUCT([vetrataAssiLaterali,vetrataAssiSuperiori,COLOR([0.52,0.8,0.92])(vetro)]));
DRAW(vetrata);

var vetrataAcqAssiLaterali = SIMPLEX_GRID([[0.1],REPLICA(9)([0.1,-0.8]),REPLICA(1)([2.8])]);
var vetrataAcqSuperiori = SIMPLEX_GRID([[0.1],[7.2],REPLICA(1)([0.05,-2.7,0.05])]);
var vetro2 = SIMPLEX_GRID([[0.01],REPLICA(8)([-0.1,0.8]),[-0.05,2.7,0.05]]);
var vetrataAcqua = T([0,1,2])([44.6,7.1,1])(STRUCT([vetrataAcqAssiLaterali,vetrataAcqSuperiori,COLOR([0.52,0.8,0.92])(vetro2)]));
DRAW(vetrataAcqua);

var vetrataEsternaLaterali = SIMPLEX_GRID([REPLICA(4)([0.1,-3.55]),[0.1],REPLICA(1)([2.8])]);
var vetrataEsternaSuperiori = SIMPLEX_GRID([REPLICA(3)([-0.1,3.55]),[0.1],REPLICA(1)([0.05,-2.7,0.05])]);
var vetro3 = SIMPLEX_GRID([REPLICA(3)([-0.1,3.55]),[0.01],[-0.05,2.7,0.05]]);
var vetrataEsterna = T([0,1,2])([30,5,1])(STRUCT([vetrataEsternaLaterali,vetrataEsternaSuperiori,COLOR([0.52,0.8,0.92])(vetro3)]));
DRAW(vetrataEsterna);

var vetrataInternaLaterale = SIMPLEX_GRID([REPLICA(7)([0.1,-1.6]),[0.1],REPLICA(1)([2.8])]);
var vetrataInternaSuperiore = SIMPLEX_GRID([REPLICA(6)([-0.1,1.6]),[0.1],REPLICA(1)([0.05,-2.7,0.05])]);
var vetro4 = SIMPLEX_GRID([REPLICA(6)([-0.1,1.6]),[0.01],[-0.05,2.7,0.05]]);
var vetrataInterna = T([0,1,2])([29,13.6,1])(STRUCT([vetrataInternaLaterale,vetrataInternaSuperiore,COLOR([0.52,0.8,0.92])(vetro4)]))
DRAW(vetrataInterna);

var portaChioscoLaterale = SIMPLEX_GRID([REPLICA(4)([0.1,-1.81,0.05]),[0.1],REPLICA(1)([2.8])]);
var portaChioscoSuperiore = SIMPLEX_GRID([REPLICA(4)([1.99]),[0.1],REPLICA(1)([0.05,-2.7,0.05])]);
var vetro5 = SIMPLEX_GRID([REPLICA(4)([-0.1,1.85]),[0.01],[-0.05,2.7,0.05]]);
var portaChiosco = T([0,1,2])([1.1,17,1])(STRUCT([portaChioscoLaterale,portaChioscoSuperiore,COLOR([0.52,0.8,0.92])(vetro5)]))
DRAW(portaChiosco)

var murettoInterno = SIMPLEX_GRID([[-31,0.1],[-7.7,5.95],[4]]);
DRAW(murettoInterno);

var tetto1 = SIMPLEX_GRID([[-24,23],[-4,13],[-4,0.5]]);
DRAW(tetto1);
COLOR([0.54,0,0])(tetto1);

var tetto2 = SIMPLEX_GRID([[-0.5,9.3],[-13.2,9.3],[-4,0.5]]);
DRAW(tetto2);
COLOR([0.54,0,0])(tetto2);
//inserimento gradini alla fine...vengono un pò oltre le misure

var blocchetto = SIMPLEX_GRID([[-39,3],[1],[1]]);
var scalino1 =  SIMPLEX_GRID([[-39,1],[-1,3],[-0.6,0.2]]);
var scalino2 =  SIMPLEX_GRID([[-40,1],[-1,3],[-0.4,0.2]]);
var scalino3 =  SIMPLEX_GRID([[-41,1],[-1,3],[-0.2,0.2]]);
var scalinataAgg = STRUCT([blocchetto,scalino3,scalino2,scalino1]);
DRAW(scalinataAgg);
//inserimento statua finta
var statua = SIMPLEX_GRID([[-49,0.6],[-14,0.6],[-1,2]]);
DRAW(statua);

