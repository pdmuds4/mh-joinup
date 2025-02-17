import { ConnectVideoTitle } from "@/models/domain/value_object";

const sample_title = 'title';

test('success - ConnectVideoTitleのインスタンス', () => {
    expect(new ConnectVideoTitle(sample_title)).toBeInstanceOf(ConnectVideoTitle)
})

test('success - valueの確認', () => {
    expect(new ConnectVideoTitle(sample_title).value).toBe(sample_title)
})

test('success - equals()の確認', () => {
    expect(new ConnectVideoTitle(sample_title).equals(new ConnectVideoTitle(sample_title))).toBe(true)
})


// ----------------------------------------


test('error - 空文字', () => {
    expect(() => new ConnectVideoTitle('')).toThrow()
})

test('error - 100文字超過', () => {
    expect(() => new ConnectVideoTitle('title'.repeat(100))).toThrow()
})

