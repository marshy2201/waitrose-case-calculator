  $(function () {
  
    //input totals start with 0
    $('#case-total').val(0);
    $('#hours-total').val(0 + ' hour(s)');
    $('#mins-total').val(0 + ' min(s)');


    //input keyup function
    $('input').on('keyup', function () {
      
  
      //Days & Nights conditional statement Cases
      var caseTotal = 0;
      
      if ($(this).is('[name="cases"]')) {
      
        //Case total Days    
        $('input[name="cases"]').each(function() {
          caseTotal += parseInt($(this).val());
        });
      
      } else {
       
        //Cases total Nights
        $('input[name="cases2"]').each(function() {
          caseTotal += parseInt($(this).val());
        }); 
        
      }
       
      if (isNaN(caseTotal)) {
          caseTotal = 0;
      }
       
      $('#case-total').val(caseTotal);
      
      
      
      
      //Days & Nights conditional statement Minutes
      var mins = 0;
      var hours = 0;
      
      if ($(this).is('[name="cases"]')) {
      
        //Mins per group days
        
        $(this).each(function() {
            mins += ($(this).val() / 35) * 60;
        });

        hours = Math.floor(mins / 60);
        var minsLeft = mins % 60;
        
        if (isNaN(mins)) {
          mins = 0;  
        }
        
        $(this).parent().next().children().val(hours.toFixed(0) + ' hour(s)');
        $(this).parent().next().children().eq(1).val(minsLeft.toFixed(0) + ' min(s)');
        $(this).parent().next().children().eq(2).val(mins.toFixed(0));
        
      } else {
      
        //Mins per group nights
        
        $(this).each(function() {
          mins += ($(this).val() / 45) * 60;
        });

        hours = Math.floor(mins / 60);
        var minsLeft = mins % 60;
        
        if (isNaN(mins)) {
          mins = 0;  
        }
        
        $(this).parent().next().children().val(hours.toFixed(0) + ' hour(s)');
        $(this).parent().next().children().eq(1).val(minsLeft.toFixed(0) + ' min(s)');
        $(this).parent().next().children().eq(2).val(mins.toFixed(0));
        
      }
      
      
      //Total hours & mins
      var totalMins = 0;
      
      $('input[name="mins"]').each(function() {
        totalMins += parseInt($(this).val());
      });

      var totalHours = Math.floor(totalMins / 60);
      var minutesLeft = totalMins % 60;
      
      $('#hours-total').val(totalHours.toFixed(0) + ' hour(s)');
      $('#mins-total').val(minutesLeft + ' min(s)');
      
    });
    
    //value 0 disappears on focus
    $('input').on('focus', function() {
      if (this.value == 0) {
        this.value = '';
      }
    });
     
  });