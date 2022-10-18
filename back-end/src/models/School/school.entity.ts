import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Wilder from "../Wilder/Wilder.entity";

@ObjectType()
@Entity()
export default class School {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Index({ unique: true })
  @Column()
  schoolName: string;

  @Field(() => [Wilder])
  @OneToMany(() => Wilder, (wilder) => wilder.school)
  wilders: Wilder[];
}
