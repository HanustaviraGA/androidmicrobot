bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(cmd)
    bluetooth.uartWriteString(cmd)
    basic.showIcon(IconNames.Happy)
})
let cmd = ""
basic.showIcon(IconNames.House)
music.playMelody("G C5 C5 - C5 G A B ", 115)
