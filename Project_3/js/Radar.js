d3.csv("../db/heart.csv", function(heartData) {
    var ctx = document.getElementById("chart").getContext("2d");

    var age = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = age.reduce(reducer);
        return sum / heartData.age.lenth;
    });

    var chol = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = chol.reduce(reducer);
        return sum / heartData.chol.length;
    });

    var flouro = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = flouro.reduce(reducer);
        return sum / heartData.ca.length;
    });

    var bp = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = bp.reduce(reducer);
        return sum / heartData.trestbps.length;
    });

    var chestPain = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = chestPain.reduce(reducer);
        return sum / heartData.cp.length;
    });

    var stDepression = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = stDepression.reduce(reducer);
        return sum / heartData.oldpeak.length;
    });

    var maxHR = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = maxHR.reduce(reducer);
        return sum / heartData.thalach.length;
    });

    var thal = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = thal.reduce(reducer);
        return sum / heartData.thal.length;
    });

    var exang = heartData.map((heartData) => {
        const reducer = (total, currentValue) => total + currentValue
        const sum = exang.reduce(reducer);
        return sum / heartData.exang.length;
    });


    // const ageAvg = age  => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = age.reduce(reducer);
    //     return sum / age.length;
    // };

    // var chol = heartData.map((heartData) => {
    //     return heartData.chol;
    // });

    // const cholAvg = chol => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = chol.reduce(reducer);
    //     return sum / chol.length;
    // };

    // var flouro = heartData.map((heartData) => {
    //     return heartData.ca;
    // });

    // const flouroAvg = flouro => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = flouro.reduce(reducer);
    //     return sum / flouro.length;
    // };

    // var bp = heartData.map((heartData) => {
    //     return heartData.trestbps;
    // });

    // const bpAvg = bp => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = bp.reduce(reducer);
    //     return sum / bp.length;
    // };

    // var chestPain = heartData.map((heartData) => {
    //     return heartData.cp;
    // });

    // const chestPainAvg = chestPain => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = chestPain.reduce(reducer);
    //     return sum / chestPain.length;
    // };

    // var stDepression = heartData.map((heartData) => {
    //     return heartData.oldpeak;
    // });

    // const stDepressionAvg = stDepression => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = stDepression.reduce(reducer);
    //     return sum / stDepression.length;
    // };

    // var maxHR = heartData.map((heartData) => {
    //     return heartData.thalach;
    // });

    // const maxHRAvg = maxHR => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = maxHR.reduce(reducer);
    //     return sum / maxHR.length;
    // };


    // var thal = heartData.map((heartData) => {
    //     return heartData.thal;
    // });

    // const thalAvg = thal => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = thal.reduce(reducer);
    //     return sum / thal.length;
    // };


    // var exang = heartData.map((heartData) => {
    //     return heartData.exang;
    // });

    // const exangAvg = exang => {
    //     const reducer = (total, currentValue) => total + currentValue
    //     const sum = exang.reduce(reducer);
    //     return sum / exang.length;
    // };


    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Age', 'Cholesterol', 'Flouroscopy', 'Resting BP', 'Chest Pain', 'ST Depression', 'Max HR', 'Thal', 'Exercise Induced Angina'],
            datasets: [{
                data: [age, chol, flouro, bp, chestPain, stDepression, maxHR, thal, exang]
            }]
        },
        options: options
    });

});