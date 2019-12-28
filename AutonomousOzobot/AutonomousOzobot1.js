var WheelSpeed;
var dWSmax;
var dWSL;
var dWSR;
var dWS;

// Function returns TRUE if an obstable is detected by left front sensor
function ObstacleLeft() {
  if (getIrIntensity(LEFT_FRONT) > 10) {
    return true;
  }
  return false;
}
// Function returns TRUE if an obstable is detected by right front sensor
function ObstacleRight() {
  if (getIrIntensity(RIGHT_FRONT) > 10) {
    return true;
  }
  return false;
}


WheelSpeed = 75;
dWSmax = 30;
dWSL = 0;
dWSR = 0;
while (true) {
  setWheelSpeeds(WheelSpeed + dWSL, WheelSpeed + dWSR);
  if (ObstacleLeft() && dWSL < dWSmax) {
    dWSL = dWSL + 1;
    setLEDColorRGB(LED_TOP, 127, 0, 0);
  }
  if (ObstacleRight() && dWSR < dWSmax) {
    dWSR = dWSR + 1;
    setLEDColorRGB(LED_TOP, 0, 127, 0);
  }
  if (ObstacleLeft() == false && dWSL > 0) {
    dWSL = dWSL - 1;
    setLEDColorRGB(LED_TOP, 127, 64, 0);
  }
  if (ObstacleRight() == false && dWSR > 0) {
    dWSR = dWSR - 1;
    setLEDColorRGB(LED_TOP, 64, 127, 0);
  }
  if (dWS == 0 && dWSL == 0) {
    setLEDColorRGB(LED_TOP, 127, 127, 127);
  }
}