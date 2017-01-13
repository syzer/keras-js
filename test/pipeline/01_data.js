// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function () {
  var DATA = {
    'pipeline_01': {'expected': {'data': [-46.36700821, -87.19824219], 'shape': [1, 1, 2]}, 'input': {'data': [0.14103457, 0.12905751, -0.02311633, -0.32704449, -0.24826364, 0.06407174, -0.86378742, 0.16905812, -0.52420447, -0.67848684, -0.6957617, -0.74586156, -0.34511767, 0.38830775, -0.28206706, 0.78273131, -0.59624024, -0.77879499, 0.05511352, 0.73531066, -0.47625124, -0.00120976, -0.1428712, 0.06000778, 0.14789364, -0.2162887, -0.84097177, 0.73456202, -0.67099284, 0.60696324, -0.4241435, -0.46285765, 0.43495603, 0.76281131, 0.98424006, -0.08329993, 0.57025854, 0.47738787, -0.05283404, -0.03033059, 0.8660102, 0.50530768, -0.68142234, -0.73037907, -0.17864565, 0.51307252, -0.57497396, -0.3719412, -0.59745313, 0.87685041, 0.00882968, 0.2074629, 0.67509717, 0.22036492, 0.47114553, -0.18046774, -0.02071998, 0.01784904, 0.01296462, 0.23668214, 0.66920963, 0.17313075, -0.95738522, 0.47124672, 0.84126731, 0.51135444, -0.43048844, 0.89919803, 0.6797657, 0.62990001, 0.48735555, 0.82973875, 0.79246797, -0.75919235, -0.25086968, -0.47262962, -0.35723426, 0.45393347, 0.47589489, -0.07118412, 0.52807528, -0.51659876, 0.80799835, 0.14321244, -0.37343692, -0.95279648, 0.04010412, 0.16080272, -0.74334602, 0.53463659, 0.92294957, -0.64619765, 0.69299273, 0.77604203, -0.47467281, 0.98543036, 0.18475545, -0.30292955, -0.02274842, 0.13505591, 0.64360193, 0.50218153, 0.21837056, -0.03331337, 0.64319905, 0.82461911, -0.75001187, 0.9137392, 0.49322749, -0.2232393, 0.96278932, -0.05111818, -0.64998181, 0.02841855, 0.749459, 0.5254792, -0.04574293, -0.97908576, -0.66912422, -0.35604012, -0.44470455, 0.76369734, 0.78095559, 0.99183961, 0.25377896, -0.42510691, 0.91394264, 0.03223267, 0.04513991, 0.30251278, 0.23436282, -0.13373768, 0.06294894, -0.42064479, 0.06306257, 0.51579556, -0.98241468, 0.20820032, 0.68546505, 0.94876608, 0.57235538, 0.52690416, -0.07045847, 0.3635507, 0.61421961, 0.20174173, 0.83148946, 0.01198514, -0.4266706, 0.59769781, -0.25900066, 0.1388133, 0.48218937, -0.30467006, 0.39664085, 0.48753106, 0.45580911, 0.80329781, 0.7530982, 0.12397091, -0.80667598, 0.2351804, 0.60553984, 0.20375309, -0.24085727, -0.86504175, 0.76158838, -0.60432364, 0.77342143, 0.66284063, 0.30778521, 0.44047235, -0.9462006, 0.5515227, -0.44595131, 0.78118653, -0.89066177, -0.30819373, 0.47284378, -0.80000471, -0.32551565, 0.13740813, 0.89335573, -0.36549627, -0.35909559, -0.16640679, 0.98204138, -0.83222918, -0.57846321, 0.83929256, -0.81992384, -0.60858122, 0.89486067, -0.28418807, 0.31488413, 0.99603669, -0.86314523, 0.61806032, -0.74958088, -0.69220983, -0.91879044, 0.38752399, -0.36849254, -0.27896367, -0.68081651, -0.35114658, -0.27060989, -0.10246404, 0.86750718, -0.48669699, 0.7704217, -0.15000581, 0.67386756, 0.83627346, -0.44684651, 0.66407508, 0.86498661, 0.75728154, -0.69487646, 0.63037401, 0.85687834, 0.98439336, -0.1084582, 0.36822725, -0.00357673, 0.40031993, -0.06040929, -0.64383791, 0.09326345, 0.91545645, 0.98741581, -0.01741799, 0.78893684, -0.6935198, -0.59141072, -0.62368536, -0.8655026, -0.69139612, 0.68299533, -0.48684892, 0.19779877, -0.30427815, 0.41057424, 0.48783493, 0.57638416, 0.15764501, -0.07729433, -0.82427765, -0.44139224, -0.60583888, -0.90500256, 0.31300373, 0.08528727, -0.14923316, 0.7059105, -0.31127155, 0.27597074, 0.71475195, 0.89522361, -0.26888624, -0.36938272, 0.95788479, 0.02576734, 0.18322926, 0.31468786, -0.90139503, 0.84774246, -0.43729487, 0.98642014, 0.8134231, 0.58758985, -0.77550128, -0.3053507, 0.90212522, -0.80076833, 0.53862002, 0.06883532, -0.82344439, -0.55043065, 0.59314875, 0.46837626, -0.27339629, -0.6577764, -0.45540461, 0.85163511, -0.59085786, 0.50697108, 0.84161342, -0.00636742, -0.09797677, 0.45758718, 0.41928436, 0.51704346, -0.29737177, 0.30304787, 0.5504167, 0.23979836, 0.35064651, -0.39526545, 0.42218291, 0.96656257, -0.59279659, 0.53805114, -0.70153453, -0.35908391, -0.03910106, 0.93468362, -0.24251909, 0.1958228, -0.71398777, -0.17050321, -0.25304312, -0.66976155, -0.35812596, -0.43267367, -0.93251591, -0.26626817, 0.85747973, -0.25974969, -0.47774899, 0.87145362, 0.75537433, 0.49254083, 0.57182835, -0.39896788, 0.97074473, 0.24059708, -0.67172808, -0.26330998, 0.22230287, -0.73562838, -0.66910114, -0.23329244, 0.32503554, 0.80632693, 0.75538718, -0.71488633, 0.91515214, -0.47178044, 0.36427811, 0.48536836, 0.32057497, -0.35646233, -0.66529054, -0.05135594, 0.51602921, -0.87234239, 0.60069724, -0.79854547, -0.43750406, 0.6877374, -0.26819112, 0.31718761, -0.44907426, -0.52742732, 0.86844976, 0.81236511, 0.64073443, 0.08452555, -0.60414463, 0.43806081, -0.54860308, 0.45942478, 0.21750919, -0.83907919, 0.28017439, 0.16521311, 0.05698159, -0.4764153, -0.27198335, -0.49946604, 0.78369051, 0.40074386, 0.85310503, -0.75537786, -0.88744271, 0.82912332, -0.95887871, 0.78741837, 0.62288215, -0.20149973, 0.18419518, -0.09122353, 0.0601364, -0.73403344, 0.45349068, 0.443907, 0.81725651, -0.51691818, -0.59160765, 0.31681401, -0.46847515, 0.67707568, 0.63492163, -0.97800167, -0.56042535, -0.49228509, -0.60329291, 0.89032758, 0.60368396, -0.03291514, 0.05855725, 0.38438212, 0.20958237, -0.08555627, 0.52727612, -0.15866208, -0.23725107, -0.76387339, -0.90921693, 0.63319652, -0.95301512, -0.88702171, -0.05218865, 0.06123208, 0.47929145, 0.29252866, 0.00957788, -0.7462985, 0.94577323, 0.262586, -0.64999545, 0.64869609, 0.03546572, -0.72608829, -0.09895694, 0.33199586, -0.6717992, 0.93764483, -0.63698802, 0.59001991, 0.08142122, 0.52223704, -0.21274334, -0.5901106, -0.73307, 0.85482213, 0.32171459, 0.64214533, -0.56298286, -0.00470412, -0.26118805, -0.24476845, -0.03692003, 0.48796117, 0.45676913, 0.18111132, -0.20468354, -0.61707805, -0.60236917, 0.55208106, -0.44151681, -0.17528415, -0.95534757, 0.63713769, 0.50153122, 0.26410111, 0.18786125, -0.52236296, -0.30732791, -0.73548884, -0.30902586, -0.90262028, -0.31083975, -0.99838541, 0.29572983, 0.30264426, 0.66460379, 0.10926382, 0.10499682, -0.33725487, 0.0906333, 0.31875541, -0.43897475, 0.88552302, -0.60577962, 0.74746757, 0.59646026, 0.41366652, 0.5043709, -0.11019399, 0.66471796, -0.06936299, -0.17493063, -0.5617776, 0.94395473, -0.61697404, 0.55990281, -0.11360387, -0.6315783, 0.93918147, 0.03734544, 0.83864187, -0.97480841, -0.64762351, -0.1311965, -0.1314023, -0.97130436, 0.80559303, 0.7829062, 0.10797302, -0.11215303, 0.71058675, -0.84260118, 0.89999089, -0.26704229, -0.82687319, 0.69674907, -0.68975916, -0.63172197, 0.78356788, 0.82317363, 0.60165596, 0.23298301, -0.69298009, -0.38180983, 0.00142233, 0.26437398, -0.54260059, -0.32338807, 0.41970882, 0.41318658, 0.18322973, -0.39562289, 0.27327021, -0.97504611, -0.86840293, 0.30371615, -0.19756932, 0.78212125, 0.24803473, -0.81419246, 0.81223629, 0.10003738, 0.7974222, 0.33356413, -0.74259673, -0.50219168, 0.85071284, 0.45416302, -0.70822373, 0.88642548, -0.1725678, 0.27951465, -0.10320068, 0.10678974, -0.43361896, 0.3955861, -0.19879774, 0.96691579, 0.23384573, -0.57301108, 0.94973532, 0.54223207, 0.6031584, -0.21602099, 0.4399839, -0.9249168, 0.61332306, 0.43910645, 0.74289822, 0.22372306, 0.45832429, 0.28168517, 0.99938731, -0.79752397, -0.55380092, -0.73312787, 0.82010199, 0.2896882, -0.33947301, -0.36274074, 0.33230452, 0.64348062, -0.57698945, -0.24263175, -0.0834108, -0.55366446], 'shape': [17, 17, 2]}, 'weights': [{'data': [0.14103457, 0.12905751, -0.02311633, -0.32704449, -0.24826364, 0.06407174, -0.86378742, 0.16905812, -0.52420447, -0.67848684, -0.6957617, -0.74586156, -0.34511767, 0.38830775, -0.28206706, 0.78273131, -0.59624024, -0.77879499, 0.05511352, 0.73531066, -0.47625124, -0.00120976, -0.1428712, 0.06000778, 0.14789364, -0.2162887, -0.84097177, 0.73456202, -0.67099284, 0.60696324, -0.4241435, -0.46285765, 0.43495603, 0.76281131, 0.98424006, -0.08329993, 0.57025854, 0.47738787, -0.05283404, -0.03033059, 0.8660102, 0.50530768, -0.68142234, -0.73037907, -0.17864565, 0.51307252, -0.57497396, -0.3719412, -0.59745313, 0.87685041, 0.00882968, 0.2074629, 0.67509717, 0.22036492, 0.47114553, -0.18046774, -0.02071998, 0.01784904, 0.01296462, 0.23668214, 0.66920963, 0.17313075, -0.95738522, 0.47124672, 0.84126731, 0.51135444, -0.43048844, 0.89919803, 0.6797657, 0.62990001, 0.48735555, 0.82973875, 0.79246797, -0.75919235, -0.25086968, -0.47262962, -0.35723426, 0.45393347, 0.47589489, -0.07118412, 0.52807528, -0.51659876, 0.80799835, 0.14321244, -0.37343692, -0.95279648, 0.04010412, 0.16080272, -0.74334602, 0.53463659], 'shape': [3, 3, 2, 5]}, {'data': [-0.66574871, -0.83800393, 0.92045148, 0.87690049, 0.24171771], 'shape': [5]}, {'data': [0.30902748, -0.40543323, 0.04777416, 0.02886379, 0.34833474, -0.79672595, 0.48926006, -0.87764229, -0.90577053, -0.80209977, -0.2150295, -0.63999652, -0.02984557, 0.43651898, -0.34838977, -0.23648416, 0.12398067, -0.35709065, 0.96305862, 0.87000628, 0.29429111, 0.00603996, -0.0943766, -0.54144441, -0.61494061, -0.95298664, 0.33774531, -0.5357905, 0.62650071, 0.34120156, 0.36600549, 0.07418401, 0.87971046, -0.97202308, 0.74725214, -0.96565301, 0.20503047, 0.03943764, 0.3605348, -0.73249584, 0.79351175, 0.54761331, 0.81402275, 0.27219742, -0.10994522, -0.36710386, -0.20483616, -0.63602358, -0.68610704, 0.16155067, 0.68123822, -0.84617274, -0.05254577, 0.27263149, 0.44028367, 0.41815425, -0.16871598, -0.91999176, 0.02035651, -0.63634285, -0.49928639, 0.70132885, 0.98735168, 0.10715635, 0.57752664, 0.30673333, -0.25863519, -0.76716269, 0.85418088, -0.12106551, -0.43826929, 0.27728048, -0.33186381, -0.51898106, 0.51595975, 0.84330781, 0.76896676, 0.0039934, -0.08819847, 0.83286514, 0.10112564, -0.30995781, 0.55671088, -0.90099432, -0.7284106, -0.74607213, 0.54575, -0.6655384, 0.03816037, -0.99779015, 0.3195546, 0.03657753, -0.03340017, -0.42165351, 0.89587428, 0.71129455, 0.96816307, -0.60470296, -0.5326579, -0.24505074, 0.70768263, -0.65845022, -0.46876193, 0.61863241, -0.86994132, -0.73093773, -0.28910009, -0.88087749, 0.92383889, 0.45315101, 0.9363619, 0.6414257, -0.84475146, 0.42114228, -0.05730932, 0.23292508, -0.77063115, -0.09085317, -0.03563285, -0.05896984, -0.9343502, -0.55101287, -0.137983, 0.3779534, -0.32982848, 0.89833733, 0.95934521, -0.17378833, -0.02491809, -0.17520095, 0.29751358, 0.92060094, 0.12964067, -0.41786476, -0.68473188, -0.31052199, 0.99771025, -0.98962007, -0.92757178, -0.84099514, -0.40199811, -0.96961586, 0.28659615, 0.0267394, 0.54014135, 0.31776217, -0.19495887, -0.53552295, -0.43832872, 0.57853125, -0.93333597, -0.34384374, 0.29204147, 0.06133376, -0.29835182, -0.9683551, -0.56524704, 0.61670554, -0.28985154, -0.17146257, 0.5437182, 0.60474046, -0.3063576, 0.77291257, -0.02556277, 0.54330812, 0.83925717, -0.31495813, -0.13626765, 0.28144096, 0.55785319, 0.53459605, -0.32810056, -0.06035784, 0.57059775, 0.43052318, -0.51589421, -0.96573985, 0.32039023, 0.52750544], 'shape': [3, 3, 5, 4]}, {'data': [-0.01541929, -0.10881208, -0.18974306, -0.30721163], 'shape': [4]}, {'data': [0.17549658, 0.60887797, -0.0593294, -0.0286083, 0.51747749, 0.58383199, 0.17263484, 0.94396122, 0.12639499, -0.85763657, -0.16195634, -0.11453309, -0.0147025, -0.71188409, -0.69258677, 0.32101971, -0.57983819, -0.86587009, 0.93287553, 0.85184087, 0.6453196, 0.40840497, 0.99367552, 0.96540146, 0.46641839, 0.8926726, -0.72155783, -0.42539014, 0.67923675, -0.37895518, 0.45412534, 0.3155008, 0.89289355, 0.04866693, -0.13968932, 0.30670026, -0.45003065, 0.89163683, -0.28499149, -0.15364955, 0.42456108, -0.68988989, -0.89237436, 0.62027667, -0.61119261, -0.72624175, 0.38461684, 0.70422049, 0.40884069, 0.16861332, 0.43155115, 0.74366987, -0.45576225, -0.32496919, -0.42789143, 0.16898514, -0.99595635, 0.41121569, -0.17308236, 0.03322559, -0.85593085, 0.4343765, -0.88130035, 0.0808933, -0.80117064, -0.33029457, -0.77996061, 0.37075663, -0.80432766, -0.51801349, -0.43696014, 0.60272363], 'shape': [3, 3, 4, 2]}, {'data': [-0.63886815, 0.86329447], 'shape': [2]}, {'data': [-0.51688948, 0.94350853, 0.26853006, -0.46915122, 0.47772508, 0.44930897, 0.53157337, -0.41010695, 0.51322968, 0.57838858, -0.3362674, -0.62226955, -0.79493267, 0.33938461, 0.18758916, -0.22008471, 0.79486991, -0.51710858, 0.49469383, 0.42144394, -0.30032737, -0.05354425, 0.08555855, -0.45905028, -0.43271726, 0.94532946, -0.90307183, 0.81038216, 0.19211823, 0.70062623, 0.06819087, 0.3007301, 0.94190336, -0.74090843, -0.14539759, -0.90938174, -0.1016986, -0.486705, -0.14622461, -0.22823408, 0.67885565, 0.89861934, 0.06251071, -0.78590239, -0.42549012, 0.89439201, 0.44787305, 0.21631037, -0.00246742, -0.52661825, -0.19348848, -0.69127487, 0.31134699, -0.05723797, -0.62333201, 0.21405027, 0.14316823, -0.53926457, 0.0673881, 0.15446348, -0.99431604, -0.90017637, 0.80572457, -0.41571397, 0.84731866, -0.97480792, 0.87459233, -0.6476593, 0.7754766, 0.94192743, -0.89420139, -0.93623067, 0.72142633, 0.39105486, 0.39383066, 0.09444406, -0.55359727, 0.67646085, 0.93830118, -0.26342989, 0.60167381, 0.97321235, 0.52239071, -0.7161995, -0.08381166, 0.50573967, 0.69024064, -0.00463971, -0.43636434, -0.18263722, 0.48426568, 0.03726267, 0.86718261, -0.19521741, 0.60436031, 0.31875482, 0.69642126, 0.90793106, -0.16276358, 0.67004688, -0.88461435, -0.95626938, 0.32746862, -0.53986261, -0.34368351, -0.97763052, 0.62396412, 0.58949136, -0.14434062, 0.24587698, -0.35398757, 0.54799509, -0.14359933, -0.28121712, 0.15576207, 0.67667656, -0.2403756, -0.96884269, 0.98767873, -0.45899705, -0.98698064, -0.64269126, -0.77424044, 0.47016507, 0.17401059, -0.9928019, 0.1459153, 0.01021258, -0.12065967, 0.38088692, -0.59564674, -0.31050903, -0.47032559, 0.88969785, -0.36048428, -0.67187756, 0.36234138, 0.02956832, -0.29817669, -0.46234294, -0.02413864, 0.53493717, -0.19301425, 0.29133987, -0.83409631, 0.47968013, -0.32586519, -0.55342889, 0.12441662, -0.18293931], 'shape': [5, 5, 2, 3]}, {'data': [0.28714388, -0.45981794, 0.22907605], 'shape': [3]}, {'data': [-0.46361415, -0.85500111, -0.42017131, -0.64165623, 0.37117077, -0.43894228, -0.39684216, -0.97718906, 0.87848024, -0.42977626, 0.2169661, -0.82372873, -0.09287101, -0.46371286, -0.41822233, -0.65844027, 0.73642447, 0.61813876, -0.21474721, -0.8104749, -0.19611451, 0.86535003, -0.66762078, 0.2843602, -0.36410805, -0.54291891, -0.48442492, -0.21252485, 0.58567353, 0.0085114, 0.59277944, 0.32521502, -0.02873353, -0.01939621, 0.60178066, 0.21457432, -0.17664507, -0.68371956, -0.52662628, -0.5197718, 0.35857859, -0.12694541, -0.75713283, -0.18322212, -0.58947825, 0.65132459, -0.79662918, -0.21787838, -0.6861798, -0.3754581, -0.18722323, 0.43279868, -0.33836874, -0.7240115], 'shape': [3, 3, 3, 2]}, {'data': [-0.87954832, 0.74069877], 'shape': [2]}]}
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()