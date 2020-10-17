import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { AccountModel } from "./account.model";

@ObjectType()
@Entity("youtubeChannels")
export class YoutubeChannelModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  channelId: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field((type) => AccountModel)
  @ManyToOne((type) => AccountModel, (account) => account.youtubeChannels, { nullable: false })
  account: AccountModel;
}
