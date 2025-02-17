import { ObjectId } from "mongodb";
import { ApplicantEntity } from "@/models/domain/entity";
import { ApplicantMessage } from "@/models/domain/value_object";

describe("ApplicantEntity", () => {
    const id = new ObjectId();
    const userId = new ObjectId();
    const connectionId = new ObjectId();
    const message = new ApplicantMessage("message");

    let applicantEntity: ApplicantEntity;

    beforeEach(() => {
        applicantEntity = new ApplicantEntity(id, userId, connectionId, message);
    });

    it("should create a ApplicantEntity instance", () => {
        expect(applicantEntity).toBeInstanceOf(ApplicantEntity);
    });

    it("should return a valid ApplicantDTO object", () => {
        const applicantDTO = applicantEntity.toObject();
        expect(applicantDTO).toEqual({
            id: id,
            user_id: userId,
            connection_id: connectionId,
            message: message
        });
    });

    it("should validate schema correctly", () => {
        const schema = ApplicantEntity.schema();
        const validData = {
            user_id: userId.toString(),
            connection_id: connectionId.toString(),
            message: message.value
        };
        expect(() => schema.parse(validData)).not.toThrow();
    });
});