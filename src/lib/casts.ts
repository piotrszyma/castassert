import { assertBoolean, assertString, assertStringArray } from './asserts';

export function castString(v: unknown): string {
  assertString(v);
  return v;
}
export function castBoolean(v: unknown): boolean {
  assertBoolean(v);
  return v;
}

export function castStringArray(v: unknown): readonly string[] {
  assertStringArray(v);
  return v;
}
