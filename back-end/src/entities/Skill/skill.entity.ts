import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Wilder from "../Wilder/wilder.entity";

@Entity()
export default class Skill {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index({ unique: true })
  @Column()
  skillName: string;

  @ManyToMany(() => Wilder)
  wilders: Wilder[];
}
