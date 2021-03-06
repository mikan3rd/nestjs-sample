import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { YoutubeChannelModel } from "./youtubeChannel.model";

@ObjectType()
@Entity("accounts")
export class AccountModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  profileName: string; // 表示用の名前

  @Field()
  @Column()
  username: string; // URLなどに使用する半角英数字

  @Field()
  @Column({ type: "text" })
  thumbnailUrl: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field((type) => [YoutubeChannelModel], { defaultValue: [] })
  @OneToMany((type) => YoutubeChannelModel, (youtubeChannel) => youtubeChannel.account)
  youtubeChannels: YoutubeChannelModel[];
}
