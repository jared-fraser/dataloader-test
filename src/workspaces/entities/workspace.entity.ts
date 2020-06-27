import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Asset } from "@test/assets/entities/asset.entity";

@ObjectType()
export class Workspace {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  assets: Asset[];

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
