import { ApplicantMessage } from "@/models/domain/value_object";

const sample_message = "sample message";

test('success - ApplicantMessageのインスタンス', () => {
    expect(new ApplicantMessage(sample_message)).toBeInstanceOf(ApplicantMessage)
})

test('success - valueの確認', () => {
    expect(new ApplicantMessage(sample_message).value).toBe(sample_message)
})

test('success - equals()の確認', () => {
    expect(new ApplicantMessage(sample_message).equals(new ApplicantMessage(sample_message))).toBe(true)
})


// ----------------------------------------


test('error - 空文字', () => {
    expect(() => new ApplicantMessage('')).toThrow()
})

test('error - 200文字超過', () => {
    expect(() => new ApplicantMessage(sample_message.repeat(200))).toThrow()
})