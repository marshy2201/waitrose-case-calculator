  
  function calculateTotal() { 
  
    //Total Cases
    var group1 = document.getElementById('group1').value;
    var group2 = document.getElementById('group2').value;
    var group3 = document.getElementById('group3').value;
    var group4 = document.getElementById('group4').value;
    var group5 = document.getElementById('group5').value;
    var group6 = document.getElementById('group6').value;
    var group7 = document.getElementById('group7').value;
    var group8 = document.getElementById('group8').value;
    var group9 = document.getElementById('group9').value;
    
    var caseTotal = parseInt(group1) + 
                    parseInt(group2) + 
                    parseInt(group3) + 
                    parseInt(group4) +
                    parseInt(group5) +
                    parseInt(group6) +
                    parseInt(group7) +
                    parseInt(group8) +
                    parseInt(group9);
                    
    if (isNaN(caseTotal)) {
      caseTotal = 0;
    }                
    
    document.getElementById('case-total').innerText = caseTotal;
    
    //Mins per Group
    var group1Time = (group1 / 35) * 60;
    var group2Time = (group2 / 35) * 60;
    var group3Time = (group3 / 35) * 60;
    var group4Time = (group4 / 35) * 60;
    var group5Time = (group5 / 35) * 60;
    var group6Time = (group6 / 35) * 60;
    var group7Time = (group7 / 35) * 60;
    var group8Time = (group8 / 35) * 60;
    var group9Time = (group9 / 35) * 60;
    
    
    document.getElementById('group-1-mins').innerText = group1Time.toFixed(0) + ' mins';
    document.getElementById('group-2-mins').innerText = group2Time.toFixed(0) + ' mins';
    document.getElementById('group-3-mins').innerText = group3Time.toFixed(0) + ' mins';
    document.getElementById('group-4-mins').innerText = group4Time.toFixed(0) + ' mins';
    document.getElementById('group-5-mins').innerText = group5Time.toFixed(0) + ' mins';
    document.getElementById('group-6-mins').innerText = group6Time.toFixed(0) + ' mins';
    document.getElementById('group-7-mins').innerText = group7Time.toFixed(0) + ' mins';
    document.getElementById('group-8-mins').innerText = group8Time.toFixed(0) + ' mins';
    document.getElementById('group-9-mins').innerText = group9Time.toFixed(0) + ' mins';
    
    //Total mins 
    
    var totalMinsCalc = 
          group1Time + 
          group2Time +
          group3Time +
          group4Time +
          group5Time +
          group6Time +
          group7Time +
          group8Time +
          group9Time;
          
    var totalMins = document.getElementById('mins-total');
    totalMins.innerText = totalMinsCalc.toFixed(0) + ' mins';
    
    //Total in hours
    
    var totalHours = totalMinsCalc / 60;
    
    document.getElementById('hours-total').innerText = '(' + totalHours.toFixed(2) + ' hour(s))';
    
  }
  
  window.addEventListener('keyup', calculateTotal, false);
  
  

    
  
    
  
  
  