
var domain1 = INTERVALS(1)(200);
var domain2 = DOMAIN([[0,1],[0,1]])([100,100]);

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

var pointZ0 = [[0.363,0.32,0],[0.398,0.321,0],[0.426,0.337,0],
				[0.442,0.376,0],[0.445,0.411,0],[0.433,0.439,0],
				[0.397,0.454,0],[0.373,0.451,0],[0.345,0.433,0],
				[0.328,0.397,0],[0.327,0.358,0],[0.340,0.334,0],
				[0.363,0.320,0]]
var knots0 = knots(pointZ0);
var c0 = NUBS(S0)(2)(knots0)(pointZ0);
var curve0 = MAP(c0)(domain1)
//DRAW(curve0)


var pointZ01 = [[0.373,0.317,-0.010],[0.406,0.325,-0.010],[0.428,0.343,-0.010],
				[0.438,0.367,-0.010],[0.440,0.387,-0.010],[0.440,0.417,-0.010],
				[0.429,0.439,-0.010],[0.406,0.451,-0.010],[0.388,0.454,-0.010],
				[0.356,0.441,-0.010],[0.335,0.416,-0.010],[0.324,0.375,-0.010],
				[0.328,0.345,-0.010],[0.347,0.325,-0.010],[0.373,0.317,-0.010]]

var knots1 = knots(pointZ01);
var c1 = NUBS(S0)(2)(knots1)(pointZ01);
var curve1 = MAP(c1)(domain1)
//DRAW(curve1)

var pointZ02 = [[0.362,0.318,-0.020],[0.387,0.319,-0.020],[0.404,0.326,-0.020],
				[0.422,0.342,-0.020],[0.434,0.363,-0.020],[0.434,0.385,-0.020],
				[0.437,0.405,-0.020],[0.434,0.428,-0.020],[0.419,0.446,-0.020],
				[0.395,0.452,-0.020],[0.369,0.449,-0.020],[0.352,0.439,-0.020],
				[0.333,0.412,-0.020],[0.321,0.377,-0.020],[0.321,0.354,-0.020],
				[0.332,0.336,-0.020],[0.345,0.323,-0.020],[0.362,0.318,-0.020]]

var knots2 = knots(pointZ02);
var c2 = NUBS(S0)(2)(knots2)(pointZ02);
var curve2 = MAP(c2)(domain1)
//DRAW(curve2)

var pointZ03 = [[0.363,0.316,-0.030],[0.382,0.318,-0.030],[0.401,0.327,-0.030],
				[0.417,0.343,-0.030],[0.429,0.364,-0.030],[0.432,0.386,-0.030],
				[0.433,0.416,-0.030],[0.424,0.437,-0.030],[0.407,0.449,-0.030],
				[0.385,0.452,-0.030],[0.360,0.445,-0.030],[0.345,0.431,-0.030],
				[0.332,0.415,-0.030],[0.317,0.379,-0.030],[0.316,0.353,-0.030],
				[0.327,0.332,-0.030],[0.342,0.321,-0.030],[0.363,0.316,-0.030]]
var knots3 = knots(pointZ03);
var c3 = NUBS(S0)(2)(knots3)(pointZ03);
var curve3 = MAP(c3)(domain1)
//DRAW(curve3)

var pointZ04 = [[0.352,0.315,-0.040],[0.382,0.320,-0.040],[0.400,0.328,-0.040],
				[0.418,0.349,-0.040],[0.429,0.376,-0.040],[0.429,0.402,-0.040],
				[0.426,0.430,-0.040],[0.412,0.448,-0.040],[0.393,0.452,-0.040],
				[0.366,0.448,-0.040],[0.336,0.423,-0.040],[0.317,0.395,-0.040],
				[0.311,0.361,-0.040],[0.317,0.335,-0.040],[0.351,0.314,-0.040]]
var knots4 = knots(pointZ04);
var c4 = NUBS(S0)(2)(knots4)(pointZ04);
var curve4 = MAP(c4)(domain1)
//DRAW(curve4)

var pointZ05 = [[0.346,0.314,-0.050],[0.376,0.317,-0.050],[0.396,0.329,-0.050],
				[0.415,0.350,-0.050],[0.425,0.372,-0.050],[0.428,0.399,-0.050],
				[0.427,0.412,-0.050],[0.421,0.436,-0.050],[0.406,0.453,-0.050],
				[0.380,0.452,-0.050],[0.358,0.445,-0.050],[0.320,0.407,-0.050],
				[0.308,0.383,-0.050],[0.305,0.361,-0.050],[0.314,0.337,-0.050],
				[0.329,0.322,-0.050],[0.346,0.315,-0.050]]
var knots5 = knots(pointZ05);
var c5 = NUBS(S0)(2)(knots5)(pointZ05);
var curve5 = MAP(c5)(domain1)
//DRAW(curve5)

var pointZ06 = [[0.339,0.311,-0.060],[0.374,0.314,-0.060],[0.398,0.331,-0.060],
				[0.419,0.360,-0.060],[0.427,0.385,-0.060],[0.426,0.403,-0.060],
				[0.420,0.432,-0.060],[0.406,0.452,-0.060],[0.396,0.455,-0.060],
				[0.362,0.447,-0.060],[0.338,0.429,-0.060],[0.315,0.407,-0.060],
				[0.302,0.383,-0.060],[0.300,0.355,-0.060],[0.309,0.334,-0.060],
				[0.339,0.311,-0.060]]
var knots6 = knots(pointZ06);
var c6 = NUBS(S0)(2)(knots6)(pointZ06);
var curve6 = MAP(c6)(domain1)
//DRAW(curve6)

var pointZ07 = [[0.332,0.310,-0.070],[0.355,0.310,-0.070],[0.382,0.319,-0.070],
				[0.404,0.339,-0.070],[0.419,0.364,-0.070],[0.426,0.387,-0.070],
				[0.422,0.414,-0.070],[0.419,0.440,-0.070],[0.406,0.455,-0.070],
				[0.390,0.457,-0.070],[0.365,0.450,-0.070],[0.343,0.438,-0.070],
				[0.326,0.421,-0.070],[0.308,0.410,-0.070],[0.296,0.384,-0.070],
				[0.295,0.354,-0.070],[0.305,0.328,-0.070],[0.332,0.310,-0.070]]
var knots7 = knots(pointZ07);
var c7 = NUBS(S0)(2)(knots7)(pointZ07);
var curve7 = MAP(c7)(domain1)
//DRAW(curve7)

var pointZ08 = [[0.326,0.305,-0.080],[0.358,0.305,-0.080],[0.379,0.321,-0.080],
				[0.403,0.338,-0.080],[0.420,0.366,-0.080],[0.426,0.395,-0.080],
				[0.423,0.416,-0.080],[0.405,0.457,-0.080],[0.390,0.460,-0.080],
				[0.365,0.450,-0.080],[0.344,0.438,-0.080],[0.325,0.422,-0.080],
				[0.301,0.405,-0.080],[0.289,0.383,-0.080],[0.289,0.350,-0.080],
				[0.297,0.326,-0.080],[0.310,0.310,-0.080],[0.325,0.304,-0.080]]
var knots8 = knots(pointZ08);
var c8 = NUBS(S0)(2)(knots8)(pointZ08);
var curve8 = MAP(c8)(domain1)
//DRAW(curve8)

var pointZ09 = [[0.321,0.304,-0.090],[0.349,0.305,-0.090],[0.370,0.313,-0.090],
				[0.395,0.333,-0.090],[0.415,0.359,-0.090],[0.424,0.383,-0.090],
				[0.422,0.411,-0.090],[0.414,0.445,-0.090],[0.400,0.461,-0.090],
				[0.385,0.458,-0.090],[0.359,0.449,-0.090],[0.329,0.430,-0.090],
				[0.303,0.410,-0.090],[0.287,0.387,-0.090],[0.284,0.357,-0.090],
				[0.291,0.330,-0.090],[0.304,0.314,-0.090],[0.321,0.305,-0.090]]
var knots9 = knots(pointZ09);
var c9 = NUBS(S0)(2)(knots9)(pointZ09);
var curve9 = MAP(c9)(domain1)
//DRAW(curve9)

var pointZ10 = [[0.305,0.303,-0.100],[0.329,0.300,-0.100],[0.350,0.304,-0.100],
				[0.379,0.323,-0.100],[0.412,0.355,-0.100],[0.425,0.379,-0.100],
				[0.419,0.442,-0.100],[0.403,0.463,-0.100],[0.385,0.464,-0.100],
				[0.352,0.449,-0.100],[0.328,0.434,-0.100],[0.302,0.415,-0.100],
				[0.285,0.388,-0.100],[0.277,0.355,-0.100],[0.281,0.328,-0.100],
				[0.289,0.313,-0.100],[0.304,0.302,-0.100]]
var knots10 = knots(pointZ10);
var c10 = NUBS(S0)(2)(knots10)(pointZ10);
var curve10 = MAP(c10)(domain1)
//DRAW(curve10)

var pointZ11 = [[0.298,0.297,-0.110],[0.325,0.294,-0.110],[0.350,0.299,-0.110],
				[0.373,0.316,-0.110],[0.389,0.332,-0.110],[0.409,0.351,-0.110],
				[0.424,0.375,-0.110],[0.424,0.410,-0.110],[0.417,0.451,-0.110],
				[0.408,0.466,-0.110],[0.388,0.469,-0.110],[0.360,0.460,-0.110],
				[0.337,0.447,-0.110],[0.327,0.438,-0.110],[0.311,0.427,-0.110],
				[0.289,0.405,-0.110],[0.275,0.370,-0.110],[0.272,0.333,-0.110],
				[0.279,0.313,-0.110],[0.297,0.297,-0.110]]
var knots11 = knots(pointZ11);
var c11 = NUBS(S0)(2)(knots11)(pointZ11);
var curve11 = MAP(c11)(domain1)
//DRAW(curve11)

var pointZ12 = [[0.286,0.290,-0.120],[0.309,0.284,-0.120],[0.331,0.288,-0.120],
				[0.353,0.298,-0.120],[0.377,0.318,-0.120],[0.393,0.336,-0.120],
				[0.406,0.346,-0.120],[0.420,0.367,-0.120],[0.427,0.394,-0.120],
				[0.426,0.424,-0.120],[0.420,0.454,-0.120],[0.409,0.468,-0.120],
				[0.386,0.474,-0.120],[0.366,0.467,-0.120],[0.352,0.461,-0.120],
				[0.330,0.441,-0.120],[0.304,0.425,-0.120],[0.281,0.393,-0.120],
				[0.270,0.362,-0.120],[0.268,0.329,-0.120],[0.271,0.306,-0.120],
				[0.284,0.291,-0.120]]
var knots12 = knots(pointZ12);
var c12 = NUBS(S0)(2)(knots12)(pointZ12);
var curve12 = MAP(c12)(domain1)
//DRAW(curve12)

var pointZ13 = [[0.287,0.273,-0.130],[0.322,0.276,-0.130],[0.345,0.285,-0.130],
				[0.371,0.311,-0.130],[0.417,0.366,-0.130],[0.423,0.385,-0.130],
				[0.426,0.411,-0.130],[0.422,0.459,-0.130],[0.408,0.477,-0.130],
				[0.395,0.479,-0.130],[0.379,0.478,-0.130],[0.356,0.467,-0.130],
				[0.333,0.450,-0.130],[0.319,0.437,-0.130],[0.291,0.413,-0.130],
				[0.276,0.390,-0.130],[0.267,0.367,-0.130],[0.263,0.335,-0.130],
				[0.263,0.323,-0.130],[0.263,0.309,-0.130],[0.263,0.291,-0.130],
				[0.274,0.282,-0.130],[0.287,0.273,-0.130]]
var knots13 = knots(pointZ13);
var c13 = NUBS(S0)(2)(knots13)(pointZ13);
var curve13 = MAP(c13)(domain1)
//DRAW(curve13)

var pointZ14 = [[0.276,0.258,-0.140],[0.294,0.255,-0.140],[0.309,0.258,-0.140],
				[0.329,0.268,-0.140],[0.354,0.288,-0.140],[0.374,0.308,-0.140],
				[0.395,0.335,-0.140],[0.414,0.371,-0.140],[0.425,0.397,-0.140],
				[0.428,0.432,-0.140],[0.425,0.462,-0.140],[0.415,0.476,-0.140],
				[0.399,0.481,-0.140],[0.377,0.481,-0.140],[0.357,0.472,-0.140],
				[0.338,0.458,-0.140],[0.320,0.443,-0.140],[0.304,0.427,-0.140],
				[0.281,0.400,-0.140],[0.270,0.378,-0.140],[0.260,0.352,-0.140],
				[0.260,0.323,-0.140],[0.256,0.295,-0.140],[0.258,0.278,-0.140],
				[0.265,0.264,-0.140],[0.276,0.259,-0.140]]
var knots14 = knots(pointZ14);
var c14 = NUBS(S0)(2)(knots14)(pointZ14);
var curve14 = MAP(c14)(domain1)
//DRAW(curve14)

var pointZ15 = [[0.272,0.239,-0.150],[0.297,0.241,-0.150],[0.324,0.252,-0.150],
				[0.340,0.266,-0.150],[0.361,0.288,-0.150],[0.378,0.308,-0.150],
				[0.396,0.336,-0.150],[0.415,0.375,-0.150],[0.426,0.405,-0.150],
				[0.428,0.430,-0.150],[0.430,0.445,-0.150],[0.426,0.466,-0.150],
				[0.415,0.481,-0.150],[0.397,0.484,-0.150],[0.371,0.484,-0.150],
				[0.352,0.477,-0.150],[0.334,0.457,-0.150],[0.315,0.438,-0.150],
				[0.297,0.418,-0.150],[0.279,0.395,-0.150],[0.263,0.366,-0.150],
				[0.256,0.341,-0.150],[0.255,0.322,-0.150],[0.255,0.302,-0.150],
				[0.251,0.277,-0.150],[0.252,0.259,-0.150],[0.261,0.247,-0.150],
				[0.272,0.240,-0.150]]
var knots15 = knots(pointZ15);
var c15 = NUBS(S0)(2)(knots15)(pointZ15);
var curve15 = MAP(c15)(domain1)
//DRAW(curve15)

var pointZ16 = [[0.262,0.225,-0.160],[0.285,0.224,-0.160],[0.307,0.233,-0.160],
				[0.331,0.246,-0.160],[0.349,0.262,-0.160],[0.371,0.288,-0.160],
				[0.389,0.320,-0.160],[0.407,0.351,-0.160],[0.416,0.374,-0.160],
				[0.426,0.403,-0.160],[0.432,0.437,-0.160],[0.428,0.469,-0.160],
				[0.417,0.484,-0.160],[0.400,0.490,-0.160],[0.381,0.490,-0.160],
				[0.362,0.488,-0.160],[0.345,0.475,-0.160],[0.328,0.455,-0.160],
				[0.312,0.436,-0.160],[0.297,0.418,-0.160],[0.279,0.394,-0.160],
				[0.266,0.368,-0.160],[0.256,0.347,-0.160],[0.250,0.322,-0.160],
				[0.248,0.298,-0.160],[0.245,0.281,-0.160],[0.241,0.265,-0.160],
				[0.243,0.250,-0.160],[0.246,0.240,-0.160],[0.259,0.225,-0.160]]
var knots16 = knots(pointZ16);
var c16 = NUBS(S0)(2)(knots16)(pointZ16);
var curve16 = MAP(c16)(domain1)
//DRAW(curve16)

var pointZ17 = [[0.249,0.214,-0.170],[0.271,0.211,-0.170],[0.289,0.215,-0.170],
				[0.317,0.226,-0.170],[0.338,0.244,-0.170],[0.358,0.261,-0.170],
				[0.380,0.297,-0.170],[0.399,0.331,-0.170],[0.413,0.365,-0.170],
				[0.425,0.395,-0.170],[0.434,0.433,-0.170],[0.433,0.461,-0.170],
				[0.423,0.481,-0.170],[0.404,0.491,-0.170],[0.380,0.492,-0.170],
				[0.355,0.487,-0.170],[0.335,0.464,-0.170],[0.314,0.436,-0.170],
				[0.293,0.407,-0.170],[0.271,0.374,-0.170],[0.255,0.344,-0.170],
				[0.244,0.307,-0.170],[0.238,0.276,-0.170],[0.234,0.249,-0.170],
				[0.235,0.230,-0.170],[0.249,0.214,-0.170]]
var knots17 = knots(pointZ17);
var c17 = NUBS(S0)(2)(knots17)(pointZ17);
var curve17 = MAP(c17)(domain1)
//DRAW(curve17)

var pointZ18 = [[0.245,0.198,-0.180],[0.271,0.198,-0.180],[0.302,0.207,-0.180],
				[0.327,0.224,-0.180],[0.349,0.244,-0.180],[0.365,0.262,-0.180],
				[0.384,0.295,-0.180],[0.402,0.331,-0.180],[0.413,0.361,-0.180],
				[0.425,0.396,-0.180],[0.436,0.428,-0.180],[0.434,0.451,-0.180],
				[0.424,0.477,-0.180],[0.402,0.490,-0.180],[0.372,0.490,-0.180],
				[0.352,0.483,-0.180],[0.324,0.448,-0.180],[0.295,0.405,-0.180],
				[0.267,0.357,-0.180],[0.250,0.329,-0.180],[0.241,0.305,-0.180],
				[0.230,0.271,-0.180],[0.225,0.246,-0.180],[0.225,0.221,-0.180],
				[0.233,0.206,-0.180],[0.246,0.198,-0.180]]
var knots18 = knots(pointZ18);
var c18 = NUBS(S0)(2)(knots18)(pointZ18);
var curve18 = MAP(c18)(domain1)
//DRAW(curve18)

var pointZ19 = [[0.229,0.181,-0.190],[0.258,0.181,-0.190],[0.288,0.189,-0.190],
				[0.320,0.201,-0.190],[0.341,0.221,-0.190],[0.359,0.245,-0.190],
				[0.377,0.272,-0.190],[0.393,0.310,-0.190],[0.413,0.362,-0.190],
				[0.429,0.404,-0.190],[0.433,0.437,-0.190],[0.427,0.466,-0.190],
				[0.414,0.484,-0.190],[0.387,0.490,-0.190],[0.356,0.489,-0.190],
				[0.338,0.467,-0.190],[0.319,0.436,-0.190],[0.306,0.410,-0.190],
				[0.299,0.395,-0.190],[0.277,0.361,-0.190],[0.250,0.323,-0.190],
				[0.231,0.284,-0.190],[0.219,0.247,-0.190],[0.213,0.219,-0.190],
				[0.216,0.198,-0.190],[0.227,0.181,-0.190]]
var knots19 = knots(pointZ19);
var c19 = NUBS(S0)(2)(knots19)(pointZ19);
var curve19 = MAP(c19)(domain1)
//DRAW(curve19)

var pointZ20 = [[0.289,0.174,-0.200],[0.318,0.189,-0.200],[0.343,0.210,-0.200],
				[0.362,0.241,-0.200],[0.383,0.277,-0.200],[0.397,0.320,-0.200],
				[0.412,0.368,-0.200],[0.428,0.427,-0.200],[0.424,0.461,-0.200],
				[0.408,0.480,-0.200],[0.376,0.484,-0.200],[0.347,0.474,-0.200],
				[0.318,0.420,-0.200],[0.306,0.388,-0.200],[0.267,0.336,-0.200],
				[0.237,0.299,-0.200],[0.208,0.234,-0.200],[0.198,0.203,-0.200],
				[0.200,0.175,-0.200],[0.226,0.163,-0.200],[0.240,0.158,-0.200],
				[0.242,0.149,-0.200],[0.251,0.146,-0.200],[0.258,0.156,-0.200],
				[0.290,0.174,-0.200]]
var knots20 = knots(pointZ20);
var c20 = NUBS(S0)(2)(knots20)(pointZ20);
var curve20 = MAP(c20)(domain1)
//DRAW(curve20)

var pointZ21 = [[0.196,0.136,-0.210],[0.208,0.138,-0.210],[0.217,0.148,-0.210],
				[0.225,0.157,-0.210],[0.231,0.157,-0.210],[0.228,0.144,-0.210],
				[0.227,0.130,-0.210],[0.231,0.119,-0.210],[0.238,0.113,-0.210],
				[0.250,0.118,-0.210],[0.256,0.133,-0.210],[0.260,0.140,-0.210],
				[0.267,0.134,-0.210],[0.274,0.134,-0.210],[0.280,0.144,-0.210],
				[0.284,0.149,-0.210],[0.291,0.146,-0.210],[0.300,0.146,-0.210],
				[0.304,0.155,-0.210],[0.307,0.163,-0.210],[0.314,0.168,-0.210],
				[0.323,0.170,-0.210],[0.332,0.189,-0.210],[0.351,0.209,-0.210],
				[0.371,0.250,-0.210],[0.378,0.269,-0.210],[0.386,0.287,-0.210],
				[0.401,0.357,-0.210],[0.413,0.414,-0.210],[0.409,0.451,-0.210],
				[0.396,0.464,-0.210],[0.376,0.465,-0.210],[0.355,0.452,-0.210],
				[0.332,0.413,-0.210],[0.317,0.370,-0.210],[0.279,0.327,-0.210],
				[0.247,0.297,-0.210],[0.221,0.266,-0.210],[0.197,0.221,-0.210],
				[0.190,0.185,-0.210],[0.187,0.153,-0.210],[0.197,0.136,-0.210]]	
var knots21 = knots(pointZ21);
var c21 = NUBS(S0)(2)(knots21)(pointZ21);
var curve21 = MAP(c21)(domain1)
//DRAW(curve21)

var pointZ215 =[[0.198,0.121,-0.215],[0.209,0.124,-0.215],[0.218,0.136,-0.215],
				[0.227,0.153,-0.215],[0.230,0.156,-0.215],[0.226,0.139,-0.215],
				[0.223,0.119,-0.215],[0.229,0.100,-0.215],[0.242,0.100,-0.215],
				[0.252,0.110,-0.215],[0.257,0.125,-0.215],[0.258,0.131,-0.215],
				[0.263,0.120,-0.215],[0.275,0.121,-0.215],[0.283,0.131,-0.215],
				[0.285,0.141,-0.215],[0.291,0.132,-0.215],[0.302,0.133,-0.215],
				[0.310,0.145,-0.215],[0.312,0.158,-0.215],[0.319,0.150,-0.215],
				[0.329,0.159,-0.215],[0.336,0.180,-0.215],[0.338,0.190,-0.215],
				[0.354,0.205,-0.215],[0.366,0.231,-0.215],[0.376,0.262,-0.215],
				[0.385,0.282,-0.215],[0.400,0.407,-0.215],[0.400,0.435,-0.215],
				[0.391,0.444,-0.215],[0.373,0.443,-0.215],[0.361,0.436,-0.215],
				[0.348,0.415,-0.215],[0.340,0.397,-0.215],[0.334,0.366,-0.215],
				[0.328,0.354,-0.215],[0.314,0.345,-0.215],[0.298,0.330,-0.215],
				[0.268,0.309,-0.215],[0.240,0.283,-0.215],[0.216,0.254,-0.215],
				[0.196,0.219,-0.215],[0.188,0.198,-0.215],[0.188,0.186,-0.215],
				[0.182,0.145,-0.215],[0.184,0.126,-0.215],[0.195,0.121,-0.215]]
var knots215 = knots(pointZ215);
var c215 = NUBS(S0)(2)(knots215)(pointZ215);
var curve215 = MAP(c215)(domain1)
//DRAW(curve215)

var pointZ22 = [[0.195,0.094,-0.220],[0.205,0.095,-0.220],[0.209,0.102,-0.220],
				[0.211,0.108,-0.220],[0.218,0.116,-0.220],[0.220,0.130,-0.220],
				[0.222,0.139,-0.220],[0.224,0.152,-0.220],[0.229,0.155,-0.220],
				[0.228,0.142,-0.220],[0.227,0.129,-0.220],[0.223,0.118,-0.220],
				[0.221,0.109,-0.220],[0.224,0.102,-0.220],[0.229,0.094,-0.220],
				[0.239,0.096,-0.220],[0.246,0.104,-0.220],[0.251,0.117,-0.220],
				[0.253,0.125,-0.220],[0.258,0.116,-0.220],[0.266,0.115,-0.220],
				[0.278,0.120,-0.220],[0.283,0.129,-0.220],[0.290,0.120,-0.220],
				[0.299,0.124,-0.220],[0.307,0.131,-0.220],[0.312,0.142,-0.220],
				[0.317,0.138,-0.220],[0.325,0.140,-0.220],[0.333,0.147,-0.220],
				[0.337,0.167,-0.220],[0.345,0.190,-0.220],[0.356,0.207,-0.220],
				[0.364,0.229,-0.220],[0.372,0.260,-0.220],[0.374,0.273,-0.220],
				[0.383,0.291,-0.220],[0.382,0.314,-0.220],[0.375,0.344,-0.220],
				[0.368,0.354,-0.220],[0.359,0.350,-0.220],[0.354,0.339,-0.220],
				[0.343,0.332,-0.220],[0.320,0.325,-0.220],[0.291,0.307,-0.220],
				[0.266,0.295,-0.220],[0.228,0.267,-0.220],[0.193,0.221,-0.220],
				[0.188,0.210,-0.220],[0.184,0.191,-0.220],[0.182,0.171,-0.220],
				[0.182,0.163,-0.220],[0.175,0.144,-0.220],[0.178,0.119,-0.220],
				[0.180,0.110,-0.220],[0.179,0.099,-0.220],[0.193,0.095,-0.220]]
var knots22 = knots(pointZ22);
var c22 = NUBS(S0)(2)(knots22)(pointZ22);
var curve22 = MAP(c22)(domain1)
//DRAW(curve22)

var pointZ225 = [[0.192,0.091,-0.225],[0.209,0.093,-0.225],[0.217,0.101,-0.225],
				 [0.227,0.092,-0.225],[0.239,0.092,-0.225],[0.249,0.100,-0.225],
				 [0.253,0.112,-0.225],[0.260,0.107,-0.225],[0.273,0.109,-0.225],
				 [0.281,0.121,-0.225],[0.293,0.115,-0.225],[0.304,0.121,-0.225],
				 [0.311,0.131,-0.225],[0.320,0.132,-0.225],[0.335,0.143,-0.225],
				 [0.338,0.159,-0.225],[0.343,0.179,-0.225],[0.360,0.205,-0.225],
				 [0.368,0.251,-0.225],[0.371,0.278,-0.225],[0.376,0.290,-0.225],
				 [0.372,0.317,-0.225],[0.365,0.321,-0.225],[0.347,0.318,-0.225],
				 [0.343,0.314,-0.225],[0.309,0.307,-0.225],[0.291,0.296,-0.225],
				 [0.267,0.287,-0.225],[0.231,0.265,-0.225],[0.196,0.226,-0.225],
				 [0.187,0.210,-0.225],[0.184,0.175,-0.225],[0.174,0.148,-0.225],
				 [0.172,0.117,-0.225],[0.177,0.098,-0.225],[0.192,0.090,-0.225]]
var knots225 = knots(pointZ225);
var c225 = NUBS(S0)(2)(knots225)(pointZ225);
var curve225 = MAP(c225)(domain1)
//DRAW(curve225)

var pointZ23 = [[0.195,0.090,-0.230],[0.211,0.093,-0.230],[0.217,0.098,-0.230],
				[0.225,0.093,-0.230],[0.237,0.092,-0.230],[0.247,0.100,-0.230],
				[0.255,0.098,-0.230],[0.266,0.101,-0.230],[0.276,0.111,-0.230],
				[0.278,0.121,-0.230],[0.286,0.110,-0.230],[0.295,0.115,-0.230],
				[0.304,0.125,-0.230],[0.307,0.132,-0.230],[0.313,0.128,-0.230],
				[0.325,0.133,-0.230],[0.333,0.149,-0.230],[0.337,0.167,-0.230],
				[0.349,0.187,-0.230],[0.360,0.214,-0.230],[0.365,0.249,-0.230],
				[0.364,0.286,-0.230],[0.358,0.301,-0.230],[0.347,0.302,-0.230],
				[0.328,0.295,-0.230],[0.308,0.289,-0.230],[0.290,0.281,-0.230],
				[0.266,0.271,-0.230],[0.226,0.250,-0.230],[0.201,0.222,-0.230],
				[0.188,0.196,-0.230],[0.183,0.170,-0.230],[0.174,0.145,-0.230],
				[0.171,0.116,-0.230],[0.176,0.100,-0.230],[0.193,0.091,-0.230]]
var knots23 = knots(pointZ23);
var c23 = NUBS(S0)(2)(knots23)(pointZ23);
var curve23 = COLOR([1,0,0])(MAP(c23)(domain1))
//DRAW(curve23)


//var pied = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c215,c22,c225,c23]);
//var ponte = MAP(pied)(domain2);
var nubs = NUBS(S1)(3)([0,0,0,0,1,2,3,4,
	5,6,7,8,9,10,11,12,13,14,15,16,17,18,
	19,20,21,22,23,23,23,23])([c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c215,c22,c225,c23])
	var model = COLOR([1,0.89,0.76])(MAP(nubs)(domain2))
DRAW(model)