import { UserChannelId } from "@/models/domain/value_object";

const sample_channel_id = 'UCu1vde7Z6-yY3ikPuGj1_IQ';


test('success - UserChannelIdのインスタンス', () => {
    expect(new UserChannelId(sample_channel_id)).toBeInstanceOf(UserChannelId)
})

test('success - valueの確認', () => {
    expect(new UserChannelId(sample_channel_id).value).toBe(sample_channel_id)
})

test('success - equals()の確認', () => {
    expect(new UserChannelId(sample_channel_id).equals(new UserChannelId(sample_channel_id))).toBe(true)
})


// ----------------------------------------


test('error - 24文字未満', () => {
    expect(() => new UserChannelId('UCrjFEgQbox3CNziEmbc-M')).toThrow()
})

test('error - 24文字超過', () => {
    expect(() => new UserChannelId('UCrjFEgQbox3CNziEmbc-MXQ0')).toThrow()
})

test('error - 英数字以外(仮名文字)', () => {
    expect(() => new UserChannelId('あいうえおカキクケコ差私酢瀬祖たちつてとなにぬね')).toThrow()
})

test('error - 英数字以外(記号)', () => {
    expect(() => new UserChannelId('!@#$%^&*()_+=!@#$%^&*()_')).toThrow()
})