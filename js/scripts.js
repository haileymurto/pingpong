function pingPong(i) {
  for(var i=1; i <= 100; i++){

    if (i % 15 === 0) {
      console.log("pingpong");
    }
    else if (i % 3 === 0) {
      console.log("ping");
    }
    else if (i % 5 === 0) {
      console.log("pong");
    }
    else {
      console.log(i);
    }
  }
}

// Use console.log instead of return? Or add to string? append? Return is probably not right.


$(document).ready(function() {
    $("form#number").submit(function(event) {
      var a = $("input#number").val();

      var result = pingPong(n);

      $("#pingPong").text(result);

      $("#result").show();
      event.preventDefault();
    });
  });
