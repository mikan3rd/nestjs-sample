import { Controller, Get } from "@nestjs/common";

import { InstagramService } from "../services/instagram.service";

@Controller("instagram")
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get()
  crawlUserProfile() {
    const username = "yukos0520";
    return this.instagramService.crawlUserProfile(username);
  }
}
