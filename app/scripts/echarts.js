// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
let option = {
  legend: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },

  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
