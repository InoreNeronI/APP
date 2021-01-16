export default class Utils {

  /**
   * Filter the response form the API for get only the useful fields:
   * @param array
   */
  static internalFieldsfilter(array){
    const fieldsToRemoveFromResponse = ["@id", "@type", "@context"];
    return array.filter(value => fieldsToRemoveFromResponse.indexOf(value) < 0)
  }

  static getCurrentService(val: string) { return val; }
}
