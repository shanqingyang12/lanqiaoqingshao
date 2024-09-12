enum NeoPixelColors {
    //% block=红色
    Red = 0xFF0000,
    //% block=橙色
    Orange = 0xFFA500,
    //% block=黄色
    Yellow = 0xFFFF00,
    //% block=绿色
    Green = 0x00FF00,
    //% block=蓝色
    Blue = 0x0000FF,
    //% block=靛蓝色
    Indigo = 0x4b0082,
    //% block=蓝紫色
    Violet = 0x8a2be2,
    //% block=紫色的
    Purple = 0xFF00FF,
    //% block=白色
    White = 0xFFFFFF,
    //% block=黑色
    Black = 0x000000
}

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 1,
    //% block="RGB+W"
    RGBW = 2,
    //% block="RGB (RGB format)"
    RGB_RGB = 3
}

const enum IrButton {
    //% block="any"
    Any = -1,
    //% block=" "
    Unused_2 = -2,
    //% block=" "
    Unused_3 = -2,
    //% block="1"
    Number_1 = 0xA2,
    //% block="2"
    Number_2 = 0x62,
    //% block="3"
    Number_3 = 0xE2,
    //% block="4"
    Number_4 = 0x22,
    //% block="5"
    Number_5 = 0x02,
    //% block="6"
    Number_6 = 0xC2,
    //% block="7"
    Number_7 = 0xE0,
    //% block="8"
    Number_8 = 0xA8,
    //% block="9"
    Number_9 = 0x90,
    //% block="*"
    Star = 0x68,
    //% block="0"
    Number_0 = 0x98,
    //% block="#"
    Hash = 0xB0,
    //% block=" "
    Unused_4 = -2,
    //% block="▲"
    Up = 0x18,
    //% block=" "
    Unused_5 = -2,
    //% block="◀"
    Left = 0x10,
    //% block="OK"
    Ok = 0x38,
    //% block="▶"
    Right = 0x5A,
    //% block=" "
    Unused_6 = -3,
    //% block="▼"
    Down = 0x4A,
    //% block=" "
    Unused_7 = -4,

}

const enum IrButtonAction {
    //% block="按下"
    Pressed = 0,
    //% block="松开"
    Released = 1,
}

const enum IrProtocol {
    //% block="Keyestudio"
    Keyestudio = 0,
    //% block="NEC"
    NEC = 1,
}
enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}
let a: number, b: number;

//% weight=50 color=#0855AA icon="\uf26c" block="蓝桥青少"
namespace lanqiaoqingshao {

    let font: number[] = [];
    font[0] = 0x0022d422;
    font[1] = 0x0022d422;
    font[2] = 0x0022d422;
    font[3] = 0x0022d422;
    font[4] = 0x0022d422;
    font[5] = 0x0022d422;
    font[6] = 0x0022d422;
    font[7] = 0x0022d422;
    font[8] = 0x0022d422;
    font[9] = 0x0022d422;
    font[10] = 0x0022d422;
    font[11] = 0x0022d422;
    font[12] = 0x0022d422;
    font[13] = 0x0022d422;
    font[14] = 0x0022d422;
    font[15] = 0x0022d422;
    font[16] = 0x0022d422;
    font[17] = 0x0022d422;
    font[18] = 0x0022d422;
    font[19] = 0x0022d422;
    font[20] = 0x0022d422;
    font[21] = 0x0022d422;
    font[22] = 0x0022d422;
    font[23] = 0x0022d422;
    font[24] = 0x0022d422;
    font[25] = 0x0022d422;
    font[26] = 0x0022d422;
    font[27] = 0x0022d422;
    font[28] = 0x0022d422;
    font[29] = 0x0022d422;
    font[30] = 0x0022d422;
    font[31] = 0x0022d422;
    font[32] = 0x00000000;
    font[33] = 0x000002e0;
    font[34] = 0x00018060;
    font[35] = 0x00afabea;
    font[36] = 0x00aed6ea;
    font[37] = 0x01991133;
    font[38] = 0x010556aa;
    font[39] = 0x00000060;
    font[40] = 0x000045c0;
    font[41] = 0x00003a20;
    font[42] = 0x00051140;
    font[43] = 0x00023880;
    font[44] = 0x00002200;
    font[45] = 0x00021080;
    font[46] = 0x00000100;
    font[47] = 0x00111110;
    font[48] = 0x0007462e;
    font[49] = 0x00087e40;
    font[50] = 0x000956b9;
    font[51] = 0x0005d629;
    font[52] = 0x008fa54c;
    font[53] = 0x009ad6b7;
    font[54] = 0x008ada88;
    font[55] = 0x00119531;
    font[56] = 0x00aad6aa;
    font[57] = 0x0022b6a2;
    font[58] = 0x00000140;
    font[59] = 0x00002a00;
    font[60] = 0x0008a880;
    font[61] = 0x00052940;
    font[62] = 0x00022a20;
    font[63] = 0x0022d422;
    font[64] = 0x00e4d62e;
    font[65] = 0x000f14be;
    font[66] = 0x000556bf;
    font[67] = 0x0008c62e;
    font[68] = 0x0007463f;
    font[69] = 0x0008d6bf;
    font[70] = 0x000094bf;
    font[71] = 0x00cac62e;
    font[72] = 0x000f909f;
    font[73] = 0x000047f1;
    font[74] = 0x0017c629;
    font[75] = 0x0008a89f;
    font[76] = 0x0008421f;
    font[77] = 0x01f1105f;
    font[78] = 0x01f4105f;
    font[79] = 0x0007462e;
    font[80] = 0x000114bf;
    font[81] = 0x000b6526;
    font[82] = 0x010514bf;
    font[83] = 0x0004d6b2;
    font[84] = 0x0010fc21;
    font[85] = 0x0007c20f;
    font[86] = 0x00744107;
    font[87] = 0x01f4111f;
    font[88] = 0x000d909b;
    font[89] = 0x00117041;
    font[90] = 0x0008ceb9;
    font[91] = 0x0008c7e0;
    font[92] = 0x01041041;
    font[93] = 0x000fc620;
    font[94] = 0x00010440;
    font[95] = 0x01084210;
    font[96] = 0x00000820;
    font[97] = 0x010f4a4c;
    font[98] = 0x0004529f;
    font[99] = 0x00094a4c;
    font[100] = 0x000fd288;
    font[101] = 0x000956ae;
    font[102] = 0x000097c4;
    font[103] = 0x0007d6a2;
    font[104] = 0x000c109f;
    font[105] = 0x000003a0;
    font[106] = 0x0006c200;
    font[107] = 0x0008289f;
    font[108] = 0x000841e0;
    font[109] = 0x01e1105e;
    font[110] = 0x000e085e;
    font[111] = 0x00064a4c;
    font[112] = 0x0002295e;
    font[113] = 0x000f2944;
    font[114] = 0x0001085c;
    font[115] = 0x00012a90;
    font[116] = 0x010a51e0;
    font[117] = 0x010f420e;
    font[118] = 0x00644106;
    font[119] = 0x01e8221e;
    font[120] = 0x00093192;
    font[121] = 0x00222292;
    font[122] = 0x00095b52;
    font[123] = 0x0008fc80;
    font[124] = 0x000003e0;
    font[125] = 0x000013f1;
    font[126] = 0x00841080;
    font[127] = 0x0022d422;

    let _I2CAddr = 0;
    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);
    let _ZOOM = 1;

    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0;
        _buf3[1] = d1;
        _buf3[2] = d2;
        pins.i2cWriteBuffer(_I2CAddr, _buf3);
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0;
        _buf4[1] = d1;
        _buf4[2] = d2;
        _buf4[3] = d3;
        pins.i2cWriteBuffer(_I2CAddr, _buf4);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = col * (_ZOOM + 1)
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    // clear bit
    function clrbit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }

    /**
     * 在OLED中显示一个像素点
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param color is dot color, eg: 1
     */
    //% subcategory=OLED
    //% blockId="OLED12864_I2C_PIXEL" block="显示像素点 x%x|y%y|颜色%color"
    //% weight=70 blockGap=8
    export function pixel(x: number, y: number, color: number = 1) {
        let page = y >> 3
        let shift_page = y % 8
        let ind = x * (_ZOOM + 1) + page * 128 + 1
        let b = (color) ? (_screen[ind] | (1 << shift_page)) : clrbit(_screen[ind], shift_page)
        _screen[ind] = b
        set_pos(x, page)
        if (_ZOOM) {
            _screen[ind + 1] = b
            _screen[0] = 0x40
        }
        else {
            _screen[0] = 0x40
        }
    }

    /**
     * 在OLED中显示字符串
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param s is the text will be show, eg: 'Hello!'
     * @param color is string color, eg: 1
     */
    //% subcategory=OLED
    //% blockId="OLED12864_I2C_SHOWSTRING" block="显示字符串 |列 %x|行 %y|字符串 %s|颜色 %color"
    //% weight=80 blockGap=8
    export function showString(x: number, y: number, s: string, color: number = 1) {
        let col = 0
        let p = 0
        let ind = 0
        for (let n = 0; n < s.length; n++) {
            p = font[s.charCodeAt(n)]
            for (let i = 0; i < 5; i++) {
                col = 0
                for (let j = 0; j < 5; j++) {
                    if (p & (1 << (5 * i + j)))
                        col |= (1 << (j + 1))
                }
                ind = (x + n) * 5 * (_ZOOM + 1) + y * 128 + i * (_ZOOM + 1) + 1
                if (color == 0)
                    col = 255 - col
                _screen[ind] = col
                if (_ZOOM)
                    _screen[ind + 1] = col
            }
        }
    }

    /**
     * 在OLED中显示数字
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param num is the number will be show, eg: 12
     * @param color is number color, eg: 1
     */
    //% blockId="OLED12864_I2C_NUMBER" block="显示数字 |列 %x|行 %y|数字 %num|颜色 %color"
    //% weight=80 blockGap=8
    //% subcategory=OLED
    export function showNumber2(x: number, y: number, num: number, color: number = 1) {
        showString(x, y, num.toString(), color)
    }

    /**
     * 在OLED中显示一条水平线
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="OLED12864_I2C_HLINE" block="显示一条水平线 |x %x|y %y|长度 %len|颜色 %color"
    //% weight=71 blockGap=8
    //% subcategory=OLED
    export function hline(x: number, y: number, len: number, color: number = 1) {
        for (let i = x; i < (x + len); i++)
            pixel(i, y, color)
    }

    /**
     * 在OLED中显示一条垂直线
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="OLED12864_I2C_VLINE" block="显示一条垂直线 |x %x|y %y|长度 %len|颜色 %color"
    //% weight=72 blockGap=8
    //% subcategory=OLED
    export function vline(x: number, y: number, len: number, color: number = 1) {
        for (let i = y; i < (y + len); i++)
            pixel(x, i, color)
    }

    /**
     * 在OLED中显示一个矩形
     * @param x1 is X alis, eg: 0
     * @param y1 is Y alis, eg: 0
     * @param x2 is X alis, eg: 60
     * @param y2 is Y alis, eg: 30
     * @param color is line color, eg: 1
     */
    //% blockId="OLED12864_I2C_RECT" block="显示一个矩形 |x1 %x1 y1 %y1|x2 %x2 y2 %y2|颜色 %color"
    //% weight=73 blockGap=8
    //% subcategory=OLED
    export function rect(x1: number, y1: number, x2: number, y2: number, color: number = 1) {
        if (x1 > x2)
            x1 = [x2, x2 = x1][0];
        if (y1 > y2)
            y1 = [y2, y2 = y1][0];
        hline(x1, y1, x2 - x1 + 1, color)
        hline(x1, y2, x2 - x1 + 1, color)
        vline(x1, y1, y2 - y1 + 1, color)
        vline(x2, y1, y2 - y1 + 1, color)
    }

    /**
     * 在任意区域填充像素
     * @param x1 is X alis, eg: 0
     * @param y1 is Y alis, eg: 0
     * @param x2 is X alis, eg: 60
     * @param y2 is Y alis, eg: 30
     * @param color is line color, eg: 1
     */
    //% subcategory=OLED
    //% blockId="OLED12864_I2C_FILL" block="区域内填充像素  |x1 %x1|y1 %y1|x2 %x2|y2 %y2|颜色%color"
    //% weight=73 blockGap=8
    export function fill(x1: number, y1: number, x2: number, y2: number, color: number) {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                pixel(j, i, color)
            }
        }
    }

    /**
     * 清空行
     * @param y is Y alis, eg: 0
     */
    //% subcategory=OLED
    //% blockId="OLED12864_I2C_CLEAR_LINE" block="清空%y行"
    //% weight=62 blockGap=8
    export function clear_line(y: number) {
        if (_ZOOM) {
            hline(0, 0 + (y * 8), 64, 0)
            hline(0, 1 + (y * 8), 64, 0)
            hline(0, 2 + (y * 8), 64, 0)
            hline(0, 3 + (y * 8), 64, 0)
            hline(0, 4 + (y * 8), 64, 0)
            hline(0, 5 + (y * 8), 64, 0)
            hline(0, 6 + (y * 8), 64, 0)
            hline(0, 7 + (y * 8), 64, 0)
        }
        else {
            hline(0, 0 + (y * 8), 128, 0)
            hline(0, 1 + (y * 8), 128, 0)
            hline(0, 2 + (y * 8), 128, 0)
            hline(0, 3 + (y * 8), 128, 0)
            hline(0, 4 + (y * 8), 128, 0)
            hline(0, 5 + (y * 8), 128, 0)
            hline(0, 6 + (y * 8), 128, 0)
            hline(0, 7 + (y * 8), 128, 0)
        }

    }
    /**
     * 反转显示
     * @param d true: invert / false: normal, eg: true
     */
    //% blockId="OLED12864_I2C_INVERT" block="反转显示 %d"
    //% weight=65 blockGap=8
    //% subcategory=OLED
    export function invert(d: boolean = true) {
        let n = (d) ? 0xA7 : 0xA6
        cmd1(n)
    }

    /**
     * 绘制
     */
    //% blockId="OLED12864_I2C_DRAW" block="绘制"
    //% weight=64 blockGap=8
    //% subcategory=OLED
    export function draw() {
        set_pos()
        pins.i2cWriteBuffer(_I2CAddr, _screen)
    }

    /**
     * 清屏
     */
    //% blockId="OLED12864_I2C_CLEAR" block="清屏"
    //% weight=63 blockGap=8
    //% subcategory=OLED
    export function clear2() {
        _screen.fill(0)
        _screen[0] = 0x40
    }

    /**
     * 开启屏幕
     */
    //% blockId="OLED12864_I2C_ON" block="开启屏幕"
    //% weight=61 blockGap=8
    //% subcategory=OLED
    export function on2() {
        cmd1(0xAF)
    }

    /**
     * 关闭屏幕
     */
    //% blockId="OLED12864_I2C_OFF" block="关闭屏幕"
    //% weight=60 blockGap=8
    //% subcategory=OLED
    export function off2() {
        cmd1(0xAE)
    }

    /**
     * 缩放模式
     * @param d true zoom / false normal, eg: true
     */
    //% blockId="OLED12864_I2C_ZOOM" block="缩放模式%d"
    //% weight=60 blockGap=8
    //% subcategory=OLED
    export function zoom(d: boolean = true) {
        _ZOOM = (d) ? 0 : 1
        cmd2(0xd6, _ZOOM)
    }

    /**
     *  OLED初始化
     * @param addr is i2c addr
     */
    //% blockId="OLED12864_I2C_init" block=" OLED初始化 "
    //% weight=100 blockGap=8
    //% subcategory=OLED
    export function init() {
        _I2CAddr = 60;
        cmd1(0xAE)       // SSD1306_DISPLAYOFF
        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        cmd1(0xc8)       // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        cmd2(0xD6, 1)    // zoom on
        cmd1(0xAF)       // SSD1306_DISPLAYON
        clear2()
        draw()
        _ZOOM = 1
    }

    export enum DHT11Type {
        //% block="温度(℃)" enumval=0
        DHT11_temperature_C,

        //% block="温度(℉)" enumval=1
        DHT11_temperature_F,

        //% block="湿度(0~100)" enumval=2
        DHT11_humidity,
    }
    let dht11Humidity = 0
    let dht11Temperature = 0

    /**
     *获取温湿度值
     * @param dht11pin describe parameter here, eg: DigitalPin.P15
     */
    //% blockId="readdht11" block="获取%dht11type|在%dht11pin"
    //% weight=70 blockGap=8
    //% subcategory=DHT11
    export function dht11value(dht11type: DHT11Type, dht11pin: DigitalPin): number {
        const DHT11_TIMEOUT = 100
        const buffer = pins.createBuffer(40)
        const data = [0, 0, 0, 0, 0]
        let startTime = control.micros()

        if (control.hardwareVersion().slice(0, 1) !== '1') { // V2
            // TODO: V2 bug
            pins.digitalReadPin(DigitalPin.P0);
            pins.digitalReadPin(DigitalPin.P1);
            pins.digitalReadPin(DigitalPin.P2);
            pins.digitalReadPin(DigitalPin.P3);
            pins.digitalReadPin(DigitalPin.P4);
            pins.digitalReadPin(DigitalPin.P10);

            // 1.start signal
            pins.digitalWritePin(dht11pin, 0)
            basic.pause(18)

            // 2.pull up and wait 40us
            pins.setPull(dht11pin, PinPullMode.PullUp)
            pins.digitalReadPin(dht11pin)
            control.waitMicros(40)

            // 3.read data
            startTime = control.micros()
            while (pins.digitalReadPin(dht11pin) === 0) {
                if (control.micros() - startTime > DHT11_TIMEOUT) break
            }
            startTime = control.micros()
            while (pins.digitalReadPin(dht11pin) === 1) {
                if (control.micros() - startTime > DHT11_TIMEOUT) break
            }

            for (let dataBits = 0; dataBits < 40; dataBits++) {
                startTime = control.micros()
                while (pins.digitalReadPin(dht11pin) === 1) {
                    if (control.micros() - startTime > DHT11_TIMEOUT) break
                }
                startTime = control.micros()
                while (pins.digitalReadPin(dht11pin) === 0) {
                    if (control.micros() - startTime > DHT11_TIMEOUT) break
                }
                control.waitMicros(28)
                if (pins.digitalReadPin(dht11pin) === 1) {
                    buffer[dataBits] = 1
                }
            }
        } else { // V1
            // 1.start signal
            pins.digitalWritePin(dht11pin, 0)
            basic.pause(18)

            // 2.pull up and wait 40us
            pins.setPull(dht11pin, PinPullMode.PullUp)
            pins.digitalReadPin(dht11pin)
            control.waitMicros(40)

            // 3.read data
            if (pins.digitalReadPin(dht11pin) === 0) {
                while (pins.digitalReadPin(dht11pin) === 0);
                while (pins.digitalReadPin(dht11pin) === 1);

                for (let dataBits = 0; dataBits < 40; dataBits++) {
                    while (pins.digitalReadPin(dht11pin) === 1);
                    while (pins.digitalReadPin(dht11pin) === 0);
                    control.waitMicros(28)
                    if (pins.digitalReadPin(dht11pin) === 1) {
                        buffer[dataBits] = 1
                    }
                }
            }
        }

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                if (buffer[8 * i + j] === 1) {
                    data[i] += 2 ** (7 - j)
                }
            }
        }

        if (((data[0] + data[1] + data[2] + data[3]) & 0xff) === data[4]) {
            dht11Humidity = data[0] + data[1] * 0.1
            dht11Temperature = data[2] + data[3] * 0.1
        }

        switch (dht11type) {
            case DHT11Type.DHT11_temperature_C:
                return dht11Temperature
            case DHT11Type.DHT11_temperature_F:
                return (dht11Temperature * 1.8) + 32
            case DHT11Type.DHT11_humidity:
                return dht11Humidity
        }
    }




    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any

        /**
         * 设置所有灯珠的颜色
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="设置%strip|所有灯珠的颜色为%rgb=neopixel_colors"
        //% strip.defl=strip
        //% weight=85 blockGap=8
        //% subcategory=WS2812B
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }



        /**
        * 在所有灯珠上显示彩虹
        * @param startHue the start hue value for the rainbow, eg: 1
        * @param endHue the end hue value for the rainbow, eg: 360
        */
        //% blockId="neopixel_set_strip_rainbow" block="设置%strip|显示彩虹 色相从%startHue|到%endHue"
        //% strip.defl=strip
        //% weight=85 blockGap=8
        //% subcategory=WS2812B
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;

            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                    const s = Math.idiv((s1_100 + i * sStep), 100);
                    const l = Math.idiv((l1_100 + i * lStep), 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }



        /**
         * 给指定灯珠设置颜色
         * @param pixeloffset position of the NeoPixel in the strip
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_pixel_color" block="将%strip|第%pixeloffset|个灯珠的颜色设置为%rgb=neopixel_colors"
        //% strip.defl=strip
        //% blockGap=8
        //% weight=80
        //% subcategory=WS2812B
        setPixelColor(pixeloffset: number, rgb: number): void {
            a = pixeloffset;
            b = rgb;
            this.setPixelRGB(a >> 0, b >> 0);
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
        * 刷新修改
        */
        //% blockId="neopixel_show" block="%strip|刷新" blockGap=8
        //% strip.defl=strip
        //% weight=5
        //% subcategory=WS2812B
        show() {
            // only supported in beta
            // ws2812b.setBufferMode(this.pin, this._mode);
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * 关闭灯珠
         */
        //% blockId="neopixel_clear" block="关闭%strip|所有灯珠"
        //% strip.defl=strip
        //% weight=76
        //% subcategory=WS2812B
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
            ws2812b.sendBuffer(this.buf, this.pin);
        }


        /**
         * 设置灯条亮度. 适用于之后的操作
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="设置%strip|所有灯珠亮度为 %brightness|" blockGap=8
        //% strip.defl=strip
        //% weight=85
        //% subcategory=WS2812B
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
        * 创建一条新灯带
        * @param start offset in the LED strip to start the range
        * @param length number of LEDs in the range. eg: 4
        */
        //% weight=89
        //% blockId="neopixel_range" block="%strip|从像素 %start|开始 长度 %length|颗灯珠"
        //% strip.defl=strip
        //% subcategory=WS2812B
        //% blockSetVariable=range
        range(start: number, length: number): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            return strip;
        }

        /**
         * 将led向前移动并清零
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="neopixel_shift" block="将%strip|的灯珠向前移动%offset个单位" blockGap=8
        //% strip.defl=strip
        //% weight=40
        //% subcategory=WS2812B
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * 循环向前移动灯珠
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="neopixel_rotate" block="将%strip|灯珠以%offset个单位向前循环移动  |" blockGap=8
        //% strip.defl=strip
        //% weight=39
        //% subcategory=WS2812B
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        //% weight=10
        //% subcategory=WS2812B
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }


        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br > 0 && br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * 创建驱动灯条
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="引脚%pin|灯珠个数%numleds|显示模式%mode"
    //% weight=90 blockGap=8
    //% subcategory=WS2812B
    //% blockSetVariable=strip

    export function create(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
        let strip = new Strip();
        let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode || NeoPixelMode.RGB;
        strip._matrixWidth = 0;
        strip.setBrightness(128)
        strip.setPin(pin)
        return strip;
    }

    /**
     *将红、绿、蓝转换为RGB颜色
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=15 blockGap=8
    //% blockId="neopixel_rgb" block="R%red|G%green|B%blue"
    //% subcategory=WS2812B
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * 获取已知颜色的RGB颜色
    */
    //% weight=5 blockGap=8
    //% blockId="neopixel_colors" block="%color"
    //% subcategory=WS2812B
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * 将色调,饱和度,亮度转化为RGB值
     * @param h hue from 0 to 360
     * @param s saturation from 0 to 99
     * @param l luminosity from 0 to 99
     */
    //% blockId=neopixelHSL block="色调%h|饱和度%s|亮度%l"
    //% weight=10 blockGap=10
    //% subcategory=WS2812B
    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }

    let COMMAND_I2C_ADDRESS = 0x24
    let DISPLAY_I2C_ADDRESS = 0x34
    let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];

    let _intensity = 3
    let dbuf = [0, 0, 0, 0]

    /**
     * send command to display
     * @param is command, eg: 0
     */
    function cmd(c: number) {
        pins.i2cWriteNumber(COMMAND_I2C_ADDRESS, c, NumberFormat.Int8BE)
    }

    /**
     * send data to display
     * @param is data, eg: 0
     */
    function dat(bit: number, d: number) {
        pins.i2cWriteNumber(DISPLAY_I2C_ADDRESS + (bit % 4), d, NumberFormat.Int8BE)
    }

    /**
     * 打开数码管显示
     */
    //% blockId="TM650_ON" block="开启显示"
    //% weight=50 blockGap=8
    //% subcategory=数码管
    export function TM650_ON() {
        cmd(_intensity * 16 + 1)
    }

    /**
     * 关闭数码管显示
     */
    //% blockId="TM650_OFF" block="关闭显示"
    //% weight=50 blockGap=8
    //% subcategory=数码管
    export function TM650_OFF() {
        _intensity = 0
        cmd(0)
    }

    /**
     * 清空数码管显示
     */
    //% blockId="TM650_CLEAR" block="清空显示"
    //% weight=40 blockGap=8
    //% subcategory=数码管
    export function TM650_CLEAR() {
        dat(0, 0)
        dat(1, 0)
        dat(2, 0)
        dat(3, 0)
        dbuf = [0, 0, 0, 0]
    }

    /**
     * 在指定位置显示
     * @param digit is number (0-15) will be shown, eg: 1
     * @param bit is position, eg: 0
     */
    //% blockId="TM650_DIGIT" block="显示数字%num|在第%bit位"
    //% weight=80 blockGap=8
    //% num.max=15 num.min=0
    //% subcategory=数码管
    export function digit(num: number, bit: number) {
        dbuf[bit % 4] = _SEG[num % 16]
        dat(bit, _SEG[num % 16])
    }

    /**
     * 显示数字
     * @param num is number will be shown, eg: 100
     */
    //% blockId="TM650_SHOW_NUMBER" block="显示数字%num"
    //% weight=100 blockGap=8
    //% subcategory=数码管
    export function TM650_SHOW_NUMBER(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit(Math.idiv(num, 1000) % 10, 0)
        digit(num % 10, 3)
        digit(Math.idiv(num, 10) % 10, 2)
        digit(Math.idiv(num, 100) % 10, 1)
    }

    /**
     * 显示16进制数字
     * @param num is number will be shown, eg: 123
     */
    //% blockId="TM650_SHOW_HEX_NUMBER" block="显示16进制数字%num"
    //% weight=90 blockGap=8
    //% subcategory=数码管
    export function TM650_SHOW_HEX_NUMBE(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit((num >> 12) % 16, 0)
        digit(num % 16, 3)
        digit((num >> 4) % 16, 2)
        digit((num >> 8) % 16, 1)
    }

    /**
     * 显示点在指定位子
     * @param bit is positiion, eg: 0
     * @param show is true/false, eg: true
     */
    //% blockId="TM650_SHOW_DP" block="显示第%bit小数点|%num"
    //% weight=80 blockGap=8
    //% subcategory=数码管
    export function showDpAt(bit: number, show: boolean) {
        if (show) dat(bit, dbuf[bit % 4] | 0x80)
        else dat(bit, dbuf[bit % 4] & 0x7F)
    }

    /**
     * 显示亮度
     * @param dat is intensity of the display, eg: 3
     */
    //% blockId="TM650_INTENSITY" block="设置显示亮度为%dat"
    //% weight=70 blockGap=8
    //% subcategory=数码管
    export function setIntensity(dat: number) {
        if ((dat < 0) || (dat > 8))
            return;
        if (dat == 0)
            TM650_OFF()
        else {
            _intensity = dat
            cmd((dat << 4) | 0x01)
        }
    }

    TM650_ON();


    export enum Thread {
        Priority = 0,
        UserCallback = 1,
    }

    export enum Mode {
        Repeat,
        Once,
    }

    class Executor {
        _newJobs: Job[] = undefined;
        _jobsToRemove: number[] = undefined;
        _pause: number = 100;
        _type: Thread;

        constructor(type: Thread) {
            this._type = type;
            this._newJobs = [];
            this._jobsToRemove = [];
            control.runInParallel(() => this.loop());
        }

        push(task: () => void, delay: number, mode: Mode): number {
            if (delay > 0 && delay < this._pause && mode === Mode.Repeat) {
                this._pause = Math.floor(delay);
            }
            const job = new Job(task, delay, mode);
            this._newJobs.push(job);
            return job.id;
        }

        cancel(jobId: number) {
            this._jobsToRemove.push(jobId);
        }

        loop(): void {
            const _jobs: Job[] = [];

            let previous = control.millis();

            while (true) {
                const now = control.millis();
                const delta = now - previous;
                previous = now;

                // Add new jobs
                this._newJobs.forEach(function (job: Job, index: number) {
                    _jobs.push(job);
                });
                this._newJobs = [];

                // Cancel jobs
                this._jobsToRemove.forEach(function (jobId: number, index: number) {
                    for (let i = _jobs.length - 1; i >= 0; i--) {
                        const job = _jobs[i];
                        if (job.id == jobId) {
                            _jobs.removeAt(i);
                            break;
                        }
                    }
                });
                this._jobsToRemove = []


                // Execute all jobs
                if (this._type === Thread.Priority) {
                    // newest first
                    for (let i = _jobs.length - 1; i >= 0; i--) {
                        if (_jobs[i].run(delta)) {
                            this._jobsToRemove.push(_jobs[i].id)
                        }
                    }
                } else {
                    // Execute in order of schedule
                    for (let i = 0; i < _jobs.length; i++) {
                        if (_jobs[i].run(delta)) {
                            this._jobsToRemove.push(_jobs[i].id)
                        }
                    }
                }

                basic.pause(this._pause);
            }
        }
    }

    class Job {
        id: number;
        func: () => void;
        delay: number;
        remaining: number;
        mode: Mode;

        constructor(func: () => void, delay: number, mode: Mode) {
            this.id = randint(0, 2147483647)
            this.func = func;
            this.delay = delay;
            this.remaining = delay;
            this.mode = mode;
        }

        run(delta: number): boolean {
            if (delta <= 0) {
                return false;
            }

            this.remaining -= delta;
            if (this.remaining > 0) {
                return false;
            }

            switch (this.mode) {
                case Mode.Once:
                    this.func();
                    basic.pause(0);
                    return true;
                case Mode.Repeat:
                    this.func();
                    this.remaining = this.delay;
                    basic.pause(0);
                    return false;
            }
        }
    }

    const queues: Executor[] = [];

    export function schedule(
        func: () => void,
        type: Thread,
        mode: Mode,
        delay: number,
    ): number {
        if (!func || delay < 0) return 0;

        if (!queues[type]) {
            queues[type] = new Executor(type);
        }

        return queues[type].push(func, delay, mode);
    }

    export function remove(type: Thread, jobId: number): void {
        if (queues[type]) {
            queues[type].cancel(jobId);
        }
    }

    let irState: IrState;

    const IR_REPEAT = 256;
    const IR_INCOMPLETE = 257;
    const IR_DATAGRAM = 258;

    const REPEAT_TIMEOUT_MS = 120;

    interface IrState {
        protocol: IrProtocol;
        hasNewDatagram: boolean;
        bitsReceived: uint8;
        addressSectionBits: uint16;
        commandSectionBits: uint16;
        hiword: uint16;
        loword: uint16;
        activeCommand: number;
        repeatTimeout: number;
        onIrButtonPressed: IrButtonHandler[];
        onIrButtonReleased: IrButtonHandler[];
        onIrDatagram: () => void;
    }
    class IrButtonHandler {
        irButton: IrButton;
        onEvent: () => void;

        constructor(
            irButton: IrButton,
            onEvent: () => void
        ) {
            this.irButton = irButton;
            this.onEvent = onEvent;
        }
    }


    function appendBitToDatagram(bit: number): number {
        irState.bitsReceived += 1;

        if (irState.bitsReceived <= 8) {
            irState.hiword = (irState.hiword << 1) + bit;
            if (irState.protocol === IrProtocol.Keyestudio && bit === 1) {
                // recover from missing message bits at the beginning
                // Keyestudio address is 0 and thus missing bits can be detected
                // by checking for the first inverse address bit (which is a 1)
                irState.bitsReceived = 9;
                irState.hiword = 1;
            }
        } else if (irState.bitsReceived <= 16) {
            irState.hiword = (irState.hiword << 1) + bit;
        } else if (irState.bitsReceived <= 32) {
            irState.loword = (irState.loword << 1) + bit;
        }

        if (irState.bitsReceived === 32) {
            irState.addressSectionBits = irState.hiword & 0xffff;
            irState.commandSectionBits = irState.loword & 0xffff;
            return IR_DATAGRAM;
        } else {
            return IR_INCOMPLETE;
        }
    }

    function decode(markAndSpace: number): number {
        if (markAndSpace < 1600) {
            // low bit
            return appendBitToDatagram(0);
        } else if (markAndSpace < 2700) {
            // high bit
            return appendBitToDatagram(1);
        }

        irState.bitsReceived = 0;

        if (markAndSpace < 12500) {
            // Repeat detected
            return IR_REPEAT;
        } else if (markAndSpace < 14500) {
            // Start detected
            return IR_INCOMPLETE;
        } else {
            return IR_INCOMPLETE;
        }
    }

    function enableIrMarkSpaceDetection(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullNone);

        let mark = 0;
        let space = 0;

        pins.onPulsed(pin, PulseValue.Low, () => {
            // HIGH, see https://github.com/microsoft/pxt-microbit/issues/1416
            mark = pins.pulseDuration();
        });

        pins.onPulsed(pin, PulseValue.High, () => {
            // LOW
            space = pins.pulseDuration();
            const status = decode(mark + space);

            if (status !== IR_INCOMPLETE) {
                handleIrEvent(status);
            }
        });
    }

    function handleIrEvent(irEvent: number) {

        // Refresh repeat timer
        if (irEvent === IR_DATAGRAM || irEvent === IR_REPEAT) {
            irState.repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
        }

        if (irEvent === IR_DATAGRAM) {
            irState.hasNewDatagram = true;

            if (irState.onIrDatagram) {
                schedule(irState.onIrDatagram, Thread.UserCallback, Mode.Once, 0);
            }

            const newCommand = irState.commandSectionBits >> 8;

            // Process a new command
            if (newCommand !== irState.activeCommand) {

                if (irState.activeCommand >= 0) {
                    const releasedHandler = irState.onIrButtonReleased.find(h => h.irButton === irState.activeCommand || IrButton.Any === h.irButton);
                    if (releasedHandler) {
                        schedule(releasedHandler.onEvent, Thread.UserCallback, Mode.Once, 0);
                    }
                }

                const pressedHandler = irState.onIrButtonPressed.find(h => h.irButton === newCommand || IrButton.Any === h.irButton);
                if (pressedHandler) {
                    schedule(pressedHandler.onEvent, Thread.UserCallback, Mode.Once, 0);
                }

                irState.activeCommand = newCommand;
            }
        }
    }

    function initIrState() {
        if (irState) {
            return;
        }

        irState = {
            protocol: undefined,
            bitsReceived: 0,
            hasNewDatagram: false,
            addressSectionBits: 0,
            commandSectionBits: 0,
            hiword: 0, // TODO replace with uint32
            loword: 0,
            activeCommand: -1,
            repeatTimeout: 0,
            onIrButtonPressed: [],
            onIrButtonReleased: [],
            onIrDatagram: undefined,
        };
    }

    /**
     * 在指定引脚连接红外接收模块，配置红外协议。
     * @param pin IR receiver pin, eg: DigitalPin.P0
     * @param protocol IR protocol, eg: IrProtocol.Keyestudio
     */
    //% subcategory=红外遥控
    //% blockId="makerbit_infrared_connect_receiver"
    //% block="红外接收器引脚 %pin|设置解码方式为%protocol|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    //% weight=90

    export function connectIrReceiver(
        pin: DigitalPin,
        protocol: IrProtocol
    ): void {
        initIrState();

        if (irState.protocol) {
            return;
        }

        irState.protocol = protocol;

        enableIrMarkSpaceDetection(pin);

        schedule(notifyIrEvents, Thread.Priority, Mode.Repeat, REPEAT_TIMEOUT_MS);
    }

    function notifyIrEvents() {
        if (irState.activeCommand === -1) {
            // skip to save CPU cylces
        } else {
            const now = input.runningTime();
            if (now > irState.repeatTimeout) {
                // repeat timed out

                const handler = irState.onIrButtonReleased.find(h => h.irButton === irState.activeCommand || IrButton.Any === h.irButton);
                if (handler) {
                    schedule(handler.onEvent, Thread.UserCallback, Mode.Once, 0);
                }

                irState.bitsReceived = 0;
                irState.activeCommand = -1;
            }
        }
    }

    /**
     * 当遥控器特定按钮被按下或释放时 产生事件
     * @param button the button to be checked
     * @param action the trigger action
     * @param handler body code to run when the event is raised
     */
    //% subcategory=红外遥控
    //% blockId=makerbit_infrared_on_ir_button
    //% block="当按钮|%button|被%action时"
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    //% weight=80

    export function onIrButton(
        button: IrButton,
        action: IrButtonAction,
        handler: () => void
    ) {
        initIrState();
        if (action === IrButtonAction.Pressed) {
            irState.onIrButtonPressed.push(new IrButtonHandler(button, handler));
        }
        else {
            irState.onIrButtonReleased.push(new IrButtonHandler(button, handler));
        }
    }

    /**
     * 返回最后按下的按钮的代码。如果还没有按钮被按下，返回-1。
     */
    //% subcategory=红外遥控
    //% blockId=makerbit_infrared_ir_button_pressed
    //% block="红外接收值"
    //% weight=60

    export function irButton(): number {
        basic.pause(0); // Yield to support background processing when called in tight loops
        if (!irState) {
            return IrButton.Any;
        }
        return irState.commandSectionBits >> 8;
    }

    /**
     * 接收到红外数据时发生事件
     * @param handler body code to run when the event is raised
     */
    //% subcategory=红外遥控
    //% blockId=makerbit_infrared_on_ir_datagram
    //% block="接收到红外数据时"
    //% weight=70

    export function onIrDatagram(handler: () => void) {
        initIrState();
        irState.onIrDatagram = handler;
    }

    /**
     * 返回32位十六进制字符串形式的IR数据报，当未接收到返回0x00000000
     */
    //% subcategory=红外遥控
    //% blockId=makerbit_infrared_ir_datagram
    //% block="红外接收值(十六进制)"
    //% weight=30

    export function irDatagram(): string {
        basic.pause(0); // Yield to support background processing when called in tight loops
        initIrState();
        return (
            "0x" +
            ir_rec_to16BitHex(irState.addressSectionBits) +
            ir_rec_to16BitHex(irState.commandSectionBits)
        );
    }

    /**
     * Returns true if any IR data was received since the last call of this function. False otherwise.
     */
    //% subcategory=红外遥控
    //% blockId=makerbit_infrared_was_any_ir_datagram_received
    //% block="收到红外数据"
    //% weight=50

    export function wasIrDataReceived(): boolean {
        basic.pause(0); // Yield to support background processing when called in tight loops
        initIrState();
        if (irState.hasNewDatagram) {
            irState.hasNewDatagram = false;
            return true;
        } else {
            return false;
        }
    }

    /**
     * 返回特定按钮的值
     * @param button the button
     */
    //% subcategory=红外遥控
    //% blockId=makerbit_infrared_button_code
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    //% block="按钮%button的值"
    //% weight=40

    export function irButtonCode(button: IrButton): number {
        basic.pause(0); // Yield to support background processing when called in tight loops
        return button as number;
    }

    function ir_rec_to16BitHex(value: number): string {
        let hex = "";
        for (let pos = 0; pos < 4; pos++) {
            let remainder = value % 16;
            if (remainder < 10) {
                hex = remainder.toString() + hex;
            } else {
                hex = String.fromCharCode(55 + remainder) + hex;
            }
            value = Math.idiv(value, 16);
        }
        return hex;
    }

    let i2cAddr_hc_sr04 = 0x57;

    /**
     * 读取超声波测量距离
     * @param trig ,eg:P4
     * @param echo ,eg:P6
     */
    //% subcategory=超声波
    //% blockId=ultrasonic_sensor block="获取超声波数据  | Trig %trig| Echo %echo| 数据单位 %unit"
    //% weight=90  
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }


    let i2cAddr_tof = 0x29
    let IO_TIMEOUT = 1000
    let SYSRANGE_START = 0x00
    let EXTSUP_HV = 0x89
    let MSRC_CONFIG = 0x60
    let FINAL_RATE_RTN_LIMIT = 0x44
    let SYSTEM_SEQUENCE = 0x01
    let SPAD_REF_START = 0x4f
    let SPAD_ENABLES = 0xb0
    let REF_EN_START_SELECT = 0xb6
    let SPAD_NUM_REQUESTED = 0x4e
    let INTERRUPT_GPIO = 0x0a
    let INTERRUPT_CLEAR = 0x0b
    let GPIO_MUX_ACTIVE_HIGH = 0x84
    let RESULT_INTERRUPT_STATUS = 0x13
    let RESULT_RANGE_STATUS = 0x14
    let OSC_CALIBRATE = 0xf8
    let MEASURE_PERIOD = 0x04

    let started = false
    let stop_variable = 0
    let spad_count = 0
    let is_aperture = false
    let spad_map: number[] = [0, 0, 0, 0, 0, 0]

    function readReg(raddr: number): number {
        pins.i2cWriteNumber(i2cAddr_tof, raddr, NumberFormat.UInt8BE, false)
        let d = pins.i2cReadNumber(i2cAddr_tof, NumberFormat.UInt8BE, false)
        return d;
    }

    function readReg16(raddr: number): number {
        pins.i2cWriteNumber(i2cAddr_tof, raddr, NumberFormat.UInt8BE, false)
        let d = pins.i2cReadNumber(i2cAddr_tof, NumberFormat.UInt16BE, false)
        return d;
    }

    function writeReg(raddr: number, d: number): void {
        pins.i2cWriteNumber(i2cAddr_tof, ((raddr << 8) + d), NumberFormat.UInt16BE, false)
    }

    function writeReg16(raddr: number, d: number): void {
        pins.i2cWriteNumber(i2cAddr_tof, raddr, NumberFormat.UInt8BE, false)
        pins.i2cWriteNumber(i2cAddr_tof, d, NumberFormat.UInt16BE, false)
    }

    function readFlag(register: number = 0x00, bit: number = 0): number {
        let data = readReg(register)
        let mask = 1 << bit
        return (data & mask)
    }

    function writeFlag(register: number = 0x00, bit: number = 0, onflag: boolean): void {
        let data = readReg(register)
        let mask = 1 << bit
        if (onflag)
            data |= mask
        else
            data &= ~mask
        writeReg(register, data)
    }

    /**
    * 初始化TOF模块.
    **/
    //% subcategory=TOF测距
    //% block="TOF测距初始化"
    //% blockId=ranger_init
    //% weight=100
    export function TOF_init(): void {
        let r1 = readReg(0xc0)
        let r2 = readReg(0xc1)
        let r3 = readReg(0xc2)

        if (r1 != 0xEE || r2 != 0xAA || r3 != 0x10) {
            return
        }
        let power2v8 = true
        writeFlag(EXTSUP_HV, 0, power2v8)

        // I2C standard mode
        writeReg(0x88, 0x00)
        writeReg(0x80, 0x01)
        writeReg(0xff, 0x01)
        writeReg(0x00, 0x00)
        stop_variable = readReg(0x91)
        writeReg(0x00, 0x01)
        writeReg(0xff, 0x00)
        writeReg(0x80, 0x00)

        writeFlag(MSRC_CONFIG, 1, true)
        writeFlag(MSRC_CONFIG, 4, true)

        writeReg16(FINAL_RATE_RTN_LIMIT, Math.floor(0.25 * (1 << 7)))

        writeReg(SYSTEM_SEQUENCE, 0xff)

        if (!spad_info())
            return

        pins.i2cWriteNumber(i2cAddr_tof, SPAD_ENABLES, NumberFormat.UInt8BE, false)
        let sp1 = pins.i2cReadNumber(i2cAddr_tof, NumberFormat.UInt16BE, false)
        let sp2 = pins.i2cReadNumber(i2cAddr_tof, NumberFormat.UInt16BE, false)
        let sp3 = pins.i2cReadNumber(i2cAddr_tof, NumberFormat.UInt16BE, false)
        spad_map[0] = (sp1 >> 8) & 0xFF
        spad_map[1] = sp1 & 0xFF
        spad_map[2] = (sp2 >> 8) & 0xFF
        spad_map[3] = sp2 & 0xFF
        spad_map[4] = (sp3 >> 8) & 0xFF
        spad_map[5] = sp3 & 0xFF

        // set reference spads
        writeReg(0xff, 0x01)
        writeReg(SPAD_REF_START, 0x00)
        writeReg(SPAD_NUM_REQUESTED, 0x2c)
        writeReg(0xff, 0x00)
        writeReg(REF_EN_START_SELECT, 0xb4)

        let spads_enabled = 0
        for (let i = 0; i < 48; i++) {
            if ((i < 12 && is_aperture) || (spads_enabled >= spad_count)) {
                spad_map[i >> 3] &= ~(1 << (i >> 2))
            } else if (spad_map[i >> 3] & (1 << (i >> 2))) {
                spads_enabled += 1
            }
        }

        writeReg(0xff, 0x01)
        writeReg(0x00, 0x00)

        writeReg(0xff, 0x00)
        writeReg(0x09, 0x00)
        writeReg(0x10, 0x00)
        writeReg(0x11, 0x00)

        writeReg(0x24, 0x01)
        writeReg(0x25, 0xFF)
        writeReg(0x75, 0x00)

        writeReg(0xFF, 0x01)
        writeReg(0x4E, 0x2C)
        writeReg(0x48, 0x00)
        writeReg(0x30, 0x20)

        writeReg(0xFF, 0x00)
        writeReg(0x30, 0x09)
        writeReg(0x54, 0x00)
        writeReg(0x31, 0x04)
        writeReg(0x32, 0x03)
        writeReg(0x40, 0x83)
        writeReg(0x46, 0x25)
        writeReg(0x60, 0x00)
        writeReg(0x27, 0x00)
        writeReg(0x50, 0x06)
        writeReg(0x51, 0x00)
        writeReg(0x52, 0x96)
        writeReg(0x56, 0x08)
        writeReg(0x57, 0x30)
        writeReg(0x61, 0x00)
        writeReg(0x62, 0x00)
        writeReg(0x64, 0x00)
        writeReg(0x65, 0x00)
        writeReg(0x66, 0xA0)

        writeReg(0xFF, 0x01)
        writeReg(0x22, 0x32)
        writeReg(0x47, 0x14)
        writeReg(0x49, 0xFF)
        writeReg(0x4A, 0x00)

        writeReg(0xFF, 0x00)
        writeReg(0x7A, 0x0A)
        writeReg(0x7B, 0x00)
        writeReg(0x78, 0x21)

        writeReg(0xFF, 0x01)
        writeReg(0x23, 0x34)
        writeReg(0x42, 0x00)
        writeReg(0x44, 0xFF)
        writeReg(0x45, 0x26)
        writeReg(0x46, 0x05)
        writeReg(0x40, 0x40)
        writeReg(0x0E, 0x06)
        writeReg(0x20, 0x1A)
        writeReg(0x43, 0x40)

        writeReg(0xFF, 0x00)
        writeReg(0x34, 0x03)
        writeReg(0x35, 0x44)

        writeReg(0xFF, 0x01)
        writeReg(0x31, 0x04)
        writeReg(0x4B, 0x09)
        writeReg(0x4C, 0x05)
        writeReg(0x4D, 0x04)

        writeReg(0xFF, 0x00)
        writeReg(0x44, 0x00)
        writeReg(0x45, 0x20)
        writeReg(0x47, 0x08)
        writeReg(0x48, 0x28)
        writeReg(0x67, 0x00)
        writeReg(0x70, 0x04)
        writeReg(0x71, 0x01)
        writeReg(0x72, 0xFE)
        writeReg(0x76, 0x00)
        writeReg(0x77, 0x00)

        writeReg(0xFF, 0x01)
        writeReg(0x0D, 0x01)

        writeReg(0xFF, 0x00)
        writeReg(0x80, 0x01)
        writeReg(0x01, 0xF8)

        writeReg(0xFF, 0x01)
        writeReg(0x8E, 0x01)
        writeReg(0x00, 0x01)
        writeReg(0xFF, 0x00)
        writeReg(0x80, 0x00)

        writeReg(INTERRUPT_GPIO, 0x04)
        writeFlag(GPIO_MUX_ACTIVE_HIGH, 4, false)
        writeReg(INTERRUPT_CLEAR, 0x01)

        writeReg(SYSTEM_SEQUENCE, 0x01)
        if (!calibrate(0x40))
            return
        writeReg(SYSTEM_SEQUENCE, 0x02)
        if (!calibrate(0x00))
            return
        writeReg(SYSTEM_SEQUENCE, 0xe8)

        return
    }

    function spad_info(): boolean {
        writeReg(0x80, 0x01)
        writeReg(0xff, 0x01)
        writeReg(0x00, 0x00)
        writeReg(0xff, 0x06)

        writeFlag(0x83, 3, true)
        writeReg(0xff, 0x07)
        writeReg(0x81, 0x01)
        writeReg(0x80, 0x01)
        writeReg(0x94, 0x6b)
        writeReg(0x83, 0x00)

        let timeout = 0
        while (readReg(0x83) == 0) {
            timeout++
            basic.pause(1)
            if (timeout == IO_TIMEOUT)
                return false
        }

        writeReg(0x83, 0x01)
        let value = readReg(0x92)
        writeReg(0x81, 0x00)
        writeReg(0xff, 0x06)

        writeFlag(0x83, 3, false)

        writeReg(0xff, 0x01)
        writeReg(0x00, 0x01)

        writeReg(0xff, 0x00)
        writeReg(0x80, 0x00)

        spad_count = value & 0x7f
        is_aperture = ((value & 0b10000000) == 0b10000000)
        return true
    }

    function calibrate(val: number): boolean {
        writeReg(SYSRANGE_START, 0x01 | val)
        let timeout = 0
        while ((readReg(RESULT_INTERRUPT_STATUS) & 0x07) == 0) {
            timeout++
            basic.pause(1)
            if (timeout == IO_TIMEOUT)
                return false
        }

        writeReg(INTERRUPT_CLEAR, 0x01)
        writeReg(SYSRANGE_START, 0x00)
        return true
    }

    function startContinous(period: number = 0): void {
        writeReg(0x80, 0x01)
        writeReg(0xFF, 0x01)
        writeReg(0x00, 0x00)
        writeReg(0x91, stop_variable)
        writeReg(0x00, 0x01)
        writeReg(0xFF, 0x00)
        writeReg(0x80, 0x00)
        let oscilator = 0
        if (period)
            oscilator = readReg16(OSC_CALIBRATE)
        if (oscilator) {
            period *= oscilator
            writeReg16(MEASURE_PERIOD, (period >> 16) & 0xffff)
            pins.i2cWriteNumber(i2cAddr_tof, period & 0xffff, NumberFormat.UInt16BE, false)
            writeReg(SYSRANGE_START, 0x04)
        } else {
            writeReg(SYSRANGE_START, 0x02)
        }
        started = true
    }

    function stopContinous(): void {
        writeReg(SYSRANGE_START, 0x01)
        writeReg(0xFF, 0x01)
        writeReg(0x00, 0x00)
        writeReg(0x91, stop_variable)
        writeReg(0x00, 0x01)
        writeReg(0xFF, 0x00)
        started = false
    }

    function readContinousDistance(): number {
        let timeout = 0
        while ((readReg(RESULT_INTERRUPT_STATUS) & 0x07) == 0) {
            timeout++
            basic.pause(1)
            if (timeout == IO_TIMEOUT)
                return 0
        }
        let value = readReg16(RESULT_RANGE_STATUS + 10)
        writeReg(INTERRUPT_CLEAR, 0x01)
        return value
    }

    /**
    * 返回TOF测量的距离(单位 mm).
    **/
    //% subcategory=TOF测距
    //% block="TOF测量的距离(mm)"
    //% blockId=ranger_dist_mm
    //% weight=90
    export function distance(): number {
        let timeout = 0
        if (!started) {
            writeReg(0x80, 0x01)
            writeReg(0xFF, 0x01)
            writeReg(0x00, 0x00)
            writeReg(0x91, stop_variable)
            writeReg(0x00, 0x01)
            writeReg(0xFF, 0x00)
            writeReg(0x80, 0x00)
            writeReg(SYSRANGE_START, 0x01)
            while (readReg(SYSRANGE_START) & 0x01) {
                timeout++
                basic.pause(1)
                if (timeout == IO_TIMEOUT)
                    return 0
            }
        }
        timeout = 0
        while ((readReg(RESULT_INTERRUPT_STATUS) & 0x07) == 0) {
            timeout++
            basic.pause(1)
            if (timeout == IO_TIMEOUT)
                return 0
        }
        let value = readReg16(RESULT_RANGE_STATUS + 10)
        writeReg(INTERRUPT_CLEAR, 0x01)
        return value;
    }

}