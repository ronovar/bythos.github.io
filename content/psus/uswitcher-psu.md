---
title: "OME uSwitcher PSU"
date: 2024-03-01T12:14:16Z
draft: false
---
#### Reference Class Audio Power Supply Unit

{{< image-gallery >}}

OME uSwitcher is designed to be run from a USB charger or from a powerbank for total mains separation with the following feautures:

- very low noise (1nV/sqrt(Hz))
- high bandwidth range (10-100kHz)
- high PSRR (-150dB)
- regulated output voltage from 3.3V to 18VDC
- 300mA max current output
- efficient, cool running

### Circuit details

{{< click-zoom src="/bythos.github.io/images/ome-uswitcher-psu-schematic.png" height="100%" width="100%" >}}

At input USB1 connector we have resistors (R1 & R2) that sets the output voltage to 5VDC from USB Charger.

{{< click-zoom src="/bythos.github.io/images/ome-uswitcher-psu-layout-top.png#center" height="100%" width="100%" >}}
{{< click-zoom src="/bythos.github.io/images/ome-uswitcher-psu-layout-bottom.png#center" height="100%" width="100%" >}}  

**Fig.2: install the parts on the PC board as shown here, taking care
to ensure that all polarised parts are correctly oriented. Also, make certain you use the correct transistor type at each location. Below is the completed PC board.**

### Bill of Materials

| Name                                    | Value               | Package   | Quantity  |             
|:---------------------------------------:|:-------------------:|:----------|----------:|
| R1,R2                                   |  5k1Ω               | MELF0204  |     2     |
| R3                                      |  10kΩ               | MELF0204  |     1     |
| R4                                      |  7k32Ω              | MELF0204  |     1     |
| R5                                      |  100kΩ              | MELF0204  |     1     |
| R6,R8                                   |  12kΩ               | MELF0204  |     2     |
| R7                                      |  270kΩ              | MELF0204  |     1     |
| R9                                      |  680Ω               | MELF0204  |     1     |
| R10,R11                                 |  0Ω47               | MELF0204  |     2     |
| R12,R13,R16,R17                         |  2k7Ω               | MELF0204  |     4     |
| R14,R15                                 |  175Ω               | MELF0204  |     2     |
| R18,R19,R20,R21,R24,R25,R32,R33,R34,R35 |  22Ω                | MELF0204  |    10     |
| R22,R23                                 |  200kΩ              | MELF0204  |     2     |
| R26,R27,R28,R29                         |  735Ω               | MELF0204  |     4     |
| R30,R31                                 |  5Ω6                | MELF0204  |     2     |
| D1,D2                                   |  SBR3U40S1F-7       | SOD-123F  |     2     |
| D3,D4,D5,D6,D7,D8,D9,D10,D11,D12        |  MBRS1100T3         | SMB-2     |    10     |
| IC1                                     |  LMR62421           | SOT23-5   |     1     |
| IC2                                     |  TPS62933PDRLR      | SOT583-8  |     1     |
| IC3                                     |  LM317DCY           | SOT223-4  |     1     |
| IC4                                     |  LM337IMPX/NOPB     | SOT223-4  |     1     |
| IC5,IC6                                 |  ADA4898-1          | SOIC-8    |     2     |
| C1,C2,C3,C5,C12,C13,C14,C15             |  22µF/25V           | 1210      |     8     |
| C4,C16,C17,C20,C21,C22,C23              |  22µF/25V           | 0805      |     7     |
| C6,C26,C27                              |  10nF/25V           | 0805      |     3     |
| C7                                      |  2n7/25V            | 0805      |     1     |
| C8                                      |  470nF/25V          | 0805      |     1     |
| C9                                      |  220pF/25V          | 0805      |     1     |
| C10,C11                                 |  22uF/25V           | 1210      |     2     |
| C18,C19,C24,C25,C28,C29                 |  220µF/25V          | 8mm       |     6     |
| P1,P2                                   |  1kΩ                | 3296W     |     2     |
| L1,L2                                   |  10µH/4A            | 6.6x3x7.3 |     2     |
| L3,L4                                   |  3µ3H/5A            | 5.2x3x5.4 |     2     |
| V+,GND,V-                               |  B3B-ZR-3.4(LF)(SN) | 3-PIN     |     1     |
| RS+, RS-                                |  B2B-ZR-3.4(LF)(SN) | 2-PIN     |     2     |
| USB1                                    |  USB4125-GF-A-0190  | TYPE-C    |     1     |
| SCREW1-4                                |  M2.5x6             | SCREW     |     4     |
