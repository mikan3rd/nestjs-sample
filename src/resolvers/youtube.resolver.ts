import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { YoutubeChannelDTO } from "../dto/youtube.dto";
import { YoutubeChannelModel } from "../models/youtubeChannel.model";
import { YoutubeService } from "../services/youtube.service";

@Resolver(of => YoutubeChannelModel)
export class YoutubetResolver {
  constructor(@Inject(YoutubeService) private youtubeService: YoutubeService) {}

  @Query(returns => YoutubeChannelModel, { nullable: true })
  async youtubeChannel(@Args("id") id: number) {
    return await this.youtubeService.findOneChannel(id);
  }

  @Query(returns => [YoutubeChannelModel])
  async youtubeChannels() {
    return await this.youtubeService.findAllChannel();
  }

  @Mutation(returns => YoutubeChannelModel)
  async saveYoutubeChannel(@Args("youtubeChannel") youtubeChannel: YoutubeChannelDTO) {
    return await this.youtubeService.saveChannel(youtubeChannel);
  }

  @Mutation(returns => YoutubeChannelModel, { nullable: true })
  async deleteYoutubeChannel(@Args("id") id: number) {
    return await this.youtubeService.deleteChannel(id);
  }
}
