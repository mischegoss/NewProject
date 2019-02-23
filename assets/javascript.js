// Initialize Firebase
var config = {
    apiKey: "AIzaSyDN78S0jvC3OERGNIEQxmlGOqRMssEepkk",
    authDomain: "employees-c7cee.firebaseapp.com",
    databaseURL: "https://employees-c7cee.firebaseio.com",
    projectId: "employees-c7cee",
    storageBucket: "employees-c7cee.appspot.com",
    messagingSenderId: "790880665691"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name;
  var role;
  var date;
  var monthRate;
  var employee;
  var months;
  var total;

  $('#submit').on('click', function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $('#inputName')
      .val()
      .trim();
    role = $('#inputRole')
      .val()
      .trim();
    date = $('#inputStart')
      .val()
      .trim();
    monthRate = $('#inputRate')
      .val()
      .trim();
    
      months = moment.duration(date).asMonths();
      console.log(months);

      total = monthRate*months;

      var userData = {
        name: name,
        role: role,
        date: date,

      };
    // Change what is saved in firebase
    database.ref().push(userData);
  });

database.ref().on (
    'child_added',
    function (snapshot) {
        var employee = snapshot.val();
        console.log(snapshot.val());
        var tRow = $("<tr>");
        var nameTd = $("<td>").text(employee.name);
        var roleTd = $("<td>").text(employee.role);
        var dateTd = $("<td>").text(employee.date);
        var monthRateTd = $("<td>").text(employee.monthRate);
        var monthsTd = $("<td>").text(months);
        var totalTd = $("<td>").text(total);
        tRow.append(nameTd, roleTd, dateTd, dateTd, monthRateTd, monthsTd, totalTd);
        $("tbody").append(tRow);
    });

