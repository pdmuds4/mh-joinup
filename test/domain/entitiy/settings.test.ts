import { ObjectId } from "mongodb";
import { SettingEntity } from "@/models/domain/entity";
import { SettingKeyWord } from "@/models/domain/value_object";

describe("SettingEntity", () => {
    const id = new ObjectId();
    const userId = new ObjectId();
    const keywords = [new SettingKeyWord("keyword1"), new SettingKeyWord("keyword2")];

    let settingEntity: SettingEntity;

    beforeEach(() => {
        settingEntity = new SettingEntity(id, userId, keywords);
    });

    it("should create a SettingEntity instance", () => {
        expect(settingEntity).toBeInstanceOf(SettingEntity);
        expect(settingEntity.user_id).toEqual(userId);
        expect(settingEntity.keywords).toEqual(keywords);
    });

    it("should update all", () => {
        const newKeywords = [new SettingKeyWord("new_key1"), new SettingKeyWord("new_key2")];

        settingEntity.updateAll = { keywords: newKeywords };
        expect(settingEntity.keywords).toEqual(newKeywords);
        expect(settingEntity.toObject().keywords).toEqual(newKeywords);
    });

    it("should return a valid SettingDTO object", () => {
        const settingDTO = settingEntity.toObject();
        expect(settingDTO).toEqual({
            id: id,
            user_id: userId,
            keywords: keywords
        });
    });

    it("should validate schema correctly", () => {
        const schema = SettingEntity.schema();
        const validData = {
            user_id: userId.toString(),
            keywords: keywords.map(keyword => keyword.value)
        };
        expect(() => schema.parse(validData)).not.toThrow();
    });
});