import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import School from "../School/School.entity";
import Skill from "../Skill/Skill.entity";

@ObjectType()
@Entity()
export default class Wilder {
  constructor(
    firstname: string,
    lastname: string,
    school: School,
    skills?: Skill[]
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.school = school;
    if (skills) this.skills = skills;
  }

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  firstname: string;

  @Field()
  @Column()
  lastname: string;

  @Field(() => School, { nullable: true })
  @ManyToOne(() => School, (school) => school.wilders, { eager: true })
  school: School;

  @Field(() => [Skill], { nullable: true })
  @ManyToMany(() => Skill, { eager: true })
  @JoinTable()
  skills: Skill[];

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}
