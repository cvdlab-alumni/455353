var c = CUBOID([1,2,3])
DRAW(c)

Il dominioi si puo formare in tante maniere...intervals
In DOMAIN ([[1,5]])(4) lista di coppie...array di coppie che stabilisce il nostro dominio.
Dominio che è una retta da 1 a 5 divisa in 4 segmenti.
HIDE (model)
SHOW(model)
DRAW(model)
DOMAIN(model)

var d = DOMAIN([[1.5,5.5]])([4])
DRAW(d)
COLOR([1,0,0])(d)

Proviamo con dominio bidimensionale: 
var d2 = DOMAIN([[1.5,5.5],[1,3]])([4,2]) il 4 divide le in in 4 segmenti mentre il 2 divide il secondo in 2.
	     coordinata in x   intervallo secondo 
var d3 = DOMAIN([[1,5],[1,5],[1,5]])([3,3,3])



Dominio monodimensionale che parte da 0 a 1(10 intervalli)...traslare con map in alto sulla y di 1:
MAP(mapping)(domain) mappa il dominio secondo una funzione di mapping
	var mapping = funciton(p){
		var u = p[0];
		return [u, 1];
	}       p è l'iesimo punto del dominio...p è un array con 3 coordinate, nel nostro caso ne ha una
			la funzione di mapping viene invocata per ogni punto del dominio.

			var mapped = MAP(mapping)(domain)

			
			Dato un insieme casuali di punti li trasforma in forma affine;
			Costruire un platonic solids(solidi poliedrici);

			Complesso simpliciale: join.

			Pi puo pensare ad n compless simpliciale come una triangolazione di triangoli uguali fra di loro.
			I complessi sono triangolazioni ben formate.


			1) introduzione propietà complesso simpliciale, orientamento, calcolo faccie, estrusione;
			2) struttura libreria SimpleX^n;
			3)Modello di edificio;(con funzioni delle librerie)'


		var quad = new SimplicialComplex([[0,0],[1,0],[1,1],[0,1]],[[0,1,3],[1,2,3]])
		viewer.draw()

		Prova costruzione edificio.
		(Nel caso si voglia clonare le librerie, git clone, git submodule init, git submodule update)


		Disegnare il modello carta e penna;
		Identificare elementi comuni scheletro su x,y,z.
		Costruire elementi base;

		Principali tecniche di animazione:

		Prossimo esonero potenziale animazione. Gradi di libertà: parametri che ne determinano la configurazione spaziale
		e l'orientamento'. Spazio delle configurazioni(CS) usato in robotica.
		Una curva nello sapzio delle configurazioni paramterizzata nel dominio del tempo, specifica completamente 
		il moto del sistema.

		var link = T([0,1])([-1,-19])(CUBOID([2,20]))//cpstruisco il primo segmento

		var joint = function(alpha){
			return COMP([T([1])([-18]),R([2])(alpha*PI/180)])//lo ruoto e lo traslo delle gisute misure il singolo pezzo
		}

		var arm = function(a1,a2,a3){//a1 ecc sono degli angoli
			return STRUCT([link,joint(a1),link,joint(a2),link,joint(a3),link])//applico la funzione al braccio

		}
		DRAW(arm([45,30,60]))