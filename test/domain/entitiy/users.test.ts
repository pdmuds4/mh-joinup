import { ObjectId } from "mongodb";
import { UserEntity } from "@/models/domain/entity";
import { UserChannelId, UserName, UserAvatar } from "@/models/domain/value_object";

describe("UserEntity", () => {
    const id = new ObjectId();
    const channelId = new UserChannelId("UCuTAXTexrhetbOe3zgskJBQ");
    const name = new UserName("John Doe");
    const avatar = new UserAvatar("https://example.com/avatar.png");

    let userEntity: UserEntity;

    beforeEach(() => {
        userEntity = new UserEntity(id, channelId, name, avatar);
    });

    it("should create a UserEntity instance", () => {
        expect(userEntity).toBeInstanceOf(UserEntity);
        expect(userEntity.channel_id).toEqual(channelId);
        expect(userEntity.name).toEqual(name);
        expect(userEntity.avatar).toEqual(avatar);
    });

    it("should update the name", () => {
        const newName = new UserName("Jane Doe");
        userEntity.updateName = newName;
        expect(userEntity.name).toEqual(newName);
        expect(userEntity.toObject().name).toEqual(newName);
    });

    it("should update the avatar", () => {
        const newAvatar = new UserAvatar("https://example.com/new_avatar.png");
        userEntity.updateAvatar = newAvatar;
        expect(userEntity.avatar).toEqual(newAvatar);
        expect(userEntity.toObject().avatar).toEqual(newAvatar);
    });

    it("should return a valid UserDTO object", () => {
        const userDTO = userEntity.toObject();
        expect(userDTO).toEqual({
            id: id,
            channel_id: channelId,
            name: name,
            avatar: avatar
        });
    });

    it("should validate schema correctly", () => {
        const schema = UserEntity.schema();
        const validData = {
            channel_id: channelId.value,
            name: name.value,
            avatar: avatar.value
        };
        expect(() => schema.parse(validData)).not.toThrow();
    });
});