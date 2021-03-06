class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }
    if (grades.length === 0) {
      this.noGradesElement.classList.remove("d-none");
    } else {
      this.noGradesElement.classList.add("d-none");

    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
      var newTr = document.createElement("tr");
      var studentName = document.createElement("td");
      var studentCourse = document.createElement("td");
      var studentGrade = document.createElement("td");
      var operationColumn = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.addEventListener("click", function (event) {deleteGrade(data.id); })
      studentName.textContent = data.name;
      studentCourse.textContent = data.course;
      studentGrade.textContent = data.grade;
      deleteButton.textContent = "DELETE";
      studentName.classList.add("align-middle");
      studentCourse.classList.add("align-middle");
      studentGrade.classList.add("align-middle");
      deleteButton.classList.add("btn");
      deleteButton.classList.add("btn-danger");
      operationColumn.classList.add("text-right");
      operationColumn.appendChild(deleteButton);
      newTr.appendChild(studentName);
      newTr.appendChild(studentCourse);
      newTr.appendChild(studentGrade);
      newTr.appendChild(operationColumn);
      return newTr;
  }
  }
