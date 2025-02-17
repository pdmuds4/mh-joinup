import { ObjectId } from "mongodb";
import { ManageInstant } from "@/models/domain/embedded";
import { ManageQuest } from "@/models/domain/value_object";

describe("ManageInstant", () => {
    const userId = new ObjectId();
    const quest = new ManageQuest(3);

    it("should create an instance of ManageInstant", () => {
        const manageInstant = new ManageInstant(userId, quest);
        expect(manageInstant).toBeInstanceOf(ManageInstant);
    });

    it("should have correct user_id and quest properties", () => {
        const manageInstant = new ManageInstant(userId, quest);
        expect(manageInstant.toObject()).toEqual({
            user_id: userId,
            quest: quest
        });
    });

    it("should validate schema correctly", () => {
        const schema = ManageInstant.schema();
        const validData = {
            user_id: userId.toString(),
            quest: quest.value
        };
        expect(() => schema.parse(validData)).not.toThrow();

        const invalidData = {
            user_id: "invalidId",
            quest: quest.value
        };
        expect(() => schema.parse(invalidData)).toThrow();
    });
});