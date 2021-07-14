import { btnNew, btnRoll, btnHold } from "./exports/variables.js";
import { rollingDice, holdCurrent, init } from './exports/logicalFunctions.js';

btnRoll.addEventListener("click", rollingDice);

btnHold.addEventListener("click", holdCurrent);

btnNew.addEventListener("click", init);
