d3.csv('../db/heart.csv', function(heartData) {
    console.log(heartData);
    var ctx = document.getElementById("ageChart").getContext("2d");

    var age = heartData.map((heartData) => {
        return heartData.age;
        });
    // var sex = heartData.map((heartData) => {
    //     return heartData.sex;
    //     });
    
    // var trestbps = heartData.map((heartData) => {
    //     return heartData.trestbps;
    //     });
    // var chol = heartData.map((heartData) => {
    //     return heartData.chol;
    //     });
    // var fbs = heartData.map((heartData) => {
    //     return heartData.fbs;
    //     });
    // var restecg = heartData.map((heartData) => {
    //     return heartData.restecg;
    //     });
    // var thalach = heartData.map((heartData) => {
    //     return heartData.thalach;
    //     });
    // var exang = heartData.map((heartData) => {
    //     return heartData.exang;
    //     });
    // var oldpeak = heartData.map((heartData) => {
    //     return heartData.oldpeak;
    //     });
    // var slope = heartData.map((heartData) => {
    //     return heartData.slope;
    //     });
    // var ca = heartData.map((heartData) => {
    //     return +heartData.ca;
    //     });
    // var thal = heartData.map((heartData) => {
    //     return heartData.thal;
    //     });
    // var sex_count = sex.reduce ( (tally, sex) => { tally[sex] = (tally[sex] || 0) +  1 ; return tally;} , {});
    
    // var fbs_count = fbs.reduce ( (tally, fbs) => {tally[fbs] = (tally[fbs] || 0) + 1 ; return tally;}, {});
    // var restecg_count = restecg.reduce ( (tally, restecg) => { tally[restecg] = (tally[restecg] || 0) +  1 ; return tally;} , {});
    // var exang_count = exang.reduce ( (tally, exang) => {tally[exang] = (tally[exang] || 0) + 1 ; return tally;} , {});
    // var slope_count = slope.reduce ( (tally, slope) => {tally[slope] = (tally[slope] || 0) + 1 ; return tally;}, {});
    // var ca_count = ca.reduce ( (tally, ca) => { tally[ca] = (tally[ca] || 0) +  1 ; return tally;} , {});
    // var thalach_count = thalach.reduce ( (tally, thalach) => {tally[thalach] = (tally[thalach] || 0) + 1 ; return tally;} , {});

    // heartData.age = +age
    // heartData.trestbps = +trestbps
    // heartData.chol = +chol
    // heartData.thalach = +thalach
    // heartData.oldpeak = +oldpeak
    // console.log(sex_count);
    // console.log(fbs_count);
    // console.log(restecg_count);
    // console.log(exang_count);
    // console.log(slope_count);
    // console.log(ca_count);
    // // console.log(thal_count);

    // console.log(age);
    // console.log(trestbps);
    // console.log(chol);
    // console.log(thalach);
    // console.log(oldpeak);
    var ageBins = d3.layout.histogram()  // create layout object
        .bins(9)       // to use 20 bins
        .range([1,10])  
        (age);
    
    xaxisAge = ['20-29', '30-39', '40-49','50-59','60-69','70-79','80+']

    var ageChart = new Chart(ctx, {
    type: "bar",
    options: {
      maintainAspectRatio: false,
      legend: {display: false}, tooltips: {
        // enabled: true,
        // mode: 'single',
        callbacks: { label: function(tooltipItems) {
                return Number(tooltipItems.yLabel);}}},
        scales: {
        xAxes: [{
            ticks:{
                fontColor: "White"
            },
            scaleLabel: {
              display: true,
              labelString: 'Age',
              fontSize: 12,
              fontColor: "White"
            }}],
        yAxes: [{
            ticks:{
                fontColor: "White"
            },
            scaleLabel: {
                display: true,
                labelString: 'Numbers',
                fontSize: 12,
                fontColor: "White"
            }}]}},
        data: {labels: xaxisAge, datasets: [{
          data: ageBins,
          backgroundColor: 'rgba(255, 255, 255,0.4)',
          borderColor: 'rgba(255, 255, 255,0.8)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 255, 255,1)',
          hoverBorderColor: 'rgba(255, 255, 255,1)',
          hoverBorderWidth: 1}]}
});
});

d3.csv('../db/gender.csv', function(heartData) {
    console.log(heartData);
    var ctx = document.getElementById("sexChart").getContext("2d");
    var sex = heartData.map((heartData) => {
        return +heartData.counts;
        });
    var sexChart = new Chart(ctx, {
        type: "bar",
        options: {
        maintainAspectRatio: false,
        legend: {display: false}, tooltips: {
            // enabled: true,
            // mode: 'single',
            callbacks: { label: function(tooltipItems) {
                    return Number(tooltipItems.yLabel);}}},
            scales: {
            xAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                display: true,
                labelString: 'Gender',
                fontSize: 12,
                fontColor: "White"
                }}],
            yAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Count',
                    fontSize: 12,
                    fontColor: "White"
                }}]}},
            data: {labels: ["Male", "Female"], datasets: [{
            data: sex,
            backgroundColor: 'rgba(255, 255, 255,0.4)',
            borderColor: 'rgba(255, 255, 255,0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 255, 255,1)',
            hoverBorderColor: 'rgba(255, 255, 255,1)',
            hoverBorderWidth: 1}]}
    });
    });

d3.csv('../db/flouro.csv', function(heartData) {
    console.log(heartData);
    var ctx = document.getElementById("flouroChart").getContext("2d");
    var ca = heartData.map((heartData) => {
        return +heartData.counts;
        });
    var cpChart = new Chart(ctx, {
        type: "bar",
        options: {
        maintainAspectRatio: false,
        legend: {display: false}, tooltips: {
            // enabled: true,
            // mode: 'single',
            callbacks: { label: function(tooltipItems) {
                    return Number(tooltipItems.yLabel);}}},
            scales: {
            xAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                display: true,
                labelString: 'Flouroscopy Results',
                fontSize: 12,
                fontColor: "White"
                }}],
            yAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Count',
                    fontSize: 12,
                    fontColor: "White"
                }}]}},
            data: {labels: ["None", "Mild", "Moderate", "Moderate/Severe", "Severe"], datasets: [{
            data: ca,
            backgroundColor: 'rgba(255, 255, 255,0.4)',
            borderColor: 'rgba(255, 255, 255,0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 255, 255,1)',
            hoverBorderColor: 'rgba(255, 255, 255,1)',
            hoverBorderWidth: 1}]}
    });
    });

d3.csv('../db/chestPain.csv', function(heartData) {
    console.log(heartData);
    var ctx = document.getElementById("cpChart").getContext("2d");
    var cp = heartData.map((heartData) => {
        return +heartData.counts;
        });
    var cpChart = new Chart(ctx, {
        type: "bar",
        options: {
        maintainAspectRatio: false,
        legend: {display: false}, tooltips: {
            // enabled: true,
            // mode: 'single',
            callbacks: { label: function(tooltipItems) {
                    return Number(tooltipItems.yLabel);}}},
            scales: {
            xAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                display: true,
                labelString: 'Age',
                fontSize: 12,
                fontColor: "White"
                }}],
            yAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Numbers',
                    fontSize: 12,
                    fontColor: "White"
                }}]}},
            data: {labels: ["None", "Mild", "Moderate", "Severe"], datasets: [{
            data: cp,
            backgroundColor: 'rgba(255, 255, 255,0.4)',
            borderColor: 'rgba(255, 255, 255,0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 255, 255,1)',
            hoverBorderColor: 'rgba(255, 255, 255,1)',
            hoverBorderWidth: 1}]}
    });
    });

    d3.csv('../db/heart.csv', function(heartData) {
        console.log(heartData);
        var ctx = document.getElementById("hrChart").getContext("2d");
        var thalach = heartData.map((heartData) => {
            return heartData.thalach;
            });
        var thalach_count = thalach.reduce ( (tally, thalach) => {tally[thalach] = (tally[thalach] || 0) + 1 ; return tally;} , {});
        var cpChart = new Chart(ctx, {
            type: "bar",
            options: {
            maintainAspectRatio: false,
            legend: {display: false}, tooltips: {
                // enabled: true,
                // mode: 'single',
                callbacks: { label: function(tooltipItems) {
                        return Number(tooltipItems.yLabel);}}},
                scales: {
                xAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                    display: true,
                    labelString: 'Age',
                    fontSize: 12,
                    fontColor: "White"
                    }}],
                yAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Numbers',
                        fontSize: 12,
                        fontColor: "White"
                    }}]}},
                data: {labels: thalach, datasets: [{
                data: thalach_count,
                backgroundColor: 'rgba(255, 255, 255,0.4)',
                borderColor: 'rgba(255, 255, 255,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 255, 255,1)',
                hoverBorderColor: 'rgba(255, 255, 255,1)',
                hoverBorderWidth: 1}]}
        });
        });
// 228, 39, 39