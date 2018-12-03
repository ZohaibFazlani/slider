$(document).ready(function() {
  $(".next").on("click", function() {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    nextImg.addClass("active");
    $(".prev").show();

    if (nextImg.length >= 3) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    } else {
      $(".next").hide();
    }
  });

  $(".btn").on("click", function() {
    var url = prompt("Please enter your  image url", "images/arrow-left.png");
    var data = prompt("Please enter your  context ", "hello there");
    if (url.length && (data.length > 10 && data.length < 25)) {
      $(".slider-inner").append(
        "<div> <button> X</button>  <img src=" +
          url +
          "><p>" +
          data +
          "</p> </div>"
      );
      $(".slider-inner")
        .children("div")
        .addClass("active");
      $(".slider-inner")
        .find("button")
        .click(function() {
          $(this)
            .parent()
            .remove();
        });
    } else alert("incorrect url or content");
  });
  $(".x").click(function() {
    $(this)
      .parent()
      .remove();
    console.log("zzxxx");
  });

  $(".prev").on("click", function() {
    var currentImg = $(".active");

    var prevImg = currentImg.prev();
    prevImg.addClass("active");
    $(".next").show();

    if (prevImg.length >= 3) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    } else {
      $(".prev").hide();
    }
  });
});
