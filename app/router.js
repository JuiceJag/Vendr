import { AboutController } from "./controllers/AboutController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { VendingController } from "./controllers/VendingController.js";
import { MoneyController } from "./controllers/MoneyController.js";


export const router = [
  {
    path: '',
    controller: [VendingController, MoneyController],
    view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]