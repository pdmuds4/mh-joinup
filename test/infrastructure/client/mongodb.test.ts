import MongoDBClient from "@/models/infrastructure/client/mongodb";

const db_name = process.env.MONGODB_NAME || '';
const uri = process.env.MONGODB_URI || '';

describe("MongoDBClient", () => {
    it("should be able to exit env values", () => {
        expect(db_name).not.toBe('');
        expect(uri).not.toBe('');
        console.log(`
            db_name: ${db_name}
            uri: ${uri}
        `);
    });

    it("should be able to create a new instance", async () => {
        const client = new MongoDBClient(uri);
        expect(client).toBeInstanceOf(MongoDBClient);
    });

    it("should be able to insert", async () => {
        const client = new MongoDBClient(uri);
        try {
            await client.connect();
            const insert_result = await client.field(db_name, "hoge").insertOne({ 
                name: 'hoo',
                age: 20,
                status: 'rest'
            })
            expect(insert_result.insertedId).toBeTruthy();
            console.log(insert_result);
        } finally {
            await client.close();
        }
    });

    it("should be able to find", async () => {
        const client = new MongoDBClient(uri);
        try {
            await client.connect();
            const find_result = await client.field(db_name, "hoge").findOne({ name: 'hoo' });
            expect(find_result?.name).toBe('hoo');
            console.log(find_result);
        } finally {
            await client.close();
        }
    });
});