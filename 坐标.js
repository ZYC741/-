var map;
var lay;
function onLoad() {
    var imageURL = "http://t0.tianditu.gov.cn/img_w/wmts?" +
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=9e1193ba25c737e220a183724c1ecbf6";
    //创建自定义图层对象
    lay = new T.TileLayer(imageURL, { minZoom: 1, maxZoom: 18 });
    var config = { layers: [lay] };
    //初始化地图对象
    map = new T.Map("mapDiv", config);

    //设置显示地图的中心点和级别
    map.centerAndZoom(new T.LngLat(106.401781, 28.099633), zoom = 14);
    //允许鼠标滚轮缩放地图
    map.enableScrollWheelZoom();


    var points11 = [];
    //points11.push(new T.LngLat(106.403491, 28.100598));
    points11.push(new T.LngLat(106.40176, 28.09979,));
    points11.push(new T.LngLat(106.401781, 28.099633));
    points11.push(new T.LngLat(106.402248, 28.099615));
    points11.push(new T.LngLat(106.402293, 28.099512));
    points11.push(new T.LngLat(106.402530, 28.099508));
    points11.push(new T.LngLat(106.403236, 28.099864));
    points11.push(new T.LngLat(106.403841, 28.100471));
    points11.push(new T.LngLat(106.404247, 28.100819));
    points11.push(new T.LngLat(106.404172, 28.100944));
    points11.push(new T.LngLat(106.404066, 28.100859));
    points11.push(new T.LngLat(106.403491, 28.100598));
    points11.push(new T.LngLat(106.402905, 28.100415));
    points11.push(new T.LngLat(106.402636, 28.100700));
    points11.push(new T.LngLat(106.402316, 28.100572));
    points11.push(new T.LngLat(106.402158, 28.100321));
    console.log(points11);

    var points12 = [];
    points12.push(new T.LngLat(106.383854, 28.091392));
    points12.push(new T.LngLat(106.381062, 28.091185));
    points12.push(new T.LngLat(106.380349, 28.091646));
    points12.push(new T.LngLat(106.380266, 28.093708));
    points12.push(new T.LngLat(106.381661, 28.095307));
    points12.push(new T.LngLat(106.386115, 28.096893));
    points12.push(new T.LngLat(106.387473, 28.096124));
    points12.push(new T.LngLat(106.390136, 28.097121));
    points12.push(new T.LngLat(106.394005, 28.096806));
    points12.push(new T.LngLat(106.394103, 28.095943));
    points12.push(new T.LngLat(106.389711, 28.093835));
    points12.push(new T.LngLat(106.388944, 28.093935));
    points12.push(new T.LngLat(106.385265, 28.092363));

    var points13 = [];
    points13.push(new T.LngLat(106.415903, 28.095740));
    points13.push(new T.LngLat(106.415125, 28.095840));
    points13.push(new T.LngLat(106.413934, 28.096744));
    points13.push(new T.LngLat(106.414476, 28.095409));
    points13.push(new T.LngLat(106.414310, 28.094065));
    points13.push(new T.LngLat(106.413789, 28.093919));
    points13.push(new T.LngLat(106.414036, 28.093601));
    points13.push(new T.LngLat(106.414159, 28.09328));
    points13.push(new T.LngLat(106.414588, 28.093483));
    points13.push(new T.LngLat(106.415538, 28.093545));
    points13.push(new T.LngLat(106.414712, 28.094037));
    points13.push(new T.LngLat(106.415264, 28.095135,));
    points13.push(new T.LngLat(106.415860, 28.095509));

    var points14 = [];
    points14.push(new T.LngLat(106.399321, 28.090831));
    points14.push(new T.LngLat(106.399458, 28.091145));
    points14.push(new T.LngLat(106.400379, 28.091207));
    points14.push(new T.LngLat(106.400330, 28.090502));
    points14.push(new T.LngLat(106.400212, 28.090635));
    points14.push(new T.LngLat(106.400005, 28.090491));
    points14.push(new T.LngLat(106.399851, 28.090598));
    points14.push(new T.LngLat(106.399959, 28.090934));
    points14.push(new T.LngLat(106.400084, 28.091035));
    points14.push(new T.LngLat(106.400018, 28.091079));


    console.log(points12);

    var points21 = [];
    points21.push(new T.LngLat(106.090116, 27.736830));
    points21.push(new T.LngLat(106.090387, 27.736366));
    points21.push(new T.LngLat(106.089737, 27.735081));
    points21.push(new T.LngLat(106.091452, 27.733148));
    points21.push(new T.LngLat(106.093130, 27.730034));
    points21.push(new T.LngLat(106.095385, 27.728764));
    points21.push(new T.LngLat(106.093581, 27.729403));
    points21.push(new T.LngLat(106.090631, 27.731096));
    points21.push(new T.LngLat(106.089295, 27.733300));
    points21.push(new T.LngLat(106.084848, 27.732094));
    points21.push(new T.LngLat(106.084830, 27.733428));
    points21.push(new T.LngLat(106.089295, 27.735776));

    var points22 = [];
    points22.push(new T.LngLat(106.071279, 27.722791));
    points22.push(new T.LngLat(106.068518, 27.726752));
    points22.push(new T.LngLat(106.068518, 27.726752));
    points22.push(new T.LngLat(106.073273, 27.728892));
    points22.push(new T.LngLat(106.077062, 27.731959));
    points22.push(new T.LngLat(106.076042, 27.730098));
    points22.push(new T.LngLat(106.075600, 27.728964));
    points22.push(new T.LngLat(106.073814, 27.728030));
    points22.push(new T.LngLat(106.073552, 27.727327));
    points22.push(new T.LngLat(106.071161, 27.726065));

    var points23 = [];
    points23.push(new T.LngLat(106.082998, 27.724072));
    points23.push(new T.LngLat(106.081465, 27.723145));
    points23.push(new T.LngLat(106.081170, 27.722380));
    points23.push(new T.LngLat(106.079478, 27.722769));
    points23.push(new T.LngLat(106.078120, 27.721762));
    points23.push(new T.LngLat(106.077096, 27.720493));
    points23.push(new T.LngLat(106.076792, 27.720016));
    points23.push(new T.LngLat(106.076223, 27.720902));
    points23.push(new T.LngLat(106.077247, 27.721151));
    points23.push(new T.LngLat(106.077566, 27.722501));

    var points24 = [];
    points24.push(new T.LngLat(106.101083, 27.723846));
    points24.push(new T.LngLat(106.103722, 27.725622));
    points24.push(new T.LngLat(106.100954, 27.726154));
    points24.push(new T.LngLat(106.098412, 27.724739));
    points24.push(new T.LngLat(106.095965, 27.724254));
    points24.push(new T.LngLat(106.095654, 27.723513));
    points24.push(new T.LngLat(106.097392, 27.723428));
    points24.push(new T.LngLat(106.099731, 27.723903));

    var points31 = [];
    points31.push(new T.LngLat(106.336085, 28.070213));
    points31.push(new T.LngLat(106.332548, 28.071089));
    points31.push(new T.LngLat(106.332801, 28.072179));
    points31.push(new T.LngLat(106.333947, 28.072235));
    points31.push(new T.LngLat(106.333766, 28.073103));
    points31.push(new T.LngLat(106.335940, 28.073572));
    points31.push(new T.LngLat(106.336734, 28.071097));

    var points32 = [];
    points32.push(new T.LngLat(106.339297, 28.072824));
    points32.push(new T.LngLat(106.339270, 28.074129));
    points32.push(new T.LngLat(106.340136, 28.074671));
    points32.push(new T.LngLat(106.341534, 28.074368));
    points32.push(new T.LngLat(106.340397, 28.072418));

    var points33 = [];
    points33.push(new T.LngLat(106.347272, 28.081620));
    points33.push(new T.LngLat(106.348346, 28.080705));
    points33.push(new T.LngLat(106.347543, 28.080362));
    points33.push(new T.LngLat(106.345549, 28.078126));
    points33.push(new T.LngLat(106.349545, 28.078420));
    points33.push(new T.LngLat(106.349933, 28.079073));
    points33.push(new T.LngLat(106.348896, 28.081063));

    var points34 = [];
    points34.push(new T.LngLat(106.355419, 28.078373));
    points34.push(new T.LngLat(106.357012, 28.079585));
    points34.push(new T.LngLat(106.356293, 28.079879));
    points34.push(new T.LngLat(106.356347, 28.080205));
    points34.push(new T.LngLat(106.358326, 28.080754));
    points34.push(new T.LngLat(106.361014, 28.081739));
    points34.push(new T.LngLat(106.362355, 28.080527));
    points34.push(new T.LngLat(106.357648, 28.077995));

    var points41 = [];
    points41.push(new T.LngLat(106.372417, 27.827863));
    points41.push(new T.LngLat(106.372020, 27.829507));
    points41.push(new T.LngLat(106.370613, 27.830288));
    points41.push(new T.LngLat(106.371912, 27.830368));
    points41.push(new T.LngLat(106.374474, 27.830592));
    points41.push(new T.LngLat(106.375286, 27.829060));
    points41.push(new T.LngLat(106.376820, 27.828182));
    points41.push(new T.LngLat(106.376333, 27.827145));
    points41.push(new T.LngLat(106.374745, 27.828118));

    var points42 = [];
    points42.push(new T.LngLat(106.388576, 27.829786));
    points42.push(new T.LngLat(106.390259, 27.829383));
    points42.push(new T.LngLat(106.387332, 27.828104));
    points42.push(new T.LngLat(106.386736, 27.829205));

    var points51 = []
    points51.push(new T.LngLat(106.433348, 27.665410));
    points51.push(new T.LngLat(106.430362, 27.666252));
    points51.push(new T.LngLat(106.430005, 27.670201));
    points51.push(new T.LngLat(106.431306, 27.670218));
    points51.push(new T.LngLat(106.433150, 27.668834));
    points51.push(new T.LngLat(106.434649, 27.667574));
    points51.push(new T.LngLat(106.433782, 27.665755));

    var points52 = []
    points52.push(new T.LngLat(106.430726, 27.674943));
    points52.push(new T.LngLat(106.430779, 27.676065));
    points52.push(new T.LngLat(106.431538, 27.675863));
    points52.push(new T.LngLat(106.431542, 27.675614));
    points52.push(new T.LngLat(106.431845, 27.675443));
    points52.push(new T.LngLat(106.431599, 27.675006));

    var points53 = []
    points53.push(new T.LngLat(106.434557, 27.670647));
    points53.push(new T.LngLat(106.434284, 27.671352));
    points53.push(new T.LngLat(106.434883, 27.671224));
    points53.push(new T.LngLat(106.434974, 27.671671));
    points53.push(new T.LngLat(106.435475, 27.671628));
    points53.push(new T.LngLat(106.435562, 27.671003));
    points53.push(new T.LngLat(106.436196, 27.670744));
    points53.push(new T.LngLat(106.436306, 27.669837));
    points53.push(new T.LngLat(106.435889, 27.669968));
    points53.push(new T.LngLat(106.435623, 27.670425));
    points53.push(new T.LngLat(106.435202, 27.670546));

    var points54 = []
    points54.push(new T.LngLat(106.430848, 27.667310));
    points54.push(new T.LngLat(106.431191, 27.666004));
    points54.push(new T.LngLat(106.431782, 27.665968));
    points54.push(new T.LngLat(106.431994, 27.667410));

    var points55 = []
    points55.push(new T.LngLat(106.430861, 27.667374));
    points55.push(new T.LngLat(106.429842, 27.667866));
    points55.push(new T.LngLat(106.429720, 27.668385));
    points55.push(new T.LngLat(106.430140, 27.668900));
    points55.push(new T.LngLat(106.431434, 27.668201));
    points55.push(new T.LngLat(106.431376, 27.668037));
    points55.push(new T.LngLat(106.431015, 27.668033));

    var points56 = []
    points56.push(new T.LngLat(106.440399, 27.668739));
    points56.push(new T.LngLat(106.442171, 27.669560));
    points56.push(new T.LngLat(106.442911, 27.669203));
    points56.push(new T.LngLat(106.443254, 27.668147));
    points56.push(new T.LngLat(106.441509, 27.667232));
    points56.push(new T.LngLat(106.441089, 27.668220));

    var points61 = []
    points61.push(new T.LngLat(106.238474, 27.637942));
    points61.push(new T.LngLat(106.238307, 27.638869));
    points61.push(new T.LngLat(106.242904, 27.640334));
    points61.push(new T.LngLat(106.243587, 27.643278));
    points61.push(new T.LngLat(106.248564, 27.644810));
    points61.push(new T.LngLat(106.248366, 27.641678));
    points61.push(new T.LngLat(106.245696, 27.639810));
    points61.push(new T.LngLat(106.243663, 27.637659));

    var points62 = []
    points62.push(new T.LngLat(106.249378, 27.644030));
    points62.push(new T.LngLat(106.251432, 27.646030));
    points62.push(new T.LngLat(106.252155, 27.645926));
    points62.push(new T.LngLat(106.252214, 27.645598));
    points62.push(new T.LngLat(106.251212, 27.645466));
    points62.push(new T.LngLat(106.251542, 27.645151));
    points62.push(new T.LngLat(106.251068, 27.644759));
    points62.push(new T.LngLat(106.250842, 27.644124));
    points62.push(new T.LngLat(106.251785, 27.644503));
    points62.push(new T.LngLat(106.254149, 27.644020));
    points62.push(new T.LngLat(106.254893, 27.643508));
    points62.push(new T.LngLat(106.253653, 27.643133));

    var points63 = []
    points63.push(new T.LngLat(106.257829, 27.640283));
    points63.push(new T.LngLat(106.258208, 27.641546));
    points63.push(new T.LngLat(106.260842, 27.642050));
    points63.push(new T.LngLat(106.263440, 27.642761));
    points63.push(new T.LngLat(106.267536, 27.642361));
    points63.push(new T.LngLat(106.270162, 27.643520));
    points63.push(new T.LngLat(106.273662, 27.644072));
    points63.push(new T.LngLat(106.273698, 27.642577));
    points63.push(new T.LngLat(106.268763, 27.639292));
    points63.push(new T.LngLat(106.265461, 27.639908));



    var HSG = [];
    HSG.push(points11);
    HSG.push(points12);
    HSG.push(points13);
    HSG.push(points14);

    var LJ = []
    LJ.push(points21);
    LJ.push(points22);
    LJ.push(points23);
    LJ.push(points24);

    var SH = []
    SH.push(points31);
    SH.push(points32);
    SH.push(points33);
    SH.push(points34);

    var MT = []
    MT.push(points41);
    MT.push(points42);

    var CG = []
    CG.push(points51);
    CG.push(points52);
    CG.push(points53);
    CG.push(points54);
    CG.push(points55);
    CG.push(points56);

    var WM = []
    WM.push(points61);
    WM.push(points62);
    WM.push(points63);



    var handler = new T.PolygonTool(map);// 创建标注工具对象，用于计算面积

    //火石岗镇
    var HSGZ = []//存放多边形
    var areasHSG = {};
    for (var i = 0; i < HSG.length; i++) {
        //创建面对象
        var polygon = new T.Polygon(HSG[i], {
            color: "red", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5, test: "测试"
        });
        map.addOverLay(polygon);

        polygon.name = "火石镇面积" + (i + 1);
        console.log(polygon.name);
        // polygon.getLngLats()[0] 获取多边形顶点的数组
        var area = handler.getArea(polygon.getLngLats()[0]);
        areasHSG['area' + (i + 1)] = area;
        // 打印面积到控制台
        console.log("火石岗镇面积" + (i + 1) + ": " + area);
        HSGZ.push = (polygon)
        polygon.addEventListener("click", (function (polygon, area) {
            return function (e) {
                alert("该区域面积为: " + area + " 平方米");
            };
        })(polygon, area)); // 使用闭包传递当前迭代的 area 值

    };


    var areasHSG1 = areasHSG['area1'];
    var areasHSG2 = areasHSG['area2'];
    var areasHSG3 = areasHSG['area3'];
    var areasHSG4 = areasHSG['area4'];

    //龙井镇
    var LJZ = []//存放多边形
    var areasLJ = {};
    for (var i = 0; i < LJ.length; i++) {
        //创建面对象
        var polygon = new T.Polygon(LJ[i], {
            color: "orange", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5, test: "测试"
        });
        map.addOverLay(polygon);
        polygon.name = "龙井镇面积" + (i + 1);
        console.log(polygon.name);
        // polygon.getLngLats()[0] 获取多边形顶点的数组
        var area = handler.getArea(polygon.getLngLats()[0]);
        areasLJ['area' + (i + 1)] = area;
        // 打印面积到控制台
        console.log("龙井镇面积" + (i + 1) + ": " + area);
        LJZ.push = (polygon)
        polygon.addEventListener("click", (function (polygon, area) {
            return function (e) {
                alert("该区域面积为: " + area + " 平方米");
            };
        })(polygon, area));
    }
    var areasLJ1 = areasLJ['area1'];
    var areasLJ2 = areasLJ['area2'];
    var areasLJ3 = areasLJ['area3'];
    var areasLJ4 = areasLJ['area4'];

    //三合镇
    var areasSH = {};
    var SHZ = []
    for (var i = 0; i < SH.length; i++) {
        //创建面对象
        var polygon = new T.Polygon(SH[i], {
            color: "yellow", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5, test: "测试"
        });
        map.addOverLay(polygon);
        polygon.name = "三合镇面积" + (i + 1);
        // polygon.getLngLats()[0] 获取多边形顶点的数组
        var area = handler.getArea(polygon.getLngLats(SH)[0]);
        areasSH['area' + (i + 1)] = area;
        // 打印面积到控制台
        console.log("三合镇面积" + (i + 1) + ": " + area);
        SHZ.push = (polygon)
        polygon.addEventListener("click", (function (polygon, area) {
            return function (e) {
                alert("该区域面积为: " + area + " 平方米");
            };
        })(polygon, area));
    }
    var areasSH1 = areasSH['area1'];
    var areasSH2 = areasSH['area2'];
    var areasSH3 = areasSH['area3'];
    var areasSH4 = areasSH['area4'];

    //茅台镇
    var areasMT = {};
    var MTZ = []
    for (var i = 0; i < MT.length; i++) {
        //创建面对象
        var polygon = new T.Polygon(MT[i], {
            color: "green", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5, test: "测试"
        });
        map.addOverLay(polygon);
        polygon.name = "茅台镇面积" + (i + 1);
        // polygon.getLngLats()[0] 获取多边形顶点的数组
        var area = handler.getArea(polygon.getLngLats(MT)[0]);
        areasMT['area' + (i + 1)] = area;
        MTZ.push = (polygon)
        // 打印面积到控制台
        console.log("茅台镇面积" + (i + 1) + ": " + area);
        polygon.addEventListener("click", (function (polygon, area) {
            return function (e) {
                alert("该区域面积为: " + area + " 平方米");
            };
        })(polygon, area));
    }
    var areasMT1 = areasMT['area1'];
    var areasMT2 = areasMT['area2'];

    //长岗镇
    var CGZ = []
    var areasCG = {};
    for (var i = 0; i < CG.length; i++) {
        //创建面对象
        var polygon = new T.Polygon(CG[i], {
            color: "blue", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5, test: "测试"
        });
        map.addOverLay(polygon);
        polygon.name = "长岗镇面积" + (i + 1);
        // polygon.getLngLats()[0] 获取多边形顶点的数组
        var area = handler.getArea(polygon.getLngLats(CG)[0]);
        areasCG['area' + (i + 1)] = area;
        CGZ.push = (polygon)
        // 打印面积到控制台
        console.log("长岗镇面积" + (i + 1) + ": " + area);
        polygon.addEventListener("click", (function (polygon, area) {
            return function (e) {
                alert("该区域面积为: " + area + " 平方米");
            };
        })(polygon, area));
    }
    var areasCG1 = areasCG['area1'];
    var areasCG2 = areasCG['area2'];
    var areasCG3 = areasCG['area3'];
    var areasCG4 = areasCG['area4'];
    var areasCG5 = areasCG['area5'];
    var areasCG6 = areasCG['area6'];

    //五马镇
    var areasWM = {};
    var WMZ = []
    for (var i = 0; i < WM.length; i++) {
        //创建面对象
        var polygon = new T.Polygon(WM[i], {
            color: "purple", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5, test: "测试"
        });
        map.addOverLay(polygon);
        polygon.name = "五马镇面积" + (i + 1);
        // polygon.getLngLats()[0] 获取多边形顶点的数组
        var area = handler.getArea(polygon.getLngLats(WM)[0]);
        areasWM['area' + (i + 1)] = area;
        WMZ.push = (polygon)
        // 打印面积到控制台
        console.log("五马镇面积" + (i + 1) + ": " + area);
        polygon.addEventListener("click", (function (polygon, area) {
            return function (e) {
                alert("该区域面积为: " + area + " 平方米");
            };
        })(polygon, area));
    }
    var areasWM1 = areasWM['area1'];
    var areasWM2 = areasWM['area2'];
    var areasWM3 = areasWM['area3'];




    // 根据多边形标识符显示特定的多边形
    function showPolygonById(id) {
        HSGZ.forEach(function (polygon) {
            if (polygon.id === id) {
                polygon.setMap(map); // 显示特定的多边形
            } else {
                polygon.setMap(null); // 隐藏其他多边形
            }
        });
    }

    function jumpToLocation(lng, lat) {
        // 创建一个经纬度对象
        var point = new T.LngLat(lng, lat);
        // 将地图中心点设置为传入的经纬度，并设置一个合适的缩放级别
        map.panTo(point, zoom = 15);
    }

    // 为每个 li 元素添加点击事件监听器
    document.querySelectorAll('ul li').forEach(function (li) {
        li.addEventListener('click', function () {
            // 获取 li 元素的 data-location 属性，它包含了经纬度信息
            var location = this.getAttribute('data-location').split(',');
            // 调用跳转函数，传入经纬度信息
            jumpToLocation(location[0], location[1]);
        });
    });

    var overallArea = 827000429843.23331
    // 使用querySelector来获取id为ALL的li元素
    var liElement = document.querySelector('#ALL');

    // 为该li元素添加点击事件监听器
    liElement.addEventListener('click', function () {
        alert("整体面积为：" + overallArea + " 平方米"); // 当点击时，弹出整体面积的提示框
    });
}
