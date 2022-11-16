def on_bluetooth_connected():
    basic.show_icon(IconNames.YES)
    bluetooth.start_uart_service()
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.NO)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_uart_data_received():
    global cmd
    cmd = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
    if cmd == "Push":
        pins.digital_write_pin(DigitalPin.P0, 1)
        if input.button_is_pressed(Button.A):
            pins.digital_write_pin(DigitalPin.P0, 0)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
    bluetooth.uart_write_string(cmd)
    basic.show_icon(IconNames.HAPPY)
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.HASH), on_uart_data_received)

cmd = ""
pins.digital_write_pin(DigitalPin.P0, 0)
basic.show_icon(IconNames.HOUSE)