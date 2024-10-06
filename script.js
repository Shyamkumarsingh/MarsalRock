document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/MarsalRock/ElectricityBill_prog.pdf'; // this is path of the folder
    link.download = 'ElectricityBill_prog.pdf'; // The name of the file to be downloaded
    link.click();
  });

  document.getElementById('downloadBtn2').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/MarsalRock/notes.pdf'; // this to the actual path of PDF
    link.download = 'notes.pdf'; // The name of the file to be downloaded
    link.click();
  });
