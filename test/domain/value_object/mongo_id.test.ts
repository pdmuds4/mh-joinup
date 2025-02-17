import { ObjectId } from "mongodb";
import { MongoId } from "@/models/domain/value_object"

const sample_id = '5f3f4b3c4f3f4b3c4f3f4b3c';


test('success - MongoIdのインスタンス', () => {
    expect(new MongoId(sample_id)).toBeInstanceOf(MongoId)
})

test('success - ObjectIdのインスタンス', () => {
    expect(new MongoId(sample_id)).toBeInstanceOf(ObjectId)
})

test('success - valueの確認', () => {
    expect(new MongoId(sample_id).toHexString()).toBe(sample_id)
})

test('success - toString()の確認', () => {
    expect(new MongoId(sample_id).toString()).toBe(sample_id)
})

test('success - MongoId同士のequals()の確認', () => {
    expect(new MongoId(sample_id).equals(new MongoId(sample_id))).toBe(true)
})

test('success - ObjectId同士のequals()の確認', () => {
    expect(new MongoId(sample_id).equals(new ObjectId(sample_id))).toBe(true)
})

test('success - getTimestamp()の確認', () => {
    expect(new MongoId(sample_id).getTimestamp()).toBeInstanceOf(Date)
    expect(new MongoId(sample_id).getTimestamp().toString()).toBe('Fri Aug 21 2020 13:19:08 GMT+0900 (日本標準時)')
})


// ----------------------------------------


test('error - 非cuid2形式(空文字)', () => {
    expect(() => new MongoId('')).toThrow()
})

test('error - 非cuid2形式(仮名文字)', () => {
    expect(() => new MongoId('あいうえおあいうえおあいうえおあいうえおあいうえ')).toThrow()
})

test('error - 文字列長が24文字を超える', () => {
    expect(() => new MongoId('5f3f4b3c4f3f4b3c4f3f4b3c5')).toThrow()
})

test('error - 文字列長が24文字未満', () => {
    expect(() => new MongoId('5f3f4b3c4f3f4b3c4f3f4b')).toThrow()
})



