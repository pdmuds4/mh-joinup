import { ConnectYoutubeId } from "@/models/domain/value_object";

const sample_id = '4lpxyenW5eM';


test('success - ConnectYoutubeIdのインスタンス', () => {
    expect(new ConnectYoutubeId(sample_id)).toBeInstanceOf(ConnectYoutubeId)
})

test('success - valueの確認', () => {
    expect(new ConnectYoutubeId(sample_id).value).toBe(sample_id)
})

test('success - equals()の確認', () => {
    expect(new ConnectYoutubeId(sample_id).equals(new ConnectYoutubeId(sample_id))).toBe(true)
})


// ----------------------------------------


test('error - 11文字未満', () => {
    expect(() => new ConnectYoutubeId('4lpxyenW5')).toThrow()
})

test('error - 11文字超過', () => {
    expect(() => new ConnectYoutubeId('4lpxyenW5eM1')).toThrow()
})

test('error - 仮名文字', () => {
    expect(() => new ConnectYoutubeId('あいうカキク差私酢瀬祖')).toThrow()
})

test('error - 記号文字', () => {
    expect(() => new ConnectYoutubeId('!@#$%^&*()_')).toThrow()
})