---
title: OME MODUS
date: 2022-10-08T11:51:43Z
draft: false
---
#### High Class Audio Power Amplifier

{{< image-gallery >}}

{{< click-zoom src="/bythos.github.io/images/ome-modus-layout.png#center" height="100%" width="100%" >}}

### Circuit description

{{< click-zoom src="/bythos.github.io/images/ome-modus-schematic.png" height="100%" width="100%" >}}

Now let’s have a look at the circuit of Fig.1. 16 transistors and two diodes make up the semiconductor complement.

The input signal is coupled via a 2,2µF polypropylene capacitor (MKP) and 470Ω resistor to the base of Q1. Q1 & Q2 make up a differential pair. Q3 & Q4 is a constant current source which sets the current through Q1 & Q2 and renders the amplifier largely insensitive to variations in its supply rails (power supply rejection).

Signals from the collectors of Q1 & Q2 drive another differential pair, Q8 & Q9 which have a “current mirror” as their collector loads. The current mirror, comprising Q7 , ensure that this second differential stage has high linearity (ie, low distortion).

The output of Q6 & Q9 is then used to drive class-AB output stage consisting of drivers Q11 & Q12 and power transistors Ql3, Ql4, Q15 & Q16.

Q10 is a Vbe multiplier, so-called because it multiplies the voltage between its base and emitter to provide a fixed voltage between its collector and emitter, regardless of the drive current delivered to the output stage by Q11 & Q12. The voltage is adjusted by trimpot BIAS.

The function of Q10 is to set the DC voltage applied between the bases of Q11 & Q12. By doing this it sets the “quiescent current” in the output stage (ie, the current when no signal is present). This is to minimise crossover distortion.

The complementary output transistors are connected in parallel to give high output current capability. Each transistor has its own 0.22Ω emitter resistor. These are included to ensure that the output current is shared reasonably well between the output transistors.

Negative feedback is applied from the output stage back to the base of Q2 via a 10kΩ resistor. The level of feedback, and therefore the voltage gain, is set by the ratio of the 10kΩ resistor to the 330Ω at the base of Q2. The 470µF bipolar capacitor in series with the 330Ω sets the DC gain to unity and sets the -3dB point of the frequency response to about 2Hz. The other determinant of the amplifier’s low frequency response is the 2,2µF input capacitor and the 10kΩ base bias resistor feeding Ql and these set a -3dB point at about 7Hz.

The 220pF capacitor together with the 10kΩ resistor feeding Q1 form a low pass filter to roll off frequencies above 200kHz.

Another important factor in the amplifier’s excellent stability is the output RLC network consisting of the 4,7µH choke, a 2,2Ω resistor and a 100nF capacitor with series 10Ω resistor. Not only does this network ensure stability but the capacitor is an effective killer of any RF and mains-interference signals which can he picked up by long loudspeaker leads.

