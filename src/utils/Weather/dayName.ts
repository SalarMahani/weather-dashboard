import dayjs from '../date'

export function getForecastDayNames(dtTxt: string) {
  const date = dayjs(dtTxt)

  return {
    enDayName: date.locale('en').format('dddd'),
    faDayName: date.calendar('jalali').locale('fa').format('dddd'),
  }
}
