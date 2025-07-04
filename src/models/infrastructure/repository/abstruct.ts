import { Collection, ObjectId } from "mongodb";
import MongoDBClient from "../client/mongodb";
import AbsEntity from "@/models/domain/entity/abstruct";


export default abstract class AbsRepository<Entitiy extends AbsEntity<unknown, unknown>> {
    private client: MongoDBClient;
    private collection: Collection;

    constructor(client: MongoDBClient, collection: Collection) {
        this.client = client;
        this.collection = collection;
    }

    protected async insertRaw(data: Entitiy) {
        return await this.client.queryWrapper(data,
            async(data: Entitiy) => await this.collection.insertOne(data.toDocument())
        )
    }

    protected async selectByIdRaw(id: ObjectId) {
        return await this.client.queryWrapper(id,
            async(id: ObjectId) => await this.collection.findOne({ _id: id })
        )
    }

    protected async selectByOtherPropsRaw(props: string, search: unknown) {
        return await this.client.queryWrapper({props: search},
            async({props: search}) => await this.collection.findOne({ [props]: search })
        )
    }

    protected async selectAllByOtherPropsRaw(props: string, search: unknown) {
        return await this.client.queryWrapper({props: search},
            async({props: search}) => this.collection.find({ [props]: search })
        )
    }

    protected async upsertByIdRaw(data: Entitiy) {
        return await this.client.queryWrapper(data,
            async (data: Entitiy) => {
                const { _id, ...otherProps } = data.toDocument(); 
                return await this.collection.updateOne(
                    { _id },
                    { $set: otherProps },
                    { upsert: true }
                )
            }
        )
    }

    protected async upsertByOtherPropsRaw(props: string, data: Entitiy) {
        return await this.client.queryWrapper({props: data},
            async ({props: data}) => {
                const document = data.toDocument() as Record<string, unknown>;
                const filter = document[props] ? { [props]: document[props] } : { _id: document._id as ObjectId };
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { _id , ...otherProps } = document;

                return await this.collection.updateOne(
                    filter,
                    { $set: otherProps },
                    { upsert: true }
                )
            }
        )
    }

    protected async deleteByIdRaw(id: ObjectId) {
        return await this.client.queryWrapper(id,
            async(id: ObjectId) => await this.collection.deleteOne({ _id: id })
        )
    }
}