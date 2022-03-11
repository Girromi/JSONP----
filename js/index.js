function weather (data) {
   var dateDayname = document.getElementById("date-dayname");
   var dateDay = document.getElementById("date-day");
   var location = document.getElementById("location");
   var weatherl = document.getElementById("weather-l");
   var weathert = document.getElementById("weather-temp");
   var weatherd = document.getElementById("weather-desc");
   dateDayname.innerHTML = data.list[0].date.slice(4, 6);
   dateDay.innerHTML = data.date;
   location.innerHTML = data.city;

   weatherl.innerHTML = weatherIcon(1);
   weathert.innerHTML = data.list[0].temp.slice(0, 2) + "℃";
   weatherd.innerHTML = data.list[0].weather;

   var pm = document.getElementById("pm");
   var humidity = document.getElementById("humidity");
   var window = document.getElementById("window");

   pm.innerHTML = "12"
   humidity.innerHTML = "暂无";
   window.innerHTML = data.list[0].wind;

   var day1 = document.getElementById("day1");
   var span1 = day1.getElementsByTagName("span");

   var day2 = document.getElementById("day2");
   var span2 = day2.getElementsByTagName("span");

   var day3 = document.getElementById("day3");
   var span3 = day3.getElementsByTagName("span");

   var day4 = document.getElementById("day4");
   var span4 = day4.getElementsByTagName("span");

   span1[0].innerHTML = weatherIcon(1);
   span1[1].innerHTML = data.list[0].date.slice(4, 6);
   span1[2].innerHTML = data.list[0].temp;

   span2[0].innerHTML = weatherIcon(2);
   span2[1].innerHTML = data.list[1].date.slice(4, 6);
   span2[2].innerHTML = data.list[1].temp;

   span3[0].innerHTML = weatherIcon(3);
   span3[1].innerHTML = data.list[2].date.slice(4, 6);
   span3[2].innerHTML = data.list[2].temp;

   span4[0].innerHTML = weatherIcon(4);
   span4[1].innerHTML = data.list[3].date.slice(4, 6);
   span4[2].innerHTML = data.list[3].temp;

   // 封装一个判断天气，选择图标的函数
   function weatherIcon (t) {
      if (data.list[t - 1].icon1.search("00") != -1) {
         return "&#xe62a";
      }
      if (data.list[t - 1].icon1.search("01") != -1) {
         return "&#xe60b";
      }
      if (data.list[t - 1].icon1.search("02") != -1) {
         return "&#xe705";
      }
      // if (data.weather[t - 1].icon1.search("yin") != -1) {
      //    return "&#xe705";
      // }
      if (data.list[t - 1].icon1.search("07") != -1) {
         return "&#xe6e7";
      }
      if (data.list[t - 1].icon1.search("08") != -1) {
         return "&#xe6e8";
      }
      if (data.list[t - 1].icon1.search("09") != -1) {
         return "&#xe62c";
      }
   }
}

window.onload = function () {
   // alert('aaa')
   var btn = document.getElementById("location-botton");
   var city = document.getElementById("city");

   var script = document.createElement("script");
   script.src = 'https://query.asilu.com/weather/weather/?city=' + '南京' + '&callback=weather';
   document.body.appendChild(script);

   city.onkeydown = function (event) {
      if (event.keyCode == 13) {
         if (city.value) {
            var script = document.createElement("script");
            script.src = 'https://query.asilu.com/weather/weather/?city=' + city.value + '&callback=weather';
            //插入到页面中去
            document.body.appendChild(script);
         } else {
            alert("请输入城市名称！")
         }
      }
   }

   btn.onclick = function () {
      // 加个简单判断 输入内容是否为空
      if (city.value) {
         var script = document.createElement("script");
         script.src = 'https://query.asilu.com/weather/weather/?city=' + city.value + '&callback=weather';
         //插入到页面中去
         document.body.appendChild(script);
      } else {
         alert("请输入城市名称！")
      }
   }
}