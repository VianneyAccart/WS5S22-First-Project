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
exports.addSkillToWilder = exports.deleteWilder = exports.updateWilder = exports.createWilder = exports.getWilders = exports.initializeWilders = void 0;
const utils_1 = require("../../database/utils");
const school_manager_1 = require("../School/school.manager");
const skill_manager_1 = require("../Skill/skill.manager");
const wilder_entity_1 = __importDefault(require("./wilder.entity"));
function initializeWilders() {
    return __awaiter(this, void 0, void 0, function* () {
        const wilderRepository = yield (0, utils_1.getWilderRepository)();
        yield wilderRepository.clear();
        const lyonSchool = (yield (0, school_manager_1.getSchoolByName)("Lyon"));
        const marseilleSchool = (yield (0, school_manager_1.getSchoolByName)("Marseille"));
        const php = (yield (0, skill_manager_1.getSkillByName)("PHP"));
        const javascript = (yield (0, skill_manager_1.getSkillByName)("JavaScript"));
        const typescript = (yield (0, skill_manager_1.getSkillByName)("TypeScript"));
        const java = (yield (0, skill_manager_1.getSkillByName)("Java"));
        yield wilderRepository.save(new wilder_entity_1.default("Vianney", "Accart", lyonSchool, [php, javascript]));
        yield wilderRepository.save(new wilder_entity_1.default("Adam", "Roux", lyonSchool, [typescript, java]));
        yield wilderRepository.save(new wilder_entity_1.default("Ario", "Ngu", marseilleSchool, [java]));
    });
}
exports.initializeWilders = initializeWilders;
function getWilders() {
    return __awaiter(this, void 0, void 0, function* () {
        const wilderRepository = yield (0, utils_1.getWilderRepository)();
        return wilderRepository.find();
    });
}
exports.getWilders = getWilders;
function createWilder(firstname, lastname, schoolId) {
    return __awaiter(this, void 0, void 0, function* () {
        const wilderRepository = yield (0, utils_1.getWilderRepository)();
        const school = yield (0, school_manager_1.getSchoolById)(schoolId);
        if (!school)
            throw Error("No existing school matching ID.");
        const newWilder = wilderRepository.create({
            firstname,
            lastname,
            school,
        });
        yield wilderRepository.save(newWilder);
        return newWilder;
    });
}
exports.createWilder = createWilder;
function updateWilder(id, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const wilderRepository = yield (0, utils_1.getWilderRepository)();
        const existingWilder = yield wilderRepository.findOneBy({
            id,
        });
        if (!existingWilder)
            throw Error("No existing Wilder matching ID.");
        return wilderRepository.save({ id, firstname, lastname });
    });
}
exports.updateWilder = updateWilder;
function deleteWilder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const wilderRepository = yield (0, utils_1.getWilderRepository)();
        const existingWilder = yield wilderRepository.findOneBy({
            id,
        });
        if (!existingWilder)
            throw Error("No existing Wilder matching ID.");
        return wilderRepository.remove(existingWilder);
    });
}
exports.deleteWilder = deleteWilder;
function addSkillToWilder(wilderId, skillId) {
    return __awaiter(this, void 0, void 0, function* () {
        const wilderRepository = yield (0, utils_1.getWilderRepository)();
        const wilder = yield wilderRepository.findOneBy({
            id: wilderId,
        });
        if (!wilder)
            throw Error("No existing Wilder matching ID.");
        const skillRepository = yield (0, utils_1.getSkillRepository)();
        const skill = yield skillRepository.findOneBy({
            id: skillId,
        });
        if (!skill)
            throw Error("No existing skill matching ID.");
        wilder.skills = [...wilder.skills, skill];
        return wilderRepository.save(wilder);
    });
}
exports.addSkillToWilder = addSkillToWilder;
