"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.fadeInOutTranslate = animations_1.trigger('fadeInOutTranslate', [
    animations_1.transition(':enter', [
        animations_1.style({ opacity: 0 }),
        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 1 }))
    ]),
    animations_1.transition(':leave', [
        animations_1.style({ transform: 'translate(0)' }),
        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=animation.js.map