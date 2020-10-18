import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, UpdateDateColumn } from "typeorm";

import { AccountModel } from "./account.model";
import { YoutubeVideoModel } from "./youtubeVideo.model";

@ObjectType()
@Entity("youtubeChannels")
export class YoutubeChannelModel {
  @Field()
  @Column({ primary: true })
  serviceId: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field((type) => AccountModel)
  @ManyToOne((type) => AccountModel, (account) => account.youtubeChannels, {
    nullable: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  account: AccountModel;

  @Field((type) => [YoutubeVideoModel], { defaultValue: [] })
  @OneToMany((type) => YoutubeVideoModel, (youtubeVideo) => youtubeVideo.channel)
  youtubeVideos: YoutubeVideoModel[];
}
