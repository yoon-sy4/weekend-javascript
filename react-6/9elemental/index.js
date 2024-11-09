import { data}  from "./data.js" 
import {makeTemplate} from "./func"


data.forEach((v) => makeTemplate(v.title, v.color, v.buttons))