async function currenciesFunction() {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    const data = await response.json()

    const usdValue = data.Valute.USD.Value.toFixed(2)
    const eurValue = data.Valute.EUR.Value.toFixed(2)
    const aedValue = data.Valute.AED.Value.toFixed(2)

    const usdNode = document.querySelector("#card-value-dollar")
    const eurNode = document.querySelector("#card-value-euro")
    const aedNode = document.querySelector("#card-value-aed")

    usdNode.innerHTML = usdValue
    eurNode.innerHTML = eurValue
    aedNode.innerHTML = aedValue
}

currenciesFunction()