var apiURL = "https://api.github.com/users/PatrickKuei/repos";
var app = new Vue({
  el: "#app",
  data: {
    texts: "",
    demoPic: [
      '<img src="GluttonousSnake.JPG" height="150" width="150">',
      '<img src="calendar.JPG" height="150" width="150">',
      '<img src="mycv.JPG" height="150" width="150">',
      '<img src="XOgame.JPG" height="150" width="150">',
      '<img src="Reac-carlander.JPG" height="150" width="150">',
      '<img src="react-fetchData.JPG" height="150" width="150">',
      '<img src="tab practice.JPG" height="150" width="150">',
    ],
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open("GET", apiURL);
      xhr.onload = function () {
        self.texts = JSON.parse(xhr.responseText);
      };
      xhr.send();
    },
  },
});
