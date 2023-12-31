import React from "react"
import Image from "next/image"

import { Breadcrumbs, PageHeader, Paragraph, Seo } from "@components"

export default function Prototyping() {
  return (
    <>
      <Seo
        title="Прототипирование и литье в силиконовые формы"
        description="Завод электротехники и автоматики в своем производстве при изготовлении прототипа использует технологии SLA, SLS и СNC. Выбор данных технологий получения прототипов связан с несколькими преимуществами: точность построения составляет 0,125 мм, при этом срок изготовления может составлять от 2 до 7 дней (в зависимости от конструктивных особенностей деталей: габаритных размеров, массы и пр.), простота доработки прототипа"
        keywords="Технология вакуумного литья полиуретанов в специальных вакуумных машинах, реакционно-инжекционное литье на установке низкого давления"
      />
      <Breadcrumbs
        items={[
          {
            path: "/izgotovlenie-plastikovykh-korpusov-i-detaley",
            label: "Изготовление пластиковых корпусов и деталей",
          },
          { label: "Прототипирование и литье в силиконовые формы" },
        ]}
      />
      <PageHeader title="Прототипирование и литье в силиконовые формы" />
      <div className="x-paddings bg-secondary-main pt-8 pb-[20%] md:pt-6">
        <h2 className="marker-rounded-fill pl-[30px] text-xl before:h-[10px] before:w-[10px] before:rounded-sm lg:text-lg md:text-base-500">
          Изготовление прототипа («быстрое прототипирование»)
        </h2>
        <div className="mt-2 space-y-2 pl-[32px]">
          <Paragraph>
            Наша компания в своем производстве при изготовлении прототипа использует технологии SLA, SLS и СNC. Выбор
            данных технологий получения прототипов связан с несколькими преимуществами: точность построения составляет
            0,125 мм, при этом срок изготовления может составлять от 2 до 7 дней (в зависимости от конструктивных
            особенностей деталей: габаритных размеров, массы и пр.), простота доработки прототипа. Максимальные
            габаритные размеры прототипов зависят от рабочей зоны (500x500x500 мм).
          </Paragraph>
          <Paragraph>
            В случае больших размеров прототипа его можно изготовить из нескольких частей, а затем склеить.
          </Paragraph>
        </div>
        <h3 className="marker-rounded-fill mt-4 pl-[30px] text-xl before:h-[10px] before:w-[10px] before:rounded-sm lg:text-lg md:text-base-500">
          Изготовление мастер-модели
        </h3>
        <Paragraph className="pl-[32px]">
          Мастер-модель необходима для последующего изготовления силиконовой формы, т.к. мастер-модель является
          формообразующей. Изготовление мастер-модели происходит путем доводки поверхностей прототипа до требуемой
          фактуры. В качестве мастер-модели можно использовать не только прототипы, но и детали (образцы),
          предоставленные нашими заказчиками.
        </Paragraph>
        <h4 className="marker-rounded-fill mt-4 pl-[30px] text-xl before:h-[10px] before:w-[10px] before:rounded-sm lg:text-lg md:text-base-500">
          Изготовление силиконовой формы
        </h4>
        <Paragraph className="pl-[32px]">
          Силиконовая форма - это специальная технологическая оснастка, необходимая для последующего изготовления
          деталей. Съем деталей с формы происходит за счет эластичности формы, что делает механизм извлечения деталей
          довольно простым, соблюдение литейных уклонов при этом не требуется. Срок изготовления силиконовой формы при
          этом составляет от 1 до 2 дней.
        </Paragraph>
        <h5 className="marker-rounded-fill mt-4 pl-[30px] text-xl before:h-[10px] before:w-[10px] before:rounded-sm lg:text-lg md:text-base-500">
          Изготовление деталей
        </h5>
        <Paragraph className="pl-[32px]">
          В настоящее время нашей компанией применяется две технологии литья деталей в силиконовые формы, которые
          обладают своими особенностями:
        </Paragraph>
        <div className="my-4 flex gap-5 md:flex-col">
          <div className="flex h-[300px] w-[50%] flex-col items-center border-2 border-primary-main py-5 px-14 lg:px-5 md:w-full">
            <Image
              src="/prototipirovanie-i-lite-v-siliconovye-formy-vacuum-casting.jpg"
              width={176}
              height={150}
              alt="Vacuum Casting"
            />
            <p className="my-2 text-center text-lg md:mt-4 md:text-base-500">Vacuum Casting</p>
            <Paragraph className="text-center">
              Технология вакуумного литья полиуретанов в специальных вакуумных машинах;
            </Paragraph>
          </div>
          <div className="flex h-[300px] w-[50%] flex-col items-center border-2 border-primary-main py-4 px-14 lg:px-5 md:w-full">
            <Image
              src="/prototipirovanie-i-lite-v-siliconovye-formy-RIM.jpg"
              width={254}
              height={148}
              alt="RIM (Reaction Injection Moulding)"
            />
            <p className="my-2 text-center text-lg md:mt-4 md:text-base-500">RIM (Reaction Injection Moulding)</p>
            <Paragraph className="text-center">Реакционно-инжекционное литье на установке низкого давления;</Paragraph>
          </div>
        </div>
        <Paragraph className="my-4">
          При литье деталей в силиконовые в формы используются двухкомпонентные полиуретаны, обладающие механическими
          свойствами различных материалов, таких, как АБС, полипропилен (ПП), поликарбонат (ПК), полиамид (ПА),
          полиэтилен (ПЭ), резина различной жесткости. Также используются оптически прозрачные и УФ-стойкие материалы.
          Все материалы могут быть окрашены в массе по международному каталогу цветов RAL.
        </Paragraph>
        <Paragraph>
          Таким образом, использование технологий «быстрого прототипирования» способствует снижению затрат за счет
          отказа от дорогостоящих металлических пресс-форм, что позволяет оперативно модифицировать образец и вносить
          изменения в конструкцию до изготовления основной партии, проверить детали на наличие конструкторских ошибок,
          исследовать отклик рынка на ранних стадиях разработки продукции, проводить сертификацию продукции параллельно
          изготовлению основной партии деталей.»
        </Paragraph>
      </div>
    </>
  )
}
