class Grid {
    constructor(init) {
      this.init = init;
    }
  
    createHeader() {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      this.init.columns.forEach((col) => {
        open += `<th>${col}</th>`;
      });
  
      return open + close;
    }
  
    createBody() {
      let open = "<tbody>";
      let close = "</tbody>";
  
      this.init.data.forEach((row) => {
        open += "<tr>";
        row.forEach((cell) => {
          open += `<td>${cell}</td>`;
        });
        open += "</tr>";
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.createHeader() +
        this.createBody() +
        "</table>";
      element.innerHTML = table;
    }
  }
  
  export default Grid;
  