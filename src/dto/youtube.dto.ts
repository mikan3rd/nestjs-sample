import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class YoutubeChannelDTO {
  @Field()
  accountId: number;

  @Field()
  channelId: string;
}
