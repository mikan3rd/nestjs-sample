import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AccountDTO {
  @Field()
  profileName: string;

  @Field()
  username: string;

  @Field()
  thumbnailUrl: string;
}
