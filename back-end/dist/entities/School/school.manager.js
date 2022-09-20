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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchools = exports.getSchoolById = exports.getSchoolByName = exports.initializeSchools = void 0;
const utils_1 = require("../../database/utils");
function initializeSchools() {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolRepository = yield (0, utils_1.getSchoolRepository)();
        const wilderRepository = yield (0, utils_1.getWilderRepository)();
        yield wilderRepository.clear();
        yield schoolRepository.clear();
        const schools = ["Lyon", "Paris", "Brest", "Angers", "Marseille"];
        schools.forEach((school) => {
            schoolRepository.save({ schoolName: school });
        });
    });
}
exports.initializeSchools = initializeSchools;
function getSchoolByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolRepository = yield (0, utils_1.getSchoolRepository)();
        return schoolRepository.findOneBy({ schoolName: name });
    });
}
exports.getSchoolByName = getSchoolByName;
function getSchoolById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolRepository = yield (0, utils_1.getSchoolRepository)();
        return schoolRepository.findOneBy({ id: id });
    });
}
exports.getSchoolById = getSchoolById;
function getSchools() {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolRepository = yield (0, utils_1.getSchoolRepository)();
        return schoolRepository.find();
    });
}
exports.getSchools = getSchools;
