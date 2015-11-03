<script>
   function getQueryStringParamValue(strQStrParam) {
        var defaultValue = "";
        var strURL = document.location.href;
        var strQStrParamValue = '';
        if (strURL.indexOf('?') != -1) {
            strQStrParamValue = strURL.substr(strURL.indexOf('?') + 1);
            if (strQStrParamValue.indexOf(strQStrParam) != -1) {
                strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf(strQStrParam));
                strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf('=') + 1);
                if (strQStrParamValue.indexOf('&') != -1)
                    strQStrParamValue = strQStrParamValue.substr(0, strQStrParamValue.indexOf('&'));
                return strQStrParamValue;
            } else {
                strQStrParamValue = defaultValue;
                return strQStrParamValue;
            }
        } else {
            strQStrParamValue = defaultValue;
            return strQStrParamValue;
        }
    } //end getQueryStringParamValue

   
</script>
