import { SettingKeyWord } from "@/models/domain/value_object";

const sample_keyword = 'keyword';


test('success - SettingKeyWordのインスタンス', () => {
    expect(new SettingKeyWord(sample_keyword)).toBeInstanceOf(SettingKeyWord)
})

test('success - valueの確認', () => {
    expect(new SettingKeyWord(sample_keyword).value).toBe(sample_keyword)
})

test('success - equals()の確認', () => {
    expect(new SettingKeyWord(sample_keyword).equals(new SettingKeyWord(sample_keyword))).toBe(true)
})


// ----------------------------------------


test('error - 空文字', () => {
    expect(() => new SettingKeyWord('')).toThrow()
})

test('error - 10文字超過', () => {
    expect(() => new SettingKeyWord('keywordpress')).toThrow()
})