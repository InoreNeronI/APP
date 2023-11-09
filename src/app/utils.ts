export default class Utils {
  /**
   * Filter the response form the API for get only the useful fields:
   * @param array
   */
  static internalFieldsFilter(array) {
    const fieldsToRemoveFromResponse = ['@id', '@type', '@context'];

    return array.filter((value) => fieldsToRemoveFromResponse.indexOf(value) < 0);
  }
}
