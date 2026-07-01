import { Body } from "./components/body";
import "./styles/global.css";

const app = document.getElementById("app") as HTMLElement;
if (app) {
  app.innerHTML = Body();
}
