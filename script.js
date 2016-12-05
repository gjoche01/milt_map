/*
  This is adapated from an example from Amcharts here: 
  https://www.amcharts.com/demos/map-bubbles/
*/
function map () {
var latlong = {};
latlong["AD"] = {"latitude":42.5, "longitude":1.5};
latlong["AE"] = {"latitude":24, "longitude":54};
latlong["AF"] = {"latitude":33, "longitude":65};
latlong["AG"] = {"latitude":17.05, "longitude":-61.8};
latlong["AI"] = {"latitude":18.25, "longitude":-63.1667};
latlong["AL"] = {"latitude":41, "longitude":20};
latlong["AM"] = {"latitude":40, "longitude":45};
latlong["AN"] = {"latitude":12.25, "longitude":-68.75};
latlong["AO"] = {"latitude":-12.5, "longitude":18.5};
latlong["AP"] = {"latitude":35, "longitude":105};
latlong["AQ"] = {"latitude":-90, "longitude":0};
latlong["AR"] = {"latitude":-34, "longitude":-64};
latlong["AS"] = {"latitude":-14.3333, "longitude":-170};
latlong["AT"] = {"latitude":47.3333, "longitude":13.3333};
latlong["AU"] = {"latitude":-27, "longitude":133};
latlong["AW"] = {"latitude":12.5, "longitude":-69.9667};
latlong["AZ"] = {"latitude":40.5, "longitude":47.5};
latlong["BA"] = {"latitude":44, "longitude":18};
latlong["BB"] = {"latitude":13.1667, "longitude":-59.5333};
latlong["BD"] = {"latitude":24, "longitude":90};
latlong["BE"] = {"latitude":50.8333, "longitude":4};
latlong["BF"] = {"latitude":13, "longitude":-2};
latlong["BG"] = {"latitude":43, "longitude":25};
latlong["BH"] = {"latitude":26, "longitude":50.55};
latlong["BI"] = {"latitude":-3.5, "longitude":30};
latlong["BJ"] = {"latitude":9.5, "longitude":2.25};
latlong["BM"] = {"latitude":32.3333, "longitude":-64.75};
latlong["BN"] = {"latitude":4.5, "longitude":114.6667};
latlong["BO"] = {"latitude":-17, "longitude":-65};
latlong["BR"] = {"latitude":-10, "longitude":-55};
latlong["BS"] = {"latitude":24.25, "longitude":-76};
latlong["BT"] = {"latitude":27.5, "longitude":90.5};
latlong["BV"] = {"latitude":-54.4333, "longitude":3.4};
latlong["BW"] = {"latitude":-22, "longitude":24};
latlong["BY"] = {"latitude":53, "longitude":28};
latlong["BZ"] = {"latitude":17.25, "longitude":-88.75};
latlong["CA"] = {"latitude":54, "longitude":-100};
latlong["CC"] = {"latitude":-12.5, "longitude":96.8333};
latlong["CD"] = {"latitude":0, "longitude":25};
latlong["CF"] = {"latitude":7, "longitude":21};
latlong["CG"] = {"latitude":-1, "longitude":15};
latlong["CH"] = {"latitude":47, "longitude":8};
latlong["CI"] = {"latitude":8, "longitude":-5};
latlong["CK"] = {"latitude":-21.2333, "longitude":-159.7667};
latlong["CL"] = {"latitude":-30, "longitude":-71};
latlong["CM"] = {"latitude":6, "longitude":12};
latlong["CN"] = {"latitude":35, "longitude":105};
latlong["CO"] = {"latitude":4, "longitude":-72};
latlong["CR"] = {"latitude":10, "longitude":-84};
latlong["CU"] = {"latitude":21.5, "longitude":-80};
latlong["CV"] = {"latitude":16, "longitude":-24};
latlong["CX"] = {"latitude":-10.5, "longitude":105.6667};
latlong["CY"] = {"latitude":35, "longitude":33};
latlong["CZ"] = {"latitude":49.75, "longitude":15.5};
latlong["DE"] = {"latitude":51, "longitude":9};
latlong["DJ"] = {"latitude":11.5, "longitude":43};
latlong["DK"] = {"latitude":56, "longitude":10};
latlong["DM"] = {"latitude":15.4167, "longitude":-61.3333};
latlong["DO"] = {"latitude":19, "longitude":-70.6667};
latlong["DZ"] = {"latitude":28, "longitude":3};
latlong["EC"] = {"latitude":-2, "longitude":-77.5};
latlong["EE"] = {"latitude":59, "longitude":26};
latlong["EG"] = {"latitude":27, "longitude":30};
latlong["EH"] = {"latitude":24.5, "longitude":-13};
latlong["ER"] = {"latitude":15, "longitude":39};
latlong["ES"] = {"latitude":40, "longitude":-4};
latlong["ET"] = {"latitude":8, "longitude":38};
latlong["EU"] = {"latitude":47, "longitude":8};
latlong["FI"] = {"latitude":62, "longitude":26};
latlong["FJ"] = {"latitude":-18, "longitude":175};
latlong["FK"] = {"latitude":-51.75, "longitude":-59};
latlong["FM"] = {"latitude":6.9167, "longitude":158.25};
latlong["FO"] = {"latitude":62, "longitude":-7};
latlong["FR"] = {"latitude":46, "longitude":2};
latlong["GA"] = {"latitude":-1, "longitude":11.75};
latlong["GB"] = {"latitude":54, "longitude":-2};
latlong["GD"] = {"latitude":12.1167, "longitude":-61.6667};
latlong["GE"] = {"latitude":42, "longitude":43.5};
latlong["GF"] = {"latitude":4, "longitude":-53};
latlong["GH"] = {"latitude":8, "longitude":-2};
latlong["GI"] = {"latitude":36.1833, "longitude":-5.3667};
latlong["GL"] = {"latitude":72, "longitude":-40};
latlong["GM"] = {"latitude":13.4667, "longitude":-16.5667};
latlong["GN"] = {"latitude":11, "longitude":-10};
latlong["GP"] = {"latitude":16.25, "longitude":-61.5833};
latlong["GQ"] = {"latitude":2, "longitude":10};
latlong["GR"] = {"latitude":39, "longitude":22};
latlong["GS"] = {"latitude":-54.5, "longitude":-37};
latlong["GT"] = {"latitude":15.5, "longitude":-90.25};
latlong["GU"] = {"latitude":13.4667, "longitude":144.7833};
latlong["GW"] = {"latitude":12, "longitude":-15};
latlong["GY"] = {"latitude":5, "longitude":-59};
latlong["HK"] = {"latitude":22.25, "longitude":114.1667};
latlong["HM"] = {"latitude":-53.1, "longitude":72.5167};
latlong["HN"] = {"latitude":15, "longitude":-86.5};
latlong["HR"] = {"latitude":45.1667, "longitude":15.5};
latlong["HT"] = {"latitude":19, "longitude":-72.4167};
latlong["HU"] = {"latitude":47, "longitude":20};
latlong["ID"] = {"latitude":-5, "longitude":120};
latlong["IE"] = {"latitude":53, "longitude":-8};
latlong["IL"] = {"latitude":31.5, "longitude":34.75};
latlong["IN"] = {"latitude":20, "longitude":77};
latlong["IO"] = {"latitude":-6, "longitude":71.5};
latlong["IQ"] = {"latitude":33, "longitude":44};
latlong["IR"] = {"latitude":32, "longitude":53};
latlong["IS"] = {"latitude":65, "longitude":-18};
latlong["IT"] = {"latitude":42.8333, "longitude":12.8333};
latlong["JM"] = {"latitude":18.25, "longitude":-77.5};
latlong["JO"] = {"latitude":31, "longitude":36};
latlong["JP"] = {"latitude":36, "longitude":138};
latlong["KE"] = {"latitude":1, "longitude":38};
latlong["KG"] = {"latitude":41, "longitude":75};
latlong["KH"] = {"latitude":13, "longitude":105};
latlong["KI"] = {"latitude":1.4167, "longitude":173};
latlong["KM"] = {"latitude":-12.1667, "longitude":44.25};
latlong["KN"] = {"latitude":17.3333, "longitude":-62.75};
latlong["KP"] = {"latitude":40, "longitude":127};
latlong["KR"] = {"latitude":37, "longitude":127.5};
latlong["KW"] = {"latitude":29.3375, "longitude":47.6581};
latlong["KY"] = {"latitude":19.5, "longitude":-80.5};
latlong["KZ"] = {"latitude":48, "longitude":68};
latlong["LA"] = {"latitude":18, "longitude":105};
latlong["LB"] = {"latitude":33.8333, "longitude":35.8333};
latlong["LC"] = {"latitude":13.8833, "longitude":-61.1333};
latlong["LI"] = {"latitude":47.1667, "longitude":9.5333};
latlong["LK"] = {"latitude":7, "longitude":81};
latlong["LR"] = {"latitude":6.5, "longitude":-9.5};
latlong["LS"] = {"latitude":-29.5, "longitude":28.5};
latlong["LT"] = {"latitude":55, "longitude":24};
latlong["LU"] = {"latitude":49.75, "longitude":6};
latlong["LV"] = {"latitude":57, "longitude":25};
latlong["LY"] = {"latitude":25, "longitude":17};
latlong["MA"] = {"latitude":32, "longitude":-5};
latlong["MC"] = {"latitude":43.7333, "longitude":7.4};
latlong["MD"] = {"latitude":47, "longitude":29};
latlong["ME"] = {"latitude":42.5, "longitude":19.4};
latlong["MG"] = {"latitude":-20, "longitude":47};
latlong["MH"] = {"latitude":9, "longitude":168};
latlong["MK"] = {"latitude":41.8333, "longitude":22};
latlong["ML"] = {"latitude":17, "longitude":-4};
latlong["MM"] = {"latitude":22, "longitude":98};
latlong["MN"] = {"latitude":46, "longitude":105};
latlong["MO"] = {"latitude":22.1667, "longitude":113.55};
latlong["MP"] = {"latitude":15.2, "longitude":145.75};
latlong["MQ"] = {"latitude":14.6667, "longitude":-61};
latlong["MR"] = {"latitude":20, "longitude":-12};
latlong["MS"] = {"latitude":16.75, "longitude":-62.2};
latlong["MT"] = {"latitude":35.8333, "longitude":14.5833};
latlong["MU"] = {"latitude":-20.2833, "longitude":57.55};
latlong["MV"] = {"latitude":3.25, "longitude":73};
latlong["MW"] = {"latitude":-13.5, "longitude":34};
latlong["MX"] = {"latitude":23, "longitude":-102};
latlong["MY"] = {"latitude":2.5, "longitude":112.5};
latlong["MZ"] = {"latitude":-18.25, "longitude":35};
latlong["NA"] = {"latitude":-22, "longitude":17};
latlong["NC"] = {"latitude":-21.5, "longitude":165.5};
latlong["NE"] = {"latitude":16, "longitude":8};
latlong["NF"] = {"latitude":-29.0333, "longitude":167.95};
latlong["NG"] = {"latitude":10, "longitude":8};
latlong["NI"] = {"latitude":13, "longitude":-85};
latlong["NL"] = {"latitude":52.5, "longitude":5.75};
latlong["NO"] = {"latitude":62, "longitude":10};
latlong["NP"] = {"latitude":28, "longitude":84};
latlong["NR"] = {"latitude":-0.5333, "longitude":166.9167};
latlong["NU"] = {"latitude":-19.0333, "longitude":-169.8667};
latlong["NZ"] = {"latitude":-41, "longitude":174};
latlong["OM"] = {"latitude":21, "longitude":57};
latlong["PA"] = {"latitude":9, "longitude":-80};
latlong["PE"] = {"latitude":-10, "longitude":-76};
latlong["PF"] = {"latitude":-15, "longitude":-140};
latlong["PG"] = {"latitude":-6, "longitude":147};
latlong["PH"] = {"latitude":13, "longitude":122};
latlong["PK"] = {"latitude":30, "longitude":70};
latlong["PL"] = {"latitude":52, "longitude":20};
latlong["PM"] = {"latitude":46.8333, "longitude":-56.3333};
latlong["PR"] = {"latitude":18.25, "longitude":-66.5};
latlong["PS"] = {"latitude":32, "longitude":35.25};
latlong["PT"] = {"latitude":39.5, "longitude":-8};
latlong["PW"] = {"latitude":7.5, "longitude":134.5};
latlong["PY"] = {"latitude":-23, "longitude":-58};
latlong["QA"] = {"latitude":25.5, "longitude":51.25};
latlong["RE"] = {"latitude":-21.1, "longitude":55.6};
latlong["RO"] = {"latitude":46, "longitude":25};
latlong["RS"] = {"latitude":44, "longitude":21};
latlong["RU"] = {"latitude":60, "longitude":100};
latlong["RW"] = {"latitude":-2, "longitude":30};
latlong["SA"] = {"latitude":25, "longitude":45};
latlong["SB"] = {"latitude":-8, "longitude":159};
latlong["SC"] = {"latitude":-4.5833, "longitude":55.6667};
latlong["SD"] = {"latitude":15, "longitude":30};
latlong["SE"] = {"latitude":62, "longitude":15};
latlong["SG"] = {"latitude":1.3667, "longitude":103.8};
latlong["SH"] = {"latitude":-15.9333, "longitude":-5.7};
latlong["SI"] = {"latitude":46, "longitude":15};
latlong["SJ"] = {"latitude":78, "longitude":20};
latlong["SK"] = {"latitude":48.6667, "longitude":19.5};
latlong["SL"] = {"latitude":8.5, "longitude":-11.5};
latlong["SM"] = {"latitude":43.7667, "longitude":12.4167};
latlong["SN"] = {"latitude":14, "longitude":-14};
latlong["SO"] = {"latitude":10, "longitude":49};
latlong["SR"] = {"latitude":4, "longitude":-56};
latlong["ST"] = {"latitude":1, "longitude":7};
latlong["SV"] = {"latitude":13.8333, "longitude":-88.9167};
latlong["SY"] = {"latitude":35, "longitude":38};
latlong["SZ"] = {"latitude":-26.5, "longitude":31.5};
latlong["TC"] = {"latitude":21.75, "longitude":-71.5833};
latlong["TD"] = {"latitude":15, "longitude":19};
latlong["TF"] = {"latitude":-43, "longitude":67};
latlong["TG"] = {"latitude":8, "longitude":1.1667};
latlong["TH"] = {"latitude":15, "longitude":100};
latlong["TJ"] = {"latitude":39, "longitude":71};
latlong["TK"] = {"latitude":-9, "longitude":-172};
latlong["TM"] = {"latitude":40, "longitude":60};
latlong["TN"] = {"latitude":34, "longitude":9};
latlong["TO"] = {"latitude":-20, "longitude":-175};
latlong["TR"] = {"latitude":39, "longitude":35};
latlong["TT"] = {"latitude":11, "longitude":-61};
latlong["TV"] = {"latitude":-8, "longitude":178};
latlong["TW"] = {"latitude":23.5, "longitude":121};
latlong["TZ"] = {"latitude":-6, "longitude":35};
latlong["UA"] = {"latitude":49, "longitude":32};
latlong["UG"] = {"latitude":1, "longitude":32};
latlong["UM"] = {"latitude":19.2833, "longitude":166.6};
latlong["US"] = {"latitude":38, "longitude":-97};
latlong["UY"] = {"latitude":-33, "longitude":-56};
latlong["UZ"] = {"latitude":41, "longitude":64};
latlong["VA"] = {"latitude":41.9, "longitude":12.45};
latlong["VC"] = {"latitude":13.25, "longitude":-61.2};
latlong["VE"] = {"latitude":8, "longitude":-66};
latlong["VG"] = {"latitude":18.5, "longitude":-64.5};
latlong["VI"] = {"latitude":18.3333, "longitude":-64.8333};
latlong["VN"] = {"latitude":16, "longitude":106};
latlong["VU"] = {"latitude":-16, "longitude":167};
latlong["WF"] = {"latitude":-13.3, "longitude":-176.2};
latlong["WS"] = {"latitude":-13.5833, "longitude":-172.3333};
latlong["YE"] = {"latitude":15, "longitude":48};
latlong["YT"] = {"latitude":-12.8333, "longitude":45.1667};
latlong["ZA"] = {"latitude":-29, "longitude":24};
latlong["ZM"] = {"latitude":-15, "longitude":30};
latlong["ZW"] = {"latitude":-20, "longitude":30};

var mapData2 = [
{"code":"CR","name":"Costa Rica","active":2,"reserve":4726575,"color":"#a7a737"},
{"code":"CI","name":"Cote d'Ivoire","active":3,"reserve":20152894,"color":"#de4c4f"},
{"code":"HR","name":"Croatia","active":3,"reserve":4395560,"color":"#d8854f"},
{"code":"CU","name":"Cuba","active":734,"reserve":11253665,"color":"#a7a737"},
{"code":"CY","name":"Cyprus","active":12,"reserve":1116564,"color":"#d8854f"},
{"code":"CZ","name":"Czech Rep.","active":4,"reserve":10534293,"color":"#d8854f"},
{"code":"DK","name":"Denmark","active":9,"reserve":5572594,"color":"#d8854f"},
{"code":"DJ","name":"Djibouti","active":1,"reserve":905564,"color":"#de4c4f"},
{"code":"DO","name":"Dominican Rep.","active":11,"reserve":10056181,"color":"#a7a737"},
{"code":"EC","name":"Ecuador","active":6,"reserve":14666055,"color":"#86a965"},
{"code":"EG","name":"Egypt","active":287,"reserve":82536770,"color":"#de4c4f"},
{"code":"SV","name":"El Salvador","active":11,"reserve":6227491,"color":"#a7a737"},
{"code":"GQ","name":"Equatorial Guinea","active":null,"reserve":720213,"color":"#de4c4f"},
{"code":"ER","name":"Eritrea","active":null,"reserve":5415280,"color":"#de4c4f"},
{"code":"EE","name":"Estonia","active":2,"reserve":1340537,"color":"#d8854f"},
{"code":"ET","name":"Ethiopia","active":0,"reserve":84734262,"color":"#de4c4f"},
{"code":"FJ","name":"Fiji","active":0,"reserve":868406,"color":"#8aabb0"},
{"code":"FI","name":"Finland","active":7,"reserve":5384770,"color":"#d8854f"},
{"code":"FR","name":"France","active":53,"reserve":63125894,"color":"#d8854f"},
{"code":"GA","name":"Gabon","active":2,"reserve":1534262,"color":"#de4c4f"},
{"code":"GM","name":"Gambia","active":0,"reserve":1776103,"color":"#de4c4f"},
{"code":"GE","name":"Georgia","active":4,"reserve":4329026,"color":"#d8854f"},
{"code":"DE","name":"Germany","active":37406,"reserve":82162512,"color":"#d8854f"},
{"code":"GH","name":"Ghana","active":5,"reserve":24965816,"color":"#de4c4f"},
{"code":"GR","name":"Greece","active":24,"reserve":11390031,"color":"#d8854f"},
{"code":"GT","name":"Guatemala","active":18,"reserve":14757316,"color":"#a7a737"},
{"code":"GN","name":"Guinea","active":5,"reserve":10221808,"color":"#de4c4f"},
{"code":"GW","name":"Guinea-Bissau","active":null,"reserve":1547061,"color":"#de4c4f"},
{"code":"GY","name":"Guyana","active":0,"reserve":756040,"color":"#86a965"},
{"code":"HT","name":"Haiti","active":0,"reserve":10123787,"color":"#a7a737"},
{"code":"HN","name":"Honduras","active":142,"reserve":7754687,"color":"#a7a737"},
{"code":"HK","name":"Hong Kong, China","active":0,"reserve":7122187,"color":"#eea638"},
{"code":"HU","name":"Hungary","active":59,"reserve":9966116,"color":"#d8854f"},
{"code":"IS","name":"Iceland","active":1,"reserve":324366,"color":"#d8854f"},
{"code":"IN","name":"India","active":6,"reserve":1241491960,"color":"#eea638"},
{"code":"ID","name":"Indonesia","active":8,"reserve":242325638,"color":"#eea638"},
{"code":"IR","name":"Iran","active":0,"reserve":74798599,"color":"#eea638"},
{"code":"IQ","name":"Iraq","active":2,"reserve":32664942,"color":"#eea638"},
{"code":"IE","name":"Ireland","active":2,"reserve":4525802,"color":"#d8854f"},
{"code":"IL","name":"Israel","active":13,"reserve":7562194,"color":"#eea638"},
{"code":"IT","name":"Italy","active":11330,"reserve":60788694,"color":"#d8854f"},
{"code":"JM","name":"Jamaica","active":0,"reserve":2751273,"color":"#a7a737"},
{"code":"JP","name":"Japan","active":48565,"reserve":126497241,"color":"#eea638"},
{"code":"JO","name":"Jordan","active":17,"reserve":6330169,"color":"#eea638"},
{"code":"KZ","name":"Kazakhstan","active":5,"reserve":16206750,"color":"#eea638"},
{"code":"KE","name":"Kenya","active":21,"reserve":41609728,"color":"#de4c4f"},
{"code":"KP","name":"Korea, Dem. Rep.","active":0,"reserve":24451285,"color":"#eea638"},
{"code":"KR","name":"Korea, Rep.","active":29051,"reserve":48391343,"color":"#eea638"},
{"code":"KW","name":"Kuwait","active":6,"reserve":2818042,"color":"#eea638"},
{"code":"KG","name":"Kyrgyzstan","active":2,"reserve":5392580,"color":"#eea638"},
{"code":"LA","name":"Laos","active":3,"reserve":6288037,"color":"#eea638"},
{"code":"LV","name":"Latvia","active":1,"reserve":2243142,"color":"#d8854f"},
{"code":"LB","name":"Lebanon","active":5,"reserve":4259405,"color":"#eea638"},
{"code":"LS","name":"Lesotho","active":0,"reserve":2193843,"color":"#de4c4f"},
{"code":"LR","name":"Liberia","active":0,"reserve":4128572,"color":"#de4c4f"},
{"code":"LY","name":"Libya","active":3,"reserve":6422772,"color":"#de4c4f"},
{"code":"LT","name":"Lithuania","active":2,"reserve":3307481,"color":"#d8854f"},
{"code":"LU","name":"Luxembourg","active":0,"reserve":515941,"color":"#d8854f"},
{"code":"MK","name":"Macedonia, FYR","active":3,"reserve":2063893,"color":"#d8854f"},
{"code":"MG","name":"Madagascar","active":1,"reserve":21315135,"color":"#de4c4f"},
{"code":"MW","name":"Malawi","active":null,"reserve":15380888,"color":"#de4c4f"},
{"code":"MY","name":"Malaysia","active":9,"reserve":28859154,"color":"#eea638"},
{"code":"ML","name":"Mali","active":2,"reserve":15839538,"color":"#de4c4f"},
{"code":"MR","name":"Mauritania","active":1,"reserve":3541540,"color":"#de4c4f"},
{"code":"MU","name":"Mauritius","active":0,"reserve":1306593,"color":"#de4c4f"},
{"code":"MX","name":"Mexico","active":11,"reserve":114793341,"color":"#a7a737"},
{"code":"MD","name":"Moldova","active":0,"reserve":3544864,"color":"#d8854f"},
{"code":"MN","name":"Mongolia","active":0,"reserve":2800114,"color":"#eea638"},
{"code":"ME","name":"Montenegro","active":1,"reserve":632261,"color":"#d8854f"},
{"code":"MA","name":"Morocco","active":10,"reserve":32272974,"color":"#de4c4f"},
{"code":"MZ","name":"Mozambique","active":0,"reserve":23929708,"color":"#de4c4f"},
{"code":"MM","name":"Myanmar","active":0,"reserve":48336763,"color":"#eea638"},
{"code":"NA","name":"Namibia","active":1,"reserve":2324004,"color":"#de4c4f"},
{"code":"NP","name":"Nepal","active":2,"reserve":30485798,"color":"#eea638"},
{"code":"NL","name":"Netherlands","active":373,"reserve":16664746,"color":"#d8854f"},
{"code":"NZ","name":"New Zealand","active":4,"reserve":4414509,"color":"#8aabb0"},
{"code":"NI","name":"Nicaragua","active":5,"reserve":5869859,"color":"#a7a737"},
{"code":"NE","name":"Niger","active":5,"reserve":16068994,"color":"#de4c4f"},
{"code":"NG","name":"Nigeria","active":2,"reserve":162470737,"color":"#de4c4f"},
{"code":"NO","name":"Norway","active":86,"reserve":4924848,"color":"#d8854f"},
{"code":"OM","name":"Oman","active":12,"reserve":2846145,"color":"#eea638"},
{"code":"PK","name":"Pakistan","active":24,"reserve":176745364,"color":"#eea638"},
{"code":"PA","name":"Panama","active":3,"reserve":3571185,"color":"#a7a737"},
{"code":"PG","name":"Papua New Guinea","active":0,"reserve":7013829,"color":"#8aabb0"},
{"code":"PY","name":"Paraguay","active":6,"reserve":6568290,"color":"#86a965"},
{"code":"PE","name":"Peru","active":34,"reserve":29399817,"color":"#86a965"},
{"code":"PH","name":"Philippines","active":14,"reserve":94852030,"color":"#eea638"},
{"code":"PL","name":"Poland","active":13,"reserve":38298949,"color":"#d8854f"},
{"code":"PT","name":"Portugal","active":692,"reserve":10689663,"color":"#d8854f"},
{"code":"PR","name":"Puerto Rico","active":145,"reserve":3745526,"color":"#a7a737"},
{"code":"QA","name":"Qatar","active":858,"reserve":1870041,"color":"#eea638"},
{"code":"RO","name":"Romania","active":4,"reserve":21436495,"color":"#d8854f"},
{"code":"RU","name":"Russia","active":16,"reserve":142835555,"color":"#d8854f"},
{"code":"RW","name":"Rwanda","active":0,"reserve":10942950,"color":"#de4c4f"},
{"code":"SA","name":"Saudi Arabia","active":322,"reserve":28082541,"color":"#eea638"},
{"code":"SN","name":"Senegal","active":2,"reserve":12767556,"color":"#de4c4f"},
{"code":"RS","name":"Serbia","active":0,"reserve":9853969,"color":"#d8854f"},
{"code":"SL","name":"Sierra Leone","active":1,"reserve":5997486,"color":"#de4c4f"},
{"code":"SG","name":"Singapore","active":165,"reserve":5187933,"color":"#eea638"},
{"code":"SK","name":"Slovak Republic","active":0,"reserve":5471502,"color":"#d8854f"},
{"code":"SI","name":"Slovenia","active":0,"reserve":2035012,"color":"#d8854f"},
{"code":"SB","name":"Solomon Islands","active":0,"reserve":552267,"color":"#8aabb0"},
{"code":"SO","name":"Somalia","active":0,"reserve":9556873,"color":"#de4c4f"},
{"code":"ZA","name":"South Africa","active":213,"reserve":50459978,"color":"#de4c4f"},
{"code":"ES","name":"Spain","active":1443,"reserve":46454895,"color":"#d8854f"},
{"code":"LK","name":"Sri Lanka","active":null,"reserve":21045394,"color":"#eea638"},
{"code":"SD","name":"Sudan","active":4,"reserve":34735288,"color":"#de4c4f"},
{"code":"SR","name":"Suriname","active":null,"reserve":529419,"color":"#86a965"},
{"code":"SZ","name":"Swaziland","active":0,"reserve":1203330,"color":"#de4c4f"},
{"code":"SE","name":"Sweden","active":1,"reserve":9440747,"color":"#d8854f"},
{"code":"CH","name":"Switzerland","active":1,"reserve":7701690,"color":"#d8854f"},
{"code":"SY","name":"Syria","active":0,"reserve":20766037,"color":"#eea638"},
{"code":"TW","name":"Taiwan","active":2,"reserve":23072000,"color":"#eea638"},
{"code":"TJ","name":"Tajikistan","active":1,"reserve":6976958,"color":"#eea638"},
{"code":"TZ","name":"Tanzania","active":3,"reserve":46218486,"color":"#de4c4f"},
{"code":"TH","name":"Thailand","active":286,"reserve":69518555,"color":"#eea638"},
{"code":"TG","name":"Togo","active":0,"reserve":6154813,"color":"#de4c4f"},
{"code":"TT","name":"Trinidad and Tobago","active":2,"reserve":1346350,"color":"#a7a737"},
{"code":"TN","name":"Tunisia","active":1,"reserve":10594057,"color":"#de4c4f"},
{"code":"TR","name":"Turkey","active":1714,"reserve":73639596,"color":"#d8854f"},
{"code":"TM","name":"Turkmenistan","active":0,"reserve":5105301,"color":"#eea638"},
{"code":"UG","name":"Uganda","active":3,"reserve":34509205,"color":"#de4c4f"},
{"code":"UA","name":"Ukraine","active":7,"reserve":45190180,"color":"#d8854f"},
{"code":"AE","name":"United Arab Emirates","active":4235,"reserve":7890924,"color":"#eea638"},
{"code":"GB","name":"United Kingdom","active":9174,"reserve":62417431,"color":"#d8854f"},
{"code":"US","name":"United States","active":0,"reserve":313085380,"color":"#a7a737"},
{"code":"UY","name":"Uruguay","active":4,"reserve":3380008,"color":"#86a965"},
{"code":"UZ","name":"Uzbekistan","active":1,"reserve":27760267,"color":"#eea638"},
{"code":"VE","name":"Venezuela","active":3,"reserve":29436891,"color":"#86a965"},
{"code":"PS","name":"West Bank and Gaza","active":0,"reserve":4152369,"color":"#eea638"},
{"code":"VN","name":"Vietnam","active":0,"reserve":88791996,"color":"#eea638"},
{"code":"YE","name":"Yemen, Rep.","active":7,"reserve":24799880,"color":"#eea638"},
{"code":"ZM","name":"Zambia","active":1,"reserve":13474959,"color":"#de4c4f"},
{"code":"ZW","name":"Zimbabwe","active":1,"reserve":12754378,"color":"#de4c4f"}]; 



// get min and max values
var minBulletSize = 3;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;
for ( var i = 0; i < mapData2.length; i++ ) {
      var value = mapData2[ i ].active;
      if ( value < min ) {
        min = value;
      }
      if ( value > max ) {
        max = value;
      }
}

// it's better to use circle square to show difference between values, not a radius
var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

// create circle for each country
var images = [];
for ( var i = 0; i < mapData2.length; i++ ) {
  var dataItem = mapData2[ i ];
  if (dataItem.active > 0) {
      var value = dataItem.active;
    // calculate size of a bubble
    var square = ( value - min ) / ( max - min ) * ( 	maxSquare - minSquare ) + minSquare;
    if ( square < minSquare ) {
      square = minSquare;
    }
    var size = Math.sqrt( square / ( Math.PI * 2 ) );
    var id = dataItem.code;

    images.push( {
      "type": "circle",
  		"theme": "light",

      "width": size,
      "height": size,
      "color": dataItem.color,
      "longitude": latlong[ id ].longitude,
      "latitude": latlong[ id ].latitude,
      "title": "Active duty troops in " + dataItem.name + ": " + dataItem.active, 
      
    } );

  }
 
}

// build map
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "projection": "eckert6",
  "titles": [ {
    "text": "Presence of U.S. Military Abroad",
    "size": 14
  }, {
    "text": "Source: Department of Defense: Baseline Report, Fiscal Year 2015 Baseline Report, graph adapted from Amcharts library & demo",
    "size": 10
  } ],
  "areasSettings": {
    //"unlistedAreasColor": "#000000",
    //"unlistedAreasAlpha": 0.1
  },
  "dataProvider": {
    "map": "worldLow",
    "images": images
  },
  "export": {
    "enabled": true
  }
} );

}