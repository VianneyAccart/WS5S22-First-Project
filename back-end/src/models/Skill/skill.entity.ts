import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Wilder from "../Wilder/Wilder.entity";

@ObjectType()
@Entity()
export default class Skill {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Index({ unique: true })
  @Column()
  skillName: string;

  @Field(() => [Wilder])
  @ManyToMany(() => Wilder)
  wilders: Wilder[];
}
