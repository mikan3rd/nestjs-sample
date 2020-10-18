import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class YoutubeChannelDTO {
  @Field()
  serviceId: string;

  @Field()
  accountId: number;
}

@InputType()
export class YoutubeVideoDTO {
  @Field({ nullable: true })
  serviceId: string;

  @Field()
  channelId: string;
}
