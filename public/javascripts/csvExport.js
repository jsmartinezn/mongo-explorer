const tableS = document.querySelector("#table");

function downloadCSV(csv, filename) {
  let csvFile;
  let downloadLink;

  // CSV file
  csvFile = new Blob([csv], { type: "text/csv" });

  // Download link
  downloadLink = document.createElement("a");

  // File name
  downloadLink.download = filename;

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = "none";

  // Add the link to DOM
  document.body.appendChild(downloadLink);

  // Click download link
  downloadLink.click();
}

function exportTableToCSV(evt) {
  let csv = [];
  let rows = document.querySelectorAll("#final");
  const filename = "informacion.csv";

  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("div");

    for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

    csv.push(row.join("\n"));
  }
  console.log(csv);
  evt.preventDefault();
  // Download CSV file
  downloadCSV(csv.join("\n"), filename);
}

tableS.addEventListener("submit", exportTableToCSV);
