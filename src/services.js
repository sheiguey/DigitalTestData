/* const apiKey= '4939f905248c4ae5f766ef37fdaef06b';
class Services{
    getCurencies(){
        return fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`)
    }

}

export default new Services(); */

export const dataCurrencies= {
    "success":true,
    "timestamp":1690901043,
    "base":"EUR",
    "date":"2023-08-01",
    "rates":{
       "AED":4.03004,
       "AFN":95.457752,
       "ALL":101.795787,
       "AMD":423.722228,
       "ANG":1.978246,
       "AOA":904.952209,
       "ARS":302.925116,
       "AUD":1.6582,
       "AWG":1.974988,
       "AZN":1.849677,
       "BAM":1.954803,
       "BBD":2.21622,
       "BDT":119.12927,
       "BGN":1.956193,
       "BHD":0.413638,
       "BIF":3108.444552,
       "BMD":1.097216,
       "BND":1.463734,
       "BOB":7.58503,
       "BRL":5.231961,
       "BSD":1.097615,
       "BTC":3.8028421e-5,
       "BTN":90.301132,
       "BWP":14.50041,
       "BYN":2.770562,
       "BYR":21505.426965,
       "BZD":2.212542,
       "CAD":1.458304,
       "CDF":2714.511847,
       "CHF":0.96087,
       "CLF":0.033479,
       "CLP":923.855376,
       "CNY":7.869447,
       "COP":4352.753278,
       "CRC":597.989707,
       "CUC":1.097216,
       "CUP":29.076215,
       "CVE":110.208818,
       "CZK":23.947782,
       "DJF":195.438588,
       "DKK":7.451905,
       "DOP":61.800635,
       "DZD":148.912972,
       "EGP":33.907804,
       "ERN":16.458235,
       "ETB":60.475744,
       "EUR":1,
       "FJD":2.433953,
       "FKP":0.85339,
       "GBP":0.859625,
       "GEL":2.836278,
       "GGP":0.85339,
       "GHS":12.441544,
       "GIP":0.85339,
       "GMD":65.832538,
       "GNF":9443.186053,
       "GTQ":8.630404,
       "GYD":229.64979,
       "HKD":8.551408,
       "HNL":27.003234,
       "HRK":7.377523,
       "HTG":149.833618,
       "HUF":388.706219,
       "IDR":16608.827772,
       "ILS":3.98941,
       "IMP":0.85339,
       "INR":90.31407,
       "IQD":1437.966953,
       "IRR":46412.222391,
       "ISK":144.294447,
       "JEP":0.85339,
       "JMD":169.579688,
       "JOD":0.777156,
       "JPY":157.14979,
       "KES":156.571042,
       "KGS":96.315897,
       "KHR":4533.585572,
       "KMF":491.278742,
       "KPW":987.423949,
       "KRW":1413.894373,
       "KWD":0.337536,
       "KYD":0.914721,
       "KZT":487.900162,
       "LAK":21265.674649,
       "LBP":16475.77574,
       "LKR":350.153521,
       "LRD":204.50875,
       "LSL":19.596024,
       "LTL":3.239793,
       "LVL":0.663695,
       "LYD":5.246326,
       "MAD":10.811442,
       "MDL":19.620551,
       "MGA":4950.36361,
       "MKD":61.578048,
       "MMK":2305.093397,
       "MNT":3773.848898,
       "MOP":8.811707,
       "MRO":391.705802,
       "MUR":49.589066,
       "MVR":16.842554,
       "MWK":1156.294736,
       "MXN":18.402106,
       "MYR":4.957767,
       "MZN":69.398986,
       "NAD":19.596177,
       "NGN":831.689629,
       "NIO":40.158613,
       "NOK":11.200849,
       "NPR":144.480055,
       "NZD":1.784276,
       "OMR":0.422417,
       "PAB":1.097625,
       "PEN":3.946133,
       "PGK":3.988876,
       "PHP":60.254146,
       "PKR":315.06549,
       "PLN":4.438783,
       "PYG":7984.747604,
       "QAR":3.994416,
       "RON":4.93045,
       "RSD":117.27815,
       "RUB":100.985521,
       "RWF":1289.724892,
       "SAR":4.116979,
       "SBD":9.298958,
       "SCR":14.716265,
       "SDG":659.978502,
       "SEK":11.623321,
       "SGD":1.465798,
       "SHP":1.335037,
       "SLE":23.187655,
       "SLL":21670.009431,
       "SOS":623.771372,
       "SRD":42.310792,
       "STD":22710.148923,
       "SVC":9.604104,
       "SYP":14377.577664,
       "SZL":19.765474,
       "THB":37.66634,
       "TJS":12.024806,
       "TMT":3.851227,
       "TND":3.379973,
       "TOP":2.57884,
       "TRY":29.587411,
       "TTD":7.45503,
       "TWD":34.662582,
       "TZS":2696.913316,
       "UAH":40.537511,
       "UGX":3982.878859,
       "USD":1.097216,
       "UYU":41.358916,
       "UZS":12769.49037,
        
       "VES":32.340582,
       "VND":25993.03902,
       "VUV":130.248534,
       "WST":2.986991,
       "XAF":655.607846,
       "XAG":0.045173,
       "XAU":0.000564,
       "XCD":2.96528,
       "XDR":0.817372,
       "XOF":655.622777,
       "XPF":119.541046,
       "YER":274.632455,
       "ZAR":19.916384,
       "ZMK":9876.260746,
       "ZMW":20.828098,
       "ZWL":353.302995
    }
 }


 export function  getMostpopularCountry(){
    return fetch('https://restcountries.com/v3.1/all')
 }