const obrCharacteristics = [
  { param: "Количество вводов ", value: "1 - 3 шт." },
  {
    param: "Выходная мощность",
    value: "0,4 - 2 кВт",
  },
  {
    param: "Количество секций",
    value: "1 шт.",
  },
  {
    param: "Количество отходящих линий",
    value: "до 40 шт.",
  },
  { param: "* по заказу возможно до 90 линий в шкафу" },
]

const obrAnalogues: string[] = ["Шкаф питания оперативной блокировки", "ШПОБР", "ШОБ", "ЭПР-512"]

const obrFunctionalities: string[] = [
  "Ввод от источников постоянного и переменного тока и распределение питания по цепям оперативной блокировки с обеспечением гальванической развязки потребителей от источников (вводов);",
  "Устройство контроля сопротивления изоляции",
  "Низкий уровень пульсаций напряжения питания",
  "Контроль напряжения питания цепей оперативной блокировки",
  "Передача информации в АСУ ТП",
]

const obrRequirements: string[] = [
  "Питание цепей ОБР должно производиться от источника гарантированного питания со временем автономной работы не менее 2 часов;",
  "Должна быть гальваническая развязка между источником гарантированного питания и цепями ОБР;",
  "Должен быть контроль напряжения питания и сопротивления изоляции относительно земли цепей ОБР;",
  "Источником гарантированного питания с возможностью автономной работы не менее 2 часов на подстанциях является система оперативного постоянного тока (СОПТ) с аккумуляторными батареями, поэтому в качестве преобразователя для шкафа питания цепей ОБР применяются DC/DC-конверторы с гальванической развязкой;",
  "Используются для питания цепей оперативной блокировки разъединителей (ОБР) устройств автоматики оперативной блокировки. Соответствуют требованиям распоряжения ФСК ЕЭС №236Р от 05.05.2010 «Порядок организации оперативной блокировки на подстанциях нового поколения».",
  "По требованию Заказчика шкаф может быть оборудован системой мониторинга, которая позволит передавать в АСУ ТП информацию о состоянии коммутационной аппаратуры, величине потребляемого тока и напряжении на шинах, состоянии сопротивления изоляции сети питания цепей ОБР.",
]

export { obrAnalogues, obrCharacteristics, obrFunctionalities, obrRequirements }
