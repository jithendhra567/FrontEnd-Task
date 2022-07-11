export const lineChart = {
    animationEnabled: true,
    height: 100,
    theme: "light2", // "light1", "dark1", "dark2"
    axisY: {
        includeZero: false,
        suffix: "k",
        gridColor: "#e8e7e6",
        interval: 4,
    },
    axisX: {
        prefix: "W",
        lineColor: '#e8e7e6',
        interval: 2
    },
    data: [{
        type: "line",
        lineColor: "red",
        dataPoints: [
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
            { x: 4, y: 2 },
            { x: 5, y: 4 },
        ]
    }]
}

export const splineChart = {
    animationEnabled: true,
    height: 120,
    backgroundColor: "rgb(54, 88, 224)",
    axisY: {
        includeZero: false,
        suffix: "k",
        gridColor: "#6B8EFF",
        lineColor: "rgb(54, 88, 224)",
        labelFontColor: 'white',
        interval: 2,
    },
    axisX: {
        prefix: "W",
        lineColor: "rgb(54, 88, 224)",
        labelFontColor: 'white',
        interval: 2
    },
    data: [
        {
            markerType: "none",
            type: "spline",
            lineColor: "white",
            dataPoints: [
                { x: 1, y: 3 },
                { x: 2, y: 6 },
                { x: 3, y: 2 },
                { x: 4, y: 3 },
                { x: 5, y: 6 },
            ]
        },
        {
            markerType: "none",
            type: "spline",
            lineColor: "rgba(3, 34, 92, 0.697)",
            dataPoints: [
                { x: 1, y: 6 },
                { x: 2, y: 3 },
                { x: 3, y: 2 },
                { x: 4, y: 6 },
                { x: 5, y: 2 },
            ]
        },
    ]
}

export const barChart = {
    height: 70,
    animationEnabled: true,
    axisX:{
        lineThickness: 0,
        tickThickness: 0,
        labelFormatter: function(e:any) { 
            return "";
        }
    },
    axisY:{
        lineThickness: 0,
        gridThickness: 0,
        tickLength: 0,
        labelFormatter: function(e:any) { 
            return "";
        }
    },
    dataPointWidth: 3,
    data: [
    {
        type: "column",
        dataPoints: [
            { y: 0.2, color: '#f27e44'  },
            { y: 0.4, color: '#f27e44'  },
            { y: 0.2, color: '#f27e44'  },
            { y: 0.5, color: '#f27e44'  },
            { y: 0.1, color: '#f27e44'  },
            { y: 0.2, color: '#f27e44'  },
            { y: 0.3, color: '#f27e44'  },
            { y: 0.5, color: '#f27e44'  },
            { y: 0.7, color: '#f27e44'  },
            { y: 0.4, color: '#f27e44'  },
            { y: 0.2, color: '#f27e44'  },
            { y: 0.1, color: '#f27e44'  },
            { y: 0.2, color: '#f27e44'  },
            { y: 0.5, color: '#f27e44'  },
            { y: 0.1, color: '#f27e44'  },
            { y: 0.5, color: '#f27e44'  },
            { y: 0.3, color: '#f27e44'  },
            { y: 0.5, color: '#f27e44'  },
            { y: 0.3, color: '#f27e44'  },
            
        ]
    }
    ]
}

export const barchart2 = {
    height: 70,
    animationEnabled: true,
    axisX:{
        lineThickness: 0,
        tickThickness: 0,
        labelFormatter: function(e:any) {
            return "";
        }
    },
    axisY:{
        lineThickness: 0,
        gridThickness: 0,
        tickLength: 0,
        labelFormatter: function(e:any) {

            return "";
        }
    },
    dataPointWidth: 4,
    data: [
        {
            type: "column",
            dataPoints: [
                { y: 0.2, color: '#726bff'  },
                { y: 0.4, color: '#726bff'  },
                { y: 0.2, color: '#726bff'  },
                { y: 0.5, color: '#726bff'  },
                { y: 0.1, color: '#726bff'  },
                { y: 0.2, color: '#726bff'  },
                { y: 0.3, color: '#726bff'  },
                { y: 0.5, color: '#726bff'  },
                { y: 0.7, color: '#726bff'  },
                { y: 0.4, color: '#726bff'  },
                { y: 0.2, color: '#726bff'  },
                { y: 0.1, color: '#726bff'  },
                { y: 0.2, color: '#726bff'  },
                { y: 0.5, color: '#726bff'  },
                { y: 0.1, color: '#726bff'  },
                { y: 0.5, color: '#726bff'  },
                { y: 0.3, color: '#726bff'  },
                { y: 0.5, color: '#726bff'  },
                { y: 0.3, color: '#726bff'  },
                
            ]
        }
    ]
}

export const barChart3 = {
    height: 120,
    backgroundColor: "rgb(3, 0, 55)",
    animationEnabled: true,
    axisX:{
        lineThickness: 0,
        tickThickness: 0,
        labelFormatter: function(e:any) {
            return "";
        }
    },
    axisY:{
        lineThickness: 0,
        gridThickness: 0,
        tickLength: 0,
        labelFormatter: function(e:any) {
            return "";
        }
    },
    dataPointWidth: 4,
    data: [
        {
            type: "column",
            dataPoints: [
                { y: 0.2, color: '#902eff'  },
                { y: 0.4, color: '#902eff'  },
                { y: 0.2, color: '#902eff'  },
                { y: 0.5, color: '#902eff'  },
                { y: 0.2, color: '#902eff'  },
                { y: 0.4, color: '#902eff'  },
                { y: 0.2, color: '#902eff'  },
                { y: 0.5, color: '#902eff'  },
                { y: 0.1, color: '#8539ff'  },
                { y: 0.2, color: '#8539ff'  },
                { y: 0.3, color: '#8539ff'  },
                { y: 0.5, color: '#8539ff'  },
                { y: 0.7, color: '#7b42fe'  },
                { y: 0.4, color: '#7b42fe'  },
                { y: 0.2, color: '#7b42fe'  },
                { y: 0.1, color: '#7b42fe'  },
                { y: 0.2, color: '#7b42fe'  },
                { y: 0.5, color: '#7b42fe'  },
                { y: 0.1, color: '#7b42fe'  },
                { y: 0.5, color: '#5b54f9'  },
                { y: 0.3, color: '#5b54f9'  },
                { y: 0.5, color: '#5b54f9'  },
                { y: 0.3, color: '#5b54f9'  },
                { y: 0.2, color: '#5158f6'  },
                { y: 0.4, color: '#5158f6'  },
                { y: 0.2, color: '#5158f6'  },
                { y: 0.5, color: '#5158f6'  },
                { y: 0.1, color: '#5158f6'  },
                { y: 0.2, color: '#465cf3'  },
                { y: 0.3, color: '#465cf3'  },
                { y: 0.5, color: '#465cf3'  },
                { y: 0.7, color: '#465cf3'  },
                { y: 0.4, color: '#465cf3'  },
                { y: 0.2, color: '#3c5ff0'  },
                { y: 0.1, color: '#3c5ff0'  },
                { y: 0.2, color: '#3c5ff0'  },
                { y: 0.5, color: '#3c5ff0'  },
                { y: 0.1, color: '#3c5ff0'  },
                { y: 0.5, color: '#3262ec'  },
                { y: 0.3, color: '#3262ec'  },
                { y: 0.5, color: '#3262ec'  },
                { y: 0.3, color: '#3262ec'  },
                
            ]
        }
    ]
}

export const donutChart = {
    animationEnabled: true,
    height: 150,
    subtitles: [{
        text: "☆",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true
    }],
    data: [{
        type: "doughnut",
        dataPoints: [
            { y: 31, color: '#726bff' },
            { y: 40, color: '#24a7ff' },
            { y: 17, color: '#f27e44' },
        ]
    }]
}