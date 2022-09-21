export type WilderType = {
  firstname: string;
  lastname: string;
  id: string;
  school: School;
  skills: Skill[];
};

export type School = {
  id: string;
  schoolName: string;
};

export type Skill = {
  id: string;
  skillName: string;
};
