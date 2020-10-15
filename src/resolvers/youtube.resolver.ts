import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { YoutubeChannelDTO } from "../dto/youtube.dto";
import { YoutubeChannelModel } from "../models/youtubeChannel.model";
import { YoutubeService } from "../services/youtube.service";

@Resolver(of => YoutubeChannelModel)
export class YoutubetResolver {
  constructor(@Inject(YoutubeService) private accountService: YoutubeService) {}

  @Query(returns => YoutubeChannelModel)
  async youtubeChannel(@Args("id") id: number) {
    return await this.accountService.findOneChannel(id);
  }

  @Query(returns => [YoutubeChannelModel])
  async youtubeChannels() {
    return await this.accountService.findAllChannel();
  }

  @Mutation(returns => YoutubeChannelModel)
  async createYoutubeChannel(@Args("youtubeChannel") youtubeChannel: YoutubeChannelDTO) {
    return await this.accountService.createChannel(youtubeChannel);
  }
}
