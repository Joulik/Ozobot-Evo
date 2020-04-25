var direction;

function randomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


while (true) {
  setWheelSpeeds(50, 50);
  system_set_timer(0);
  if (getSurfaceColor() == #000000) {
    move(10, -50);
    direction = randomInt(1, 2);
    if (direction == 1) {
      setLEDColorRGB(LED_TOP, 0, 127, 0);
      rotate(randomInt(-120, -30), 30);
    } else {
      setLEDColorRGB(LED_TOP, 127, 0, 0);
      rotate(randomInt(30, 120), 30);
    }
  }
  if (getSurfaceColor() == #0000ff) {
    setWheelSpeeds(0, 0);
    sayColor((getSurfaceColor()));
    for (var count = 0; count < 10; count++) {
      setLEDColor(LED_TOP, (getSurfaceColor()));
      delay(20);
      turnLEDOff(LED_TOP);
      delay(20);
    }
    play(HAPPY);
    terminate(EXIT_POWER_DOWN);
  }
}