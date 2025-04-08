// AOS
// AOS
function aosshroom() {
  AOS.init({
    duration: 500,
    easing: "linear",
    once: true,
    disable: "mobile",
  });
}
aosshroom();

// sticky nav
const stickyBar = () => {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("sticky");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".navbar").removeClass("sticky");
      }
    });
  });
};
