import './style.scss'
import { M } from "@materializecss/materialize"

import { setupCounter } from './counter.ts'



setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

M.Tabs.init(document.querySelectorAll('.tabs'), {});
M.Tabs.init(document.querySelectorAll('#tabs-swipe-demo'), {swipeable: true});
