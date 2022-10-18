import { Query, Resolver } from "type-graphql";
import School from "../models/School/School.entity";

import SchoolRepository from "../models/School/School.repository";

@Resolver(School)
export default class SchoolResolver {
  @Query(() => [School])
  schools(): Promise<School[]> {
    return SchoolRepository.getSchools();
  }
}
