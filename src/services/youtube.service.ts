import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { YoutubeChannelDTO, YoutubeVideoDTO } from "../dto/youtube.dto";
import { YoutubeChannelModel } from "../models/youtubeChannel.model";
import { YoutubeVideoModel } from "../models/youtubeVideo.model";
import { AccountService } from "../services/account.service";

@Injectable()
export class YoutubeService {
  constructor(
    @InjectRepository(YoutubeChannelModel)
    private youtubeRepository: Repository<YoutubeChannelModel>,
    @InjectRepository(YoutubeVideoModel)
    private youtubeVideoRepository: Repository<YoutubeVideoModel>,
    private accountService: AccountService,
  ) {}

  async findOneChannel(serviceId: string) {
    return await this.youtubeRepository.findOne(serviceId, { relations: ["account"] });
  }

  async findAllChannel() {
    return this.youtubeRepository.find({ relations: ["account"] });
  }

  async saveChannel(payload: YoutubeChannelDTO) {
    const account = await this.accountService.findOne(payload.accountId);
    return this.youtubeRepository.save({ ...payload, account });
  }

  async deleteChannel(serviceId: string) {
    const targetChannel = await this.findOneChannel(serviceId);
    await this.youtubeRepository.delete(serviceId);
    return targetChannel;
  }

  async findOneVideo(serviceId: string) {
    return await this.youtubeVideoRepository.findOne(serviceId, { relations: ["channel"] });
  }

  async findAllVideo() {
    return this.youtubeVideoRepository.find({ relations: ["channel"] });
  }

  async saveVideo(payload: YoutubeVideoDTO) {
    const channel = await this.findOneChannel(payload.channelId);
    return this.youtubeVideoRepository.save({ ...payload, channel });
  }

  async deleteVideo(serviceId: string) {
    const targetVideo = await this.findOneVideo(serviceId);
    await this.youtubeVideoRepository.delete(serviceId);
    return targetVideo;
  }
}
