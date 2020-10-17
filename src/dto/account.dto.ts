import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AccountDTO {
  @Field({ nullable: true })
  id?: number;

  @Field()
  profileName: string;

  @Field()
  username: string;

  @Field()
  thumbnailUrl: string;
}
