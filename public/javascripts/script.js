var app = new Vue({
  el: '#app',
  data: {
    modulo_x: '',
    modulo_n: '',
    modulo_answer: '',
    modexp_x: '',
    modexp_e: '',
    modexp_n: '',
    modexp_answer: '',
    modinv_x: '',
    modinv_n: '',
    modinv_answer: '',
    modinv_message: '',
  },
  computed: {
    modulo_x_ok() {
      return !isNaN(this.modulo_x)
    },
    modulo_n_ok() {
      return !isNaN(this.modulo_n)
    },
    modexp_x_ok() {
      return !isNaN(this.modexp_x)
    },
    modexp_e_ok() {
      return !isNaN(this.modexp_e)
    },
    modexp_n_ok() {
      return !isNaN(this.modexp_n)
    },
    modinv_x_ok() {
      return !isNaN(this.modinv_x)
    },
    modinv_n_ok() {
      return !isNaN(this.modinv_n)
    },
    modulo_ok() {
      if (!this.modulo_n_ok || !this.modulo_x_ok) {
        return false;
      }
      if ((this.modulo_n == '') || (this.modulo_x == '')) {
        return false;
      }
      return true;
    },
    modexp_ok() {
      if (!this.modexp_n_ok || !this.modexp_e_ok || !this.modexp_x_ok) {
        return false;
      }
      if ((this.modexp_n == '') || (this.modexp_e == '') || (this.modexp_x == '')) {
        return false;
      }
      return true;
    },
    modinv_ok() {
      if (!this.modinv_n_ok || !this.modinv_x_ok) {
        return false;
      }
      if ((this.modinv_n == '') || (this.modinv_x == '')) {
        return false;
      }
      return true;
    },
  },
  watch: {
    modulo_x: function (val) {
        if (this.modulo_ok) {
          this.getModulo();
        }
    },
    modulo_n: function (val) {
      if (this.modulo_ok) {
        this.getModulo();
      }
    },
    modexp_x: function (val) {
        if (this.modexp_ok) {
          this.getModexp();
        }
    },
    modexp_e: function (val) {
      if (this.modexp_ok) {
        this.getModexp();
      }
    },
    modexp_n: function (val) {
        if (this.modexp_ok) {
          this.getModexp();
        }
    },
    modinv_x: function (val) {
        if (this.modinv_ok) {
          this.getModinv();
        }
    },
    modinv_n: function (val) {
      if (this.modinv_ok) {
        this.getModinv();
      }
    },
  },
  methods: {
    getModulo() {
      let self = this;
      url = "http://3.16.91.215:4201/modulo?x=" + this.modulo_x + "&n=" + this.modulo_n;
      console.log("Calling: " + url);
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json)
          self.modulo_answer = json[0];
        });
    },
    getModexp() {
      let self = this;
      url = "http://3.16.91.215:4201/modexp?x=" + this.modexp_x
              + "&e=" + this.modexp_e +"&n=" + this.modexp_n;
      console.log("Calling: " + url);
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          self.modexp_answer = json[0];
        });
    },
    getModinv() {
      let self = this;
      url = "http://3.16.91.215:4201/modinv?x=" + this.modinv_x + "&n=" + this.modinv_n;
      console.log("Calling: " + url);
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          self.modinv_answer = json[0];
        });
    }
  }
});
