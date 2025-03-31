input.onButtonPressed(Button.A, function () {
    if (distance > 10) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, 20)
        basic.pause(600)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
        basic.showNumber(2)
    } else {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, 20)
        basic.pause(1500)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
        basic.showNumber(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (distance > 20) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, 20)
        basic.pause(1500)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
        basic.showNumber(3)
    } else {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, 20)
        basic.pause(1000)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
        basic.showNumber(1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (distance > 20) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, 20)
        basic.pause(600)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
        basic.showNumber(3)
    } else {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, 20)
        basic.pause(500)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
        basic.showNumber(1)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (sonarswitch == 0) {
        sonarswitch = 1
        basic.showIcon(IconNames.Yes)
    } else {
        sonarswitch = 0
        basic.showIcon(IconNames.No)
    }
})
let distance = 0
let sonarswitch = 0
sonarswitch = 1
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    serial.writeValue("distance", distance)
    if (sonarswitch == 1) {
    	
    }
})
