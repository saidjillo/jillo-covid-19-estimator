const covid19ImpactEstimator = (data) => data;

const covid19DataReport = 
    (regionData, periodType, timeToElapse, reportedCases, population, totalHospitalBeds) => {
 
    const resultantReport = {};

    resultantReport.data = {
        region: {
            name: regionData.region,
            avgAge: regionData.avgAge,
            avgDailyIncomeInUSD: regionData.avgDailyIncomeInUSD,
            avgDailyIncomePopulation: regionData.avgDailyIncomePopulation
            },
        periodType: periodType,
        timeToElapse: timeToElapse,
        reportedCases: reportedCases,
        population: population,
        totalHospitalBeds: totalHospitalBeds
    };

    resultantReport.impact = {
        currentlyInfected: reportedCases * 10,
        infectionsByRequestedTime: currentlyInfected * 1024
    };

    resultantReport.severeImpact = {
        currentlyInfected: reportedCases * 50,
        infectionsByRequestedTime: currentlyInfected * 1024
    };

    console.log(resultantReport);
    return covid19ImpactEstimator(resultantReport);

}

const covid19CaptureFunction = 
    (name,avgAge, avgDailyIncomeInUSD,
        avgDailyIncomePopulation,periodType, timeToElapse, reportedCases,
        population, totalHospitalBeds) => {
    
    const regionData = {
        name: name,
        avgAge: avgAge,
        avgDailyIncomeInUSD: avgDailyIncomeInUSD,
        avgDailyIncomePopulation: avgDailyIncomePopulation
    };


    return covid19DataReport(regionData, periodType, timeToElapse, 
        reportedCases, population, totalHospitalBeds);
}


export default covid19ImpactEstimator;
