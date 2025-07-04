import AbsRepository from "./abstruct";
import { RepositoryError } from "@/models/error";

import { UserEntity } from "@/models/domain/entity";
import { UserChannelId, UserAvatar, UserName } from "@/models/domain/value_object";

import { Collection, ObjectId } from "mongodb";
import MongoDBClient from "../client/mongodb";


export default class UserRepository extends AbsRepository<UserEntity> {
    constructor(client: MongoDBClient, collection: Collection) {
        super(client, collection);
    }

    async selectById(id: ObjectId): Promise<UserEntity | null> {
        const result = await this.selectByIdRaw(id);

        if (result) {
            return new UserEntity(
                result._id,
                new UserChannelId(result.channel_id),
                new UserName(result.name),
                new UserAvatar(result.avatar)
            );
        } else {
            return null;
        }
    }


    async selectByChannelId(channel_id: UserChannelId): Promise<UserEntity | null> {
        const result = await this.selectByOtherPropsRaw("channel_id", channel_id.value);
        
        if (result) {
            return new UserEntity(
                result._id,
                new UserChannelId(result.channel_id),
                new UserName(result.name),
                new UserAvatar(result.avatar)
            );
        } else {
            return null;
        }
    }

    async upsertByChannelId(user: UserEntity): Promise<ObjectId> {
        const result = await this.upsertByOtherPropsRaw("channel_id", user);

        if (result.matchedCount === 0 && result.upsertedCount === 0) {
            throw new RepositoryError(
                '[UserRepository] ChannelIDでのアップサートに失敗しました',
                user.toDocument(),
                500
            );
        }

        return result.upsertedId || user.objectId;
    }
}