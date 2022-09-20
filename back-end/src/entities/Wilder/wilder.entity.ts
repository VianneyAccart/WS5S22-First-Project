import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import School from "../School/school.entity";
import Skill from "../Skill/skill.entity";

@Entity()
export default class Wilder {
  constructor(
    firstname: string,
    lastname: string,
    school?: School,
    skills?: Skill[]
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    if (school) this.school = school;
    if (skills) this.skills = skills;
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @ManyToOne(() => School, (school) => school.wilders, { eager: true })
  school: School;

  @ManyToMany(() => Skill, { eager: true })
  @JoinTable()
  skills: Skill[];
}
