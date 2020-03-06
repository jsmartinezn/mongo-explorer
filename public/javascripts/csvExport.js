const tableS = document.querySelector("#table");

//Este script fue sacado de https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/ y fue adaptado para el proyecto
const downloadCSV = (csv, filename) => {
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
};

const exportTableToCSV = evt => {
  let csv = [];
  let rows = document.querySelectorAll("table tr");
  const filename = "informacion.csv";

  for (let i = 0; i < rows.length; i++) {
    const row = [],
      cols = rows[i].querySelectorAll("td, th");

    for (let j = 0; j < cols.length; j++) row.push(cols[j].innerText);

    csv.push(row.join(","));
  }
  evt.preventDefault();

  downloadCSV(csv.join("\n"), filename);
};

tableS.addEventListener("submit", exportTableToCSV);
