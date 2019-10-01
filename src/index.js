/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      hoursInWeek = 168
      beginnerToMaster = 1300
      normalToMaster = 800

      let configMap = new Map(Object.entries(config))

      knowsProgramming ? 
      education = (normalToMaster/hoursInWeek)/(configMap.get(focus)/hoursInWeek) :
      education = (beginnerToMaster/hoursInWeek)/(configMap.get(focus)/hoursInWeek)

      return Math.ceil(education); 
  };
  