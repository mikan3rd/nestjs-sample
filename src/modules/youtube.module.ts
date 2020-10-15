import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { YoutubeChannelModel } from "../models/youtubeChannel.model";
import { YoutubetResolver } from "../resolvers/youtube.resolver";
import { YoutubeService } from "../services/youtube.service";

import { AccountModule } from "./account.module";

@Module({
  imports: [TypeOrmModule.forFeature([YoutubeChannelModel]), forwardRef(() => AccountModule)],
  providers: [YoutubeService, YoutubetResolver],
  exports: [YoutubeService],
})
export class YoutubeModule {}
