var myChart = echarts.init(document.getElementById('myMap'));

var data = [
    {name: '周口', value: ['1995.12 ～ forever', '出生成长的地方，永远的家']},
    {name: '南京', value: ['2018.9 ～ now', '18年就读南京师范大学！']},
	{name: '焦作', value: ['2014.9 ～ 2018.7', '14年就读河南理工大学！']},
	{name: '北京', value: ['emmm', '时不时的去找自己的女朋友哦！']},
	{name: '杭州', value: ['2014.8 ', '高三毕业和小伙伴一起兼职，顺便逛了一圈！']},
	{name: '绵阳', value: ['2018.8', '有幸去绵阳刷了一圈！第一次坐灰机']},
	{name: '郑州', value: ['emmmm', '本科的时候去找小伙伴玩，去了不少学校！']}
];
var geoCoordMap = {
    '周口':[114.65048,33.64738],
    '南京':[118.916683,32.112189],
	'焦作':[113.274063,35.193959],
	'北京':[116.354524,39.996876],
	'杭州':[120.12792,30.228932],
	'绵阳':[104.688147,31.474032],
	'郑州':[113.667636,34.752965]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {
		text: '足迹',
		left: 'center'	
    },
    tooltip: {
        trigger: 'item',
        padding: 15,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (params) {
            name = params.name
            time = params.value[2]
            describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + name
                + '</div>'
                + time
                + '<br>'
                + describe;
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#E9E7C4',
                borderColor: '#b5aac5'
            },
            emphasis: {
                areaColor: '#a59ca5'
            }
        }
    },
    series : [
        {
			backgroundColor: 'transparent',
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true  ,
					fontSize: 10
                }
            },
			symbolSize:8,
			 hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#7400a1',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);