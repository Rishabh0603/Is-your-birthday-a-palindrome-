var user_input = document.querySelector("#input");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

function reverseStr(str){
    var split_str = str.split("");
    var reversesplit_str = split_str.reverse();
    var joinreverse_str = reversesplit_str.join("");
   return joinreverse_str;
   // return str.split("").reverse().join("");   can be done directly also
}
function isPalindrome(str){
    var checkForPalindrome = reverseStr(str);
    if(str === (checkForPalindrome))
    return true;
    else
    return false;
}
function convert_date_in_string(date){
    dateStr = {day:'', month:'', year:''}
    if(date.day<10){
        dateStr.day = '0'+date.day;
    }
    else
    dateStr.day = date.day.toString();
    if(date.month<10){
        dateStr.month = '0'+date.month;
    }
    else
    dateStr.month = date.month.toString();
    dateStr.year = date.year.toString();
    return dateStr;
    }
    function allDateFormat(date){
      var dateStr = convert_date_in_string(date);
      var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
      var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
      var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
      var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(2);
      var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(2);
      var yymmdd = dateStr.year.slice(2) + dateStr.month + dateStr.day;
      return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
    }
    function checkPalindrome(date){
        var allFormOfdate = allDateFormat(date);

        var flag = false;

        for(var i = 0 ;i < allFormOfdate.length ; i++){
            if(isPalindrome(allFormOfdate[i])==true){
                flag = true;
                break;
            }
        }
        return flag;
        }
        function check_leap_year(year){
            if(year % 400 === 0){
                return true;
            }
            if(year % 4 === 0){
                return true;
            }
            if(year % 100 === 0){
                return false;
            }
            else
            return false;
        }
        function next_date(date){
            var day = date.day+1;
            var month = date.month;
            var year = date.year;
            var days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31];
            
                if(month === 2){
                    if(check_leap_year(year)){
                       if(day>29){
                       day=1;
                       month++;
                       }
                }
                else{
                      if(day>28){
                            day =1;
                            month++;
                        }
                }
            }
            else{
            if(day > days_in_month[month-1]){
                day =1;
                month++;
            }
            if(month > 12){
                year++;
                month = 1;
            }}
            return {day:day,
                     month:month,
                      year:year};
        }
        function nextPalindrome(date){
            
            var counter=0;
            var nextDate = next_date(date);
            while(1){
                counter++;
                if(checkPalindrome(nextDate))
                break;
               nextDate= next_date(nextDate);
            }
            return [counter, nextDate];
        }
        
             function getinput(){
                var bdayStr = user_input.value;
                if(bdayStr !== ''){
                var listOfDate =  bdayStr.split('-');
                 var date={
                    day: Number(listOfDate[2]),
                    month: Number(listOfDate[1]),
                    year:  Number(listOfDate[0])
                 };
                 var CheckforPalindrome = checkPalindrome(date);
                 if(CheckforPalindrome)
                 output.innerText = 'Yay! your birthday is a palindrome';
                 else{
                 var [counter, nextDate] = nextPalindrome(date);
                 output.innerText =`The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} you missed it by, ${counter} days`;
                }
             }
             else
             output.innerText="please enter a valid date"
            }
       
      button.addEventListener("click",getinput);



    

