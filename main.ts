
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://pxt.microbit.org/blocks/custom
 */

/**
 * Custom blocks
 */

//% color=#0fbc11 icon="\uf111"
//% block="Coduck继电器"
namespace tinkercademy {

    //% weight=100
    //% block="打开继电器 %p"
    export function RelayOn(p: DigitalPin): void {
        pins.digitalWritePin(p, 1);
    }

    //% weight=90
    //% block="关闭继电器 %p"
    export function RelayOff(p: DigitalPin): void {
        pins.digitalWritePin(p, 0);
    }
}


