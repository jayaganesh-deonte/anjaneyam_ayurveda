import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "../anjaneyam.sass";
import "../anjaneyam.scss";
import "@fortawesome/fontawesome-free/css/all.css";
Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: "fa",
  },
  theme: {
    themes: {
      light: {
        primary: "#0D4B2C",
        secondary: "#FFBE41",
        accent: "#158800",
        error: "#b71c1c",
        green: "#008000",
      },
    },
  },
});

export default vuetify;
