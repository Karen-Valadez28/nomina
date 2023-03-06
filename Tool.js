class Tool {
    /**
     * 
     * @param {string} cadena 
     * @returns {string}
     */
    static strToSlug (cadena){
        return encodeURIComponent(cadena).replace(/%20/g, '-');
    }
    
    static setDataToLocalStorage(parameter, data){
    localStorage.setItem(parameter, JSON.stringify(data));
}
/**
 * 
 * @param {string} parameter 
 * @returns {Array}
 */
static getDatFromLocalStorage(parameter){
    return JSON.parse( localStorage.getItem(parameter));
}
}