---
title: "Soft Start"
date: 2021-07-12T12:05:15Z
draft: false
---
#### Protects Your Fuses And Toroids

{{< image-gallery >}}

THIS CIRCUIT ensures that excessive current surges do not occur when the mains voltage is switched on.  
Basically, the unit provides the following features:
- It protects fuses against excessive current surges - eq. when power on
- It provides ON/OFF momentary push button to turn ON or OFF toroidal transformers
- It provides power on delay and four 5W resistors to limit current surges

Its operation is simple, and is based on the fact that the current is initially limited by R4-R7 immediately after switch-on.
After the expiry of a time delay determined by C8, these resistors are bridged over by the relay and the full current flows between K2 and K3.  

Note that the toroids are connected (and disconnected) using a heavy-duty double-pole relay. We’ll have more to say about that later.  

### Momentary push button ON/OFF

This circuit allows the switching appliances (loads) on and off with one momentary push button. Once you press it, it turns on, press again it turns off.
In the off state it draws no current, because both transistors are closed.  

In OFF state the C1 is charged through the load and R2. After pressing the SW1, the voltage of C1 connects to Q2 gate, it opens and turns on the load.
At the same time Q1 opens via R1 and further maintains the positive voltage on gate. C1 discharges through R2 and T1.  

When SW1 pressed again, gate of Q2 is discharged into C1 (C1 has a much higher capacity than the gate). This closes the Q2 and then Q1. Resistance R3 keeps gate at 0V and the circuit remains in the OFF state until the next pressing of SW1.  

As a switching element Q2, N-type MOSFET was chosen, because it allows very little loss and in idle state its gate does not draw any unnecessary current. You can use any low-voltage MOSFET with Uds about 20 - 55V. The smaller on-state resistance, the better.
Transistors rated at unnecessarily high voltages usually have the greater resistance. Q1 is any small PNP like BC327, BC557 or 2SA733.  

In case of problems, ringing or too much capacity of gate, increase the value of C1.  

### Delay at switch-on

Delay at switch-on is archieved using a delay circuit. This consists of the 68kΩ resistor and the 22μF capacitor connected to Q4 gate,
along with 47kΩ resistor that is used to discharge 22μF capacitor when power off.  

When power SW1 is pressed, the 22μF capacitor chatges via the 68kΩ resistor until, after about one seconds, it reaches 5V. This now turns gate Q4,
which then turns relay to bypass the four 5W resistors. This is more than sufficient time for the current inrush limiter resistors to limit current and archieve normal currents to charge the empty capacitors in PSU bank.  

### Current inrush resistors
The four 5W reisistors are there to limit the large current inrush when first power is applied. It is wired in parallel to
give around a 45Ω value for current limit (for 230VAC voltage), and each resistor in parallel takes 1/4 dissipation. If you use
this soft start in Class-A amplifier, please use a 10W resistors.

### Circuit details

{{< click-zoom src="/bythos.github.io/images/soft-start-schematic.png" height="100%" width="100%" >}}

Refer now to Fig.1 for the full Momentary push button and Soft Start circuit details.
As shown, four 5W resistors are connected to the NC and NO (normally closed and normaly open) contacts of a relay.
The relay wipers (poles) and NC contacts then each respectively bypass resistors after power on delay.

 ### Bill of Materials
 
| Name                                    | Value             | Quantity  |             
|:---------------------------------------:|:-----------------:|:---------:|
|                                         |                   |           |

### Download  

{{< file-download title="download">}}  
