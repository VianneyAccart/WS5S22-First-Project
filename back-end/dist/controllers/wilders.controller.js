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
const wilder_manager_1 = require("../entities/Wilder/wilder.manager");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wilders = yield (0, wilder_manager_1.getWilders)();
    res.status(200).json(wilders);
});
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, school } = req.body;
    if (!firstname || !lastname || !school)
        res
            .status(400)
            .json({ error: "Firstname, lastname and school are required !" });
    else {
        try {
            const newWilder = yield (0, wilder_manager_1.createWilder)(firstname, lastname, school);
            res.status(201).json(newWilder);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
});
const put = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    if (!firstname || !lastname)
        res.status(400).json({ error: "Firstname and lastname are required !" });
    else {
        try {
            const updatedWilder = yield (0, wilder_manager_1.updateWilder)(id, firstname, lastname);
            res.json(updatedWilder);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
});
const del = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, wilder_manager_1.deleteWilder)(id);
        res.json({ message: `Wilder ${id} has been successfully removed.` });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
const addSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: wilderId } = req.params;
    const { skillId } = req.body;
    if (!skillId)
        res.status(400).json({ error: "Skill ID is required !" });
    else {
        try {
            const updatedWilder = yield (0, wilder_manager_1.addSkillToWilder)(wilderId, skillId);
            res.json(updatedWilder);
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
});
exports.default = {
    get,
    post,
    put,
    del,
    addSkill,
};
