const purposes: string[] = [
  "Используются для бесперебойного питания оперативных цепей управления, защиты и автоматики электростанций, подстанций, электромагнитов коммутационных аппаратов, аварийного освещения и прочих объектов энергетики.",
  "Впервые реализован новый подход в проектировании компоновки шкафов по блочно-модульному принципу с делением конструктива на отсеки:",
  "Шинный отсек сборных и распределительных шин",
  "Отсек функциональной контрольно-измерительной и защитно-коммутационной аппаратуры",
  "Отсек присоединения кабелей",
]

const properties: string[] = [
  "Двухстороннее и одностороннее обслуживание",
  "Коммутационная защитная аппаратура:",
  "Рубильники-предохранители фирм Schneider Electric, OEZ, ABB, Siemens, Jean Muller, Socomec и др., имеют в своем составе дополнительные контакты сигнализации положения рубильника и перегорания плавких вставок;",
  "Автоматические выключатели постоянного тока фирм Schneider Electric, ABB, OEZ, Moeller, Eaton, ВА09-36, ВА55-41, ВА51-39, ВА04-36, ETI и др. с дополнительными контактами сигнализации;",
  "Отдельные секции для питания потребителей, находящихся в ОПУ и на территории ОРУ",
  "На дверях шкафов нанесена мнемосхема",
  "Устройство измерения и контроля сопротивления изоляции и система автоматического поиска фидера с пониженным сопротивлением изоляции (ЭКРА-СКИ и др.)",
  "Локальное устройство регистрации аналоговых и дискретных сигналов в нормальном и аварийном режимах для последующей передачи в АСУ ТП по каналу цифровой связи. Поддержка протокола связи МЭК 61850 (опция)",
  "Контроль напряжения аккумуляторных батарей на секциях ЩПТ",
  "Измерение токов заряда и подзаряда АБ",
  "Измерительные преобразователи для формирования аналоговых сигналов для АСУ",
  "Устройство мигающего света",
  "Блок аварийного освещения мощностью до 4 кВт, в каждом ЩПТ",
  "Контроль уровня пульсации напряжения",
  "Устройство мигающего света",
  "Аппаратура цепей вторичной коммутации и КИП зарубежных и российских производителей: Schneider Electric, Relpol, Протон Импульс, Электроприбор, Энергоприбор, Bender, Новатек, Электро и др.",
  "Клеммные зажимы фирмы Weidmuller и др.",
]

const stationaryBlocks: string[] = [
  "Вводные блоки",
  "Блоки отходящих линий",
  "Общесекционные блоки",
  "Блок может занимать только целое количество модулей М. Высота одного модуля – 25 мм. Минимальный размер блока по высоте – 175 мм или 7М.",
]

const tableData: { blockType?: string; value: string }[] = [
  { value: "Блоки ввода" },
  {
    blockType: "БКИ-001-2822",
    value: "Блок контроля изоляции",
  },
  {
    blockType: "БКМ-001-2822",
    value: "Блок контроля мониторинга",
  },
  {
    blockType: "БСА-001-2822",
    value: "Блок симметрии основного элемента АБ",
  },
  {
    blockType: "БСА-002-2822",
    value: "Блок симметрии дополнительного элемента АБ",
  },
  {
    blockType: "БФП-001-2822",
    value: "Блок формирования питания контроля и сигнализации",
  },
  { value: "Блоки отходящих линий" },
  {
    blockType: "БАО-001-ХХ22",
    value: "Блок аварийного освещения",
  },
  {
    blockType: "БМС-001-2822",
    value: "Блок мигающего света",
  },
  {
    blockType: "БКМ-002-2822",
    value: "Блок контроля мониторинга",
  },
  {
    blockType: "БКУ-001-2822",
    value: "Блок контроля универсальный",
  },
  {
    blockType: "БКУ-002-2822",
    value: "Блок контроля универсальный",
  },
  { value: "Общесекционные блоки" },
  {
    blockType: "БКС-001-2822",
    value: "Блок контроля сигнализации и напряжения",
  },
  {
    blockType: "БФП-002-2822",
    value: "Блок формирование питания =24 В",
  },
]

const functionalBlocks: string[] = [
  "С целью исключения коротких замыканий в силовых цепях от аккумуляторной батареи до щита постоянного тока предусмотрены шкафы ввода (щит ввода), обеспечивающие первый уровень селективности. Шкафы ввода предназначены для организации ввода цепей питания от аккумуляторной батареи и зарядно-питающих устройств, организации секционных связей с соседним ЩПТ. Кабели с кислостойкой изоляцией от аккумуляторной батареи проходят через стену без проходной доски, непосредственно в шкаф ввода «+» (ША+) и в шкаф ввода «-» (ШВ-). Устройства систем контроля и автоматики, головные устройства систем мониторинга устанавливаются в шкаф ввода и автоматики (ШВА).",
  "Конструкция шкафов выполнена таким образом, чтобы исключить короткие замыкания незащищенных участков силовой цепи.",
  "Для распределения электрической энергии на непосредственно линии (секции) питания к потребителям служат шкафы отходящих линий (ШОЛ), обеспечивающие второй уровень селективности.",
  "В шкафы ШОЛ могут быть организованы отдельные секции ЩПТ для питания потребителей, находящихся в пределах ОПУ и на территории ОРУ.",
  "Третий уровень селективности СОПТ обеспечивают шкафы шкафы распределения оперативного тока (ШРОТ, клас ШНЭ 8001/8002, смотрите далее).",
]

export { functionalBlocks, properties, purposes, stationaryBlocks, tableData }