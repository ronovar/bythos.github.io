$('form#speaker-protection input[type=text]').keyup(function() {
    var VDC = $('form#speaker-protection input[name=VDC]').val(),
        VAC = $('form#speaker-protection input[name=VAC]').val(),
        CVDC = $('form#speaker-protection input[name=CVDC]').val(),
          CR = $('form#speaker-protection input[name=CR]').val(),
       VDROP = $('form#speaker-protection option:selected').attr('data-vdrop'),
       RLOAD = $('form#speaker-protection input[name=SPKRES]').val(),
       OPSPAIRS = $('form#speaker-protection input[name=OPSPAIRS]').val(),
       EMITERES = $('form#speaker-protection input[name=EMITERES]').val(),
          PMAX = 0,
       IMAXPAIR = 0,
       RINTOP = 0,
          R1 = 0,
          R5 = 0,
          R6 = 0,
          R7 = 0,
          R9 = 0,
          PR1 = 0,
          PR6 = 0,
          PR7 = 0,
          PR9 = 0,
          R10R11 = 0,
          R12,R13 = 0,
          PR10R11 = 0,
          PR1213 = 0,
          TMP = 0;
         
    TMP = ((VDC - 0.7 - 0.2 - CVDC) / (CVDC / CR)).toFixed(2);
    R10R11 = (TMP * 2).toFixed(0);
    PR10R11 = (Math.pow((CVDC / CR) / 2, 2) * R10R11).toFixed(2);
    if (R10R11 > 1000) { var quotient = Math.floor(R10R11 / 1000); var reminder = R10R11 % 1000; R10R11 = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { R10R11 = R10R11 + 'Ω'; };
    $('form#speaker-protection li#R10R11').text('R10, R11 ..... '+R10R11+'/'+PR10R11+'W');
    
    R7 = ((VDC - 0.7 - 15) / 0.0035).toFixed(2);
    if (R7 > 1000) { var quotient = Math.floor(R7 / 1000); var reminder = R7 % 1000; R7 = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { R7 = R7 + 'Ω'; };
    PR7 = ((VDC - 0.7 - 15) * 0.0035).toFixed(2);
    $('form#speaker-protection li#R7').text('R7 ..... '+R7+'/'+PR7+'W');
    
    R6 = ((VDC - 16.4) / 0.001).toFixed(2);
    if (R6 > 1000) { var quotient = Math.floor(R6 / 1000); var reminder = R6 % 1000; R6 = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { R6 = R6 + 'Ω'; };
    PR6 = ((VDC - 16.4) * 0.001).toFixed(2);
    $('form#speaker-protection li#R6').text('R6 ..... '+R6+'/'+PR6+'W');
    
    R9 = ((VDC - 0.7 - 0.7 - 15.7) / 0.0035).toFixed(2);
    if (R9 > 1000) { var quotient = Math.floor(R9 / 1000); var reminder = R9 % 1000; R9 = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { R9 = R9 + 'Ω'; };
    PR9 = ((VDC - 0.7 - 0.7 - 15.7) * 0.0035).toFixed(2);
    $('form#speaker-protection li#R9').text('R9 ..... '+R9+'/'+PR9+'W');
    
    R5 = ((5 * (VDC - 0.7)) / (1.15 * (15 + 0.7 + 0.7))) / 0.000047;
    if (R5 > 1000) { var quotient = Math.floor(R5 / 1000); var reminder = R5 % 1000; R5 = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { R5 = R5 + 'Ω'; };
    $('form#speaker-protection li#R5').text('R5 ..... '+R5);
    
    R1 = ((VAC * 1.41) / 0.0035).toFixed(2);
    if (R1 > 1000) { var quotient = Math.floor(R1 / 1000); var reminder = R1 % 1000; R1 = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { R1 = R1 + 'Ω'; };
    PR1 = ((VAC * 1.41) * 0.0035).toFixed(2);
    $('form#speaker-protection li#R1').text('R1 ..... '+R1+'/'+PR1+'W');
    
    R12R13 = ((VDC - 2) / 0.007).toFixed(2);
    if (R12R13 > 1000) { var quotient = Math.floor(R12R13 / 1000); var reminder = R12R13 % 1000; R12R13 = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { R12R13 = R12R13 + 'Ω'; };
    PR12R13 = ((VDC - 2) * 0.007).toFixed(2);
    $('form#speaker-protection li#R12R13').text('R12, R13 ..... '+R12R13+'/'+PR12R13+'W');
    
    PMAX = Math.pow((VDC - VDROP) / 1.4142, 2) / RLOAD;
    IMAXPAIR = (Math.sqrt(PMAX / RLOAD) * 1.4142) / OPSPAIRS;
    RINTOP = Math.round((((IMAXPAIR * EMITERES) * (5000 + 330)) / 0.52) - 330 - 5000 - 330);
    if (RINTOP > 1000) { var quotient = Math.floor(RINTOP / 1000); var reminder = RINTOP % 1000; RINTOP = quotient + 'k' + Math.trunc(reminder).toString().substring(0, 2); } else { RINTOP = RINTOP + 'Ω'; };
    $('form#speaker-protection li#LIN-TOP').text('LIN-TOP .......... '+RINTOP);
    $('form#speaker-protection li#RIN-TOP').text('RIN-TOP .......... '+RINTOP);
});

$('form#speaker-protection input[type=text]').keyup();

$('form#speaker-protection select').on('change', function() {
  $('form#speaker-protection input[type=text]').keyup();
});