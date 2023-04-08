type Disconnecter = { disconnect: () => void };

export class Atom<T> {
  private listeners = new Set<(value: T) => void>();

  constructor(private value: T) {}

  update(value: T) {
    this.value = value;
    this.emit();
  }

  snapshot(): T {
    return this.value;
  }

  private emit() {
    for (const listener of Array.from(this.listeners)) {
      listener(this.snapshot());
    }
  }

  subscribe(callback: (value: T) => void): Disconnecter {
    this.listeners.add(callback);

    return {
      disconnect: () => {
        this.listeners.delete(callback);
      },
    };
  }
}

export const atom = <V>(value: { default: V }): Atom<V> => {
  return new Atom(value.default);
};
