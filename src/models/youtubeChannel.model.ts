import { Field, ObjectType } from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from "typeorm";

import { AccountModel } from "./account.model";

@ObjectType()
@Entity("youtubeChannels")
export class YoutubeChannelModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(type => AccountModel)
  @ManyToOne(
    type => AccountModel,
    account => account.youtubeChannels,
    { nullable: false },
  )
  account: AccountModel;
}
