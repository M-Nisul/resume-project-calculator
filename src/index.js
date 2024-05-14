import './style.css';
import themeSwitch from '../node_modules/dark-mode-utils/module';
import dark from '../dist/assets/dark.png';
import light from '../dist/assets/light.png';
import buttonDislplay from './modules/buttonDisplay';

themeSwitch(light, dark);
buttonDislplay();