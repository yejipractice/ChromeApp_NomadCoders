const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

      function getclock() {
          const date = new Date();
          const hour = date.getHours();
          const minute = date.getMinutes();
          const second = date.getSeconds();
          clockTitle.innerText = `${hour < 10? `0${hour}` : hour}시 ${minute < 10 ? `0${minute}` : minute}분 ${second < 10 ? `0${second}` : second}초`;
      }

      function init() {
          getclock();
          setInterval(getclock,1000);
      }

      init();