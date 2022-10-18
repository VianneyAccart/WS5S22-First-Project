import { MinLength } from "class-validator";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
export default class CreateWilderInput {
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
