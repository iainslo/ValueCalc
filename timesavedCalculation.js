document.getElementById('timeSavedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const profstaffno = parseFloat(document.getElementById('profstaffno').value);
    const acadstaffno = parseFloat(document.getElementById('acadstaffno').value);
    const profstaffmins = parseFloat(document.getElementById('profstaffmins').value);
    const acadstaffmins = parseFloat(document.getElementById('acadstaffmins').value);
    const hourlyrate = parseFloat(document.getElementById('hourlyrate').value);
  
    if (isNaN(profstaffno) || isNaN(acadstaffno) || isNaN(profstaffmins) || isNaN(acadstaffmins) || isNaN(hourlyrate)) {
      alert('Please enter valid numbers in all fields.');
      return;
    }
  
    const totaltimesaved =(((acadstaffno * acadstaffmins) + (profstaffno * profstaffmins)) * 230)/60;
    const totalvalue = totaltimesaved * hourlyrate;
  
    document.getElementById('totaltimesaved').textContent = totaltimesaved.toFixed(2);
    document.getElementById('totalvalue').textContent = totalvalue.toFixed(2);
  });