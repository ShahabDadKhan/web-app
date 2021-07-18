import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import '@mdi/font/css/materialdesignicons.css';
import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    // icons: {
    //     iconfont: 'mdi', // default - only for display purposes
    //   },
      icons: {
        iconfont: 'fa4', // default - only for display purposes
      },
      
    theme:{
        themes:{
            light:{
                primary: '#333333',
                secondary: '#2B2B2B',
                white: '#ffffff',
                orange: '#FC6D2B',
                darkgrey: '#707070',
                complete: '#2BFC83',
                inprogress: '#FFB936',
                incomplete: '#FF1212',
                lightgrey: '#cacaca',
            }
        }
    }
});
