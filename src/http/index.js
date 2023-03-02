import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.useAttrs(VueResource)

const http = Vue.http
http.options.root = 'http://localhost:3000/'

export {http}