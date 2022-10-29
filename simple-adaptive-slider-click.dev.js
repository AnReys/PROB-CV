document.addEventListener("DOMContentLoaded", function () {
      // инициализация слайдера
      var slider = new SimpleAdaptiveSlider(".slider", {
        loop: true,
        autoplay: false,
        swipe: true
      });
      // добавим кнопки для увеличения изображения
      const $slider = document.querySelector('.slider');
      const $newElement = document.createElement('span');
      $newElement.className = 'image-open';
      $slider.append($newElement);

      var sliderOverflow = null;

      document.addEventListener('click', function (e) {
        var $target = e.target;
        if (!$target.classList.contains('image-open')) {
          return;
        }
        var sliderWidth = $slider.clientWidth;
        var sliderHeight = $slider.clientHeight;

        var $container = document.querySelector('.slider-overflow__container');
        document.body.classList.add('open');
        $container.classList.add('slider-overflow__container_show');

        var width = Math.trunc(
          ($container.clientHeight / sliderHeight) * sliderWidth
        );
        var $sliderOverflow = document.querySelector('.slider-overflow');
        $sliderOverflow.style.width = width + 'px';
        var $sliderBox = new SimpleAdaptiveSlider('.slider-overflow', {
          loop: true,
          swipe: true
        });
        sliderOverflow = $sliderBox;
        var $sliderItemActive = document.querySelector(".slider__item_active");
        var index = parseInt($sliderItemActive.dataset.index, 10);
        $sliderBox.moveTo(index, false);
        var event = new CustomEvent('slider.overflow', {
          detail: {
            index: index
          }
        });
        document.dispatchEvent(event);
      });

      document.addEventListener("click", function (e) {
        var $target = e.target;
        if (!$target.classList.contains("btn-close")) {
          return;
        }
        var $container = document.querySelector(".slider-overflow__container");
        $container.classList.remove("slider-overflow__container_show");
        document.body.classList.remove('open');
      });

      var thumbnailsItem = document.querySelectorAll(".slider__thumbnails-item");
      thumbnailsItem.forEach(function ($item, index) {
        $item.dataset.slideTo = index;
      });

      function setActiveThumbnail() {
        var sliderItemActive = document.querySelector(".slider__item_active");
        var index = parseInt(sliderItemActive.dataset.index);
        for (var i = 0, length = thumbnailsItem.length; i < length; i++) {
          if (i !== index) {
            thumbnailsItem[i].classList.remove("active");
          } else {
            thumbnailsItem[index].classList.add("active");
          }
        }
      }
      setActiveThumbnail();
      document
        .querySelector(".slider")
        .addEventListener("slider.set.active", setActiveThumbnail);
      var sliderThumbnails = document.querySelector(".slider__thumbnails");
      sliderThumbnails.addEventListener("click", function (e) {
        $target = e.target.closest(".slider__thumbnails-item");
        if (!$target) {
          return;
        }
        var index = parseInt($target.dataset.slideTo, 10);
        slider.moveTo(index);
      });

      document.addEventListener('slider.overflow', function (e) {
        var thumbnailsItem = document.querySelectorAll(".slider-overflow__container .slider__thumbnails-item");
        thumbnailsItem.forEach(function ($item, index) {
          $item.dataset.slideTo = index;
        });
        var index = e.detail.index;
        function setActiveThumbnailInOverflow() {
          var sliderItemActive = document.querySelector(".slider-overflow .slider__item_active");
          var index = parseInt(sliderItemActive.dataset.index);
          for (var i = 0, length = thumbnailsItem.length; i < length; i++) {
            if (i !== index) {
              thumbnailsItem[i].classList.remove("active");
            } else {
              thumbnailsItem[index].classList.add("active");
            }
          }
        }
        setActiveThumbnailInOverflow();
        document
          .querySelector('.slider-overflow')
          .addEventListener("slider.set.active", setActiveThumbnailInOverflow);
        var sliderThumbnails = document.querySelector(".slider-overflow__container .slider__thumbnails");
        sliderThumbnails.addEventListener("click", function (e) {
          $target = e.target.closest(".slider__thumbnails-item");
          if (!$target) {
            return;
          }
          var index = parseInt($target.dataset.slideTo, 10);
          sliderOverflow.moveTo(index);
        });
      });

    });

    document.addEventListener("DOMContentLoaded", function () {
      // инициализация слайдера 2
      var slider = new SimpleAdaptiveSlider(".slider-2", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-3", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-4", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-5", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-6", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-7", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-8", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-9", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-10", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-11", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-12", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-13", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-14", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
      var slider = new SimpleAdaptiveSlider(".slider-15", {
        autoplay: false,
        interval: 5000,
        swipe: true
      });
    });