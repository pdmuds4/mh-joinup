import { ObjectId } from "mongodb";
import { ManageEntity } from "@/models/domain/entity";
import { ManageInstant } from "@/models/domain/embedded";
import { ManageApplicant, ManageQuest } from "@/models/domain/value_object";

describe("ManageEntity", () => {
    const id = new ObjectId();
    const connectionId = new ObjectId();
    const joiner = [new ManageInstant(new ObjectId(), new ManageQuest(1)), new ManageInstant(new ObjectId(), new ManageQuest(2))];
    const waiter = [new ManageInstant(new ObjectId(), new ManageQuest(3)), new ManageInstant(new ObjectId(), new ManageQuest(4))];
    const quests = new ManageQuest(5);
    const applicants = new ManageApplicant(6);

    let manageEntity: ManageEntity;

    beforeEach(() => {
        manageEntity = new ManageEntity(id, connectionId, joiner, waiter, quests, applicants);
    });

    it("should create a ManageEntity instance", () => {
        expect(manageEntity).toBeInstanceOf(ManageEntity);
    });

    it('should return a valid ManageType object', () => {
        const manageType = manageEntity.toJson();
        expect(manageType).toEqual({
            id: id.toString(),
            connection_id: connectionId.toString(),
            joiner: joiner.map(j => j.toJson()),
            waiter: waiter.map(w => w.toJson()),
            quests: quests.value,
            applicants: applicants.value
        });
    });


    it("should return a valid ManageDTO object", () => {
        const ManageDTO = manageEntity.toObject();
        expect(ManageDTO).toEqual({
            id: id,
            connection_id: connectionId,
            joiner: joiner.map(j => j.toObject()),
            waiter: waiter.map(w => w.toObject()),
            quests: quests,
            applicants: applicants
        });
    });

    it("should validate schema correctly", () => {
        const schema = ManageEntity.schema();
        const validData = {
            connection_id: connectionId.toString(),
            joiner: joiner.map(j => j.toJson()),
            waiter: waiter.map(w => w.toJson()),
            quests: quests.value,
            applicants: applicants.value
        };
        expect(() => schema.parse(validData)).not.toThrow();
    });
});