'use strict';
/**
 * Date utilities
 */
class DateUtil {
    static date() {
    	var datetime = new Date();
        return datetime.getDate()+'-'+datetime.getMonth()+1+'-'+datetime.getFullYear()+'/'+datetime.getHours()+':'+datetime.getMinutes()+':'+datetime.getSeconds();
    }
}

module.exports = DateUtil;