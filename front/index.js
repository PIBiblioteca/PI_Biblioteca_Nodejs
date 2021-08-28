function name(params) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/login",
        data: {"usuario":"06392192255SP","senha":"8583ZDFmGyPMWez"},
        success: function (data) {
          console.log(data)
        }
    });
}