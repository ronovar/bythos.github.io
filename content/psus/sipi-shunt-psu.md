---
title: "Sipi Shunt PSU"
date: 2022-07-29T18:46:45Z
draft: false
---
#### High Class Shunt PSU

{{< image-gallery >}}

SIPI SHUNT psu is designed to be applied as an upgrade in analog and digital playback equipment like (SA)CD players, DACs, PREAMPs and alike. The shunts drop in instead of commonly used industrial types of regulators. Having much lower noise, true wide bandwidth and linear output impedance, they'll bring improvement to sound in terms of:

- higher resolution
- better transparency
- clean low ends
- increased dynamics

Traditionally, voltage regulators never where designed for audio applications. As an example, the very popular 7805 initially was designed as a voltage regulator for digital logic and low micro controllers - who cared about bandwidth or output noise. Derrivatives like 7815 and 7915 are widely used to supply the analogue output stage of CD players. About time for an upgrade!

### Why Shunt?

The shunts consist of an active wide band current source to isolate the input from the output. The output is regulated by an active shunt regualtor with both low output noise and wide active bandwidth. For RF frequencies using the shunts is also beneficial in terms of additional decoupling: All output electrolytics can be left out!

### Circuit details

{{< click-zoom src="/bythos.github.io/images/sipi-shunt-psu-schematic.png" height="100%" width="100%" >}}

At input AC connectors we have CRC filter that is used to suppress toroidal "ringing", so we need to only find R1 and R2 value using "Quasimodo" test jig to get lowest "ringing" as possible. If you don't have testing jig you can use default 150Ω as starting value. Next circuit is a full wave bridge rectifier that is used to convert AC sinusoidal voltage to DC voltage, and we have used here MBR1100 Shottky Diode that have fast turn ON/OFF recovery time with low dropout voltage.

After full wave rectifier there is a RCC filter that "surpress" noise generated from rectifier and that comes from AC voltage outlet. If you have few volts larger DC voltage that will be come to our shunt regulator you can increase or decrease these resistor values in RCC filter.

Rectified and filtered DC voltage is then feed to Constant Current Source (Q1 & Q4) that is limiting current at output. Reference voltage for CCS is RED LED that have forward voltage of 1,7V. Using resistors (R7 & R8) we set maximum current that will be available at the output using formula R=1V/limiting current. So we set our CCS to be limiting current of about 66mA. Our shunt gets about 25mA-30mA to function correctly, so output available current for load is about 40mA. If you need larger value you can decrease resistors (R7 & R8) to get larger available current for load.Max output current is 100mA available for load (plus 25mA-30mA for shunt themself to function correctly). LED biasing current is about 2-3mA and is set using JFET connected as CCS, and it's current is set using resistors (R10 & R12).

Because AC filtering capacitor for shunt is large value (C15 & C16) ie 47uF we use simple BJT and zener that at startup it fast charges capacitors (C15 & C16), and after these capacitors is fully charge BJT and zener is inactive. This allows us to get fast startup below 1 seconds, without them startup will be around 5-6seconds.

Next circuit is our shunt reference TL431 that is used to set reference voltage for output shunt element (Q9 & Q10), using trimmer (P1 & P2) we can set output voltage for our load which controls shunt elements (Q9 & Q10). Here is one exceptional note that in positive and negative rail we have our shunt BJT connected collector to virtual ground, this way we get better shunt current control and better transient response at output.

Because our shunt element is away from our load, we implement remote sense connectors that connect to load. This way we have same performanse on load like that shunt regulator is on load PCB.Keep in mind that maximum remote sense wires and force wires (V+ GND V-) is maximum 10cm or less.

Output bypass capacitors 47μF (C19 & C20) needs to be non Low ESR type. If you put low ESR capacitors at output you will maybe get oscillations. So put here normal capacitors to get stable output.

Shunt regulators needs to be put on heatsink that have temperature resistance 5 K/W or less, to avoid overheating output shunt regulators. After shunt psu is build connect resistors between (V+ & GND) and (V- & GND) to simulate current draw. Without load at output all available current that is set using CCS will be burn on output shunts and there will be very high dissipation.

We calculate resistors using formula R=output voltage/load current. So in our example R=24V/40mA we set at output 600Ω resistors(choose nearest lower resistor value), and power rating for resistors is calculated using formula P=I^xR, so power rating will be 40mA^x600Ω is around 1W, we put 2W minimum resistor rating.

{{< click-zoom src="/bythos.github.io/images/sipi-shunt-psu-layout.png#center" height="100%" width="100%" >}}  

**Fig.2: install the parts on the PC board as shown here, taking care
to ensure that all polarised parts are correctly oriented. Also, make certain you use the correct transistor type at each location. Below is the completed PC board.**

### Bill of Materials

| Name                                    | Value             | Quantity  |             
|:---------------------------------------:|:-----------------:|:---------:|
| R1,R2                                   |  150Ω             |     2     |
| R3,R4,R5,R6                             |  4Ω7              |     4     |
| R7,R8,R22,R24                           |  15Ω              |     4     |
| R9,R11                                  |  3k3Ω             |     2     |
| R10,R12,R17,R18                         |  150Ω             |     4     |
| R13,R14                                 |  120kΩ            |     2     |
| R15,R16                                 |  2k2Ω             |     2     |
| R19,R20                                 |  1kΩ              |     2     |
| R21,R23                                 |  120Ω             |     2     |
| Q1,Q9                                   |  BD140-16         |     2     |
| Q4,Q10                                  |  BD139-16         |     2     |
| Q2,Q3                                   |  J113             |     2     |
| Q5,Q6,Q7,Q8                             |  2N5401           |     4     |
| D1,D2,D3,D4,D5,D6,D7,D8                 |  MBR1100          |     8     |
| D9,D10                                  |  BZX85C15         |     2     |
| IC1,IC2                                 |  TL431            |     2     |
| C1,C2                                   |  10nF             |     2     |
| C3,C4                                   |  150nF            |     2     |
| C5,C6,C13,C14                           |  100nF/100V/MKP   |     4     |
| C7,C8,C11,C12                           |  220μF/50V        |     4     |
| C9,C10                                  |  2200μF/50V       |     2     |
| C15,C16                                 |  47μF/50V         |     2     |
| C17,C18                                 |  470μF/35V        |     2     |
| C19,C20                                 |  47μF/35V         |     2     |
| P1,P2                                   |  25kΩ             |     2     |
| LED1,LED2                               |  HLMP6000         |     2     |
| AC1,AC2,V+,V-                           |  KF301-2P         |     4     |
| SENSE+,SENSE-                           |  JST-XH2.54-2	    |     2     |
| SCREW1-4                                |  M3	              |     4     |

### Download  

{{< file-download title="download">}}  
