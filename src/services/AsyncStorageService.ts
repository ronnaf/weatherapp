import AsyncStorage from '@react-native-community/async-storage';

/** Describes a service for asynchronously accessing local storage. */
export type LocalStorageService = {
  /**
   * Stores a `value` using the given `key` in storage.
   *
   * The returned Promise resolves when the value has been stored.
   */
  storeItem: (key: string, value: string) => Promise<void>;

  /**
   * Retrieves the value with the given `key` in storage, or `undefined` if
   * there is no value.
   */
  getItem: (key: string) => Promise<string | undefined>;

  /**
   * Deletes the value at the given `key` in storage.
   *
   * The returned Promise resolves when the value has been deleted.
   */
  deleteItem: (key: string) => Promise<void>;
};

/** A `LocalStorageService` backed by AsyncStorage. */
export const AsyncStorageService: LocalStorageService = {
  storeItem: AsyncStorage.setItem,

  getItem: key => AsyncStorage.getItem(key).then(result => (result === null ? undefined : result)),

  deleteItem: AsyncStorage.removeItem,
};
