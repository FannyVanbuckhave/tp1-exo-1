input.onButtonPressed(Button.A, function () {
    x += -1
    led.unplot(x + 1, y)
    if (x < -1) {
        x = 0
    }
})
input.onButtonPressed(Button.B, function () {
    x += 1
    led.unplot(x - 1, y)
    if (x > 4) {
        x = 4
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
    if (x == 0) {
        while (x < 4) {
            basic.pause(1000)
            x += 1
            led.plot(x, y)
            led.unplot(x - 1, y)
        }
        if (x == 4) {
            while (x > 0) {
                basic.pause(1000)
                x += -1
                led.plot(x, y)
                led.unplot(x + 1, y)
            }
        }
    }
})
