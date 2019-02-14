$(document).ready(function(){
  setDayPulldown();
  
  function setDayPulldown(){
    let current = new Date();
    let date
    let year_val = current.getFullYear();
    let month_val = current.getMonth() + 1;
    let day_val = current.getDate();
    current.setDate(current.getDate() + 1);

    for (let i = 0; i < 90; i++) {
      date = new Date(year_val, month_val - 1, day_val + i);
      $('#ymd_pulldown').append('<option value="' + getDayStr(date) + '">' + getDayStr(date) + '</option>');
    }
    $('#ymd_pulldown').append('</select>');
  }

  function getDayStr(date){
    let yy = date.getFullYear();
    let mm = ("0" + (date.getMonth() + 1)).slice(-2);
    let dd = ("0" + date.getDate()).slice(-2);
    return yy + '/' + mm + '/' + dd;
  }
  
  $( "#datepicker" ).datepicker({
    showOn: "button",
    buttonImage: "https://cdn.glitch.com/668f02a7-7375-4e9f-89f0-556f78dd449d%2F%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B38.jpeg?1549934374412",
    buttonImageOnly: true,
    buttonText: "Select date",
    minDate: "d",
    maxDate: "+3m",
    altField:"#ymd_pulldown",
    dateFormat: "yy/mm/dd"
  });
  
  $('#ymd_pulldown').change(function() {
	  $('#datepicker').val($('#ymd_pulldown').val());
  });
});