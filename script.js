function downloadFile() {
  var a = document.createElement('a');
  a.href = 'ODRS.rar'; // Update this with the actual path and file name
  a.download = 'ODRS.rar'; // This will be the name of the file that is downloaded
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
