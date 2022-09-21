import { Request, Response } from "express";
import { getErrorMessage } from "../utils";
import WilderRepository from "../models/Wilder/wilder.repository";

const get = async (req: Request, res: Response): Promise<void> => {
  const wilders = await WilderRepository.getWilders();
  res.status(200).json(wilders);
};

const post = async (req: Request, res: Response): Promise<void> => {
  const { firstname, lastname, school } = req.body;

  if (!firstname || !lastname || !school)
    res
      .status(400)
      .json({ error: "Firstname, lastname and school are required !" });
  else {
    try {
      const newWilder = await WilderRepository.createWilder(
        firstname,
        lastname,
        school
      );
      res.status(201).json(newWilder);
    } catch (error) {
      res.status(404).json({ error: getErrorMessage(error) });
    }
  }
};

const put = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { firstname, lastname } = req.body;

  if (!firstname || !lastname)
    res.status(400).json({ error: "Firstname and lastname are required !" });
  else {
    try {
      const updatedWilder = await WilderRepository.updateWilder(
        id,
        firstname,
        lastname
      );
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: getErrorMessage(error) });
    }
  }
};

const del = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await WilderRepository.deleteWilder(id);
    res.json({ message: `Wilder ${id} has been successfully removed.` });
  } catch (error) {
    res.status(404).json({ error: getErrorMessage(error) });
  }
};

const addSkill = async (req: Request, res: Response): Promise<void> => {
  const { id: wilderId } = req.params;
  const { skillId } = req.body;

  if (!skillId) res.status(400).json({ error: "Skill ID is required !" });
  else {
    try {
      const updatedWilder = await WilderRepository.addSkillToWilder(
        wilderId,
        skillId
      );
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: getErrorMessage(error) });
    }
  }
};

export default {
  get,
  post,
  put,
  del,
  addSkill,
};
