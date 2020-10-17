import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { YoutubeChannelDTO } from "../dto/youtube.dto";
import { YoutubeChannelModel } from "../models/youtubeChannel.model";
import { AccountService } from "../services/account.service";

@Injectable()
export class YoutubeService {
  constructor(
    @InjectRepository(YoutubeChannelModel)
    private youtubeRepository: Repository<YoutubeChannelModel>,
    private accountService: AccountService,
  ) {}

  async findOneChannel(id: number) {
    return await this.youtubeRepository.findOne(id, { relations: ["account"] });
  }

  async findAllChannel() {
    return this.youtubeRepository.find({ relations: ["account"] });
  }

  async saveChannel(payload: YoutubeChannelDTO) {
    const account = await this.accountService.findOne(payload.accountId);
    return this.youtubeRepository.save({ ...payload, account });
  }

  async deleteChannel(id: number) {
    const targetChannel = await this.findOneChannel(id);
    await this.youtubeRepository.delete(id);
    return targetChannel;
  }
}
