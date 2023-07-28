export function assert<T>(v: T | undefined | null): asserts v is T {
  if (v === undefined || v === null) {
    throw new Error(`Unexpected ${v}`);
  }
}

export function assertString(v: unknown): asserts v is string {
  if (typeof v !== 'string') {
    throw new Error(`Expected ${v} to be string`);
  }
}

export function assertBoolean(v: unknown): asserts v is boolean {
  if (typeof v !== 'boolean') {
    throw new Error(`Expected ${v} to be boolean`);
  }
}

export function assertStringArray(v: unknown): asserts v is readonly string[] {
  if (!Array.isArray(v)) {
    throw new Error(`Expected ${v} to be an array`);
  }

  for (const value of v) {
    assertString(value);
  }
}
