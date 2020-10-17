import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm";

import { YoutubeChannelModel } from "./youtubeChannel.model";

@ObjectType()
@Entity("youtubeVideos")
export class YoutubeVideoModel {
  @Field()
  @Column({ primary: true })
  serviceId: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field((type) => YoutubeChannelModel)
  @ManyToOne((type) => YoutubeChannelModel, (channel) => channel.youtubeVideos, {
    nullable: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  channel: YoutubeChannelModel;
}
