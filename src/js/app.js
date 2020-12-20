import '../style.css';
import MessengerController from './messengerController.js';
import Input from './input.js';
import Pinned from './pinned.js';
import Tasks from './tasks.js';

const input = new Input();
const pinned = new Pinned();
const tasks = new Tasks();
const messengerController = new MessengerController(pinned, tasks, input);
messengerController.init();