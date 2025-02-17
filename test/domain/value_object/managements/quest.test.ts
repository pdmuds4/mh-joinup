import { ManageQuest } from "@/models/domain/value_object";

const sample_Quest = 3;

test('success - ManageQuestのインスタンス', () => {
    expect(new ManageQuest(sample_Quest)).toBeInstanceOf(ManageQuest)
})

test('success - valueの確認', () => {
    expect(new ManageQuest(sample_Quest).value).toBe(sample_Quest)
})

test('success - equals()の確認', () => {
    expect(new ManageQuest(sample_Quest).equals(new ManageQuest(sample_Quest))).toBe(true)
})

test('success - 0', () => {
    expect(new ManageQuest(0).value).toBe(0)
})


// ----------------------------------------

test('error - 負の値', () => {
    expect(() => new ManageQuest(-1)).toThrow()
})

test('error - 小数', () => {
    expect(() => new ManageQuest(0.1)).toThrow()
})

test('error - Infinity', () => {
    expect(() => new ManageQuest(Infinity)).toThrow()
})

test('error - NaN', () => {
    expect(() => new ManageQuest(NaN)).toThrow()
})