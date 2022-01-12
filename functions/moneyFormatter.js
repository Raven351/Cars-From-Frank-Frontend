const moneyFormatter = (value) => {
    var formatter = new Intl.NumberFormat('pl-PL',{
        style: 'currency',
        currency: 'PLN'
    })
    return formatter.format(value)
}

export default moneyFormatter