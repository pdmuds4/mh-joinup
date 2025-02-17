import { UserAvatar } from "@/models/domain/value_object";

const sample_avatar = 'https://sample.com/sample.jpg';


test('success - UserAvatarのインスタンス', () => {
    expect(new UserAvatar(sample_avatar)).toBeInstanceOf(UserAvatar)
})

test('success - valueの確認', () => {
    expect(new UserAvatar(sample_avatar).value).toBe(sample_avatar)
})

test('success - equals()の確認', () => {
    expect(new UserAvatar(sample_avatar).equals(new UserAvatar(sample_avatar))).toBe(true)
})


// ----------------------------------------


test('error - 非URL形式(空文字)', () => {
    expect(() => new UserAvatar('')).toThrow()
})

test('error - 非URL形式(仮名文字)', () => {
    expect(() => new UserAvatar('あいうえお')).toThrow()
})

test('error - 非URL形式(数字)', () => {
    expect(() => new UserAvatar('12345')).toThrow()
})