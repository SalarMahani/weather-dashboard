import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import jalaliday from 'jalaliday'

// Enable plugins
dayjs.extend(utc)
dayjs.extend(jalaliday)

// Default locale
dayjs.locale('en')

export default dayjs
