import { Args, Mutation, Query, Resolver } from "type-graphql";
import Wilder from "../models/Wilder/wilder.entity";
import WilderRepository from "../models/Wilder/wilder.repository";
import CreateWilderInput from "./Wilder.input";

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

  // TODO :
  // - updateWilder
  // - deleteWilder
}
