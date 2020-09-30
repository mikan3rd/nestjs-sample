import { Module } from "@nestjs/common";

import { InstagramController } from "../controllers/instagram.controller";
import { InstagramService } from "../services/instagram.service";

@Module({
  imports: [],
  providers: [InstagramService],
  controllers: [InstagramController],
})
export class InstagramModule {}
