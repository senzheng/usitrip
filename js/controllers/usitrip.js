/// <reference path="../angular.js" />

angular.module("usitrip")
.controller("usitripCtrl", function ($scope) {

    $scope.data = {
       selfTripItem: [
              {
                  title:"海南尊享精华六日自驾游", note:"成都集结 单驾单飞", price: 2999, satisfied: "100%",image : "images/hainan.jpg",category : "国内自驾", season: null
              },
              {
                  title:"川藏线进 青藏线出14天自驾游", note:"世界屋脊西藏精华环线", price: 7980, satisfied: "90%",image : "images/xizang.jpeg",category : "国内自驾", season: "春节"
              },
              {
                  title:"川藏线进 青藏线出14天自驾游", note:"世界屋脊西藏精华环线", price: 4200, satisfied: "93%",image : "images/xizang.jpeg",category : "国内自驾", season: "春节"
              },
              {
                  title:"湄公河密码老挝7日游", note:"磨憨口岸集结", price: 74181, satisfied: "80%",image : "images/laos.jpg",category : "国内自驾", season: "春节"
              },
              {
                  title:"老挝 泰国 柬埔寨 清迈11日自驾游", note:"磨憨口岸集结", price: 5888, satisfied: "90%",image : "images/Thailand.jpg",category : "国内自驾", season: "春节"
              },
              {
                  title:"六星自驾系列-泰国清迈拜县8日自驾游", note:"磨憨口岸集结", price: 5109, satisfied: "90%",image : "images/chai.jpg",category : "国内自驾", season: "春节"
              },
              {
                  title:"朗博拉邦-万荣-万象8天自驾休闲游", note:"探秘老挝古都 昆明集结", price: 5555, satisfied: "90%",image : "images/laos2.jpg",category : "国内自驾", season: "春节"
              },
              {
                  title:"美国加州西海岸自驾游2天", note:"西雅图集结", price: 10800, satisfied: "100%",image : "images/seattle.png",category : "出境自驾", season: null
              },
              {
                  title:"美国AVIS 租车", note:"西雅图机场集结", price: 7980, satisfied: "90%",image : "images/sf.jpg",category : "境外租车", season: "春节"
              },
              ],
      
       products : [
              {
                category:"北美洲", 
                citys : [
                {
                  name : "洛杉矶", image: "images/la.jpg", number: 77   
                },
                {
                  name : "纽约", image: "images/nyc.jpg", number: 111 
                },
                {
                  name : "西雅图", image: "images/seattle.png", number: 21   
                },
                {
                  name : "旧金山", image: "images/sf.jpg", number: 64  
                },
                {
                  name : "拉斯维加斯", image: "images/lv.jpeg", number: 43   
                },
                ]
              },
              {
                category:"南美洲", 
                citys : [
                {
                  name : "巴西", image: "images/Briazil.jpg", number: 77   
                },
                {
                  name : "阿根廷", image: "images/afgentin.jpg", number: 123   
                },
                {
                  name : "墨西哥", image: "images/maxico.jpg", number: 234   
                },
                {
                  name : "巴拿马", image: "images/panama.jpg", number: 64   
                },
                {
                  name : "巴拉圭", image: "images/baragui.jpg", number: 43   
                },
                ]
              },
              {
                category:"欧洲", 
                citys : [
                {
                  name : "英国", image: "images/british.jpg", number: 77   
                },
                {
                  name : "法国", image: "images/france.jpg", number: 543   
                },
                {
                  name : "德国", image: "images/german.jpg", number: 234
                },
                {
                  name : "意大利", image: "images/italy.jpg", number: 12 
                },
                {
                  name : "希腊", image: "images/greece.jpg", number: 43  
                },
                ]
              },
              {
                category:"亚洲", 
                citys : [
                {
                  name : "中国", image: "images/china.jpg", number: 1890 
                },
                {
                  name : "日本", image: "images/japan.jpg", number: 245  
                },
                {
                  name : "韩国", image: "images/korea.jpg", number: 21   
                },
                {
                  name : "柬埔寨", image: "images/chai.jpg", number: 34  
                },
                {
                  name : "泰国", image: "images/Thailand.jpg", number: 111  
                },
                ]
              },

              ],
        sample: [
               ["美东", "美西", "夏威夷", "加拿大"],
               ["墨西哥", "坎昆", "巴西", "秘鲁"],
                ["英国", "法国", "意大利", "德国"],
                ["日本", "泰国", "中国", "新加坡","韩国"],
                ["定制团", "包车", "签证", "机票", "酒店"],
                ["名校游", "夏令营", "蜜月", "游轮"],
                ["美中", "中美", "美境内", "商务舱"]
         ],



        tripItems: [
            {
                name: "美国东海岸", image: "images/NAEast.png",citys: ["华盛顿","波士顿","纽约","尼亚加拉瀑布","费城","芝加哥","亚特兰大"],
                category: "北美旅游", alias: "US.EAST"
            },
            {
                name: "美国西海岸", image: "images/NAWest.gif",citys: ["洛杉矶","旧金山", "拉斯维加斯", "西雅图", "盐湖城", "丹佛", "圣地亚哥"],
                category :"北美旅游",  alias: "US.WEST"
            },
            {
                name: "夏威夷", image: "images/NAHA.png",citys: ["夏威夷", "茂宜岛", "欧胡岛", "火山岛", "珍珠港"],
                category :"北美旅游",  alias: "FLORIA"
            },
            {
                name: "佛罗里达", image: "images/NAFL.gif",citys: ["奥兰多", "迪士尼乐园", "迈阿密", "阳光沙滩"],
                category :"北美旅游",  alias: "HAWAII"
            },
            {
                name: "国家公园", image: "images/NAPK.png",citys:["黄石公园", "大峡谷", "优胜美地", "拱门国家公园", "鲍威尔湖", "太浩湖", "大提顿国家公园", "布莱斯峡谷"],
                category :"北美旅游",  alias: "PARK"
            },
            {
                name: "加拿大", image: "images/NACA.jpg",citys:["落基山", "温哥华", "多伦多", "渥太华", "蒙特利尔"],
                category :"北美旅游", alias:"CANADA"
            },
            {
                name: "墨西哥", image: "images/maxico.jpg",citys:["墨西哥城", "玛雅文化"],
                category :"南美旅游",  alias: "Mexico"
            },
            {
                name: "坎昆", image: "images/cacun.jpg",citys:["坎昆"],
                category :"南美旅游", alias: "Cancun"
            },
            {
                name: "巴西", image: "images/Briazil.jpg",citys:["里约热内卢", "巴西利亚"],
                category :"南美旅游",  alias: "Briazil"
            },
            {
                name: "秘鲁", image: "images/peru.jpg",citys:["秘鲁"],
                category :"南美旅游",  alias: "Peru"
            },
            {
                name: "英国", image: "images/British.jpg",citys: ["伦敦","爱丁堡","纽卡斯尔","新南安普顿","考文垂"],
                category :"欧洲",  alias: "British"
            },
            {
                name: "法国", image: "images/france.jpg",citys: ["巴黎","诺曼底","马赛","里昂"],
                category :"欧洲",  alias: "France"
            },
            {
                name: "意大利", image: "images/italy.jpg",citys: ["罗马","撒丁岛","米兰","威尼斯"],
                category :"欧洲",  alias: "Italy"
            },
            {
                name: "德国", image: "images/german.jpg",citys: ["柏林","法兰克福","慕尼黑"],
                category :"欧洲",  alias: "German"
            },
            {
                name: "日本", image: "images/japan.jpg",citys:["东京", "大阪", "早稻田", "名古屋"],
                category :"亚洲旅游",  alias: "Japan"
            },
            {
                name: "泰国", image: "images/Thailand.jpg",citys:["曼谷", "清迈"],
                category :"亚洲旅游",  alias: "Thailand"
            },
            {
                name: "中国", image: "images/china.jpg",citys:["北京","上海","西安","沈阳","长春"],
                category :"亚洲旅游",  alias: "China"
            },
            {
                name: "新加坡", image: "images/Singapore.jpg",citys:["新加坡"],
                category :"亚洲旅游",  alias: "Singapore"
            },
            {
                name: "定制团", image: "images/tuan.png",citys:["黄石公园", "大峡谷", "优胜美地", "拱门国家公园", "鲍威尔湖", "太浩湖", "大提顿国家公园", "布莱斯峡谷"],
                category :"自由行", alias: "Team"
            },
            {
                name: "包车", image: "images/car.jpeg",citys:["黄石公园", "大峡谷", "优胜美地", "拱门国家公园", "鲍威尔湖", "太浩湖", "大提顿国家公园", "布莱斯峡谷"],
                category :"自由行",  alias: "Bus"
            },
            {
                name: "签证", image: "images/vias.jpg",citys:["黄石公园", "大峡谷", "优胜美地", "拱门国家公园", "鲍威尔湖", "太浩湖", "大提顿国家公园", "布莱斯峡谷"],
                category :"自由行",  alias: "Visa"
            },
            {
                name: "机票", image: "images/tickets.jpeg",citys:["黄石公园", "大峡谷", "优胜美地", "拱门国家公园", "鲍威尔湖", "太浩湖", "大提顿国家公园", "布莱斯峡谷"],
                category :"自由行", alias: "Tickets"
            },
            {
                name: "酒店", image: "images/hotel.jpeg",citys:["希尔顿", "凯悦", "威斯汀"],
                category :"自由行",  alias: "Hotel"
            },
            {
                name: "名校游", image: "images/university.jpg",citys:["哈佛大学", "耶鲁大学"],
                category :"主题旅游",  alias: "University"
            },
            {
                name: "夏令营", image: "images/camp.jpeg",citys:["美东夏令营", "美西夏令营", "欧洲夏令营"],
                category :"主题旅游",  alias: "Camp"
            },
            {
                name: "蜜月", image: "images/honey.png",citys:["马尔代夫", "夏威夷", "帕劳"],
                category :"主题旅游", alias: "Honey Moon"
            },
            {
                name: "游轮", image: "images/cruise.jpg",citys:["女王游轮", "阿拉斯加游轮"],
                category :"主题旅游",  alias: "Cruise"
            },
            {
                name: "美中", image: "images/tickets.jpeg",citys:["海南航空", "东方航空", "大韩航空"],
                category :"特价机票",  alias: "Central American"
            },
            {
                name: "中美", image: "images/tickets.jpeg",citys:["海南航空", "东方航空", "大韩航空"],
                category :"特价机票",  alias: "American Central"
            },
            {
                name: "美境内", image: "images/tickets.jpeg",citys:["美航", "美联航", "西南航空", "大美航空"],
                category :"特价机票",  alias: "U.S.A"
            },
            {
                name: "商务舱", image: "images/tickets.jpeg",citys:["美航", "美联航", "全日航"],
                category :"特价机票",  alias: "First Class"
            }]
    };
});
