document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const owlCarousel = document.querySelector(".owl-carousel");

  prevButton.addEventListener("click", function () {
    owlCarousel.trigger("prev.owl.carousel");
  });

  nextButton.addEventListener("click", function () {
    owlCarousel.trigger("next.owl.carousel");
  });
});

function submitEmail() {
  const email = document.getElementById("email").value;
  if (email) {
    alert(`Email enviado: ${email}`);
  } else {
    alert("Por favor, insira um email válido.");
  }
}
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
