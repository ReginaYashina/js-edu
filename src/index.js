/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = defaultStudentSpeedConfig
) {
  let hours;
  let value;
  let result;
  if (knowsProgramming == true) {
    hours = 800;
  } else {
    hours = 1300;
  }
  for (key in config) {
    if (key == focus) {
      value = config[key];
      result = hours / value;
    }
  }
  return Math.ceil(result);
};








