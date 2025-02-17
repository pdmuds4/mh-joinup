import { ObjectId } from "mongodb";
import { ConnectionEntity } from "@/models/domain/entity";
import { ConnectYoutubeId, ConnectVideoTitle, ConnectChatToken } from "@/models/domain/value_object";

describe("ConnectionEntity", () => {
    const id = new ObjectId();
    const userId = new ObjectId();
    const youtubeId = new ConnectYoutubeId("Ffi07Rj3kSg");
    const videoTitle = new ConnectVideoTitle("video_title");
    const chatToken = new ConnectChatToken("Cg0KC05hMHczTXo0NkdBKicKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxILTmEwdzNNejQ2R0E");

    let connectionEntity: ConnectionEntity;

    beforeEach(() => {
        connectionEntity = new ConnectionEntity(id, userId, youtubeId, videoTitle, chatToken);
    });

    it("should create a ConnectionEntity instance", () => {
        expect(connectionEntity).toBeInstanceOf(ConnectionEntity);
    });

    it("should update video title", () => {
        const newVideoTitle = new ConnectVideoTitle("new_video_title");

        connectionEntity.updateVideoTitle = newVideoTitle;
        expect(connectionEntity.toJson().video_title).toEqual(newVideoTitle.value);
    });

    it("should return a valid ConnectionDTO object", () => {
        const connectionDTO = connectionEntity.toObject();
        expect(connectionDTO).toEqual({
            id: id,
            user_id: userId,
            youtube_id: youtubeId,
            video_title: videoTitle,
            chat_token: chatToken
        });
    });

    it("should validate schema correctly", () => {
        const schema = ConnectionEntity.schema();
        const validData = {
            user_id: userId.toString(),
            youtube_id: youtubeId.value,
            video_title: videoTitle.value,
            chat_token: chatToken.value
        };
        expect(() => schema.parse(validData)).not.toThrow();
    });
});