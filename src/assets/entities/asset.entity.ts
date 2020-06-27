import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Workspace } from "@test/workspaces/entities/workspace.entity";

@ObjectType()
export class Asset {
  @Field((type) => ID)
  id: String;

  @Field()
  title: String;

  @Field({ nullable: true })
  description: String;

  @Field({ nullable: true })
  uri: String;

  @Field((type) => [Workspace])
  workspace: Workspace;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
