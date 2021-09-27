function toHtml(input) {
  const data = JSON.parse(input);

  const outputArr = ["<table>"];
  outputArr.push(createHead(data));
  data.forEach((obj) => outputArr.push(createRow(obj)));
  outputArr.push("</table>");

  console.log(outputArr.join("\n"));

  function createHead(arr) {
    let result = "   <tr>";
    Object.keys(arr[0]).forEach((key) => {
      result += `<th>${escapeHtml(key)}</th>`;
    });
    result += "</tr>";
    return result;
  }

  function createRow(obj) {
    let result = "   <tr>";

    Object.values(obj).forEach((value) => {
      result += `<td>${escapeHtml(value)}</td>`;
    });

    result += "</tr>";
    return result;
  }

  function escapeHtml(str) {
    if (typeof str != "string") {
      return str;
    }

    let entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
    };
    return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
  }
}

toHtml(`[{"Name":"Pesho",
    "Score":4,
    "Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`);
