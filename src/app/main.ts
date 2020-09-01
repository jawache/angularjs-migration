import 'angular';
import 'angular-resource';
import 'angular-animate';
import 'ng-infinite-scroll';
import 'angular-spinner';
import 'angular-auto-validate/dist/jcs-auto-validate';
import 'angular-ladda';
import 'angular-strap';
import 'angularjs-toaster';
import 'angular-ui-router';

import './app.main';
import './services';
import './components';
import './filters';
import './app.routes';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker, faGift, faEnvelope, faPencilAlt, faTrash, faFemale, faMale } from "@fortawesome/free-solid-svg-icons";

library.add( faMale, faFemale, faMapMarker, faGift, faEnvelope, faPencilAlt, faTrash );
dom.watch();