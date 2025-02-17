import { ManageApplicant } from "@/models/domain/value_object";

const sample_applicant = 3;

test('success - ManageApplicantのインスタンス', () => {
    expect(new ManageApplicant(sample_applicant)).toBeInstanceOf(ManageApplicant)
})

test('success - valueの確認', () => {
    expect(new ManageApplicant(sample_applicant).value).toBe(sample_applicant)
})

test('success - equals()の確認', () => {
    expect(new ManageApplicant(sample_applicant).equals(new ManageApplicant(sample_applicant))).toBe(true)
})

test('success - 0', () => {
    expect(new ManageApplicant(0).value).toBe(0)
})


// ----------------------------------------

test('error - 負の値', () => {
    expect(() => new ManageApplicant(-1)).toThrow()
})

test('error - 小数', () => {
    expect(() => new ManageApplicant(0.1)).toThrow()
})

test('error - Infinity', () => {
    expect(() => new ManageApplicant(Infinity)).toThrow()
})

test('error - NaN', () => {
    expect(() => new ManageApplicant(NaN)).toThrow()
})