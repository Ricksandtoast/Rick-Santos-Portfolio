$(document).ready(function() {
  var mysql = require("mysql");

  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "contact_info_db"
  });

  var name = "";
  var email = "";
  var message = "";

  $("#submit").on("click", function(event) {
    event.preventDefault();

    message = $("#FormControlTextarea1").val();
    email = $("#email").val();
    name = $("$name").val();
    console.log(message);
    insertInfo();
  });
});

function insertInfo() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      name: name,
      email: email,
      message: message
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      // updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}
