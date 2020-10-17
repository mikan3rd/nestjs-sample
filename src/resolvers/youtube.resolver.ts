import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { YoutubeChannelDTO, YoutubeVideoDTO } from "../dto/youtube.dto";
import { YoutubeChannelModel } from "../models/youtubeChannel.model";
import { YoutubeVideoModel } from "../models/youtubeVideo.model";
import { YoutubeService } from "../services/youtube.service";

@Resolver((of) => YoutubeChannelModel)
export class YoutubetResolver {
  constructor(@Inject(YoutubeService) private youtubeService: YoutubeService) {}

  @Query((returns) => YoutubeChannelModel, { nullable: true })
  async youtubeChannel(@Args("serviceId") serviceId: string) {
    return await this.youtubeService.findOneChannel(serviceId);
  }

  @Query((returns) => [YoutubeChannelModel])
  async youtubeChannels() {
    return await this.youtubeService.findAllChannel();
  }

  @Mutation((returns) => YoutubeChannelModel)
  async saveYoutubeChannel(@Args("youtubeChannel") youtubeChannel: YoutubeChannelDTO) {
    return await this.youtubeService.saveChannel(youtubeChannel);
  }

  @Mutation((returns) => YoutubeChannelModel, { nullable: true })
  async deleteYoutubeChannel(@Args("serviceId") serviceId: string) {
    return await this.youtubeService.deleteChannel(serviceId);
  }

  @Query((returns) => YoutubeVideoModel, { nullable: true })
  async youtubeVideo(@Args("id") id: string) {
    return await this.youtubeService.findOneVideo(id);
  }

  @Query((returns) => [YoutubeVideoModel])
  async youtubeVideos() {
    return await this.youtubeService.findAllVideo();
  }

  @Mutation((returns) => YoutubeVideoModel)
  async saveYoutubeVideo(@Args("youtubeVideo") youtubeVideo: YoutubeVideoDTO) {
    return await this.youtubeService.saveVideo(youtubeVideo);
  }

  @Mutation((returns) => YoutubeVideoModel, { nullable: true })
  async deleteYoutubeVideo(@Args("serviceId") serviceId: string) {
    return await this.youtubeService.deleteVideo(serviceId);
  }
}
