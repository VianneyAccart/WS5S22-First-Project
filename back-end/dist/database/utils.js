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
exports.getSkillRepository = exports.getSchoolRepository = exports.getWilderRepository = exports.getDatabase = void 0;
const typeorm_1 = require("typeorm");
const wilder_entity_1 = __importDefault(require("../entities/Wilder/wilder.entity"));
const school_entity_1 = __importDefault(require("../entities/School/school.entity"));
const skill_entity_1 = __importDefault(require("../entities/Skill/skill.entity"));
const dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "wildersdb.sqlite",
    synchronize: true,
    entities: [wilder_entity_1.default, school_entity_1.default, skill_entity_1.default],
    logging: ["query", "error"],
});
let initialized = false;
function getDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!initialized) {
            yield dataSource.initialize();
            initialized = true;
            console.log("Successfully connected to database.");
        }
        return dataSource;
    });
}
exports.getDatabase = getDatabase;
function getWilderRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield getDatabase()).getRepository(wilder_entity_1.default);
    });
}
exports.getWilderRepository = getWilderRepository;
function getSchoolRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield getDatabase()).getRepository(school_entity_1.default);
    });
}
exports.getSchoolRepository = getSchoolRepository;
function getSkillRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield getDatabase()).getRepository(skill_entity_1.default);
    });
}
exports.getSkillRepository = getSkillRepository;
