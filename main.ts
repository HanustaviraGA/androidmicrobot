bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "Push") {
        bluetooth.uartWriteString(cmd)
        pins.digitalWritePin(DigitalPin.P0, 1)
        while (cmd == "Push") {
            if (input.buttonIsPressed(Button.A)) {
                break;
            }
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        bluetooth.uartWriteString("Stop")
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.showIcon(IconNames.Happy)
})
let cmd = ""
pins.digitalWritePin(DigitalPin.P0, 0)
basic.showIcon(IconNames.House)
