import { ConnectChatToken } from "@/models/domain/value_object";

const sample_token = 'Cg0KC05hMHczTXo0NkdBKicKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxILTmEwdzNNejQ2R0E';


test('success - ConnectChatTokenのインスタンス', () => {
    expect(new ConnectChatToken(sample_token)).toBeInstanceOf(ConnectChatToken)
})

test('success - valueの確認', () => {
    expect(new ConnectChatToken(sample_token).value).toBe(sample_token)
})

test('success - equals()の確認', () => {
    expect(new ConnectChatToken(sample_token).equals(new ConnectChatToken(sample_token))).toBe(true)
})


// ----------------------------------------


test('error - 空文字', () => {
    expect(() => new ConnectChatToken('')).toThrow()
})

test('error - 75文字未満', () => {
    expect(() => new ConnectChatToken(sample_token.slice(0, -1))).toThrow()
})

test('error - 75文字超過', () => {
    expect(() => new ConnectChatToken(sample_token + 'a')).toThrow()
})

test('error - 英数字以外(仮名文字)', () => {
    expect(() => new ConnectChatToken('あいうえおカキクケコ差私酢瀬祖'.repeat(5))).toThrow()
})

test('error - 英数字以外(記号)', () => {
    expect(() => new ConnectChatToken('!@#$%^&*()_+=[]'.repeat(5))).toThrow()
})