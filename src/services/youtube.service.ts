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

  async createChannel(payload: YoutubeChannelDTO) {
    const account = await this.accountService.findOne(payload.accountId);
    return this.youtubeRepository.save({ ...payload, account });
  }

  findAllChannel() {
    return this.youtubeRepository.find({ relations: ["account"] });
  }

  findOneChannel(id: number) {
    return this.youtubeRepository.findOne(id, { relations: ["account"] });
  }
}
