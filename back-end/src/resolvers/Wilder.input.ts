import { MinLength } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";

@ArgsType()
export class CreateWilderInput {
  @Field()
  @MinLength(1)
  firstname: string;

  @Field()
  @MinLength(1)
  lastname: string;

  @Field()
  @MinLength(1)
  schoolId: string;
}

@ArgsType()
export class UpdateWilderInput {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field()
  @MinLength(1)
  firstname: string;

  @Field()
  @MinLength(1)
  lastname: string;

  @Field()
  @MinLength(1)
  schoolId: string;
}

@ArgsType()
export class AddSkillToWilderInput {
  @Field(() => ID, { nullable: false })
  wilderId: string;

  @Field({ nullable: false })
  skillId: string;
}
