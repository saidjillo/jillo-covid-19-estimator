
const covid19ImpactEstimator = (data) => data;

const covid19DataReport = (regionData, periodType, timeToElapse,
  reportedCases, population, totalHospitalBeds) => {
  const resultantReport = {};
  resultantReport.data = {
    region: {
      name: regionData.region,
      avgAge: regionData.avgAge,
      avgDailyIncomeInUSD: regionData.avgDailyIncomeInUSD,
      avgDailyIncomePopulation: regionData.avgDailyIncomePopulation
    },
    periodType,
    timeToElapse,
    reportedCases,
    population,
    totalHospitalBeds
  };
  resultantReport.impact = {
    currentlyInfected: reportedCases * 10,
    infectionsByRequestedTime: currentlyInfected * 1024
  };
  resultantReport.severeImpact = {
    currentlyInfected: reportedCases * 50,
    infectionsByRequestedTime: currentlyInfected * 1024
  };
  return covid19ImpactEstimator(resultantReport);
};
const covid19CaptureFunction = (name, avgAge, avgDailyIncomeInUSD,
  avgDailyIncomePopulation, periodType, timeToElapse, reportedCases,
  population, totalHospitalBeds) => {
  const regionData = {
    name,
    avgAge,
    avgDailyIncomeInUSD,
    avgDailyIncomePopulation
  };
  return covid19DataReport(regionData, periodType, timeToElapse,
    reportedCases, population, totalHospitalBeds);
};

covid19CaptureFunction('Africa', 19.7, 5, 0.71, 'days', 58, 674, 66622705, 1380614);

export default covid19ImpactEstimator;
