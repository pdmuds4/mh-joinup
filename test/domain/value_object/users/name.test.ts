import { UserName } from "@/models/domain/value_object";

const sample_name = 'sample_name';


test('success - UserNameのインスタンス', () => {
    expect(new UserName(sample_name)).toBeInstanceOf(UserName)
})

test('success - valueの確認', () => {
    expect(new UserName(sample_name).value).toBe(sample_name)
})

test('success - equals()の確認', () => {
    expect(new UserName(sample_name).equals(new UserName(sample_name))).toBe(true)
})


// ----------------------------------------


test('error - 空文字', () => {
    expect(() => new UserName('')).toThrow()
})