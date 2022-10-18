bluetooth.onBluetoothConnected(function () {
    serial.writeString("Starting UART")
    basic.showIcon(IconNames.Yes)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    serial.writeString("UART Disabled")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(cmd)
    bluetooth.uartWriteString(cmd)
    basic.showIcon(IconNames.Happy)
})
let cmd = ""
basic.showIcon(IconNames.House)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
