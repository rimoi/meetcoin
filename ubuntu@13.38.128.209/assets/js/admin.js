import '../styles/admin.css';


import $ from 'jquery';
global.$ = global.jQuery = window.$ = $;
require('bootstrap');
require('@fortawesome/fontawesome-free/js/all');
import Swal from "sweetalert2";
window.Swal = Swal;
import 'select2';
import flashy from "./flashy";
window.flashy = global.flashy = flashy;

import './scripts';




