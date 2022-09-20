"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wilders_controller_1 = __importDefault(require("./controllers/wilders.controller"));
const school_controller_1 = __importDefault(require("./controllers/school.controller"));
const wilder_manager_1 = require("./entities/Wilder/wilder.manager");
const school_manager_1 = require("./entities/School/school.manager");
const skill_manager_1 = require("./entities/Skill/skill.manager");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, wilders_controller_1.default.get);
app.post(WILDERS_PATH, wilders_controller_1.default.post);
app.put(`${WILDERS_PATH}/:id`, wilders_controller_1.default.put);
app.delete(`${WILDERS_PATH}/:id`, wilders_controller_1.default.del);
app.post(`${WILDERS_PATH}/:id/skills`, wilders_controller_1.default.addSkill);
const SCHOOL_PATH = "/schools";
app.get(SCHOOL_PATH, school_controller_1.default.get);
const PORT = 4000;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, skill_manager_1.initializeSkills)();
        yield (0, school_manager_1.initializeSchools)();
        yield (0, wilder_manager_1.initializeWilders)();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT} !`);
        });
    });
}
start();
