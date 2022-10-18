import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import Wilder from "../models/Wilder/Wilder.entity";
import WilderRepository from "../models/Wilder/Wilder.repository";

import {
  AddSkillToWilderInput,
  CreateWilderInput,
  UpdateWilderInput,
} from "./Wilder.input";

@Resolver(Wilder)
export default class WilderResolver {
  @Query(() => [Wilder])
  wilders(): Promise<Wilder[]> {
    // On peut faire du try/catch. Par contre, GraphQL renvoie toujours un code 200.
    return WilderRepository.getWilders();
  }

  @Mutation(() => Wilder)
  createWilder(
    @Args() { firstname, lastname, schoolId }: CreateWilderInput
  ): Promise<Wilder> {
    return WilderRepository.createWilder(firstname, lastname, schoolId);
  }

  @Mutation(() => Wilder)
  updateWilder(
    @Args() { id, firstname, lastname }: UpdateWilderInput
  ): Promise<Wilder> {
    return WilderRepository.updateWilder(id, firstname, lastname);
  }

  @Mutation(() => String)
  async deleteWilder(@Arg("id") id: string): Promise<String> {
    await WilderRepository.deleteWilder(id);
    return `Wilder ${id} has been successfully removed.`;
  }

  @Mutation(() => Wilder)
  addSkillToWilder(
    @Args() { wilderId, skillId }: AddSkillToWilderInput
  ): Promise<Wilder> {
    return WilderRepository.addSkillToWilder(wilderId, skillId);
  }
}
