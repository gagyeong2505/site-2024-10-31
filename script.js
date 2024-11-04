const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".my-swiper-button-next",
    prevEl: ".my-swiper-button-prev"
  }
});

// $(".swiper-slide > ul > li").on("click", function () {
// 	$(this)
// 		.addClass("active") // 클릭한 요소에 active 클래스 추가
// 		.siblings(".text") // 형제 요소 중 .text 클래스를 가진 요소 선택
// 		.removeClass("active"); // 형제 요소에서 active 클래스 제거
// });

$(".swiper-slide > ul > li").on("click", function () {
  // 클릭한 요소에 active 클래스 추가, 형제 요소에서는 제거
  $(this).addClass("active").siblings(".text").removeClass("active");

  // 클릭된 요소의 인덱스를 가져옴
  const index = $(this).index();

  // 모든 content-box 요소를 숨기고, 클릭한 요소의 인덱스에 맞는 content-box만 표시
  $(".content-box").hide().eq(index).show();
});
