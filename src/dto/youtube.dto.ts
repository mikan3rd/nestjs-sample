import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class YoutubeChannelDTO {
  @Field({ nullable: true })
  id?: number;

  @Field()
  accountId: number;

  @Field()
  channelId: string;
}
